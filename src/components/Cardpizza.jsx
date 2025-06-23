// src/components/CardPizza.jsx
const CardPizza = ({ name, price, ingredients, img }) => {
  const formatearPrecio = (precio) => {
    return precio.toLocaleString('es-CL');
  };

  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Precio:</strong> ${formatearPrecio(price)}</p>
        <p className="card-text"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary">Ver más</button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
