import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem('planetas')) || []
  );
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const inputImagenRef = useRef(null);

  // Guardar planetas en localStorage
  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  // Validación del formulario
  const validarFormulario = () => {
    if (!nombre.trim() || !descripcion.trim()) {
      alert('Por favor completa el nombre y la descripción.');
      return false;
    }

    // Evitar nombres duplicados (solo si no estamos editando)
    const nombreDuplicado = planetas.some(
      (p, idx) => p.nombre === nombre && idx !== editandoIndex
    );
    if (nombreDuplicado) {
      alert('Ya existe un planeta con ese nombre.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const nuevaImagen = imagen ? URL.createObjectURL(imagen) : null;

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: nuevaImagen || (editandoIndex !== null ? planetas[editandoIndex].imagen : null),
    };

    if (editandoIndex !== null) {
      // Editar planeta existente
      const actualizados = [...planetas];
      actualizados[editandoIndex] = nuevoPlaneta;
      setPlanetas(actualizados);
      setEditandoIndex(null);
    } else {
      // Agregar nuevo planeta
      setPlanetas([...planetas, nuevoPlaneta]);
    }

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setImagen(null);
    if (inputImagenRef.current) {
      inputImagenRef.current.value = '';
    }
  };

  const handleDelete = (index) => {
    const nuevos = [...planetas];
    nuevos.splice(index, 1);
    setPlanetas(nuevos);
    if (editandoIndex === index) {
      // Cancelar edición si se borra el planeta que se estaba editando
      setEditandoIndex(null);
      setNombre('');
      setDescripcion('');
      setImagen(null);
    }
  };

  const handleEdit = (index) => {
    const planeta = planetas[index];
    setNombre(planeta.nombre);
    setDescripcion(planeta.descripcion);
    setImagen(null); // No podemos recuperar el archivo original, pero mantenemos la URL
    if (inputImagenRef.current) inputImagenRef.current.value = '';
    setEditandoIndex(index);
  };

  const handleCancelEdit = () => {
    setEditandoIndex(null);
    setNombre('');
    setDescripcion('');
    setImagen(null);
    if (inputImagenRef.current) inputImagenRef.current.value = '';
  };

  return (
    <div className="container">
      <h1>Bitácora de Exploración</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit">
          {editandoIndex !== null ? 'Actualizar' : 'Guardar'}
        </button>
        {editandoIndex !== null && (
          <button type="button" onClick={handleCancelEdit}>
            Cancelar
          </button>
        )}
      </form>

      <h2>Planetas Registrados</h2>
      {planetas.length === 0 ? (
        <p>No hay planetas registrados.</p>
      ) : (
        <ul>
          {planetas.map((planeta, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <h3>{planeta.nombre}</h3>
              <p>{planeta.descripcion}</p>
              {planeta.imagen && (
                <img
                  src={planeta.imagen}
                  alt={planeta.nombre}
                  style={{ maxWidth: '200px' }}
                />
              )}
              <div>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;