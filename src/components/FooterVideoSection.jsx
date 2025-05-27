import React from 'react';
import FooterVideo from '../assets/images/vedios/FooterVideo.MP4';
import FooterMobileVideo from '../assets/images/vedios/FooterMobile.mp4';

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
                <button className="get-started-btn">Get started</button>
            </div>

            <style>
                {`
                    .video-wrap {
                        position: relative;
                        height: 100dvh;
                        overflow: hidden;
                    }

                    .footer-video {
                        position: absolute;
                        left: 0;
                        width: 100vw;
                        height: 100dvh;
                        object-fit: cover;
                        z-index: 0;
                        pointer-events: none;
                    }

                    .desktop-video { display: block; }
                    .mobile-video { display: none; }

                    .overlay-content {
                        position: absolute;
                        top: 10%;
                        left: 50%;
                        transform: translate(-50%, -30%);
                        z-index: 2;
                        color: #1a2b6b;
                        text-align: center;
                    }

                    .overlay-content h1 {
                        font-size: 2.5rem;
                        font-weight: bold;
                    }

                    .overlay-content h1 span {
                        color: #2d63e0;
                    }

                    .get-started-btn {
                        margin-top: 1.5rem;
                        padding: 0.75rem 2rem;
                        font-size: 2.2rem;
                        font-weight: 600;
                        background-color: #2d63e0;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                        height: 64px;
                        width: 60%
                    }

                    .get-started-btn:hover {
                        background-color: #1a49b2;
                    }

                    @media (max-width: 768px) {
                        .video-wrap {
                            height: 60dvh;
                        }

                        .desktop-video {
                            display: none;
                        }

                        .mobile-video {
                            display: block;
                            top: -400px;
                            height: calc(100dvh + 100px);
                        }

                        .overlay-content {
                            top: 10%;
                            transform: translate(-50%, -25%);
                        }

                        .overlay-content h1 {
                            font-size: 1.8rem;
                        }

                        .get-started-btn {
                            font-size: 1rem;
                            padding: 0.6rem 1.5rem;
                            height: 30%;
                            width: 50%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default FooterVideoSection;
