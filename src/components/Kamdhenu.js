import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import k1 from '../images/kamdhenu/k1.JPG';
import k2 from '../images/kamdhenu/k2.JPG';
import k3 from '../images/kamdhenu/k3.JPG';
import k4 from '../images/kamdhenu/k4.JPG';
import Slider from "react-slick";
import '../App.css';

class Kamdhenu extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: false,
        variableWidth: false
      };

      return (
        <div>
        <br />
        <h3>Hotel Kamdhenu</h3>
        <br />

        <p style={{fontSize: '17px', marginLeft: '121px', marginRight: '121px'}}> Hotel Kamdenu is situated 250 mts away from the Gnana Saraswathi temple , 3 kms away from Basara
        Railway Station and 1 km away from Basara RTC Bus Stand.<br/>
        It provides you all types of rooms ranges from <b>Rs:999 to 1699</b>. ATM,shops and Tiffin’s centers are very near. <br/><br/></p>
        
        <p style={{fontSize: '17px', marginLeft: '197px', marginRight: '121px', textAlign: 'left'}}><b>Why to choose Kamadenu Hotel? </b></p><br/>
        
        <p style={{fontSize: '17px', marginLeft: '250px', marginRight: '121px', textAlign: 'left'}}>1. As it is near to temple you can find all shops tiffin centers and banks, atms in a walkable distance.<br/>
        2. Temple is in just walkable distance.<br/>
        3. Prices starts from Rs:999<br/>
        4. Thru solar power you will get hot water 24/7 <br/></p><br /><br />
        
        <h4 style={{marginLeft: '150px', textAlign: 'left'}}>Rooms</h4> <br />

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">Non-AC Suite Double Occupancy - &#x20B9; 999</h5>
          </div>
            <img class="card-img-bottom" src="http://www.bestwesternplusmeridian.com/Content/images/Queen-Room-o.jpg" alt="Card image" style={{width:'100%'}}/>
            
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">AC Suite Double Occupancy - <br />&#x20B9; 1499</h5>
          </div>
            <img class="card-img-bottom" src="http://www.bestwesternplusmeridian.com/Content/images/Queen-Room-o.jpg" alt="Card image" style={{width:'100%'}}/>
          
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">Non-AC Suite Triple Occupancy - &#x20B9; 1199</h5>
          </div>
            <img class="card-img-bottom" src="http://www.bestwesternplusmeridian.com/Content/images/Queen-Room-o.jpg" alt="Card image" style={{width:'100%'}}/>
          
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">AC Suite Triple Occupancy <br />&#x20B9; 1699</h5>
          </div>
            <img class="card-img-bottom" src="http://www.bestwesternplusmeridian.com/Content/images/Queen-Room-o.jpg" alt="Card image" style={{width:'100%'}}/>
  
            <a href="#" class="book">Book</a>
        </div>

        </div>
      );
    }
  }
  
  export default Kamdhenu;