import React from 'react';
import { Link } from 'react-router-dom';

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

  handleIncrease = (i) => {
    const { car } = this.state;
    i.quantidade += 1;
    this.setState(() => ({
      car,
    }), () => localStorage.setItem('cartItems', JSON.stringify(car)));
  };

  handleDecrease = (i) => {
    const { car } = this.state;
    if (i.quantidade > 1) {
      i.quantidade -= 1;
      const newCar = [...car];
      this.setState(() => ({
        car: newCar,
      }), () => localStorage.setItem('cartItems', JSON.stringify(car)));
    }
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
    const { car } = this.state;
    return (
      <div>
        <Link to="/checkout">
          <button
            type="button"
            data-testid="checkout-products"
          >
            Finalizar Compra
          </button>

        </Link>
        {car.length === 0 ? (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        ) : (
          <div>
            {car.length > 0 && car.map((element, index) => (
              <div
                key={ index }
              >
                <p data-testid="shopping-cart-product-name">{element.title}</p>
                <p>{element.price}</p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.handleIncrease(element) }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">{element.quantidade}</p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.handleDecrease(element) }
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
        <p>
          {car.length}
        </p>
      </div>
    );
  }
}

export default Cart;
