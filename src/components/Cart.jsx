// src/components/Cart.jsx

import { useState } from 'react';
import { pizzaCart } from '../pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart); // Estado inicial desde pizzas.js

  // Aumentar cantidad
  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updated);
  };

  // Disminuir cantidad y eliminar si llega a 0
  const decrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0); // Eliminar si count = 0
    setCart(updated);
  };

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container my-4">
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
            <img src={item.img} alt={item.name} width="80" className="me-3" />
            <div className="me-auto">
              <h5 className="text-capitalize">{item.name}</h5>
              <p>${item.price.toLocaleString('es-CL')}</p>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => decrease(item.id)}>-</button>
              <span className="mx-2">{item.count}</span>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <hr />
      <h4>Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-success mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
