import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import '../App.css';

class ControlledCarousel extends Component {
    render() {
      return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={b1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hotels at Basara Provides you different kinds of rooms for you stay In basara.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={b2}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={b3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
    }
  }
  
  export default ControlledCarousel;