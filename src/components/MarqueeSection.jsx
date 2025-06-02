// components/MarqueeSection.jsx
import React from 'react';
import Marquee from "./Marquee"
import cobb from '../assets/cobb-min.png'
import columbia from '../assets/columbia-min.png'
import pnl from '../assets/pnl-min.png'
import spicejet from '../assets/spicejet-min.png'
import tbc from '../assets/tbc.png'
import ctbl from '../assets/ctbl.png'
import './MarqueeSection.css';

const MarqueeSection = () => {
  const topImages = [
    spicejet, pnl, columbia, cobb, tbc, ctbl, spicejet, pnl, columbia, cobb, tbc, ctbl,
  ];

  const bottomImages = [
    columbia, spicejet, pnl, tbc, cobb, ctbl, columbia, spicejet, pnl, tbc, cobb, ctbl,
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
