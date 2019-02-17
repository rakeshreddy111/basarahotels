import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './FooterBar';
import WisdomResorts from './WisdomResorts';
import '../App.css';


class WisdomResortsHome extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
            <WisdomResorts />
        <br />
        <Footer />
      </div>
    );
  }
}

export default WisdomResortsHome;