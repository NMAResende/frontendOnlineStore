import React from 'react';

class Home extends React.Component {
  state = {
    listProducts: '',
  };

  render() {
    const { listProducts } = this.state;

    if (listProducts.length === 0) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;
