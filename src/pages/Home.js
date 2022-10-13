import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Search from './Search';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
    };
  }

  componentDidMount() {
    this.listCategories();
  }

  listCategories = async () => {
    const categories = await getCategories();
    // console.log(categories);
    this.setState({
      name: categories, /* tiramos desestruturação do objeto name e colchetes do name */
    });
  };

  render() {
    const { name } = this.state;
    const { handleButton } = this.props;
    return (
      <div>
        Home
        <br />
        <Search />
        <br />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
          <br />
        </Link>
        { name
          .map((listCateg) => (/* tiramos o index e colocamos o listCateg.id na key */
            <button
              key={ listCateg.id }
              type="button"
              data-testid="category"
              onClick={ handleButton }
            >
              { listCateg.name }

            </button>

          ))}
      </div>
    );
  }
}

Home.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
export default Home;
