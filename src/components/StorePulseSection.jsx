import React from 'react';
import demoImage from '../assets/pnl-min.png'
import StorePulseSlider from './StorePulseSlider';
import './StorePulseSection.css';



const StorePulseSection = () => {
    return (
        <div className='container-fluid top-container '>
            <div className="container-fluid py-lg-5 custom-margin">
                <div className="row align-items-center ">
                    <div
                        className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-md-start align-items-center"
                        data-aos="fade-right"
                        style={{
                            // width: '426px',
                            // marginTop: '38px',
                            // marginLeft: '120px',
                            gap: '26px',
                        }}
                    >
                        <h2
                            className="custom-headinggg"
                        >
                            Introducing StorePulse
                        </h2>

                        <p className='custom-description'>
                            StorePulse is an AI-driven platform that transforms real-time video feeds into actionable insights, enhancing operational efficiency across retail, food & beverage, and manufacturing sectors.
                        </p>

                        <a href='https://calendly.com/d/cm5h-3hh-gvq/storepulse-demo-discovery-call'>


                        <button
                            className="btn btn-primary custom-button-storepulse"
                        >
                            
                            Book Demo
                        </button>
                        </a>

                    </div>



                    <div className="col-md-6" data-aos="fade-left">
                        <StorePulseSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StorePulseSection;
