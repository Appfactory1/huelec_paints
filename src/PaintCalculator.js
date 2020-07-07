import React from 'react';
import './PaintCalculator.css';
import NavBar from './components/NavBar.js';
import Main from './components/form/Main.js';
import PaintCalculator from './images/Paint-Calculator.jpg';
import Footer from './components/footer.js';

function Paintcalculator(){
    return(
        <div>
            <NavBar />
            <br />
            <img className="paintcalculator" src={PaintCalculator} alt="paintcalculator" />
            <br/>
            <div className="Content">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Paintcalculator;