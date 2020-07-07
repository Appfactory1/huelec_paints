import React, {Component} from 'react';
import SelectProduct from './SelectProduct.js';
import RoomMeasurements from './roomMeasurements.js';
import AllInfo from './AllInfo.js';

class Main extends Component{
    state = {
        step: 1,

        //step 1
        productType: '',
        productList: '',

        //step 2
        length: '',
        width: '',
        height: '',
        dwidth: '',
        dheight: '',
        wwidth: '',
        wheight: '',
    }

    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const {step, productType, productList, length, width, height, dwidth, dheight, wwidth, wheight} = this.state;
        if(step === 1)
            return (
            <SelectProduct 
                handleChange = {this.handleChange}
                nextStep = {this.nextStep}
                productType = {productType}
                productList = {productList}
            />);
        if(step === 2)
            return (
            <RoomMeasurements 
                handleChange = {this.handleChange}
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                length = {length}
                width = {width}
                height = {height}
                dwidth = {dwidth}
                dheight = {dheight}
                wwidth = {wwidth}
                wheight = {wheight}
            />);
        if(step === 3)
            return (
            <AllInfo 
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                productType = {productType}
                productList = {productList}
                length = {length}
                width = {width}
                height = {height}
                dwidth = {dwidth}
                dheight = {dheight}
                wwidth = {wwidth}
                wheight = {wheight}
            />
            );
    }

    render(){
        const {step} = this.state;
        return(
            <>
                <h2>Step {step} of 3</h2>
                {this.showStep()}
            </>
        );
    }
}

export default Main;