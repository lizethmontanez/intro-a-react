const Profile = ({ user }) => {
const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
};

return (
    <div>
        <h2>Perfil de {user.username}</h2>
        <p>Este es tu perfil personal.</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
);
};

export default Profile;