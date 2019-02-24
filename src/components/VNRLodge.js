import React, { Component } from 'react';
import v1 from '../images/vnrlodge/v1.JPG';
import v2 from '../images/vnrlodge/v2.JPG';
import v3 from '../images/vnrlodge/v3.JPG';
import v4 from '../images/vnrlodge/v4.JPG';
import v5 from '../images/vnrlodge/v5.JPG';
import v6 from '../images/vnrlodge/v6.JPG';
import v7 from '../images/vnrlodge/v7.JPG';
import ac1 from '../images/vnrlodge/ac1.JPG';
import ac2 from '../images/vnrlodge/ac2.JPG';
import nac1 from '../images/vnrlodge/nac1.JPG';
import nac2 from '../images/vnrlodge/nac2.JPG';
import $ from 'jquery';
import '../App.css';

class VNRLodge extends Component {

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
        <h3>VNR Lodge</h3>
        <br />

        <p style={{fontSize: '17px', marginLeft: '121px', marginRight: '121px'}}> It is just 100 mts away from temple, 3 kms away from Basara Railway Station and 1 km away from Basara RTC Bus Stand.<br/>
        Price ranges from  <b>Rs: 999 to 1999</b>. </p>
        
        <p style={{fontSize: '1vw', marginLeft: '197px', marginRight: '121px', textAlign: 'left'}}><b>Why to choose VNR Lodge? </b></p><br/>
        
        <p style={{fontSize: '1vw', marginLeft: '250px', marginRight: '121px', textAlign: 'left'}}>1. It is a new construction.<br/>
        2. It has all brand new ac’s tv’s ,geysers and new beds.<br/>
        3. With in 1 min you can find all shops like Tiffin centers , ATMS, etc.<br/></p>
    
        
        <h4 style={{marginLeft: '150px', textAlign: 'left'}}>Rooms</h4> <br />

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">Non-AC Suite Double Occupancy - &#x20B9; 999</h5>
          </div>
            <img class="card-img-bottom" src={nac1} alt="Card image" style={{width:'100%'}}/>
            
            <a href="/Reserve" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">AC Suite Double Occupancy - <br />&#x20B9; 1599</h5>
          </div>
            <img class="card-img-bottom" src={ac1} alt="Card image" style={{width:'100%'}}/>
          
            <a href="/Reserve" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">Non-AC Suite Triple Occupancy - &#x20B9; 1199</h5>
          </div>
            <img class="card-img-bottom" src={nac2} alt="Card image" style={{width:'100%'}}/>
          
            <a href="/Reserve" class="book">Book</a>
        </div>

        <div class="card" style={{width:'325px',height: '350px'}}>
          <div class="card-body">
            <h5 class="card-title">AC Suite Triple Occupancy <br />&#x20B9; 1999</h5>
          </div>
            <img class="card-img-bottom" src={ac2} alt="Card image" style={{width:'100%'}}/>
  
            <a href="/Reserve" class="book">Book</a>
        </div>

        <br />
        <h4 style={{marginLeft: '150px', textAlign: 'left'}}>Hotel Pics</h4> <br />
          <div className="wrapper">
            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="image-container">
                <img class="image-pics" src={v1} alt="" />
                <img class="image-pics" src={v2} alt="" />
                <img class="image-pics" src={v3} alt="" />
                <img class="image-pics" src={v4} alt="" />
                <img class="image-pics" src={v5} alt="" />
                <img class="image-pics" src={v6} alt="" />
                <img class="image-pics" src={v7} alt="" />
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
         </div>

        </div>
      );
    }
  }
  
  export default VNRLodge;