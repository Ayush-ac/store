import React from 'react';
import Slider from 'react-slick';
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StorePulseSlider = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button className="custom-prev">
                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-6" y="0" width="30" height="30">
                        <rect width="30" height="30" transform="matrix(4.37114e-8 -1 -1 -4.37114e-8 24 30)" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M4.75 15L12.25 22.5L14 20.75L8.25 15L14 9.25L12.25 7.5L4.75 15Z" fill="#3F78E0" />
                    </g>
                </svg>
            </button>
        ),
        nextArrow: (
            <button className="custom-next">
                <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.25 8L1.75 15.5L0 13.75L5.75 8L0 2.25L1.75 0.5L9.25 8Z"
                        fill="#3F78E0"
                    />
                </svg>
            </button>
        ),
        responsive: [
            {
              breakpoint: 768, // Mobile breakpoint
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,  // Optionally hide arrows on mobile
                // dots: true      // Show dots navigation on mobile
              }
            },
            {
              breakpoint: 1024, // Tablet breakpoint
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false
              }
            }
          ]
        

    };

    const images = [
        require('../assets/1-min.png'),
        require('../assets/2-min.png'),
        require('../assets/3-min.png'),
        require('../assets/4-min.png'),
        require('../assets/5-min.png'),
        require('../assets/6-min.png')
    ];


    return (
        <>
            <div className="custom-slider-container">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx}>
                            <img
                                src={img}
                                alt={`Slide ${idx + 1}`}
                                className="img-fluid"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default StorePulseSlider;
