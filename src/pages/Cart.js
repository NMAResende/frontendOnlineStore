import React from "react";

class Cart extends React.Component {

  state = {
    cart:'',
  }
  render() {
    const { cart } = this.state;
    /* if (cart.length === 0) {
      return 
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    } */
    return(
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        Cart
      </div>
      
    );
  }
}

export default Cart;