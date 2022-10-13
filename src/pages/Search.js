// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      listProducts: [],
      car: [],
    };
  }

  componentDidMount() {
    this.handleButton();
  }

  handleChange = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  handleButton = async () => {
    const { name } = this.state;
    const product = await getProductsFromCategoryAndQuery('', name);
    /* console.log(product); */
    const { results } = product;
    this.setState({
      listProducts: results,
    });
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
    const { name, listProducts } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
          value={ name }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleButton }
        >
          Pesquisa
        </button>
        {listProducts.length === 0 ? <h2>Nenhum produto foi encontrado</h2>
          : listProducts.map((prod) => (
            <div
              key={ prod.id }
              data-testid="product"
            >
              <p>{prod.title}</p>
              <img src={ prod.thumbnail } alt={ prod.title } />
              <p>{prod.price}</p>
              <Link
                data-testid="product-detail-link"
                to={ `/Details/${prod.id}` }
              >
                Especificações
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addCar(prod) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
      </div>
    );
  }
}

// Cart.propTypes = {
//   car: PropTypes.shape().isRequired,
// };

export default Search;
