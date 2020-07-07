import React, { Component } from 'react';

class AllInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {productType, productList, length, width, height, dwidth, dheight, wwidth, wheight} = this.props;

        return(
            <div className="div1">
                <h2>Here is the information you entered: </h2>
                Product Type: <b>{productType}</b><br />
                Product List: <b>{productList}</b><br />
                length(ft): <b>{length}</b><br />
                width(ft): <b>{width}</b><br />
                height(ft): <b>{height}</b><br />
                door width(ft): <b>{dwidth}</b><br />
                door height(ft): <b>{dheight}</b><br />
                window width(ft): <b>{wwidth}</b><br />
                window height(ft): <b>{wheight}</b><br />
                <button className="Back" onClick={this.back}>
                    Back 
                </button>
                <button className="Next" onClick={this.continue}>
                    Next 
                </button>
            </div>
        );
    }

}

export default AllInfo;