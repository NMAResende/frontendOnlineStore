import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
      listProducts: '',
    };
  }

  componentDidMount() {
    this.handleButton();
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  handleButton = async () => {
    const { listProducts } = this.state;
    const product = await getProductsFromCategoryAndQuery('', listProducts);
    // console.log(product);
    this.setState({ name: product.results });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleButton }
        >
          Pesquisa
        </button>
        <div data-testid="product">
          {name.length === 0 ? <h2>Nenhum produto foi encontrado</h2>
            : name.map((prod) => (
              <div
                key={ prod.id }
              >
                <p>{ prod.title }</p>
                <img src={ prod.thumbnail } alt={ prod.title } />
                <p>{ prod.price }</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
