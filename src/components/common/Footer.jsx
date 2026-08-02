import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3> IGDTUW Lost & Found</h3>
            <p>Helping students and staff reconnect with their belongings.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/report">Report Item</a>
              </li>
              <li>
                <a href="/view-items">View Items</a>
              </li>
            </ul>
          </div>

        <div className="footer-section">
  <h4>Contact Info</h4>

  <div className="contact-item">
    <span className="contact-icon">✉</span>
    <p>deansw@igdtuw.ac.in</p>
  </div>

  <div className="contact-item">
    <span className="contact-icon">☎</span>
    <p>011-23900221</p>
  </div>

  <div className="contact-item">
    <span className="contact-icon">📍</span>
    <p>Examination Block</p>
  </div>
</div>

          <div className="footer-section">
            <h4>Office Hours</h4>
<p>10:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday : Closed</p>
          </div>
        </div>

        
      </div>
      <div className="footer-bottom">
  <p>
    © 2026 IGDTUW Lost & Found.
    
    <br />
    All rights reserved.
  </p>
</div>
    </footer>
  );
};

export default Footer;
