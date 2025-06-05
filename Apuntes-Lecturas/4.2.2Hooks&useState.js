/*
Existen varios Hooks en React, pero algunos de los más utilizados son:
useState: Permite manejar el estado en componentes funcionales.
useEffect: Se utiliza para manejar efectos secundarios, como llamadas a API o manipulación del DOM.
useContext: Facilita el uso del contexto en React para compartir datos entre múltiples componentes sin necesidad de pasar props manualmente.
useReducer: Una alternativa a useState, útil para manejar estados más complejos.
useRef: Permite crear referencias a elementos del DOM o mantener valores persistentes sin causar renderizados adicionales.

El Hook useState permite a los componentes funcionales manejar su propio estado. Antes de los Hooks, el estado solo podía definirse dentro de los componentes de clase mediante this.state y actualizarse con this.setState. Sin embargo, con useState, se puede definir y actualizar el estado en componentes funcionales de manera más sencilla.
 */

//La sintaxis básica de useState es la siguiente:

import { useState } from "react";
function Contador() {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <p>El contador está en: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}

//Ejemplo con objetos:
import { useState } from "react";
function PerfilUsuario() {
    const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 25 });
    const actualizarEdad = () => {
        setUsuario({ ...usuario, edad: usuario.edad + 1 });
    };
    return (
        <div>
            <p>Nombre: {usuario.nombre}</p>
            <p>Edad: {usuario.edad}</p>
            <button onClick={actualizarEdad}>Cumplir años</button>
        </div>
    );
}

/**El Hook useState es útil en una amplia variedad de aplicaciones, desde las más técnicas hasta situaciones cotidianas. Aquí algunos ejemplos:

Contador de visitas en una página web: Un blog puede mostrar cuántas veces ha sido visitado un artículo.
Lista de tareas (To-Do List): Para gestionar tareas agregadas y eliminadas por el usuario.
Formulario de contacto: Para manejar los datos ingresados por el usuario y validar la información antes de enviarla.
Cambio de temas en una aplicación: Para alternar entre modo claro y oscuro en una página web.
Juegos simples: Para controlar el puntaje o las vidas restantes en un juego.

Los Hooks en React revolucionaron la forma en que los desarrolladores manejan el estado y el ciclo de vida en los componentes. En particular, useState es un Hook fundamental que permite a los componentes funcionales gestionar su propio estado de manera sencilla y eficiente. Su uso es esencial para cualquier aplicación React, desde proyectos pequeños hasta aplicaciones web complejas.

*/