//useEffect es un Hook que nos permite ejecutar efectos secundarios en un componente funcional. Los efectos secundarios son acciones que ocurren después de la renderización. La sintaxis básica de useEffect es:
import { useEffect } from "react";
useEffect(() => {
  // Código a ejecutar
});


//Si no se proporciona un segundo argumento, el efecto se ejecutará en cada renderizado.

useEffect(() => {
    console.log("Este efecto se ejecuta en cada renderizado");
});

// Ejecutar el efecto solo una vez (equivalente a componentDidMount). Si pasamos un arreglo vacío [], el efecto solo se ejecutará una vez, cuando el componente se monte.
useEffect(() => {
    console.log("Este efecto se ejecuta solo una vez");
}, []);


//Ejecutar el efecto cuando cambie un estado o prop específica. Podemos pasar valores en el arreglo de dependencias para que el efecto se ejecute solo cuando estos valores cambien.
const [contador, setContador] = useState(0);
useEffect(() => {
    console.log("El contador ha cambiado a:", contador);
}, [contador]);

//Limpieza de efectos en useEffect. Algunos efectos requieren limpieza para evitar problemas como fugas de memoria. Para ello, useEffect puede devolver una función que se ejecutará antes de que el componente se desmonte o antes de ejecutar el efecto nuevamente.
useEffect(() => {
    console.log("Suscribiendo evento");
    return () => {
        console.log("Limpiando evento");
    };
}, []);

//Ejemplo: Obtener datos de una API con useEffect
import { useState, useEffect } from "react";
function DatosAPI() {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setDatos(data));
    }, []);

    return 
        <div>
        <h2>Datos desde API</h2>
        <ul>
            {datos.map(post => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    ;
}

export default DatosAPI;
//ConclusiónuseEffect es un Hook esencial en React que permite manejar efectos secundarios de manera eficiente en componentes funcionales. Su uso adecuado mejora el rendimiento de la aplicación y facilita el mantenimiento del código. Comprender cómo y cuándo usar useEffect es clave para desarrollar aplicaciones interactivas y dinámicas en React.