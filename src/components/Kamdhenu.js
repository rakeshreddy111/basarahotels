import React, { Component } from 'react';
import k1 from '../images/kamdhenu/k1.JPG';
import k2 from '../images/kamdhenu/k2.JPG';
import k3 from '../images/kamdhenu/k3.JPG';
import k4 from '../images/kamdhenu/k4.JPG';
import k5 from '../images/kamdhenu/k5.JPG';
import k6 from '../images/kamdhenu/k6.JPG';
import k7 from '../images/kamdhenu/k7.JPG';
import k8 from '../images/kamdhenu/k8.JPG';
import k9 from '../images/kamdhenu/k9.JPG';
import k10 from '../images/kamdhenu/k10.JPG';
import ac1 from '../images/kamdhenu/ac1.JPG';
import ac2 from '../images/kamdhenu/ac2.JPG';
import nac1 from '../images/kamdhenu/nac1.JPG';
import nac2 from '../images/kamdhenu/nac2.JPG';
import $ from 'jquery';
import '../App.css';

class Kamdhenu extends Component {
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
        <h3>Hotel Kamdhenu</h3>
        <br />

        <p style={{fontSize: '17px', marginLeft: '121px', marginRight: '121px'}}> Hotel Kamdenu is situated 250 mts away from the Gnana Saraswathi temple , 3 kms away from Basara
        Railway Station and 1 km away from Basara RTC Bus Stand.<br/>
        It provides you all types of rooms ranges from <b>Rs:999 to 1699</b>. ATM,shops and Tiffin’s centers are very near. <br/><br/></p>
        
        <p style={{fontSize: '1vw', marginLeft: '197px', marginRight: '121px', textAlign: 'left'}}><b>Why to choose Kamadenu Hotel? </b></p><br/>
        
        <p style={{fontSize: '1vw', marginLeft: '250px', marginRight: '121px', textAlign: 'left'}}>1. As it is near to temple you can find all shops tiffin centers and banks, atms in a walkable distance.<br/>
        2. Temple is in just walkable distance.<br/>
        3. Prices starts from Rs:999<br/>
        4. Thru solar power you will get hot water 24/7 <br/></p><br /><br />
        
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
            <h5 class="card-title">AC Suite Double Occupancy - <br />&#x20B9; 1499</h5>
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
            <h5 class="card-title">AC Suite Triple Occupancy <br />&#x20B9; 1699</h5>
          </div>
            <img class="card-img-bottom" src={ac2} alt="Card image" style={{width:'100%'}}/>
  
            <a href="/Reserve" class="book">Book</a>
        </div>
        <br />
        <h4 style={{marginLeft: '150px', textAlign: 'left'}}>Hotel Pics</h4> <br />
          <div className="wrapper">
            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="image-container">
                <img class="image-pics" src={k1} alt="" />
                <img class="image-pics" src={k2} alt="" />
                <img class="image-pics" src={k3} alt="" />
                <img class="image-pics" src={k4} alt="" />
                <img class="image-pics" src={k5} alt="" />
                <img class="image-pics" src={k6} alt="" />
                <img class="image-pics" src={k7} alt="" />
                <img class="image-pics" src={k8} alt="" />
                <img class="image-pics" src={k9} alt="" />
                <img class="image-pics" src={k10} alt="" />
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
         </div>
      </div>
      );
    }
  }
  
  export default Kamdhenu;