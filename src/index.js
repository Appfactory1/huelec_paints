import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import App from './App';

import ProductCategories from './productCategories.jsx';
import Product from './Products.jsx';
import ProductDetail from './productDetail.jsx';

import PaintCalculator from './PaintCalculator.js';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={ProductCategories} />
      <Route exact path={`/products/:categoryid`} component={Product}/>
      <Route exact path={`/products/:categoryid/:productid`} component={ProductDetail}/>
      <Route path="/PaintCalculator" component={PaintCalculator} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
