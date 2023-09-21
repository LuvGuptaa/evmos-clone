import { useState, useEffect } from 'react';
import BgVideo from '../../public/assets/landing.mp4'
import BgImage from '../../public/assets/purple-poster.png'
import GlitchText from '../utils/GlitchText'
import '../styles/landing.scss'
export default function Landing() {
    const [headings, setHeadings] = useState<string[]>([
        'DEPLOY ONCE-',
        'ACCESS ALL ECOSYSTEMS',
    ]);
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) =>
                prevIndex === headings.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main className="landing">
                <div className="landing-background">
                    <img className='background-image' src={BgImage} alt='' />
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
                </div>
            </main>
        </>
    )
}