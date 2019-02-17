import React, { Component } from 'react';
import NavBar from './NavBar';
import Carousel from './ControlledCarousel';
import Footer from './FooterBar';
import '../App.css';

class Contact extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
            <div class="contact">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-6">
                        <div class="contact_content">
                            <div class="contact_title"><h2 style={{textAlign: 'initial'}}>Get in touch</h2></div>
                            <div class="contact_list">
                                <ul style={{textAlign: 'initial'}}>
                                    <li>Hyderabad, Telangana, India - 500055</li>
                                    <li>+91 7993886111</li>
                                    <li>hotelsatbasara@gmail.com</li>
                                </ul>
                            </div>
                            <div class="contact_form_container">
                                <form class="contact_form" name="message" method="post">
                                   <input type="hidden" name="form-name" value="message" />
                                    <div class="row">
                                        <div class="col-md-6 input_container">
                                            <input type="text" class="contact_input" name="name" placeholder="Your name" required="required" />
                                        </div>
                                        <div class="col-md-6 input_container">
                                            <input type="email" class="contact_input" name="email" placeholder="Your email address" required="required"/>
                                        </div>
                                    </div>
                                    <div class="input_container"><input type="text" name="subject" class="contact_input" placeholder="Subject"/></div>
                                    <div class="input_container"><textarea class="contact_input contact_textarea" name="question" placeholder="Message" required="required">
                                    </textarea></div>
                                    <button class="send">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;