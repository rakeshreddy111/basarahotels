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
                        <p>Here you can use rows and columns here to organize your footer</p>
                    </div>
     
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Products</h6>
                        <p>
                            <a href="#!">MDBootstrap</a>
                        </p>
                        <p>
                            <a href="#!">MDWordPress</a>
                        </p>
                        <p>
                            <a href="#!">BrandFlow</a>
                        </p>
                        <p>
                            <a href="#!">Bootstrap Angular</a>
                        </p>
                    </div>
      
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
                        <p>
                        <a href="#!">About Basara</a>
                        </p>
                        <p>
                        <a href="#!">Other places in Nizamabad</a>
                        </p>
                        <p>
                        <a href="#!">Telangana Tourism</a>
                        </p>
                        <p>
                        <a href="#!">Incredible India</a>
                        </p>
                        
                    </div>
     
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase font-weight-bold">Contact</h6>
                        <p>
                        <i class="fa-building-o"></i> Hyderabad, Telangana 500055, INDIA</p>
                        <p>
                        <i class="fa-envelope mr-3"></i> contact@hotelsatbasara.com</p>
                        <p>
                        <i class="fa-phone mr-3"></i> + 91 9700 522 316</p>

                    </div>
                </div>
            </div>
    
            <div class="footer-copyright text-center text-black-50 py-3">© 2019 Copyright:
                Hotels@Basara
            </div>
        </footer>
      );
    }
  }
  
  export default FooterBar;