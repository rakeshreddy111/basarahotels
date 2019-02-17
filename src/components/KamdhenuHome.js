import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './FooterBar';
import Kamdhenu from './Kamdhenu';
import '../App.css';


class KamdhenuHome extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
            <Kamdhenu />
        <br />
        <Footer />
      </div>
    );
  }
}

export default KamdhenuHome;