import React, {Component} from 'react';

class roomMeasurements extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {handleChange, length, width, height, dwidth, dheight, wwidth, wheight} = this.props;
        return(
            <div className="div1">
                <h2>Room Measurements</h2>
                <label>
                    <input
                        type="text"
                        name="length"
                        placeholder="Length(ft)"
                        value={length}
                        onChange={handleChange('length')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="width"
                        placeholder="Width(ft)"
                        value={width}
                        onChange={handleChange('width')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="height"
                        placeholder="Height(ft)"
                        value={height}
                        onChange={handleChange('height')}
                    />
                </label>

                <h4>Doors</h4>
                <label>
                    <input
                        type="number"
                        name="dwidth"
                        placeholder="Width(ft)"
                        value={dwidth}
                        onChange={handleChange('dwidth')}
                    />
                    <input
                        type="number"
                        name="dheight"
                        placeholder="Height(ft)"
                        value={dheight}
                        onChange={handleChange('dheight')}
                    />
                </label>
                <br />
                <h4>Windows</h4>
                <label>
                    <input
                        type="number"
                        name="wwidth"
                        placeholder="Width(ft)"
                        value={wwidth}
                        onChange={handleChange('wwidth')}
                    />
                    <input
                        type="number"
                        name="wheight"
                        placeholder="Height(ft)"
                        value={wheight}
                        onChange={handleChange('wheight')}
                    />
                </label>
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

export default roomMeasurements;