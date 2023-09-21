import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [prevText, setPrevText] = useState<string>('');

  useEffect(() => {
    if (text !== prevText) {
      setPrevText(text);

      const animateGlitch = () => {
        const animation = gsap.timeline({ repeat: 0 });
        const letters = text.split('');

        letters.forEach((_, index) => {
          const letterRef = headingRef.current?.childNodes[index] as HTMLElement;

          if (letterRef) {
            const glitchTimeline = gsap.timeline({
              repeat: 1,
              yoyo: true,
              onComplete: () => {
                if (index === letters.length - 1) {
                  setPrevText(text); // Update prevText when animation completes
                }
              },
            });

            // Smooth appear animation
            glitchTimeline.to(letterRef, {
              duration: gsap.utils.random(0.2, 0.4), // Smooth duration
              opacity: 0,
              ease: 'power1.inOut',
            });

            // Fast disappear animation
            glitchTimeline.to(letterRef, {
              duration: gsap.utils.random(0.05, 0.1), // Fast duration
              opacity: 1,
              ease: 'power1.inOut',
            });

            animation.add(glitchTimeline, index * gsap.utils.random(0.05, 0.2));
          }
        });
      };

      animateGlitch();
    }
  }, [text, prevText]);

  return (
    <div className="glitch-text" ref={headingRef}>
      {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
};

export default GlitchText;
