import React, {Component} from 'react';

class SelectProduct extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const {handleChange, productType, productList} = this.props;
        return(
            <div className="div1">
                <h2>Select Product</h2>
                <label>
                    <input
                        type="text"
                        name="productType"
                        placeholder="Product Type"
                        value={productType}
                        onChange={handleChange('productType')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="productList"
                        placeholder="Product List"
                        value={productList}
                        onChange={handleChange('productList')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next 
                </button>
            </div>
        );
    }
}

export default SelectProduct;