// src/components/RegisterPage.jsx
import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMensaje('❌ Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setMensaje('❌ La contraseña debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      setMensaje('❌ Las contraseñas no coinciden.');
    } else {
      setMensaje('✅ Registro exitoso.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Registro</h2>
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
        <div className="mb-3">
          <label>Confirmar contraseña</label>
          <input type="password" className="form-control" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
      {mensaje && <div className="alert mt-3">{mensaje}</div>}
    </div>
  );
};

export default RegisterPage;
