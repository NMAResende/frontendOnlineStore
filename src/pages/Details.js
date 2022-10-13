import PropTypes from 'prop-types';
import React from 'react';
import { getProductById } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      details: {},
      car: '', // tirei de chave e coloquei aspas simples.
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({ details: response });
    this.getSavedCartItems();
  }

  handleButton = async () => {
    const { history } = this.props;
    history.push('/cart');
  };

  getSavedCartItems = () => {
    const get = JSON.parse(localStorage.getItem('cartItems'));
    if (get !== null) {
      this.setState({
        car: JSON.parse(localStorage.getItem('cartItems')),
      });
    }
  };

  saveCartItems = () => {
    const { car } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(car));
  };

  addCar = (i) => {
    this.setState((prev) => ({
      car: [...prev.car, i],
    }), this.saveCartItems);
  };

  render() {
    const { details } = this.state;
    if (details) {
      return (
        <div>
          <p data-testid="product-detail-name">{ details.title }</p>
          <img
            data-testid="product-detail-image"
            src={ details.thumbnail }
            alt={ details.title }
          />
          <p data-testid="product-detail-price">{ details.price }</p>
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.handleButton }
          >
            Carrinho de Compras
          </button>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => this.addCar(details) } // retirada da variável 'car' e adicionada variável 'details' no lugar.
          >
            Adicionar ao Carrinho
          </button>
          <form>
            <input type="email" placeholder="Email" data-testid="product-detail-email" />
            <label htmlFor="1">
              <input
                type="radio"
                name="radio"
                id="1"
                value="1"
                data-testid="1-rating"
              />
              1
            </label>
            <label htmlFor="2">
              <input
                type="radio"
                name="radio"
                id="2"
                value="2"
                data-testid="2-rating"
              />
              2
            </label>
            <label htmlFor="3">
              <input
                type="radio"
                name="radio"
                id="3"
                value="3"
                data-testid="3-rating"
              />
              3
            </label>
            <label htmlFor="4">
              <input
                type="radio"
                name="radio"
                id="4"
                value="4"
                data-testid="4-rating"
              />
              4
            </label>
            <label htmlFor="5">
              <input
                type="radio"
                name="radio"
                id="5"
                value="5"
                data-testid="5-rating"
              />
              5
            </label>
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Escreva seu comentário sobre o produto"
            />
            <button type="submit" data-testid="submit-review-btn"> Enviar</button>
          </form>
        </div>
      );
    }
  }
}

export default Details;

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
