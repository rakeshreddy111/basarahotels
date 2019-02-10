import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/ControlledCarousel';
import Footer from './components/FooterBar';
import Hotel from './components/Hotel';
import SubmitForm from './components/SubmitForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="icon-bar">
      <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
      <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
      <a href="#" class="google"><i class="fa fa-google"></i></a> 
      <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
      <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
    </div>
          <NavBar />
          <Carousel />
          <Hotel />
          <Hotel />
          <Hotel />
          <SubmitForm />
          <Footer />
      </div>
    );
  }
}

export default App;
