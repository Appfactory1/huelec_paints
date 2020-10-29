import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCategory, listCategories, saveCategory } from './Actions/productActions';
import { auth } from './Firebaseapp/firebase.utils';
import { firestore } from './Firebaseapp/firebase.utils';
import './list.css'
// import axios from 'axios';
// import data from '../data';
// import {
//   saveProduct,
//   listProducts,
//   deleteProdcut,
// } from '../actions/productActions';

function CategoriesScreen(props) {
  //const {products} = data;
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const categoryDetail = useSelector(state => state.categoryDetail);
  const {categories} = categoryDetail;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const {user} = userSignin;
  const [update, setUpdate] = useState(true);
  


  useEffect(() => {
    if (!user) {
      props.history.push('/');
    }
  // dispatch(listProducts());
    dispatch(listCategories());
    return () => {}
  }, [update]);

  const openModal = (category) => {
    setModalVisible(true);
    setId(category.id);
    setName(category.name);
    setImage(category.imageUrl);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveCategory({
        id: id,
        name,
        imageUrl,
      })
    );
    setModalVisible(false);
    setUpdate(!update);
    //setUpdate(!update);
  };

  const manageProducts = (id) => {
    props.history.push(`categorieslist/${id}`);
  }

  const deleteHandler = async (category) => {
    const prod = await firestore.collection('Products').where('parent', '==', category.id).get();
    if (!prod.docs.length) {
      dispatch(deleteCategory(category.id, category.imageUuid));
      setUpdate(!update);
    }
    else{
      console.log("can't del");
    }
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    //const bodyFormData = new FormData();
    // bodyFormData.append('image', file);
    // axios
    //   .post('/api/uploads', bodyFormData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((response) => {
    //     setImage(response.data);
    //     setUploading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setUploading(false);
    //   });
  };

  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Products</h3>
        <button className="button primary" onClick={() => openModal({})}>
          Create Category
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Create Category</h2>
              </li>
              <li>
                {false && <div>Loading...</div>}
                {false && <div>{''/*errorSave*/}</div>}
              </li>

              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="image">Image</label>
                { <input type="file" onChange={uploadFileHandler}></input>} 
              </li>
              <li>
                <button type="submit" className="button" >
                  {id ? 'Update' : 'Create'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories ? categories.map((category) => (
              <tr key={category.id}>
                <td>{category.data()['name']}</td>
                <td>
                  <div className='buttons'>
                  <button className="button" onClick={() => openModal({...category.data(), id: category.id})}>
                    Edit
                  </button>
                  <button className="button" onClick={() => manageProducts(category.id)}>
                    Manage
                  </button>
                  <button
                    className="button"
                    onClick={() => deleteHandler({...category.data(), id: category.id})}
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            )): <div></div>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CategoriesScreen;