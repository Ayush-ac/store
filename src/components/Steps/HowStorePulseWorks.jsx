import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal';
import './HowStorePulseWorks.css'; // External CSS for cleaner JSX

const HowStorepulseWorks = () => {
    const progressRef = useRef(null);
    const stepCardsRef = useRef([]);
    const [stepIndex, setStepIndex] = useState(0);
    const wrapperRef = useRef(null);


    const goToStep = (index) => {
        setStepIndex(index);
        stepCardsRef.current.forEach((card, idx) => {
            if (card) {
                card.classList.toggle('active', idx === index);
            }
        });

        const stepPercent = ((index + 1) / stepCardsRef.current.length) * 100;
        if (progressRef.current) {
            progressRef.current.style.width = `${stepPercent}%`;
        }

        if (window.innerWidth <= 768 && wrapperRef.current) {
            const scrollTo = stepCardsRef.current[index]?.offsetLeft || 0;
            wrapperRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth',
            });
        }
    };


    useEffect(() => {
        ScrollReveal().reveal('.how-it-works', {
            duration: 1000,
            distance: '60px',
            origin: 'bottom',
            opacity: 0,
            interval: 200,
            easing: 'ease-in-out',
        });

        const totalSteps = stepCardsRef.current.length;
        let step = 0;

        const updateStep = () => {
            setStepIndex(step); // 👈 update stepIndex for dots
            stepCardsRef.current.forEach((card, idx) => {
                if (card) {
                    card.classList.toggle('active', idx === step);
                }
                if (window.innerWidth <= 768 && wrapperRef.current) {
                    const scrollTo = stepCardsRef.current[step]?.offsetLeft || 0;
                    wrapperRef.current.scrollTo({
                        left: scrollTo,
                        behavior: 'smooth',
                    });
                }

            });

            const stepPercent = ((step + 1) / totalSteps) * 100;
            if (progressRef.current) {
                progressRef.current.style.width = `${stepPercent}%`;
            }
            step = (step + 1) % totalSteps;
        };

        updateStep();
        const interval = setInterval(() => {
            if (progressRef.current) {
                progressRef.current.style.transition = 'width 0.6s linear';
            }
            updateStep();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="how-it-works py-5">
            <div className="my-5 mobile-container">
                <div className="text-center mb-5">
                    <h2 className="subtitle sub-effort">EFFORTLESS SETUP. POWERFUL INTELLIGENCE. REAL-TIME RESULTS.</h2>
                    <h1 className="title storepulseworks-title ">How StorePulse Works</h1>
                </div>

                <div className="steps-wrapper d-flex justify-content-between position-relative pb-5" ref={wrapperRef}>
                    {/* Animated Line */}
                    <div className="animated-line">
                        <div className="animated-progress" ref={progressRef}></div>
                    </div>

                    {/* Step Cards */}
                    {[
                        {
                            title: 'Seamless Integration',
                            desc: 'Use your existing camera systems—no new hardware needed.',
                        },
                        {
                            title: 'AI Engine Your Way',
                            desc: 'Pick a pre-trained model or deploy your own custom AI.',
                        },
                        {
                            title: 'Quick Camera Setup',
                            desc: 'Plug in and configure cameras within minutes—its that simple.',
                        },
                        {
                            title: 'Live Insights',
                            desc: 'View real-time analytics on operations, customers, and trends.',
                        },
                    ].map((step, index) => (
                        <div
                            className="step-card text-center"
                            key={index}
                            ref={(el) => (stepCardsRef.current[index] = el)}
                        >
                            <div className="step-number">{index + 1}</div>
                            <h5>{step.title}</h5>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="pagination-dots d-md-none">
                    {stepCardsRef.current.map((_, idx) => (
                        <span
                            key={idx}
                            className={stepIndex === idx ? 'active' : ''}
                            onClick={() => goToStep(idx)}
                            style={{ cursor: 'pointer' }}
                        ></span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowStorepulseWorks;
