// src/components/LoginPage.jsx
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje('❌ Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setMensaje('❌ La contraseña debe tener al menos 6 caracteres.');
    } else {
      setMensaje('✅ Login exitoso.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
      {mensaje && <div className="alert mt-3">{mensaje}</div>}
    </div>
  );
};

export default LoginPage;
