import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      car: [],
      click: 1,
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

  handleIncrease = (click) => {
    localStorage.setItem('cartItems', JSON.parse(click));
    this.setState((prev) => ({
      click: prev.click + 1,
    }));
  };

  handleDecrease = (click) => {
    localStorage.setItem('cartItems', JSON.parse(click));
    this.setState((prev) => ({
      click: prev.click - 1,
    }));
  };

  handleRemove = ({ target }) => {
    const { car } = this.state;
    const newList = car.filter((item) => item.id !== target.value);
    localStorage.setItem('cartItems', JSON.stringify(newList));
    this.setState({
      car: newList,
    });
  };

  render() {
    const { car, click } = this.state;
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
                  onClick={ this.handleIncrease }
                >
                  +
                </button>
                <p>{ click }</p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ this.handleDecrease }
                >
                  -
                </button>
                <button
                  type="button"
                  data-testid="remove-product"
                  value={ element.id }
                  onClick={ this.handleRemove }
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
        <p data-testid="shopping-cart-product-quantity">
          { car.length }
        </p>
      </div>
    );
  }
}

export default Cart;
