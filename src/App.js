import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/ControlledCarousel';
import Footer from './components/FooterBar';
import HomeHotels from './components/HomeHotels';
import AboutUs from './components/AboutUs';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Carousel />
          <br />
          <AboutUs />
          <br />
          <HomeHotels />
          <Footer />
      </div>
    );
  }
}

export default App;
