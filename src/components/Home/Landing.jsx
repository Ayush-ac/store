import { useEffect, useState } from 'react';
import Button from '../Global/Button';
import LandingExplore from '../../data/LandingExplore';
import stateicon from "../../assets/images/banner/state-icon.svg";
import cameraIcon from "../../assets/images/banner/state-icon-two.svg";
import IncdentIcon from "../../assets/images/banner/state-icon-three.svg";
import millionIcon from "../../assets/images/banner/state-icon-fourth.svg";
import OutletIcon from "../../assets/images/banner/state-icon-fivth.svg";
import RevenueIcon from "../../assets/images/banner/state-icon-sixth.svg";
import HygieneIcon from "../../assets/images/banner/state-icon-seventh.svg";
import RatingIcon from "../../assets/images/banner/state-icon-eigth.svg";
import Hygieneicon from "../../assets/images/banner/state-icon-ninth.svg";
import MarqueeSection from '../MarqueeSection';
import StorePulseSection from '../StorePulseSection';
import IndustriesCards from '../VideosSec/IndustriesCards';
import StorePulseSteps from '../Steps/StorePulseSteps';
import CertificationCards from '../Certification/CertificationCards';
import BrandShowcase from '../Authorities/BrandShowcase';
import Questions from '../Questions/Ques';
import Footer from '../Footer/Footer';
import Oneplace from '../Deals/Oneplace';
import TestimonialSlider from '../Deals/TestimonialSlider';
import GrowingBusiness from '../Deals/GrowingBusiness';
import HowStorepulseWorks from '../Steps/HowStorePulseWorks';
import mobilevd from '../../assets/images/vedios/storepulse-mobile.mp4'





const Landing = () => {
  const [indexes, setIndexes] = useState(
    LandingExplore.map(() => 0)
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % 3);
    }, 4600);

    return () => clearInterval(interval);
  }, []);

  const iconMap = {
    "Partners": stateicon,
    "Cameras Integrated": cameraIcon,
    "Incident Alerts": IncdentIcon,
    "Footfalls Analysed": millionIcon,
    "Outlets Monitored": OutletIcon,
    "Revenue Uptick": RevenueIcon,
    "Restaurants Secured": HygieneIcon,
    "Better Rating": RatingIcon,
    "Hygiene Adherence": Hygieneicon
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prevIndexes) =>
        prevIndexes.map((currentIdx, i) => {
          const totalTexts = LandingExplore[i].texts.length;
          return (currentIdx + 1) % totalTexts;
        })
      );
    }, 4600);

    return () => clearInterval(interval);
  }, []);

  return (<>
    <div
      className="landing"
      id="landing"
    >
     <video
        autoPlay
        loop
        muted
        playsInline
        className="landing-video-bg"
      >
        <source src="/assets/images/vedios/storepulse-vedio.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="mobilevid"
      >
        <source src= {mobilevd}/>
      </video>


      <div className='landing-overlay'></div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '20px 0',
          zIndex: 2,
        }}
      >
        <div className="container">

          <button className='mob-book-demo'>Book Demo</button>

          <div className="row">
            <div className="col-lg-12">



              <div className="landing__explore" style={{ marginBottom: '20px' }}>
                {LandingExplore.map(({ id, texts }, i) => {
                  const currentText = texts[indexes[i]];
                  const currentIcon = iconMap[currentText.itemTitle] || stateicon;

                  return (
                    <div className="landing__explore__item" key={id}>
                      <img className='currentIcon' src={currentIcon} alt={currentText.itemTitle} width={56} height={56} />
                      <div className="landing__explore__item__info">
                        <span className="landing__explore__item__number">{currentText.itemNumber}</span>
                        <span className="landing__explore__item__title">{currentText.itemTitle}</span>
                      </div>
                    </div>
                  );
                })}
                <div className="landing__explore__item ">
                  <Button
                    urlValue="https://calendly.com/d/cm5h-3hh-gvq/storepulse-demo-discovery-call"
                    valueText="Book Demo"
                    className="btn-url"
                    second={true}
                    btnCard={false}
                    thirdType={false}
                    fourthType={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="retail_box">
            <div className="retail_line">
              {[0, 1, 2].map(index => (
                <div
                  key={index}
                  className={`line ${index === activeIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="retail_tabs">
              <div className="tab">
                <h4>Retail</h4>
              </div>
              <div className="tab">
                <h4>F&B</h4>
              </div>
              <div className="tab">
                <h4>Manufacturing</h4>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <MarqueeSection />
    <StorePulseSection />
    <div id="industries"><IndustriesCards /></div>
    <HowStorepulseWorks />
    <div id="solutions"><Oneplace /></div>
    <CertificationCards />
    <TestimonialSlider />
    <BrandShowcase />
    <Questions />
    <GrowingBusiness />
    <Footer />


    {/* <Visit /> */}

    {/* <FirstFooter />
      
      //     <SecondFooter /> */}
  </>
  );
};


export default Landing
