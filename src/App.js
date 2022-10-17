import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Home from './pages/Home';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     car: [],
  //   };
  // }

  // handleChange = ({ target }) => {
  //   this.setState({
  //     name: target.value,
  //   });
  // };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/details/:id" component={ Details } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
