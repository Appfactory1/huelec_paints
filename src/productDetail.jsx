import React, { useEffect } from 'react';
import {Product_Data} from './shopdata.js';
import './productDetail.scss'
import NavBar from './components/NavBar.js';
import { fetchProduct } from './Actions/productActions.js';
import { useDispatch, useSelector } from 'react-redux';

function ProductDetail(props) {
    const prod = props.match.params.productid;
    const productDet = useSelector(state => state.productDet);
    const {product} = productDet;
    //product? console.log(product): console.log('nada');
    //const {products} = data;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct(prod));
        return () => {}
    }, [])
    return(!product ? <div></div> :
        <div>
        <NavBar />
        <div className='cover'>
            <div className = 'left'>
                <div
                    className='imagedetail'
                    style={{
                    backgroundImage: `url(${product['imageUrl']})`
                    }}
                />
            </div>
            <div className = 'right'>
                <h2 className='name'>
                    {product['name']}
                </h2>
                <div className='code'>
                    Code No. : 2292
                </div>
                <div className='description'>
                    {product['description']}
                </div>
            </div>
        </div>
        </div>
    )
                    
}

export default ProductDetail;