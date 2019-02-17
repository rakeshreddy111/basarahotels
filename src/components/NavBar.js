import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';

class NavBar extends Component {
    render() {
      return (
        <div>
        <header class="site-header">
        <div class="top-header-bar">
            <div class="container">
                <div class="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                    <div class="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                        <div class="header-bar-email">
                            MAIL: <a href="/">hotelsatbasara@gmail.com</a>
                        </div>

                        <div class="header-bar-text">
                            PHONE: <span>+91 7993886111</span>
                        </div>
                    </div>

                    <div class="footer-social-icons">
						<h5 class="_10">Follow us on</h5>
                        <ul class="social-icons">
                            <li></li>
                            <li><a href="" class="social-icon"> <i class="fab fa-facebook-f"></i></a></li>
							<li><a href="" class="social-icon"> <i class="fab fa-twitter"></i></a></li>
                            <li><a href="" class="social-icon"> <i class="fab fa-google-plus-g"></i></a></li>
                            <li><a href="" class="social-icon"> <i class="fab fa-youtube"></i></a></li>
                            <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
						</ul>
					</div>
                </div>
            </div>
		</div>

		 <div class="nav-bar">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div class="site-branding d-flex align-items-center">
                           <a class="d-block" href="/" rel="home"><img class="d-block" src={logo} alt="logo"/></a>
                        </div>

                        <nav class="site-navigation d-flex justify-content-end align-items-center">
                            <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                <li class="current-menu-item"><a href="/">Home</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/Hotels">Hotels</a></li>
                                <li><a href="/">Terms</a></li>
                                <li><a href="/Contact">Contact</a></li>
								<li></li>
                            </ul>
                        </nav>
						
						<a class="reserve" href="/Reserve">BOOK NOW</a>

                        <div class="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>
      );
    }
  }
  
  export default NavBar;