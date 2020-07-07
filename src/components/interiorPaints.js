import React from 'react';
//import {Deck} from 'react-deck';
//import {Card} from 'react-card';
import './InteriorPaints.css';
import interior from '../images/interior.jpg';
import BedRoom from '../images/BedRoom.jpg';
import DiningRoom from '../images/DiningRoom.jpg';
import LivingRoom from '../images/LivingRoom.jpg';

function InteriorPaints(){
    return(
        <div>
            <img className="interior" src={interior} alt="interior" />
            <br />
            <div className="body">
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <a href="home"><img src={BedRoom} alt="BedRoom" /></a>
                        </div>
                        <div className="content">
                            <h2>Matt Emulsion</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Superior Emulsion</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={LivingRoom} alt="LivingRoom" />
                        </div>
                        <div className="content">
                            <h2>Superior Emulsion Special Shades</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Classic Emulsion</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Texture Finish</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Plastic Emulsion</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Matt Enamel</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Wall Sealer</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgbox">
                            <img src={DiningRoom} alt="DiningRoom" />
                        </div>
                        <div className="content">
                            <h2>Under Coat</h2>
                            <p>Matt emulsion is commonly used on walls and ceilings and often where the surface is uneven. It is a flat finish with a sheen level of less than 10%, therefore non-reflective in appearance.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default InteriorPaints;