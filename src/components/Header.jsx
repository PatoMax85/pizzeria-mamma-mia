// src/components/Header.jsx
import headerImg from '../assets/Header.jpg';

const Header = () => {
  return (
    <div
      className="text-white text-center py-5"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
      }}
    >
      <h1 className="fw-bold">¡Bienvenido a Pizzería Mamma Mía!</h1>
      <p className="lead">La mejor pizza artesanal de la ciudad, hecha con ingredientes frescos y mucho amor.</p>
    </div>
  );
};

export default Header;
