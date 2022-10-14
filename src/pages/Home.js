import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
// import Search from './Search';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      name: [],
      listProducts: [],
      car: [],
      item: false,
    };
  }

  componentDidMount() {
    this.listCategories();
  }

  handleChange = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  listCategories = async () => {
    const categories = await getCategories();
    // console.log(categories);
    this.setState({
      name: categories, /* tiramos desestruturação do objeto name e colchetes do name */
    });
  };

  handleButton = async ({ target: { value } }) => {
    // const { name } = this.state;
    const product = await getProductsFromCategoryAndQuery(value);
    // console.log(value);
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
    const { name, listProducts, item, search } = this.state;
    return (
      <div>
        Home
        <br />
        {/* <Search /> */}
        <br />
        <div>
          {name
            .map((listCateg) => (/* tiramos o index e colocamos o listCateg.id na key */
              <button
                key={ listCateg.id }
                type="button"
                value={ listCateg.id }
                name="category"
                data-testid="category"
                onClick={ this.handleButton }
              >
                {listCateg.name}
              </button>
            ))}
        </div>
        <div>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ search }
          />
        </div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleButton }
        >
          Pesquisa
        </button>
        <Link to="/cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
          <br />
        </Link>
        {listProducts.length === 0 && !item
          ? (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
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
        {item || <h2>Nenhum produto foi encontrado</h2>}
      </div>
    );
  }
}

export default Home;
