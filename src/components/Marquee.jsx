import React, { useEffect, useState } from 'react';
import './marquee.css';

const Marquee = ({ images = [], direction = 'left', speed = 30 }) => {
  const [responsiveSpeed, setResponsiveSpeed] = useState(speed);

  // Detect screen width and update speed
  useEffect(() => {
    const updateSpeed = () => {
      const isMobile = window.innerWidth <= 768;
      setResponsiveSpeed(isMobile ? 10 : speed); // Faster on mobile
    };

    updateSpeed(); // Run once on mount
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, [speed]);

  const animationClass = direction === 'right' ? 'marquee-content-reverse' : 'marquee-content';

  return (
    <div className="marquee-container">
      <div
        className={animationClass}
        style={{ animationDuration: `${responsiveSpeed}s` }}
      >
        {images.map((src, index) => (
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
