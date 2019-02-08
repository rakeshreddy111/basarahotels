import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';

class ControlledCarousel extends Component {
    render() {
      return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://images7.alphacoders.com/411/411820.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://images.alphacoders.com/541/541999.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://images8.alphacoders.com/528/528896.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
    }
  }
  
  export default ControlledCarousel;