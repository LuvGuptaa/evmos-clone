import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GlitchTextProps {
  text: string;
  isAnimating?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, isAnimating = true }) => {
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animateGlitch = () => {
      const animation = gsap.timeline({ repeat: 0 });

      const container = headingRef.current;
      if (!container) return; // Check if container is defined

      const letters = Array.from(container.childNodes) as HTMLElement[];

      letters.forEach((letterRef, index) => {
        if (letterRef) {
          const glitchTimeline = gsap.timeline({
            repeat: 1,
            yoyo: true,
            onComplete: () => {
              if (index === letters.length - 1) {
                // Animation completed
                // Ensure all letters have opacity 1 quickly
                gsap.to(letters, {
                  opacity: 1,
                  duration: 0.2, // Adjust the duration as needed
                });
              }
            },
          });

          // Smooth appear animation with variable duration
          glitchTimeline.to(letterRef, {
            duration: isAnimating ? gsap.utils.random(0.075, 0.2) : 0,
            opacity: 0,
            ease: 'power1.inOut',
          });

          // Fast disappear animation with variable duration
          glitchTimeline.to(letterRef, {
            duration: isAnimating ? gsap.utils.random(0.05, 0.075) : 0,
            opacity: 0,
            ease: 'power2.inOut',
          });

          // Ensure opacity is set to 1 when the animation starts
          glitchTimeline.set(letterRef, { opacity: isAnimating ? 1 : 0 });

          animation.add(glitchTimeline, index * gsap.utils.random(0.05, 0.2));
        }
      });
    };

    animateGlitch();
  }, [text, isAnimating]);

  return (
    <div className={`glitch-text ${isAnimating ? 'animating' : ''}`} ref={headingRef}>
      {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
};

export default GlitchText;
