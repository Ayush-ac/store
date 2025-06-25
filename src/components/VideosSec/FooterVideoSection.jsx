import FooterVideo from '../../assets/images/vedios/FooterVideo.MP4';
import FooterMobileVideo from '../../assets/images/vedios/FooterMobilee.mp4';
import './FooterVideSection.css'

const FooterVideoSection = () => {
    return (
        <div className="video-wrap position-relative w-100">
            {/* Desktop Video */}
            <video
                className="footer-video desktop-video w-100"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={FooterVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mobile Video */}
            <video
                className="footer-video mobile-video w-100"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={FooterMobileVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="overlay-content">
                <h1>Let's <span>Start Growing</span> Your Business.</h1>
                <a href="https://calendly.com/d/cm5h-3hh-gvq/storepulse-demo-discovery-call" style={{color:'white'}}><button className="get-started-btn">Get started</button></a>
            </div>

        </div>
    );
};

export default FooterVideoSection;
