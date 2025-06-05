//Definir el Componente Mensaje.jsx
function Mensaje(props) {
    return <h2>{props.texto}</h2>;
}
export default Mensaje;


//2. Usar el Componente en App.jsx
import Mensaje from './Mensaje';
function App() {
    return (
        <div>
        <h1>Ejemplo de Props en React</h1>
        <Mensaje texto="¡Hola, mundo!" />
        <Mensaje texto="Bienvenido a React" />
        </div>
    );
}
//export default App;


//1. Definir el Componente TarjetaUsuario.jsx
function TarjetaUsuario(props) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h2>{props.nombre}</h2>
        <p>Edad: {props.edad}</p>
        <p>Ocupación: {props.ocupacion}</p>
        </div>
    );
}
//export default TarjetaUsuario;

//2. Usar el Componente en App.jsx
import TarjetaUsuario from './TarjetaUsuario';
function App() {
    return (
        <div>
        <h1>Usuarios</h1>
        <TarjetaUsuario nombre="Ana Pérez" edad={28} ocupacion="Ingeniera de Software" />
        <TarjetaUsuario nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />
        </div>
    );
}
//export default App;