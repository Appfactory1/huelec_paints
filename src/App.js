import React from 'react';
import Album from './components/album.js';
import NavBar from './components/NavBar.js';
import InteriorPaints from './components/interiorPaints.js';
import InspiringColors from './images/InspiringColors.jpg';
import Footer from './components/footer.js';
import {auth} from './Firebaseapp/firebase.utils'
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      if(this.state.currentUser){
        console.log('signin');
        
        
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
