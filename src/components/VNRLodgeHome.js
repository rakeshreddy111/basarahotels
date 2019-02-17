import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './FooterBar';
import VNRLodge from './VNRLodge';
import '../App.css';


class VNRLodgeHome extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
            <VNRLodge />
        <br />
        <Footer />
      </div>
    );
  }
}

export default VNRLodgeHome;