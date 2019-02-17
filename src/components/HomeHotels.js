import React, { Component } from 'react';
import w1 from '../images/wisdomresorts/w1.JPG';
import k1 from '../images/kamdhenu/k1.JPG';
import v1 from '../images/vnrlodge/v1.JPG';
import '../App.css';

class HomeHotels extends Component {
  render() {
    return (
        <div className="Projects section flex-container">
        <div className="item">
          <img src={w1} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3 style={{color:'orangered'}}>Wisdom Resorts</h3>
              <h6>Prices start form &#x20B9; 999</h6>
              <p><a href="/WisdomResorts" rel="noopener noreferrer">Know more and Book</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={k1} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3 style={{color:'orangered'}}>Kamdhenu Hotel</h3>
              <h6>Prices start form &#x20B9; 999</h6>
              <p><a href="/Kamdhenu" rel="noopener noreferrer">Know more and Book</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={v1} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3 style={{color:'orangered'}}>VNR Lodge</h3>
              <h6>Prices start form &#x20B9; 999</h6>
              <p><a href="/VNRLodge" rel="noopener noreferrer">Know more and Book</a></p>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default HomeHotels;