import React from 'react';
import Album from './components/album.js';
import NavBar from './components/NavBar.js';
import InteriorPaints from './components/interiorPaints.js';
import InspiringColors from './images/InspiringColors.jpg';
import Footer from './components/footer.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Album />
      <br />
      <br />
      <br />
      <img className="interior" src={InspiringColors} alt="InspiringColors" />
      <br />
      <InteriorPaints />
      <br />
      <Footer />
    </div>
  );
}

export default App;
