import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      listProducts: [],
    };
  }

  //   componentDidMount() {
  //     this.getQueryId();
  //   }

  getQueryId = async () => {
    const { match: { params: { id } } } = this.props;
    const productId = await getProductsFromCategoryAndQuery(id);
    this.setState({
      listProducts: productId,
    });
  };

  render() {
    const { listProducts } = this.state;
    return (
      <div>
        {listProducts.map((prod) => (
          <div
            key={ prod.id }
            data-testid="product"
          >
            <p data-testid="product-detail-name">{ prod.title }</p>
            <img
              data-testid="product-detail-image"
              src={ prod.thumbnail }
              alt={ prod.title }
            />
            <p data-testid="product-detail-price">{ prod.price }</p>
          </div>
        ))}
        <Link to="/cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.getQueryId }
          >
            Carrinho de Compras
          </button>
        </Link>
      </div>
    );
  }
}

export default Details;

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
