import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import App from './App';

import SignIn from './signin';
import ProductCategories from './productCategories.jsx';
import Product from './Products.jsx';
import ProductDetail from './productDetail.jsx';

import PaintCalculator from './PaintCalculator.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import SignOut from './signOut';
import ProductsListScreen from './prodictsList';
import CategoriesScreen from './categoriesList';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store = {store}>
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={ProductCategories} />
      <Route exact path={`/products/:categoryid`} component={Product}/>
      <Route exact path={`/products/:categoryid/:productid`} component={ProductDetail}/>
      <Route exact path={`/SignIn`} component={SignIn}/>
      <Route exact path={`/signout`} component={SignOut}/>
      <Route exact path={`/categorieslist`} component={CategoriesScreen}/>
      <Route exact path={`/categorieslist/:categoryid`} component={ProductsListScreen}/>
      <Route path="/PaintCalculator" component={PaintCalculator} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
