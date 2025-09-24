import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>Find<span>It</span></h2>
          <p>Your college’s official Lost & Found platform.</p>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#lost">Lost Items</a>
          <a href="#find">Found Items</a>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </div>

        {/* Right Section - Contact + Socials */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p><FaEnvelope /> support@findit.com</p>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://linkedin.com"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FindIt. All rights reserved.</p>
        <p>Made with ❤️ by Team FindIt</p>
      </div>
    </footer>
  );
};

export default Footer;
