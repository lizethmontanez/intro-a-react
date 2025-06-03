//Los Functional Components son simplemente funciones que devuelven JSX. Veamos un ejemplo:
function Mensaje() {
    return <p>Este es un mensaje dentro de un Functional Component.</p>;
}
export default Mensaje;

//Para usar este componente en una aplicación, lo importamos en App.jsx:
import Mensaje from './Mensaje';
function App() {
    return (
        <div>
        <h1>Mi Aplicación</h1>
        <Mensaje />
        </div>
    );
}
//export default App;

//Uso de Props en Functional Components
// Tarjeta.jsx:
function Tarjeta(props) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
        </div>
    );
}
//export default Tarjeta;

// Uso en App.jsx:
import Tarjeta from './Tarjeta';
function App() {
    return (
        <div>
        <Tarjeta titulo="React" descripcion="Una biblioteca para construir interfaces de usuario." />
        <Tarjeta titulo="JavaScript" descripcion="El lenguaje de la web." />
        </div>
    );
}
//export default App;

/**
¿Qué son los Functional Components?
En React, los Functional Components son funciones de JavaScript que devuelven JSX. Son la forma más sencilla de definir componentes y se utilizan ampliamente debido a su sintaxis simple y facilidad de mantenimiento.

Antes de la introducción de los Hooks en React 16.8, los Functional Components eran considerados componentes sin estado, ya que no podían manejar un state interno ni usar métodos del ciclo de vida. Sin embargo, hoy en día pueden gestionar estado y efectos secundarios gracias a los Hooks.
Diferencias clave:
Sintaxis: Los Functional Components son más concisos y fáciles de leer.
Uso de this: Los Class Components requieren this para acceder a props, mientras que los Functional Components no.
Hooks: Los Functional Components pueden usar Hooks (useState, useEffect), mientras que los Class Components dependen de los métodos del ciclo de vida.
Conclusión
Los Functional Components en React son la forma más sencilla y moderna de crear componentes. Son más fáciles de leer y mantener en comparación con los componentes de clase. Gracias a su sintaxis clara y concisa, son ampliamente utilizados en el desarrollo moderno con React.
 */