import React from 'react';
import {Product_Data} from './shopdata.js';
import CustomButton from './CustomButton.jsx';
import {Checkmark} from 'react-checkmark';
import { FcCancel } from "react-icons/fc";
import './product.scss'

const product = props => {
    return(
        <div className = 'overall'>
        <h1 className = 'header'> Products </h1>
        <div className = 'overview'>
                {Product_Data[props.match.params.categoryid-1].items.map(products => {
                    return(
                        <div className='collection-item' key={products.id} >
                            <div
                                className='image'
                                style={{
                                backgroundImage: `url(${products.imageUrl})`
                                }}
                            >
                                <div className={products.instock?'instock':'outofstock'}> 
                                    {products.instock?<Checkmark className='checkmark' size={15} />:<div className='cross'>
                                            <FcCancel /> 
                                        </div>
                                    }
                                    {products.instock?<div>In stock</div> : <div>Out of stock</div>}
                                </div>
                            </div>
                            <div className = 'collection-footer'>
                                <h3 className = 'name'>{products.name}</h3>
                                <div className = 'price'>
                                    <div>Rs. {products.price}</div>
                                </div>
                            </div>
                            <CustomButton className='custom-button' 
                                onClick = {() => props.history.push(`${props.match.params.categoryid}/${products.id}`)}>
                                More Details
                            </CustomButton>
                        </div>
                    )
                })}
        </div>
        </div>
    )
}

export default product;