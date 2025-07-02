import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
const [username, setUsername] = useState("");
const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    // Guardar en localStorage y actualizar el estado global
    localStorage.setItem("user", JSON.stringify({ username }));
    setUser({ username });

    navigate("/"); // Redirigir al home
};

return (
    <form onSubmit={handleLogin}>
    <h2>Iniciar sesión</h2>
    <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <button type="submit">Entrar</button>
    </form>
);
};

export default Login;