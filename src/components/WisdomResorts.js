import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import k1 from '../images/kamdhenu/k1.JPG';
import k2 from '../images/kamdhenu/k2.JPG';
import k3 from '../images/kamdhenu/k3.JPG';
import k4 from '../images/kamdhenu/k4.JPG';
import Slider from "react-slick";
import '../App.css';

class WisdomResorts extends Component {
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
        <h3>Wisdom Resorts</h3>
        <br />

        <p style={{fontSize: '17px', marginLeft: '121px', marginRight: '121px'}}> Wisdom resorts located in pleasant environment with complete greenery and play area for children.
        Wisodom Resort is a perfect place to stay for devotees and travelers seeking utmost comfort and privacy on a visit to Basara.<br/>
        It is situated on the banks of the river Godhavari . Near to Godhavari Pushkarghat.
        It is 1.2 kms away from Sri Gnana Saraswati Devi temple and 2 kms from Basara railway station and 2 kms from Basara RTC Bus stand.

        Price Ranges from  <b>Rs:999 to 1699</b>. All rooms are hygienic and  equipped with Ac’s ,TV’s ‘ geysers in affordable  price range with clean and hygienic bathrooms. We provide you neat and clean bedsheets.  <br/><br/></p>
        
        <p style={{fontSize: '17px', marginLeft: '197px', marginRight: '121px', textAlign: 'left'}}><b>Why to choose Wisdom Resorts? </b></p><br/>
        
        <p style={{fontSize: '17px', marginLeft: '250px', marginRight: '121px', textAlign: 'left'}}>1. You can get any room because of affordable prie.<br/>
        2. Located in a present environment on the banks of the river godhavari.<br/>
        3. It is a perfect place to stay for devotees and travelers seeking utmost comfort and privacy on a visit to basara.<br/>
        4. It has a play are where your children can have a great time. <br/>
        5. Godhavari pushkar ghat Is just 1 min away by walking. <br/>
        6. It has ample place for parking. <br/></p><br /><br />
        
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
  
  export default WisdomResorts;