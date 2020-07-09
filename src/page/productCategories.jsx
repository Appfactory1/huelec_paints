import React from 'react';
import NavBar from '../components/NavBar.js';
import {Product_Data} from './shopdata.js';
import CustomButton from './CustomButton.jsx';
import './productCatagories.scss'

class ProductCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList : Product_Data
        }
    }

    render () {
        return (
            <div>
                <NavBar />
                <div className = 'overall1'>
                <h1 className = 'header1'> Categories </h1>
                <div className = 'overview1'>
                    {this.state.productsList.map(collection => {
                        return(
                            <div className='collection-item1' key={collection.id} >
                                <div
                                    className='image1'
                                    style={{
                                    backgroundImage: `url(${collection.imageUrl})`
                                    }}
                                />
                                <div className = 'collection-footer1'>
                                    <h3 className = 'name1'>{collection.title}</h3>
                                    <div className = 'count1'>{`total items : ${collection.items.length}`}</div>
                                </div>
                                <CustomButton className='custom-button'
                                    onClick = {() => this.props.history.push(`${collection.id}`)}>
                                        More Products
                                </CustomButton>
                                </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCategories;