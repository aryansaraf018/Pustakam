import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Mumbai</li>
              <li>Nagpur</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>Our Mission</li>
              <li>Contact Us</li>
              <li>People</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Pustakam</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Enjoy Reading!</p>
        <p>Copyright © 2021</p>
      </div>
    </div>
  );
}

export default Footer;
