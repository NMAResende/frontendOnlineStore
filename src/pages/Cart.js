import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      car: [],
    };
  }

  componentDidMount() {
    this.getSavedCartItems();
  }

  getSavedCartItems = () => {
    const get = JSON.parse(localStorage.getItem('cartItems'));
    if (get !== null) {
      this.setState({
        car: JSON.parse(localStorage.getItem('cartItems')),
      });
    }
  };

  render() {
    const { car } = this.state;
    return (
      <div>
        {car.length === 0 ? (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        ) : (
          <div>
            { car.length > 0 && car.map((element, i) => (
              <div
                key={ i }
              >
                <p data-testid="shopping-cart-product-name">{element.title}</p>
                <p>{element.price}</p>
                <p data-testid="shopping-cart-product-quantity">1</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
