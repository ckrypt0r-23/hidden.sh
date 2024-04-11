import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import CryptoCheckout from './CryptoCheckout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <CryptoCheckout />
      </Router>
    </Provider>
  );
}

export default App;
