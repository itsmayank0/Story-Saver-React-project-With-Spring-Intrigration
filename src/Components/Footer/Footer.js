import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
function Footer() {
    return (

       <footer className="footer-section pt-5 m-0">
  <div className="container">
    
    <div className="footer-content">
      <div className="row">
        <div className="col-xl-8 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html"><img src="img/logotest.png" className="img-fluid" alt="logo" /></a>
            </div>
            <div className="footer-text">
              <p>Dg Stories is a place where you can capture all your memories, it is free to use tool.</p>
            </div>
            
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/register">register</Link></li>
              {/* <li><Link href="#">portfolio</Link></li> */}
            </ul>
          </div>
        </div> 
        {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            
          </div>
        </div> */}
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row text-center">
        <div className="col-xl-12 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>Copyright © 2021, All Right Reserved By Mayank</p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</footer>


    )
};

export default Footer;
