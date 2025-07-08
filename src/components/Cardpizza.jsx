const CardPizza = ({ name, img, price, ingredients, desc }) => {
  const formatearPrecio = (valor) => {
    return valor.toLocaleString('es-CL');
  };

  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text"><strong>Precio:</strong> ${formatearPrecio(price)}</p>

        {/* Mostrar ingredientes */}
        <p className="card-text"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>

        {/* Opcional: mostrar descripción si se pasa como prop */}
        {desc && <p className="card-text text-muted">{desc}</p>}

        {/* Botones sin funcionalidad (para el futuro) */}
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-primary">Ver más</button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
