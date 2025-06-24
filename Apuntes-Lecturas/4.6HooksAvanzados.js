//Sintaxis básica:
import { useRef, useEffect } from 'react';

function InputFocus() {

  const inputRef = useRef(null);

  useEffect(() => {

    inputRef.current.focus(); // Enfoca el input al montar el componente

  }, []);

  return <input ref={inputRef} placeholder="Escribe aquí..." />;

}

//Uso en almacenamiento de valores sin re-render:A diferencia del estado (useState), useRef permite almacenar valores mutables sin causar una renderización adicional.

import { useRef, useState } from 'react';

function Contador() {

  const renderCount = useRef(0);

  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (

    <div>

      <p>Contador: {count}</p>

      <p>Renderizado: {renderCount.current} veces</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}


//Caso de uso: Manejo de temporizadores
import { useRef } from 'react';

function Temporizador() {

  const timerRef = useRef(null);

  const iniciarTemporizador = () => {

    timerRef.current = setTimeout(() => {

      alert('Tiempo agotado!');

    }, 3000);

  };

  const cancelarTemporizador = () => {

    clearTimeout(timerRef.current);

  };

  return (

    <div>

      <button onClick={iniciarTemporizador}>Iniciar</button>

      <button onClick={cancelarTemporizador}>Cancelar</button>

    </div>

  );

}

//useCallback El hook useCallback se usa para memorizar funciones y evitar su recreación en cada render, lo que mejora el rendimiento cuando se pasan funciones como props a componentes hijos.
//Sintaxis básica:
import { useCallback, useState } from 'react';

function ContadorConCallback() {

  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {

    setCount(prev => prev + 1);

  }, []);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={incrementar}>Incrementar</button>

    </div>

  );

}
//Caso de uso: Evitar renders innecesarios en componentes hijos: Cuando un componente hijo recibe una función como prop, se vuelve a renderizar cada vez que el padre se renderiza. Con useCallback, podemos evitar esto.

import { useState, useCallback } from 'react';

import Hijo from './Hijo';

function Padre() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {

    console.log('Click en el botón');

  }, []);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <Hijo onClick={handleClick} />

    </div>

  );

}

function Hijo({ onClick }) {

  console.log('Hijo renderizado');

  return <button onClick={onClick}>Click</button>;

}


//USEREDUCER
import { useReducer } from 'react';

function reducer(state, action) {

  switch (action.type) {

    case 'increment':

      return { count: state.count + 1 };

    case 'decrement':

      return { count: state.count - 1 };

    default:

      return state;

  }

}

function Contador() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (

    <div>

      <p>Contador: {state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

    </div>

  );

}

//Ejemplo práctico: Manejo de formulario con useReducer
import { useReducer } from 'react';

const initialState = { nombre: '', email: '' };

function formReducer(state, action) {

  return { ...state, [action.field]: action.value };

}

function Formulario() {

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (

    <form>

      <input

        type="text"

        value={state.nombre}

        onChange={(e) => dispatch({ field: 'nombre', value: e.target.value })}

        placeholder="Nombre"

      />

      <input

        type="email"

        value={state.email}

        onChange={(e) => dispatch({ field: 'email', value: e.target.value })}

        placeholder="Email"

      />

      <p>Nombre: {state.nombre}</p>

      <p>Email: {state.email}</p>

    </form>

  );

}
//Este ejemplo demuestra cómo useReducer facilita la gestión de formularios sin necesidad de manejar varios estados individuales con useState.