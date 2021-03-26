import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://arktech-products.s3.amazonaws.com/LOB+Timelapse' autoPlay loop muted />
      <h1>Build your imagination</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;