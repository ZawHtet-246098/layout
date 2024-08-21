// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <h2>LOGO</h2>
        </div>
        <div className="footer-section links">
          <div className="link-column">
            <ul>
              <li>Home</li>
              <li>Discovery</li>
              <li>Photos</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="link-column">
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>Terms</li>
              <li>Guidelines</li>
            </ul>
          </div>
          <div className="link-column">
            <ul>
              <li>Testimonials</li>
              <li>Advertise</li>
              <li>Integrations</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="footer-section subscribe">
          <div className="subscribe-box">
            <input type="email" placeholder="Email" />
            <button>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <p>Stay in touch with us for the freshest products!</p>
        </div>
        <div className="footer-section social-media">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fas fa-globe"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
