import "./ListaCompras.css";
import { useState } from "react";

function ListaCompras() {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    const agregarProducto = () => {
        if (nuevoProducto.trim() !== "") {
        setProductos([...productos, nuevoProducto.trim()]);
        setNuevoProducto("");
        }
    };

    const eliminarProducto = (index) => {
        setProductos(productos.filter((_, i) => i !== index));
    };

    return (
        <div className="lista-compras-container">
        <div className="lista-compras" style={{ padding: "1rem", maxWidth: "400px", margin: "auto" }}>
        <h2>Lista de Compras</h2>
        <input
            type="text"
            placeholder="Agregar producto"
            value={nuevoProducto}
            onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar</button>
        <ul>
            {productos.map((producto, index) => (
            <li key={index}>
                {producto}{" "}
                <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
        </div>
    );
}

export default ListaCompras;
