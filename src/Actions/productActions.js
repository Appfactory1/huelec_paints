import { CATEGORIES_LIST_FAIL, CATEGORIES_LIST_REQUEST, CATEGORIES_LIST_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from '../Constants/productConstants';
import { firestore } from '../Firebaseapp/firebase.utils';
import Product from '../Products';

import {v4 as uuidv4} from 'uuid'
import { storage } from 'firebase';

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
    const uuid = uuidv4();
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const uploadTask = await storage().ref(`categoty/${uuid}`).put(product.imageUrl);
    const image = storage().ref(`categoty/${uuid}`)
    image
          .getDownloadURL()
          .then(async (url) => {
            console.log(url);
            product.imageUrl = url;
            product.imageUuid = uuid;
            console.log(product.imageUrl);
            console.log(product.imageUuid);
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
          }) ;
      }catch (error) {
        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
      }
    //const {userSignin: { userInfo }} = getState();
};

const saveProduct = (product) => async (dispatch) => {
  try {
    const uuid = uuidv4();
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const uploadTask = await storage().ref(`product/${uuid}`).put(product.imageUrl);
    const image = storage().ref(`product/${uuid}`)
    image
    .getDownloadURL()
    .then(async (url) => {
      console.log(url);
      product.imageUrl = url;
      product.imageUuid = uuid;
      console.log(product.imageUrl);
      console.log(product.imageUuid);
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
    }) ;
}catch (error) {
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
      const prod = await firestore.collection('Products').doc(productId).get();
      const uuid = prod.data()['imageUuid']
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      await storage().ref('product').child(uuid).delete()
      console.log("d1");
      const data = await firestore.collection('Products').doc(productId).delete();
      console.log("d2");
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };

  const deleteCategory = (categoryId, uuid) => async (dispatch) => {
    // try {
    //   await storage().ref('product').child(console.log(uuid)).delete()
    //   dispatch({ type: PRODUCT_DELETE_REQUEST, payload: categoryId });
    //   await storage().ref('categoty').child(uuid).delete()
    //   await firestore.collection('Products').where('parent', '==', categoryId).get.then(
    //     async function(doc) {
    //       await storage().ref('product').child(doc.data()['imageUuid']).delete();
    //     }
    //   )
    //   console.log("1");
    //   firestore.collection('Products').where('parent','==',categoryId).get()
    //   .then(function(querySnapshot) {

    //     // Once we get the results, begin a batch
    //     var batch = firestore.batch();

    //     querySnapshot.forEach(async function(doc)  {
    //       console.log("2");
    //         // For each doc, add a delete operation to the batch
    //         batch.delete(doc.ref);
    //     });

    //     // Commit the batch
    //     console.log("3");
    //       return batch.commit();
          
    //      }).then(function() {
    //       firestore.collection('Categories').doc(categoryId).delete().then(() => {
    //         dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: true });
    //       })
    //   }); 
      
      
    // } 
    try {
      const prod = await firestore.collection('Products').where('parent', '==', categoryId).get();
      if (!prod.docs.length) { 
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: categoryId });
        await storage().ref('categoty').child(uuid).delete()
        console.log("d3");
        const data = await firestore.collection('Categories').doc(categoryId).delete();
        console.log("d4");
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data })
      }
      // dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      // await storage().ref('categoty').child(uuid).delete()
      // console.log("d1");
      // const data = await firestore.collection('Categories').doc(productId).delete();
      // console.log("d2");
      // dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    }
    catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };

export {listProducts, fetchProduct, saveProduct, deleteProdcut, listCategories, saveCategory, deleteCategory}