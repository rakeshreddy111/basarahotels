import React, { Component } from 'react';
import NavBar from './NavBar';
import Carousel from './ControlledCarousel';
import Footer from './FooterBar';
import WisdomResorts from './WisdomResorts';
import Kamdhenu from './Kamdhenu';
import VNRLodge from './VNRLodge';
import '../App.css';


class Hotels extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
            <WisdomResorts />
            <br />
            <Kamdhenu />
            <br />
            <VNRLodge />
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default Hotels;