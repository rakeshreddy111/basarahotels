import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/ControlledCarousel';
import Footer from './components/FooterBar';
import Hotel from './components/Hotel';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Carousel />
          <Hotel />
          <Hotel />
          <Hotel />
          <Footer />
      </div>
    );
  }
}

export default App;
