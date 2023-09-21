import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GlitchTextProps {
  text: string;
  isAnimating: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, isAnimating }) => {
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
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
                  letters.forEach((_, innerIndex) => {
                    const innerLetterRef = headingRef.current?.childNodes[
                      innerIndex
                    ] as HTMLElement;
                    if (innerLetterRef) {
                      gsap.set(innerLetterRef, { opacity: 1 });
                    }
                  });
                }
              },
            });

            glitchTimeline.to(letterRef, {
              duration: gsap.utils.random(0.075, 0.2),
              opacity: 0,
              ease: 'power1.inOut',
            });

            glitchTimeline.to(letterRef, {
              duration: gsap.utils.random(0.05, 0.075),
              opacity: 0,
              ease: 'power2.inOut',
            });

            glitchTimeline.set(letterRef, { opacity: 1 });

            animation.add(glitchTimeline, index * gsap.utils.random(0.05, 0.2));
          }
        });
      };

      animateGlitch();
    }
  }, [text, isAnimating]);

  return (
    <div className="glitch-text" ref={headingRef}>
      {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
};

export default GlitchText;
