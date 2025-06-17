import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtroDuracion, setFiltroDuracion] = useState('');
  const [verRecientes, setVerRecientes] = useState(false);

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Calcular el tiempo total con useMemo
  const calcularTiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + (parseInt(tarea.duracion) || 0), 0);
  }, [tareas]);

  // Actualizar el título del documento
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  // Filtrar tareas por duración mínima y/o recientes
  const tareasFiltradas = useMemo(() => {
    const duracionMin = parseInt(filtroDuracion) || 0;
    let filtradas = tareas.filter(t => t.duracion >= duracionMin);

    if (verRecientes) {
      const ahora = Date.now();
      const cincoMinutos = 5 * 60 * 1000;
      filtradas = filtradas.filter(t => ahora - t.timestamp < cincoMinutos);
    }

    return filtradas;
  }, [tareas, filtroDuracion, verRecientes]);

  // Agregar nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion),
        timestamp: Date.now()
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Contador de Tareas</h1>

      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <input
          type="number"
          placeholder="Filtrar por duración mínima"
          value={filtroDuracion}
          onChange={(e) => setFiltroDuracion(e.target.value)}
        />
        <label style={{ marginLeft: '0.5rem' }}>
          <input
            type="checkbox"
            checked={verRecientes}
            onChange={() => setVerRecientes(!verRecientes)}
          />
          Mostrar solo tareas recientes
        </label>
      </div>

      <h2 style={{ marginTop: '1rem' }}>Tareas</h2>
      <ul>
        {tareasFiltradas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre}: {tarea.duracion} minutos
          </li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
