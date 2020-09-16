import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { categoryListReducer, productDetailsReducer, productListReducer } from './Reducers/productReducer';
//import { productDetailsReducer, productListReducer } from './Reducers/productsReducer';
import { userSigninReducer } from './Reducers/userReducer';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || false;

const initialState = {userSignin: {user: userInfo}};
const reducer = combineReducers({
    userSignin: userSigninReducer,
    categoryDetail: categoryListReducer,
    productDetail: productListReducer,
    productDet: productDetailsReducer
    //productList: productListReducer,
    //productDetail: productDetailsReducer
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;