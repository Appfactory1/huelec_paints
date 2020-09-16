import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar.js';
import CustomButton from './CustomButton.jsx';
import './productCatagories.scss'
import {listCategories} from './Actions/productActions'


function ProductCategories(props) {
    const categoryDetail = useSelector(state => state.categoryDetail);
    const {categories} = categoryDetail;
    const userSignin = useSelector((state) => state.userSignin);
    const { user } = userSignin;
    console.log(user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategories());
        return () => {}
    }, [])
        return (
            <div>
                <NavBar />
                <div className = 'overall1'>
                <h1 className = 'header1'> Categories </h1>
                <div className = 'overview1'>
                    {!categories ? <div></div> :
                    categories.map(collection => {
                        return(
                            <div className='collection-item1' key={collection.id} >
                                <div
                                    className='image1'
                                    style={{
                                    backgroundImage: `url(${collection.data()['imageUrl']})`
                                    }}
                                />
                                <div className = 'collection-footer1'>
                                    <h3 className = 'name1'>{collection.data()['name']}</h3>
                                    <div className = 'count1'>{`Stock Available`}</div>
                                </div>
                                <CustomButton className='custom-button'
                                    onClick = {() => props.history.push(`products/${collection.id}`)}>
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

export default ProductCategories;