import React, { useEffect, useState } from 'react';
import '../styles/loading.scss'
import { easeInOut, motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
interface LoadingProps {
  loadingProgress: number;
}

const Loading: React.FC<LoadingProps> = ({ loadingProgress }) => {

  const [loadingComplete, setLoadingComplete] = useState(false);
  const svgControl = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 2000);

    if (loadingComplete && loadingProgress === 100) {
      gsap.to('.loading-text', { opacity: 0, duration: .5});
      gsap.to('.loading-text-2', { opacity: 0, duration: .5, delay: .5 });

      svgControl.start({ y: 0 });
      gsap.to('.loading', {display: 'none', delay: 2})
      gsap.to('body', {height: 'fit-content', overflowY: 'scroll', overflowX: 'hidden' , delay: 2})
    }
  }, [loadingComplete, svgControl]);

  return (
    <div className="loading">
      <div className="loader-bg">
        <div className="loader-bg-up">
          <motion.svg
            className="svg-up"
            initial={{ y: '100%', opacity: 1 }}
            animate={svgControl}
            transition={{ duration: 1.5, delay: .5, ease: easeInOut }}
            height='70%'
            viewBox="0 0 1946 530" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M913.3 406.9 1032.7 521a32 32 0 0 0 22.1 8.9H1946V0H0v398h891.2a32 32 0 0 1 22 8.9Z" fill="black"></path></motion.svg>
        </div>
        <div className="loader-bg-down">
          <motion.svg
            className="svg-down"
            initial={{ y: '-100%', opacity: 1 }}
            animate={svgControl}
            transition={{ duration: 1.5, delay: .5, ease: easeInOut }}
            height='70%'
            viewBox="0 0 1946 530" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1032.7 123.1 913.3 9a32 32 0 0 0-22.1-9H0v530h1946V132h-891.2a32 32 0 0 1-22-8.9Z" fill="black"></path></motion.svg>
        </div>
      </div>
      <div className="loading-content">
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
        <div className="heading loading-text">
          LAUNCHING
        </div>
        <div className="loading-logo .loading-text-2">
          <svg className='loading-text-2' viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4.9c-7.3 2.8-8 9.9-10 13.2-2.2 3.4-7 5.2-6.3 7 .6 1.7 5.5-.2 9.3 1 3.9 1 9 5.9 16.4 3a13 13 0 0 0 7.6-7.7.6.6 0 0 0-.3-.8.6.6 0 0 0-.8.3 10.3 10.3 0 0 1-7.9 5.6 10.4 10.4 0 0 1-10.7-5.8l-.3-.7-.3-.8a122.7 122.7 0 0 1 19.4-7h.3a.4.4 0 0 1 .5.2v.3a12.4 12.4 0 0 1 .8 2.3.5.5 0 0 0 .5.2l2.9-1.6c3.2-2 5-3.7 4.6-4.6-.4-1-2.8-1-6.5-.3l-3.8.8-.8.2a91.1 91.1 0 0 0-11.3 3.7c-2.7 1-4.8 2-7 3a10.2 10.2 0 0 1 4.5-8.6 10.4 10.4 0 0 1 9.6-1.1.6.6 0 0 0 .7-.2.6.6 0 0 0-.2-1A13 13 0 0 0 16.4 1Z" fill="#fff4e1"></path><defs><rect width="42.1" height="26" fill="#fff4e1"></rect></defs></svg>
        </div>
        <div className="loading-progress loading-text">
          {loadingProgress.toFixed(0)}
        </div>
      </div>
    </div>
  )
}

export default Loading