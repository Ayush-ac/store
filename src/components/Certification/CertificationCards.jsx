import React from 'react';
import './CertificationCards.css';
import isoIcon from '../../assets/iso.png'; 
import cmmi from '../../assets/cmmi.png'; 

const certifications = [
  { title: 'ISO/IEC 27001:2013', type: 'ISO' },
  { title: 'CMMI Maturity Level 5', type: 'CMMI' },
  { title: 'ISO 9001:2015', type: 'ISO' },
  { title: 'ISO 14001:2015', type: 'ISO' },
  { title: 'ISO/IEC 20000-1:2018', type: 'ISO' },
];

const CertificationCards = () => {
  return (
    <section className="text-center  sec-cert ">
      <div className="container-fluid">
      <div className="titlee">VERIFIED BY INDUSTRY AUTHORITIES</div>
      <h2 className="head">Our Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <div key={index} className="col-4 col-sm-4 col-md-2 mb-4">
            <div className="cert-card hover-effect">
              
              <img src={ index === 1? cmmi : isoIcon} alt={`${cert.type} badge`} className="cert-icon" />
              <div className="cert-title">{cert.title}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CertificationCards;
