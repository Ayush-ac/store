// components/MarqueeSection.jsx
import React from 'react';
import Marquee from "./Marquee"
import cobb from '../assets/cobb-min.png'
import columbia from '../assets/columbia-min.png'
import pnl from '../assets/pnl-min.png'
import spicejet from '../assets/spicejet-min.png'
import './MarqueeSection.css';

const MarqueeSection = () => {
  const topImages = [
    spicejet, pnl, columbia, cobb, columbia, spicejet, pnl, columbia, cobb, columbia
  ];

  const bottomImages = [
    columbia, spicejet, pnl, columbia, cobb, columbia, spicejet, pnl, columbia, cobb,
  ];




  return (
    <div className="marquee-container container-fluid py-4 ">
      <h6 className='myText'
      >
        Our Partners
      </h6>
      <h6 className='responsiveHeading'
      >
        Trusted By Leading Brands
      </h6>


      <div style={{ marginTop: '2%' }}>
        <Marquee images={topImages} direction="left" />
      </div>
      <div className="hide-on-mobile" style={{ marginTop: '1%', marginBottom: '2%' }}>
        <Marquee images={bottomImages} direction="right" />
      </div>


    </div>
  );
};

export default MarqueeSection;
