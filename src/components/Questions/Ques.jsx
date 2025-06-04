import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import './ques.css';

export default function Questions() {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            $(carouselRef.current).slick({
                slidesToShow: 4.5,
                slidesToScroll: 4,
                infinite: false,
                arrows: true,
                dots: false,
                margin: 10,
                autoplay: true,
                autoplaySpeed: 1000,
                centerMode: false,
                prevArrow: '<button type="button" class="custom-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg></button>',
                nextArrow: '<button type="button" class="custom-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
        }

        return () => {
            if (carouselRef.current && $(carouselRef.current).hasClass('slick-initialized')) {
                $(carouselRef.current).slick('unslick');
            }
        };
    }, []);

    const questions = [
        {
            number: '01.',
            question: 'How can StorePulse boost sales and engagement?',
            answer: 'StorePulse helps you track customer movement, understand who they are, and identify why some visitors leave without purchasing. With these insights, you can optimize store layout, personalize promotions, and engage customers better.',
        },
        {
            number: '02.',
            question: 'What kind of offer does StorePulse offer?',
            answer: 'We offer full support, including setup assistance, training for your team, and ongoing technical support. Our team is available to help you every step of the way.',
        },
        {
            number: '03.',
            question: 'Do I need special equipment to use Storepulse?',
            answer: 'No, StorePulse works with your existing CCTV cameras. Our AI integrates seamlessly to transform them into advanced analytics tools, with no need for additional hardware.',
        },
        {
            number: '04.',
            question: 'Is there a free trial available?',
            answer: 'Yes! Contact us to learn more about our free trial options and explore StorePulse’s powerful features before committing.',
        },
        {
            number: '05.',
            question: 'Can StorePulse manage multiple store locations?',
            answer: 'Yes! StorePulse allows you to manage and monitor multiple store locations from a single dashboard, ensuring consistent performance and insights across all your stores.',
        },
        {
            number: '06.',
            question: 'How does StorePulse ensure data security and privacy?',
            answer: 'We take data security seriously. StorePulse uses end-to-end encryption and complies with industry standards to ensure your customer data is protected at all times.',
        },
        {
            number: '07.',
            question: 'How quickly can I see results from StorePulse?',
            answer: 'Most of our clients see improved footfall tracking, better store layout efficiency, and increased sales within just a few weeks of using StorePulse. Real-time data empowers you to make faster, smarter decisions.',
        },
        {
            number: '08.',
            question: 'How do I schedule a demo of StorePulse?',
            answer: 'You can easily schedule a personalized demo by clicking the "Book Demo" button at the top of the page or contacting us. Our team will tailor the demo to show you exactly how StorePulse can improve your store.',
        },
    ];

    return (
        <div className="faq-wrapper">
            <h4 className="faq-subheading">FREQUENTLY ASKED QUESTIONS</h4>
            <h2 className="faq-heading">Got Questions? We’ve Got You Covered.</h2>

            <div className="faq-carousel" ref={carouselRef}>
                {questions.map((item, index) => (
                    <div key={index} className="faq-card">
                        <h3 className="faq-number">{item.number}</h3>
                        <h4 className="faq-question">{item.question}</h4>
                        <div className='ans'>
                            <p className="faq-answer">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}