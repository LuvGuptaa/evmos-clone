import { useState, useEffect } from 'react';
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
    const [onFirstButton, setOnFirstButton] = useState(false)
    const [onSecondButton, setOnSecondButton] = useState(false)
    const [headingEffect, setHeadingEffect] = useState(false);
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (headingEffect) {
                setHeadingEffect(false);
            } else {
                setHeadingEffect(true);
            }
            setTimeout(() => {
                setIsAnimationActive(true);
                const interval = setInterval(() => {
                    setCurrentHeadingIndex((prevIndex) =>
                        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
                    );
                    setIsAnimationActive(false);
                }, 3000);
                return () => clearInterval(interval);
            }, 3000); 
        }, 3000);

        return () => clearTimeout(timeout);
    }, [headings, headingEffect]);

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
                        <GlitchText text={headings[currentHeadingIndex]} isAnimating={isAnimationActive} />
                    </div>
                    <div className="content-box">
                        <GlitchText text="Evmos is the operating system for applications of the future." isAnimating={false} />
                        <div className="content-buttons">
                            <a href="/" className="cb cb-1" onMouseEnter={() => setOnFirstButton(true)} onMouseLeave={() => { setOnFirstButton(false) }}>
                                <GlitchText text="Start Building" isAnimating={onFirstButton ? true : false} />
                            </a>
                            <a href="/" className="cb cb-2" onMouseEnter={() => setOnSecondButton(true)} onMouseLeave={() => { setOnSecondButton(false) }}>
                                <GlitchText text="Read Manifesto" isAnimating={onSecondButton ? true : false} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
