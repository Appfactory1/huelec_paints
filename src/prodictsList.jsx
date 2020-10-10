import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProdcut, listProducts, saveProduct } from './Actions/productActions';
import { auth } from './Firebaseapp/firebase.utils';
import './list.css'
// import axios from 'axios';
// import data from '../data';
// import {
//   saveProduct,
//   listProducts,
//   deleteProdcut,
// } from '../actions/productActions';

function ProductsListScreen(props) {
  //const {products} = data;
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState(null); 
  const [parent, setParent] = useState();
  const [countInStock, setCountInStock] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [update, setUpdate] = useState(false);
  //const productList = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  //const {products, loading, error} = productList;
  const userSignin = useSelector((state) => state.userSignin);
  const user = userSignin;
  const productDetail = useSelector(state => state.productDetail);
    const {products} = productDetail;

  useEffect(() => {
    //console.log(auth.currentUser)
    if (!user) {
        props.history.push('/');
    }
    setParent(props.match.params.categoryid);
    dispatch(listProducts(props.match.params.categoryid));
    return () => {}
  }, []);
  // const productDelete = useSelector((state) => state.productDelete);
  // const {
  //   loading: loadingDelete,
  //   success: successDelete,
  //   error: errorDelete,
  // } = productDelete;
  // const dispatch = useDispatch();


  const openModal = (product) => {
    setModalVisible(true);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImageUrl(product.imageUrl);
    setCountInStock(product.countInStock);
    setCategory(product.category);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        id: id,
        name,
        price,
        imageUrl,
        countInStock,
        description,
        parent
      })
    );
    setModalVisible(false);
    //setUpdate(!update);
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product.id));
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    setImageUrl(file);
    // const bodyFormData = new FormData();
    // bodyFormData.append('image', file);
    // setUploading(true);
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
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Create Product</h2>
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
                  onChange={(e) => {setName(e.target.value)}}>
                </input>
              </li>
              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(Number(e.target.value))}
                ></input>
              </li>
              <li>
                <label htmlFor="image">Image</label>
                { <input type="file" onChange={uploadFileHandler}></input>} 
              </li>
              <li>
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(Number(e.target.value))}
                ></input>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="button">
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
              <th>Price</th>
              {/* <th>Category</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products ? products.map((product) => (
              <tr key={product.id}>
                <td>{product.data()['name']}</td>
                <td>{product.data()['price']}</td>
                {/* <td>{product.data()['category']}</td> */}
                <td>
                  <div className='buttons'>
                  <button className="button" onClick={() => openModal({...product.data(), id: product.id})}>
                    Edit
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(product)}
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
export default ProductsListScreen;