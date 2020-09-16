import { CATEGORIES_LIST_FAIL, CATEGORIES_LIST_REQUEST, CATEGORIES_LIST_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from '../Constants/productConstants';
import { firestore } from '../Firebaseapp/firebase.utils';
import Product from '../Products';

const list = [];

const listProducts = (parent) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        console.log(parent)
        const data = await firestore.collection('Products').where('parent', '==', parent).get();
        //data.docs.map(doc => console.log(doc.data()));
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data.docs});
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

const listCategories = () => async (dispatch) => {
  try {
      dispatch({type: CATEGORIES_LIST_REQUEST});
      
      const data = await firestore.collection('Categories').get();
      //data.docs.map(doc => console.log(doc.data()));
      dispatch({type: CATEGORIES_LIST_SUCCESS, payload: data.docs});
  } catch (error) {
      dispatch({type: CATEGORIES_LIST_FAIL, payload: error.message});
  }
}

const saveCategory = (product) => async (dispatch) => {
  try {
    console.log(product)
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    //const {userSignin: { userInfo }} = getState();
    if (product.id) {
      const {id, ...remain} = product;
      const data = await firestore.collection('Categories').doc(product.id).set(remain);
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const {id, ...remain} = product;
      console.log('yippy');
      const data = await firestore.collection('Categories').add(remain);
      console.log('yippy2');
      console.log(product)
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

const saveProduct = (product) => async (dispatch) => {
  try {
    console.log(product)
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    //const {userSignin: { userInfo }} = getState();
    if (product.id) {
      const {id, ...remain} = product;
      const data = await firestore.collection('Products').doc(product.id).set(remain);
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const {id, ...remain} = product;
      console.log('yippy');
      const data = await firestore.collection('Products').add(remain);
      console.log('yippy2');
      console.log(product)
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

const fetchProduct = (productId) => async (dispatch) => {
    try {
      //console.log(productId)
      dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
      const data = await firestore.collection('Products').doc(productId).get();
      //console.log(data.data());
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
  };

  const deleteProdcut = (productId) => async (dispatch) => {
    try {
      // const {
      //   userSignin: { userInfo },
      // } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      const data = await firestore.collection('Products').doc(productId).delete();
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };

  const deleteCategory = (categoryId) => async (dispatch) => {
    try {
      // const {
      //   userSignin: { userInfo },
      // } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: categoryId });
      firestore.collection('Products').where('parent','==',categoryId).get()
      .then(function(querySnapshot) {
        // Once we get the results, begin a batch
        var batch = firestore.batch();

        querySnapshot.forEach(function(doc) {
            // For each doc, add a delete operation to the batch
            batch.delete(doc.ref);
        });

        // Commit the batch
          return batch.commit();
         }).then(function() {
          firestore.collection('Categories').doc(categoryId).delete().then(() => {
            dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: true });
          })
      }); 
      
      
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };

export {listProducts, fetchProduct, saveProduct, deleteProdcut, listCategories, saveCategory, deleteCategory}