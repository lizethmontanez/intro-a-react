/**
Pasos para crear un proyecto con Vite:
1. Crear el proyecto usando el siguiente comando en la terminal:
npm create vite@latest mi-proyecto-react --template react
2. Instalar dependencias:
cd mi-proyecto-react
npm install
npm run dev
Esto iniciará un servidor de desarrollo y podrás ver tu aplicación en el navegador en http://localhost:5173/.
 */

//Ejemplo de un componente funcional:
function Boton() {
    return <button>Haz clic aquí</button>;
}

//Ejemplo de props:
function Usuario(props) {
    return <h1>Hola, {props.nombre}!</h1>;
}
<Usuario nombre="Ana" />

//Ejemplo de state con useState:
import { useState } from 'react';

function Contador() {
const [contador, setContador] = useState(0);

return (
    <div>
    <p>Valor: {contador}</p>
    <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
);
}