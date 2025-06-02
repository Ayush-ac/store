import React, { useEffect, useState } from 'react';
import './marquee.css';

const Marquee = ({ images = [], direction = 'left', speed = 10 }) => {
  const [responsiveSpeed, setResponsiveSpeed] = useState(speed);

  useEffect(() => {
    const updateSpeed = () => {
      const isMobile = window.innerWidth <= 768;
      setResponsiveSpeed(isMobile ? 2 : speed);
    };

    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, [speed]);

  const animationClass =
    direction === 'right' ? 'marquee-content-reverse' : 'marquee-content';

  return (
    <div className="marquee-container">
      <div
        className={animationClass}
        style={{ animationDuration: `${responsiveSpeed}s` }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            src={src}
            alt={`marquee-${index}`}
            className="marquee-image"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;