import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      idCar: [],
      email: '',
      radio: '',
      textarea: '',
      submit: false,
    };
  }

  componentDidMount() {
    const { produtoId } = this.props;
    this.setState({ idCar: JSON.parse(localStorage.getItem(produtoId) || '[]') });
  }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const check = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: check,
    });
  };

  validandoForm = () => {
    const { email, radio, textarea, idCar } = this.state;
    const val = email.length > 0 && radio.length > 0;

    if (val) {
      const { produtoId } = this.props;
      const comentarios = [...idCar, { email, radio, textarea }];
      localStorage.setItem(produtoId, JSON.stringify(comentarios));
      this.setState({
        submit: true,
        idCar: comentarios,
        email: '',
        radio: '',
        textarea: '',
      });
    } else {
      this.setState({
        submit: false,
      });
    }
  };

  render() {
    const { email, textarea, submit, idCar } = this.state;

    return (
      <div>
        <form>
          <h2>Avaliação do Produto</h2>
          <br />
          <input
            type="email"
            value={ email }
            name="email"
            placeholder="Email"
            data-testid="product-detail-email"
            onChange={ this.handleChange }
          />
          <label htmlFor="1">
            <input
              type="radio"
              name="radio"
              id="1"
              value={ 1 }
              data-testid="1-rating"
              onChange={ this.handleChange }
            />
            1
          </label>
          <label htmlFor="2">
            <input
              type="radio"
              name="radio"
              id="2"
              value={ 2 }
              data-testid="2-rating"
              onChange={ this.handleChange }
            />
            2
          </label>
          <label htmlFor="3">
            <input
              type="radio"
              name="radio"
              id="3"
              value={ 3 }
              data-testid="3-rating"
              onChange={ this.handleChange }
            />
            3
          </label>
          <label htmlFor="4">
            <input
              type="radio"
              name="radio"
              id="4"
              value={ 4 }
              data-testid="4-rating"
              onChange={ this.handleChange }
            />
            4
          </label>
          <label htmlFor="5">
            <input
              type="radio"
              name="radio"
              id="5"
              value={ 5 }
              data-testid="5-rating"
              onChange={ this.handleChange }
            />
            5
          </label>
          <textarea
            name="textarea"
            value={ textarea }
            data-testid="product-detail-evaluation"
            placeholder="Escreva seu comentário sobre o produto"
            onChange={ this.handleChange }
          />
          {!submit && <h3 data-testid="error-msg">Campos inválidos</h3>}
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.validandoForm }
          >
            Avaliar
          </button>
        </form>
        {idCar.map((el, i) => (
          <div key={ i }>
            <p data-testid="review-card-email">{el.email}</p>
            <p data-testid="review-card-rating">{el.radio}</p>
            <p data-testid="review-card-evaluation">{el.textarea}</p>
          </div>
        ))}
      </div>
    );
  }
}

Form.propTypes = {
  produtoId: PropTypes.string.isRequired,
};

export default Form;
