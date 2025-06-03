import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar,faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Button from '../Global/Button';
import tbc from '../../assets/images/thumbnails/TBC.png'
import cantabil from '../../assets/images/thumbnails/cantabil.png'
import phl from '../../assets/phlLogo.png'

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const testimonials = [
  {
    name: 'TBC',
    title: 'Good service',
    review: `StorePulse has been a game changer for us. We deployed StorePulse at two of our outlets, to start with. With the live Hairnet Detection and Intelligent Delay Monitoring features, we have been able to comply with FSSAI guidelines and elevate our customer experience.`,
    avatar: tbc,
  },
  {
    name: 'Cantabil',
    title: 'Good service',
    review: `We are being able to uncover some really great growth opportunities with StorePulse powered cameras at four of our stores. Now we know accurately when we should put in more staff members, whether our store was opened and closed on time and a lot more.`,
    avatar: cantabil,
  },
  {
    name: 'PHL',
    title: 'Good service',
    review: `We were using guesswork to understand our customer segmentation and work on making our customer experience better. StorePulse did it for us - in fact, they are doing it for us every day in our stores. We are taking decisions with accurate data now`,
    avatar: phl,
  },
];

const TestimonialSection = () => {
 const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1, 
  arrows: true,
  // dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row">
            <div className="col-lg-4">
                    <div className="testimonial-title">
                        <span>USER TESTIMONIALS</span>
                        <h2>See Why Industry <br /> Leaders Trust StorePulse</h2>
                        <h2 className='mob'>See Why Industry  Leaders Trust StorePulse</h2>
                        <Button
                          urlValue="https://calendly.com/d/cm5h-3hh-gvq/storepulse-demo-discovery-call"
                          valueText="Book Demo"
                          className="btn-url"
                          second={false}
                          btnCard={false}
                          thirdType={false}
                          fourthType={true}
                        />
                    </div>
            </div>
            <div className="col-lg-8">
                    <div className="testimonial-slider mt-4 mt-md-0">
                    <Slider {...settings}>
                        {testimonials.map((t, i) => (
                        <div className="testimonial-card" key={i}>
                          <div className='testimonial-inner'>
                            
                             <div className="stars">
                              {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                  key={index}
                                  icon={faStar}
                                  className="star-icon"
                                />
                              ))}
                            </div>
                              <p>{t.review}</p>
                              <div className="testimonial-user">
                            <div className="avatar d-flex align-items-center gap-3">
                                <img className="rounded-circle" src={t.avatar} alt="user" width="50" height="50" />
                                <span>{t.name}</span>
                              </div>
                              </div>
                          </div>
                           
                        </div>
                        ))}
                    </Slider>
                    </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;