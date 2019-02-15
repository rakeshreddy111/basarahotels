import React, { Component } from 'react';
import w1 from '../images/wisdomresorts/w1.JPG';
import w2 from '../images/wisdomresorts/w2.JPG';
import w3 from '../images/wisdomresorts/w3.JPG';
import w4 from '../images/wisdomresorts/w4.JPG';
import w5 from '../images/wisdomresorts/w5.JPG';
import w6 from '../images/wisdomresorts/w6.JPG';
import w7 from '../images/wisdomresorts/w7.JPG';
import w8 from '../images/wisdomresorts/w8.JPG';
import w9 from '../images/wisdomresorts/w9.JPG';
import w10 from '../images/wisdomresorts/w10.JPG';
import ac1 from '../images/wisdomresorts/ac1.JPG';
import ac2 from '../images/wisdomresorts/ac2.JPG';
import ac3 from '../images/wisdomresorts/ac3.JPG';
import nac1 from '../images/wisdomresorts/nac1.JPG';
import nac2 from '../images/wisdomresorts/nac2.JPG';
import nac3 from '../images/wisdomresorts/nac3.JPG';
import $ from 'jquery';
import '../App.css';

class WisdomResorts extends Component {

  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }

  scroll(direction){
    let far = $( '.image-container' ).width()/2*direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate( { scrollLeft: pos }, 1000)
  }

    render() {
      return (
        <div>
        <br />
        <h3>Wisdom Resorts</h3>
        <br />

        <p style={{fontSize: '17px', marginLeft: '121px', marginRight: '121px'}}> Wisdom resorts located in pleasant environment with complete greenery and play area for children.
        Wisodom Resort is a perfect place to stay for devotees and travelers seeking utmost comfort and privacy on a visit to Basara.<br/>
        It is situated on the banks of the river Godhavari . Near to Godhavari Pushkarghat.
        It is 1.2 kms away from Sri Gnana Saraswati Devi temple and 2 kms from Basara railway station and 2 kms from Basara RTC Bus stand.

        Price Ranges from  <b>Rs:999 to 1699</b>. All rooms are hygienic and  equipped with Ac’s ,TV’s, geysers in affordable  price range with clean and hygienic bathrooms. We provide you neat and clean bedsheets.  <br/><br/></p>
        
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
            <img class="card-img-bottom" src={nac1} alt="Card image" style={{width:'100%'}}/>
            
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">AC Suite Double Occupancy - <br />&#x20B9; 1499</h5>
          </div>
            <img class="card-img-bottom" src={ac1} alt="Card image" style={{width:'100%'}}/>
          
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">Non-AC Suite Triple Occupancy - &#x20B9; 1199</h5>
          </div>
            <img class="card-img-bottom" src={nac2} alt="Card image" style={{width:'100%'}}/>
          
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">AC Suite Triple Occupancy <br />&#x20B9; 1699</h5>
          </div>
            <img class="card-img-bottom" src={ac2} alt="Card image" style={{width:'100%'}}/>
  
            <a href="#" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
        <div class="card-body">
          <h5 class="card-title">Non-AC Suite Quad Occupancy - &#x20B9; 1499</h5>
        </div>
          <img class="card-img-bottom" src={nac3} alt="Card image" style={{width:'100%'}}/>
        
          <a href="#" class="book">Book</a>
      </div>

      <div class="card" style={{width:'325px',height: '350px'}}>
        <div class="card-body">
          <h5 class="card-title">AC Suite Quad Occupancy <br />&#x20B9; 1999</h5>
        </div>
          <img class="card-img-bottom" src={ac3} alt="Card image" style={{width:'100%'}}/>

          <a href="#" class="book">Book</a>
      </div>

        <br />
        <h4 style={{marginLeft: '150px', textAlign: 'left'}}>Hotel Pics</h4> <br />
          <div className="wrapper">
            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="image-container">
                <img class="image-pics" src={w1} alt="" />
                <img class="image-pics" src={w2} alt="" />
                <img class="image-pics" src={w3} alt="" />
                <img class="image-pics" src={w4} alt="" />
                <img class="image-pics" src={w5} alt="" />
                <img class="image-pics" src={w6} alt="" />
                <img class="image-pics" src={w7} alt="" />
                <img class="image-pics" src={w8} alt="" />
                <img class="image-pics" src={w9} alt="" />
                <img class="image-pics" src={w10} alt="" />
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
         </div>

      </div>
      );
    }
  }
  
  export default WisdomResorts;