import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer-5-column">
      <div className="footer-container">
        <div className="footer-navbar-container">
          <div className="footer-company-details">
            <div className="footer-logo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#000" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
              </svg>
            </div>
            <div className="footer-content">
              <p>
                Frontend-Snippets is 100% free production-ready code snippets for front-end development.
                It offers a wide variety of code snippets for HTML, CSS, SCSS, and JavaScript. Make your
                Front-End Development 2X Faster.
              </p>
            </div>
           <div className="wrapper">
  <a href="https://www.facebook.com/" className="icon facebook">
    <div className="tooltip">Facebook</div>
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="#" className="icon twitter">
    <div className="tooltip">Twitter</div>
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.linkedin.com/" className="icon linkedin">
    <div className="tooltip">LinkedIn</div>
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com/" className="icon github">
    <div className="tooltip">GitHub</div>
    <i className="fab fa-github"></i>
  </a>
  <a href="https://www.youtube.com/" className="icon youtube">
    <div className="tooltip">YouTube</div>
    <i className="fab fa-youtube"></i>
  </a>
</div>

          </div>

          <div className="footer-navbar">
            <div className="footer-navbar-col">
              <h5>Solutions</h5>
              <ul>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Insight</a></li>
                <li><a href="#">Commerce</a></li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Support</h5>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">User Guides & Tutorials</a></li>
                <li><a href="#">Billing & Payments</a></li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News & Media</a></li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Legal</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Services</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Compliance & Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2023 Frontend-Snippets - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
