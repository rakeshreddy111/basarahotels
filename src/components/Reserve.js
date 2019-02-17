import React, { Component } from 'react';
import NavBar from './NavBar';
import Carousel from './ControlledCarousel';
import Footer from './FooterBar';
import '../App.css';

class Reserve extends Component {
  
    render() {
      return (
        <div>
        <NavBar />
        <br />
        <span style={{textAlign: 'center'}} class="contact100-form-title">
					Reserve a Room
				</span>
        <form name="contact" style={{width: '750px' , margin: '0 auto', textAlign: 'left'}} method="post">
          <input type="hidden" name="form-name" value="contact" />

        <div class="row">
				  <div class="col wrap-input100 rs1-wrap-input100 validate-input">
					  <span class="label-input100">First Name</span>
					    <input class="input100 mr-2" type="text" name="firstName" required="required"/>
					  <span class="focus-input100"></span>
				  </div>

				  <div class="col wrap-input100 rs1-wrap-input100 validate-input">
					  <span class="label-input100">Last Name</span>
					    <input class="input100 mr-2" type="text" name="lastName" required="required"/>
					  <span class="focus-input100"></span>
          </div>
        </div>

        <div class="row">
          <div class="col wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Email Address</span>
                <input class="input100" type="email" name="email" required="required"/>
              <span class="focus-input100"></span>
          </div>

          <div class="col wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Phone Number</span>
                <input class="input100" type="text" name="phoneNumber" required="required"/>
              <span class="focus-input100"></span>
          </div>
        </div>

        <div class="row">
          <div class="col wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Check-in Date</span>
                <input class="input100" type="date" name="checkinDate" required="required"/>
              <span class="focus-input100"></span>
          </div>

          <div class="col wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Check-out Date</span>
                <input class="input100" type="date" name="checkoutDate" required="required"/>
              <span class="focus-input100"></span>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Number of Rooms</span>
                <input class="input100" type="text" name="rooms" required="required"/>
              <span class="focus-input100"></span>
          </div>

          <div class="col-sm-4 wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Number of Adults</span>
                <input class="input100" type="text" name="adults" required="required"/>
              <span class="focus-input100"></span>
          </div>

          <div class="col-sm-4 wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Number of Children</span>
                <input class="input100" type="text" name="children" required="required"/>
              <span class="focus-input100"></span>
          </div>
        </div>

        <div class="col wrap-input100 rs1-wrap-input100 validate-input">
					  <span class="label-input100">Address</span>
					    <input class="input100" type="text" name="address" placeholder="1234 Main St" required="required"/>
					  <span class="focus-input100"></span>
        </div>

        <div class="col wrap-input100 rs1-wrap-input100 validate-input">
					  <span class="label-input100">Address 2</span>
					    <input class="input100" type="text" name="address2" placeholder="Apartment, studio, or floor"/>
					  <span class="focus-input100"></span>
        </div>

        <div class="row">
          <div class="col-sm-4 wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">City</span>
                <input class="input100" type="text" name="city" required="required"/>
              <span class="focus-input100"></span>
          </div>

          <div class="col-sm-4 wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">State</span>
                <input class="input100" type="text" name="state" required="required"/>
              <span class="focus-input100"></span>
          </div>

          <div class="col-sm-4 wrap-input100 rs1-wrap-input100 validate-input">
              <span class="label-input100">Zip</span>
                <input class="input100" type="text" name="zip" required="required"/>
              <span class="focus-input100"></span>
          </div>
        </div>

				<div style={{textAlign: 'center'}} class="container-contact100-form-btn" >
					<button class="contact100-form-btn">
						<span>
							Book &nbsp;&nbsp;&nbsp;&nbsp;
							<i class="fas fa-long-arrow-alt-right m-l-7" aria-hidden="true"></i>
						</span>
					</button>
				</div>
        </form>
        <br />
        <Footer />
        </div>
      );
    }
  }
  
  export default Reserve;