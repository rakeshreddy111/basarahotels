import React, { Component } from 'react';
import '../App.css';


class AboutUs extends Component {
  render() {
    return (
      <div className="App">
      <h2>About Us</h2>
      <br />
      <div class="container">
      Hotels at Basara provides you different kinds of hotel rooms for you stay in Basara.
      Hotels at Basara is in collaboration with all kinds hotels in basara and provides you with best possible rates. We have Premium and Budget hotels.
      We provide you best stay in basara and make your trip one of the best memories.   
      </div>  
      <div id="wrapper3">
            <div id="portfolio" class="container">
                <div class="title">
                    <h2>Why Choose Us?</h2> 
                </div>
                  <div class="column1">
                      <div class="box">
                          <span class="icon fas fa-rupee-sign"></span>
                          <h3><b>Best Rates</b></h3>
                          <p>Book through us and get best rates possible.</p>
                        </div>
                  </div>
                  <div class="column2">
                      <div class="box">
                <span class="icon fas fa-plane-departure"></span>
                <h3><b>Tour Packages</b></h3>
                <p>Not just hotel booking, Hotels at Basara also offer tour packages. Contact us to know more.</p>
              </div>
            </div>
                  <div class="column3">
                      <div class="box">
                <span class="icon fas fa-hotel"></span>
                <h3><b>Wide range of Hotels</b></h3>
                <p>Hotels at Basara are in the collaboration with the local hotels and provide tourists with wide range of options.</p>
              </div>
            </div>
                  <div class="column4">
                      <div class="box">
                <span class="icon fas fa-gopuram"></span>
                <h3><b>Darshanam</b></h3>
                <p>We also offer free assistance during Darshanam.</p>
                  </div>
              </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutUs;