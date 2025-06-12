//El ciclo de vida de un componente se refiere a las diferentes fases por las que pasa un componente desde que se crea y se monta en el DOM (Document Object Model) hasta que se desmonta y se destruye. 

//Montaje (Mounting): Esta etapa ocurre cuando el componente se crea y se inserta en el DOM por primera vez.
import React, { useState, useEffect } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
    console.log('Componente montado');
    // Inicializar el estado, suscribirse a eventos, etc.
    }, []);
    return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
    );
}

//Actualización (Updating): Esta etapa ocurre cuando el componente se vuelve a renderizar debido a cambios en sus props o estado. Podemos usar el hook useEffect con dependencias para realizar acciones durante la actualización, como actualizar el DOM o realizar nuevas solicitudes de datos.
import React, { useState, useEffect } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Componente actualizado');
        // Actualizar el DOM, realizar solicitudes de datos, etc.
    }, [count]);
    return (
        <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );

    }

//Desmontaje (Unmounting): Esta etapa ocurre cuando el componente se elimina del DOM. Podemos usar el hook useEffect con una función de limpieza para realizar acciones durante el desmontaje, como cancelar suscripciones o limpiar recursos.
import React, { useState, useEffect } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Componente montado');
        return () => {
        console.log('Componente desmontado');
        // Cancelar suscripciones, limpiar recursos, etc.
        };
    }, []);
    return (
        <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}