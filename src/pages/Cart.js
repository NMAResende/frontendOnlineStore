import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <p data-testid="shopping-cart-product-name">{ details.title }</p>
        <p>{ details.price }</p>
        <p data-testid="shopping-cart-product-quantity">{details.quantify}</p>
      </div>

    );
  }
}

export default Cart;
