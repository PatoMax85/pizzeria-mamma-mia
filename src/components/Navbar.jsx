// src/components/Navbar.jsx

const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatearPrecio = (precio) => {
    return precio.toLocaleString('es-CL');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
        <div>
          <button className="btn btn-outline-light me-2">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">🔓 Profile</button>
              <button className="btn btn-outline-light me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">🔐 Login</button>
              <button className="btn btn-outline-light me-2">🔐 Register</button>
            </>
          )}
        </div>
        <button className="btn btn-success">🛒 Total: ${formatearPrecio(total)}</button>
      </div>
    </nav>
  );
};

export default Navbar;
