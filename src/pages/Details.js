import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      details: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({ details: response });
  }

  handleButton = async () => {
    const { history } = this.props;
    history.push('/cart');
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
