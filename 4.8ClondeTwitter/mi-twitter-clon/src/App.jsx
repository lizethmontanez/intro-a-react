import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const isAuthenticated = !!user;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={isAuthenticated ? <Home user={user} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
