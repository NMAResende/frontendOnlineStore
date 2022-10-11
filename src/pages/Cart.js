import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: '',

    };
  }

  componentDidMount() {
    this.getSavedCartItems();
  }

  getSavedCartItems = () => JSON.parse(localStorage.getItem('cartItems'));

  render() {
    const { cart } = this.state;
    return (
      <div>
        if (cart === 0) :
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>

        <p data-testid="shopping-cart-product-name">{ details.title }</p>
        <p>{ details.price }</p>
        <p data-testid="shopping-cart-product-quantity">{details.quantify}</p>
      </div>

    );
  }
}

export default Cart;
