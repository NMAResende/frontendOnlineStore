import PropTypes from 'prop-types';
import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      car: [],
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      paymentMethod: '',
      submit: false,
    };
  }

  componentDidMount() {
    this.setState({ car: JSON.parse(localStorage.getItem('cartItems')) });
  }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const check = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: check,
    });
  };

  validationForm = () => {
    const { fullname, email, cpf, phone, cep, address, paymentMethod } = this.state;
    const val = [
      fullname.length > 0,
      email.length > 0,
      cpf.length > 0,
      phone.length > 0,
      cep.length > 0,
      address.length > 0,
      paymentMethod.length > 0,
    ];
    return val;
  };

  handleButton = async () => {
    const { history } = this.props;
    const validando = this.validationForm();
    if (validando) {
      localStorage.removeItem('cartItems');
      history.push('/');
    } else {
      this.setState({
        submit: true,
      });
    }
  };

  render() {
    const { car, fullname,
      email, cpf, phone, cep,
      address, paymentMethod, submit } = this.state;
    return (
      <div>
        {car.map((produto, index) => (
          <div
            key={ index }
          >
            <p>{ produto.title }</p>
            <p>{ produto.price }</p>
          </div>

        ))}
        <form>
          <label htmlFor="fullname">
            <input
              type="text"
              data-testid="checkout-fullname"
              id="fullname"
              name="fullname"
              value={ fullname }
              placeholder="Nome Completo"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="checkout-email"
              id="email"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              data-testid="checkout-cpf"
              id="cpf"
              name="cpf"
              value={ cpf }
              placeholder="CPF"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="phone">
            <input
              type="text"
              data-testid="checkout-phone"
              id="phone"
              name="phone"
              value={ phone }
              placeholder="Telefone"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cep">
            <input
              type="text"
              data-testid="checkout-cep"
              id="cep"
              name="cep"
              value={ cep }
              placeholder="CEP"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              data-testid="checkout-address"
              id="address"
              name="address"
              value={ address }
              placeholder="Endereço"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="payment1">
            <input
              type="radio"
              data-testid="ticket-payment"
              id="payment1"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ this.handleChange }
            />
            Boleto
          </label>
          <br />
          <label htmlFor="payment2">
            <input
              type="radio"
              data-testid="visa-payment"
              id="payment2"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ this.handleChange }
            />
            Visa
          </label>
          <br />
          <label htmlFor="payment3">
            <input
              type="radio"
              data-testid="master-payment"
              id="payment3"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ this.handleChange }
            />
            MasterCard
          </label>
          <br />
          <label htmlFor="payment4">
            <input
              type="radio"
              data-testid="elo-payment"
              id="payment4"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ this.handleChange }
            />
            ELO
          </label>
          <br />
          {submit && <h3 data-testid="error-msg">Campos inválidos</h3>}
          <button
            type="button"
            data-testid="checkout-btn"
            onClick={ this.handleButton }
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Checkout;
