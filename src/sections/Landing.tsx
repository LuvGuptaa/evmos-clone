import React, { useState, useEffect } from 'react';
import BgVideo from '../../public/assets/landing.mp4';
import BgImage from '../../public/assets/purple-poster.png';
import GlitchText from '../utils/GlitchText';
import '../styles/landing.scss';

export default function Landing() {
  const [headings] = useState<string[]>([
    'DEPLOY ONCE-',
    'ACCESS ALL ECOSYSTEMS',
  ]);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) =>
        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [headings]);

  return (
    <>
      <main className="landing">
        <div className="landing-background">
          <img className="background-image" src={BgImage} alt="" />
          <video autoPlay loop muted className="background-video">
            <source src={BgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="landing-content">
          <div className="small-text small-text-1">
            <span>GO EVERYWHERE</span>
            <span>REACH EVERYWHERE</span>
          </div>
          <div className="small-text small-text-2">
            <span>GO EVERYWHERE</span>
            <span>REACH EVERYWHERE</span>
          </div>
          <div className="small-text small-text-3">
            <span>GO EVERYWHERE</span>
            <span>REACH EVERYWHERE</span>
          </div>
          <div className="heading">
            <GlitchText text={headings[currentHeadingIndex]} />
          </div>
          <div className="content-box">
            <GlitchText
              text="Evmos is the operating system for applications of the future."
            />
            <div className="content-buttons">
              <a
                href="/"
                className="cb cb-1"
                onMouseEnter={() => setIsAnimating(true)} // Start animation on hover
                onMouseLeave={() => setIsAnimating(false)} // Stop animation on hover out
              >
                <GlitchText text="Start Building" isAnimating={false} />
              </a>
              <a
                href="/"
                className="cb cb-2"
                onMouseEnter={() => setIsAnimating(true)} // Start animation on hover
                onMouseLeave={() => setIsAnimating(false)} // Stop animation on hover out
              >
                <GlitchText text="Read Manifesto" isAnimating={false} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
