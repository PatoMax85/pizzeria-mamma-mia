// src/components/Home.jsx

import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas';




const Home = () => {
  return (
    <div className="container my-4">
      <Header />

      <div className="row mt-5">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
