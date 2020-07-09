import React from 'react';
import {Product_Data} from './shopdata.js';
import './productDetail.scss'

const productDetail = props => {
    const cat = props.match.params.categoryid-1;
    const prod = props.match.params.productid-1;
    const detail = Product_Data[cat].items[prod];
    return(
        <div className='cover'>
            <div className = 'left'>
                <div
                    className='imagedetail'
                    style={{
                    backgroundImage: `url(${detail.imageUrl})`
                    }}
                />
            </div>
            <div className = 'right'>
                <h2 className='name'>
                    {detail.name}
                </h2>
                <div className='code'>
                    Code No. : 2292
                </div>
                <div className='description'>
                    {detail.description}
                </div>
            </div>
        </div>
    )
                    
}

export default productDetail;