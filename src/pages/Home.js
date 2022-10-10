import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

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
    console.log(categories);
    this.setState({
      name: categories, /* tiramos desestruturação do objeto name e colchetes do name */
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        Home
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
        </Link>
        { name
          .map((listCateg) => (/* tiramos o index e colocamos o listCateg.id na key */
            <button
              key={ listCateg.id }
              type="button"
              data-testid="category"
            >
              { listCateg.name }

            </button>

          ))}
      </div>
    );
  }
}

export default Home;
