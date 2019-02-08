import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons'; 
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
                            MAIL: <a href="#">contact@hotelsatbasara.com</a>
                        </div>

                        <div class="header-bar-text">
                            <p>PHONE: <span>+91 9700522316</span></p>
                        </div>
                    </div>

                    <div class="footer-social-icons">
						<h5 class="_10">Follow us on</h5>
                        <ul class="social-icons">
                        <SocialIcon class="social-icon" url="http://twitter.com/jaketrent" />
                        <SocialIcon class="social-icon" url="https://plus.google.com/u/0/+RakeshReddy11?tab=wX" />
                        
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
							<li></li>
							<li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
							<li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
							<li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
							<li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
							<li><a href="" class="social-icon"> <i class="fa fa-google-plus"></i></a></li>
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
                           <a class="d-block" href="index.html" rel="home"><img class="d-block" src="images/logo.png" alt="logo"/></a>
                        </div>

                        <nav class="site-navigation d-flex justify-content-end align-items-center">
                            <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                <li class="current-menu-item"><a href="index.html">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="causes.html">Hotels</a></li>
                                <li><a href="news.html">Terms</a></li>
                                <li><a href="contact.html">Contact</a></li>
								<li></li>
                            </ul>
                        </nav>
						
						<a class="reserve" href="portfolio.html">BOOK NOW</a>

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