import { CATEGORIES_DELETE_FAIL, CATEGORIES_DELETE_REQUEST, CATEGORIES_DELETE_SUCCESS, CATEGORIES_LIST_FAIL, CATEGORIES_LIST_REQUEST, CATEGORIES_LIST_SUCCESS, CATEGORIES_SAVE_FAIL, CATEGORIES_SAVE_REQUEST, CATEGORIES_SAVE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from '../Constants/productConstants';

function productListReducer(state = {products: []}, action) {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
          return {loading: true};
      case PRODUCT_LIST_SUCCESS:
          return {loading: false, products: action.payload};
      case PRODUCT_LIST_FAIL:
          return {loading: false, error: action.payload};
      case PRODUCT_SAVE_REQUEST:
        return { loading: true };
      case PRODUCT_SAVE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_SAVE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, product: action.payload, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
          return state;
    }
}

function categoryListReducer(state = {products: []}, action) {
  switch (action.type) {
    case CATEGORIES_LIST_REQUEST:
        return {loading: true};
    case CATEGORIES_LIST_SUCCESS:
        return {loading: false, categories: action.payload};
    case CATEGORIES_LIST_FAIL:
        return {loading: false, error: action.payload};
    case CATEGORIES_SAVE_REQUEST:
      return { loading: true };
    case CATEGORIES_SAVE_SUCCESS:
      return { loading: false, success: true, categories: action.payload };
    case CATEGORIES_SAVE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORIES_DELETE_REQUEST:
      return { loading: true };
    case CATEGORIES_DELETE_SUCCESS:
      return { loading: false, categories: action.payload, success: true };
    case CATEGORIES_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
        return state;
  }
}

function productDetailsReducer(state = { product: null }, action) {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload.data() };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export {productListReducer, productDetailsReducer, categoryListReducer}