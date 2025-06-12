/**Hooks clásicos en React
useState: El Hook useState es uno de los Hooks más básicos y esenciales en React. Nos permite agregar estado a componentes funcionales. El estado es una forma de almacenar y actualizar datos que pueden afectar la forma en que se renderiza un componente.

import React, { useState } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}
En este ejemplo, useState(0) inicializa el estado con el valor 0 y devuelve un array con dos elementos: el valor actual del estado (count) y una función para actualizar el estado (setCount).


useEffect: El Hook useEffect nos permite realizar efectos secundarios en componentes funcionales. Los efectos secundarios son acciones que no están directamente relacionadas con la representación del componente, como realizar solicitudes de datos, suscribirse a eventos o manipular el DOM.

import React, { useState, useEffect } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log('El componente se ha renderizado');

  }, [count]);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}
En este ejemplo, useEffect se ejecuta después de cada renderizado del componente. El array de dependencias [count] indica que el efecto solo debe ejecutarse si el valor de count cambia.


useContext: El Hook useContext nos permite acceder al contexto de React desde componentes funcionales. El contexto es una forma de compartir datos entre componentes sin tener que pasar props manualmente a través de la jerarquía de componentes.

import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {

  const value = useContext(MyContext);

  return (

    <div>

      <p>Valor del contexto: {value}</p>

    </div>

  );

}
En este ejemplo, useContext(MyContext) nos da acceso al valor actual del contexto MyContext.

Casos de uso en el mundo real
useState: Se utiliza para manejar el estado de componentes, como el texto de un campo de entrada, el estado de un botón o la visibilidad de un elemento.
useEffect: Se utiliza para realizar solicitudes de datos a un servidor, suscribirse a eventos del navegador, manipular el DOM o realizar cualquier otra acción que no esté directamente relacionada con la representación del componente.
useContext: Se utiliza para compartir datos entre componentes, como la información del usuario autenticado, la configuración de la aplicación o el tema visual. */