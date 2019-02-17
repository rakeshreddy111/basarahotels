import React, { Component } from 'react';

import '../App.css';

class FooterBar extends Component {
    render() {
      return (
        <footer class="page-footer font-small blue-grey lighten-5">

            <div class="background">
                <div class="container">
                    <div class="row py-4 d-flex align-items-center">
                        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 class="mb-0">Get connected us on social networks!</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-center text-md-left mt-5">
                <div class="row mt-3 dark-grey-text">
                    <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <h6 class="text-uppercase font-weight-bold">Hotels@BASARA</h6>
                        <p>Hotels at basara not only just provides you rooms we will try make your trip as a good memory. We
                        provide complete information about temple timings and local guidance.</p>
                    </div>
     
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Products</h6>
                        <p>
                            <a style={{color:'orangered'}} href="/Reserve">Reserve a Room</a>
                        </p>
                        <p>
                            <a style={{color:'orangered'}} href="/">Darshanam</a>
                        </p>
                        <p>
                            <a style={{color:'orangered'}} href="/">Tour Packages</a>
                        </p>
                    </div>
      
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
                        <p>
                        <a target="_blank" style={{color:'orangered'}} href="http://www.basaratemple.org/">About Basara</a>
                        </p>
                        <p>
                        <a target="_blank" style={{color:'orangered'}} href="https://www.holidayiq.com/Nizamabad-Sightseeing-663.html">Other places in Nizamabad</a>
                        </p>
                        <p>
                        <a target="_blank" style={{color:'orangered'}} href="https://www.telanganatourism.gov.in/">Telangana Tourism</a>
                        </p>
                        <p>
                        <a target="_blank" style={{color:'orangered'}} href="http://www.incredibleindia.com/">Incredible India</a>
                        </p>
                        
                    </div>
     
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase font-weight-bold">Contact</h6>
                        <p>
                            <i class="far fa-building mr-2"></i> Hyderabad, Telangana 500055, INDIA</p>
                        <p>
                            <i class="fa fa-envelope mr-2"></i> hotelsatbasara@gmail.com</p>
                        <p>
                            <i class="fa fa-phone mr-2"></i> + 91 7993886111</p>

                    </div>
                </div>
            </div>
    
            <div class="footer-copyright text-center text-black-50 py-3"><i class="far fa-copyright"></i> 2019 Copyright:
                <b>Hotels@BASARA</b>
            </div>
        </footer>
      );
    }
  }
  
  export default FooterBar;