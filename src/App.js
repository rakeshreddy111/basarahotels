import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/ControlledCarousel';
import Footer from './components/FooterBar';
import HomeHotels from './components/HomeHotels';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Carousel />
          <br />
          <h2>About Us</h2>
          <br />
          <div class="container">
          Hotels at Basara provides you different kinds of hotel rooms for you stay in Basara.
          We are in collaboration with all kinds hotels in basara. We have Premium and Budget hotels.
          We provide you best stay in basara and make your trip one of the best memories.    
          </div>
          <br />
          <HomeHotels />
          <Footer />
      </div>
    );
  }
}

export default App;
