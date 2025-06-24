//Ejemplo básico
function Header() {
    return <h1>Bienvenido a mi aplicación</h1>;
    }
    function Content() {
    return <p>Este es el contenido principal de la aplicación.</p>;
    }
    function App() {
    return (
        <div>
        <Header />
        <Content />
        </div>
    );
}
//export default App;

//Ejemplo de componente especializado
function Modal({ title, content }) {
    return (
        <div style={{ border: '1px solid gray', padding: '20px', backgroundColor: 'lightgray' }}>
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
    );
    }
    function App() {
    return <Modal title="Aviso" content="Este es un mensaje importante." />;
}
//export default App; Este patrón es común para diseñar componentes reutilizables con propiedades personalizadas.