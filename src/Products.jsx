import React, { useEffect } from 'react';
import {Product_Data} from './shopdata.js';
import CustomButton from './CustomButton.jsx';
import {Checkmark} from 'react-checkmark';
import { FcCancel } from "react-icons/fc";
import NavBar from './components/NavBar.js';
import './product.scss'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './Actions/productActions.js';

function Product (props) {
    const productDetail = useSelector(state => state.productDetail);
    const {products} = productDetail;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(props.match.params.categoryid));
        return () => {}
    }, []);

    return(
        <div>
        <NavBar />
        <div className = 'overall'>
        <h1 className = 'header'> {/*products? products[0].data()['category'] : ""*/} </h1>
        <div className = 'overview'>
                {!products ? <div></div> : 
                products.map(products => {
                    return(
                        <div className='collection-item' key={products.id} >
                            <div
                                className='image'
                                style={{
                                backgroundImage: `url(${products.data()['imageUrl']})`
                                }}
                            >
                                <div className={products.data()['instock'] ?'instock':'outofstock'}> 
                                    {products.instock?<Checkmark className='checkmark' size={15} />:<div className='cross'>
                                            <FcCancel /> 
                                        </div>
                                    }
                                    {products.data()['instock']?<div>In stock</div> : <div>Out of stock</div>}
                                </div>
                            </div>
                            <div className = 'collection-footer'>
                                <h3 className = 'name'>{products.data()['name']}</h3>
                                <div className = 'price'>
                                    <div>Rs. {products.data()['price']}</div>
                                </div>
                            </div>
                            <CustomButton className='custom-button' 
                                onClick = {() => props.history.push(`${products.data()['parent']}/${products.id}`)}>
                                More Details
                            </CustomButton>
                        </div>
                    )
                })}
        </div>
        </div>
        </div>
    )
    // return (
    //     <div>hi</div>
    // )
}

export default Product;