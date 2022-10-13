import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      car: [],
      // increase: 1,
      // decrease: 1,
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

  // handleIncrease = () => {
  //   this.setState({
  //     increase:
  //   })
  // };

  // handleDecrease = () => {
  //   this.setState({
  //     decrease:
  //   })
  // };

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
            {car.length > 0 && car.map((element, i) => (
              <div
                key={ i }
              >
                <p data-testid="shopping-cart-product-name">{element.title}</p>
                <p>{element.price}</p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  // onClick={ this.handleIncrease }
                >
                  +
                </button>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  // onClick={ this.handleDecrease }
                >
                  -
                </button>
              </div>
            ))}
          </div>
        )}
        <p data-testid="shopping-cart-product-quantity">{car.length}</p>
      </div>
    );
  }
}

export default Cart;
