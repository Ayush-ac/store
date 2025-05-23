import React from 'react';
import './BrandShowcase.css';

import forbes from '../../assets/forbes.png';
import vorgue from '../../assets/vogue.png';
import outlook from '../../assets/outlook.png';
import dna from '../../assets/dna.png';
import indianexp from '../../assets/indianexp.png';
import gq from '../../assets/gq.png';
import toi from '../../assets/toi.png';
import tc from '../../assets/tc.png';
import yourstory from '../../assets/yourstory.png';

const BrandShowcase = () => {
  return (
    <div className="custom-container text-center  px-5">
      <div className="mb-3">
        <span className="verified-tag">VERIFIED BY INDUSTRY AUTHORITIES</span>
      </div>
      <h2 className="subtitlee">
        From The Minds Behind Brands Featured On
      </h2>

      {/* First Row */}
      <div className="first">
        <div className="col-auto"><img src={vorgue} alt="Vogue" className="brand-logo" /></div>
        <div className="col-auto"><img src={yourstory} alt="YourStory" className="brand-logo" /></div>
        <div className="col-auto"><img src={tc} alt="TechCrunch" className="brand-logo" /></div>
        <div className="col-auto"><img src={toi} alt="TOI" className="brand-logo" /></div>
        <div className="col-auto"><img src={forbes} alt="Forbes" className="brand-logo" /></div>
      </div>

      <div className="first-mob">
        <div className="col-auto"><img src={yourstory} alt="YourStory" className="brand-logo" /></div>
        <div className="col-auto"><img src={tc} alt="TechCrunch" className="brand-logo" /></div>
        <div className="col-auto"><img src={toi} alt="TOI" className="brand-logo" /></div>
      </div>

      {/* Second Row */}
      <div className="secondd">
        <div className="col-auto"><img src={gq} alt="GQ" className="brand-logo" /></div>
        <div className="col-auto"><img src={indianexp} alt="The Indian Express" className="brand-logo" /></div>
        <div className="col-auto"><img src={dna} alt="DNA" className="brand-logo" /></div>
        <div className="col-auto"><img src={outlook} alt="Outlook" className="brand-logo" /></div>
      </div>

      <div className="secondd-mob">
      <div className="col-auto"><img src={forbes} alt="Forbes" className="brand-logo" /></div>
        <div className="col-auto"><img src={outlook} alt="Outlook" className="brand-logo" /></div>
        <div className="col-auto"><img src={dna} alt="DNA" className="brand-logo" /></div>
      </div>
    </div>
  );
};

export default BrandShowcase;
