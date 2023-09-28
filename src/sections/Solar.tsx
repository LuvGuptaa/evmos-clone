import { useEffect, useRef, useState } from "react";
import '../styles/solar.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [planet, setPlanet] = useState({ frame: 0 });


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) return;

        canvas.width = 616;
        canvas.height = 430;

        const frameCount = 22;
        const currentFrame = (index: number) =>
            `../../public/assets/composite-${(index + 1)
                .toString()
            }.webp`;

        const images: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                await img.decode(); // Wait for image to load
                images.push(img);
            }
            await Promise.all(images.map((img) => img.decode()));

            gsap.to(planet, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: "#sticky-section",
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 0.5,
                },
                onUpdate: render,
            });
        };

        const render = () => {
            if (!context) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[planet.frame], 0, 0);
        };

        loadImages();
        console.log(setPlanet({ frame: 0 }));
    }, [planet.frame]);

    return (
        <>
            <section id="sticky-section" className="solar">
                <div className="shape">
                    <svg viewBox="0 0 1440 134" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M526.7 123.1 407.3 9a32 32 0 0 0-22.1-9H0v134h1440v-2H548.8a32 32 0 0 1-22-8.9Z" fill="black"></path></svg>
                </div>
                <div className="solar-wrapper">
                    <div className="solar-grid">
                        <div className="solar-sticky">
                            <div className="solar-frame">
                                <canvas ref={canvasRef} className='solar-canvas'></canvas>
                            </div>
                        </div>
                        <aside className="solar-aside">
                            <div className="solar-box">
                                <div className="box-inner">
                                    <p className="box-title">EVM Extensions</p>
                                    <h4>Reach anywhere</h4>
                                    <p className="box-desc">
                                        Gives builders greater reach and users greater access to a rich ecosystem of decentralized applications.
                                    </p>
                                </div>
                                <div className="box-index">001</div>
                            </div>
                            <div className="solar-box">
                                <div className="box-inner">
                                    <p className="box-title">Evmos SDK (Coming Soon)</p>
                                    <h4>Step into the cross -chain portal</h4>
                                    <p className="box-desc">
                                    An innovative toolchain with easier-than-ever customization that makes it simple to launch new EVM blockchains.
                                    </p>
                                </div>
                                <div className="box-index">002</div>
                            </div>
                            <div className="solar-box">
                                <div className="box-inner">
                                    <p className="box-title">dApp Store (Coming Soon)</p>
                                    <h4>Streamline your experience </h4>
                                    <p className="box-desc">
                                    A one-stop, highly personalized access point to discover unique Web3 apps built on Evmos.
                                    </p>
                                </div>
                                <div className="box-index">003</div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}