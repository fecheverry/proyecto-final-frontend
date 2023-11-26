// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../lists/users';
import '../styles/login.css'; // Importa los estilos

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/cliente');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Agrega o quita la clase login-body al body según la página actual
  document.body.classList.add('login-body');
  // Limpia la clase cuando el componente se desmonta
  return (
    <div className="principal-container">
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <label className="login-label">
        Username:
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="login-label">
        Password:
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;
