import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
import Ban from '../Banner/banner2 copy.jpg'

function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Fiction</span>
            <span>Sci-Fi</span>
            <span>Off-Beat</span>
            <span>Educational</span>
            <span>For Children</span>
            <span>Self-help</span>
            <span>Novels</span>
            <span>Mystery</span>
            <span>Horror</span>
            <span>Short Stories</span>
            <span>Music</span>

          </div>
        </div>
        <div className="banner">
        <img src={Ban} height={550} alt="Hello" />

        </div>
      </div>
      
    </div>
  );
}

export default Banner;
