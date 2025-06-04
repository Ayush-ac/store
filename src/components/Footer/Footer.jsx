import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container text-light py-5">
      <div className="container-custom ">
        <div className="row text-start">

          <div className="foot-div-1 col-md-4 mb-4">
            <h2 className="fw-bold foot-head">StorePulse</h2>
            <p>
              StorePulse turns your CCTV cameras into a smart analytics tool. Identify missed sales, <br />
              optimize customer flow, and drive conversions with AI-powered insights.
            </p>
          </div>


          <div className="foot-div-2  col-6 col-md-4 mb-4">
            <h5 className="fw-semibold ">Email</h5>
            <p className="mb-1">info@storepulse.ai</p>
            <p>sales@storepulse.ai</p>
          </div>

          <div className="foot-div-3 col-6 col-md-4 mb-4">
            <h5 className="">Address</h5>
            <p className="mb-1">23A, Shivaji Marg, Moti Nagar,</p>
            <p className="mb-1">Karampura Industrial Area,</p>
            <p>New Delhi, 110015</p>
          </div>
        </div>


        <hr className="border-top" />
        <p className="lasttext text-center">
          2024 @ StorePulse | Powered by Transline Technologies Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;