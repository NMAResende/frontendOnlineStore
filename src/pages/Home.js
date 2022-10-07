import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

class Home extends React.Component {
  state = {
    listProducts: '',
  };

  render() {
    const { listProducts } = this.state;

  /*   if (listProducts.length === 0) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    } */ 
    return (
      <div>
        Home
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart">
        <button data-testid="shopping-cart-button">Carrinho de Compras</button>
        </Link>
      </div>
    );
  }
}

export default Home;
