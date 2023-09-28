import React, { useState, useEffect } from 'react'
import './styles/App.scss'
import Landing from './sections/Landing'
import Solar from './sections/Solar'
import Noise from '../public/assets/noise.png'
import Loading from './sections/Loading';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  useEffect(() => {

    window.scrollTo(0, 0)
    
    const assetUrls = [
      '../public/assets/noise.png',
      '../public/assets/logo.png',
      '../public/assets/purple-poster.png',
      '../public/assets/landing.mp4',
      '../public/assets/moon-dust.png',
      '../public/assets/planet.png',
      '../public/assets/solar-1.png',
      '../public/assets/solar-2.png',
      '../public/assets/solar-3.png',
      '../public/assets/solar-4.png',
      '../public/assets/solar-5.png',
      '../public/assets/waves.png',
      '../public/assets/composite-1.webp',
      '../public/assets/composite-2.webp',
      '../public/assets/composite-3.webp',
      '../public/assets/composite-4.webp',
      '../public/assets/composite-5.webp',
      '../public/assets/composite-6.webp',
      '../public/assets/composite-7.webp',
      '../public/assets/composite-8.webp',
      '../public/assets/composite-9.webp',
      '../public/assets/composite-10.webp',
      '../public/assets/composite-11.webp',
      '../public/assets/composite-12.webp',
      '../public/assets/composite-13.webp',
      '../public/assets/composite-14.webp',
      '../public/assets/composite-15.webp',
      '../public/assets/composite-16.webp',
      '../public/assets/composite-17.webp',
      '../public/assets/composite-18.webp',
      '../public/assets/composite-19.webp',
      '../public/assets/composite-20.webp',
      '../public/assets/composite-21.webp',
      '../public/assets/composite-22.webp',


      // Add more asset URLs here
    ];

    const totalAssets = assetUrls.length;
    let loadedAssets = 0;

    const handleAssetLoad = () => {
      loadedAssets++;
      const progress = (loadedAssets / totalAssets) * 100;
      setLoadingProgress(progress);

      if (loadedAssets === totalAssets) {
        setTimeout(() => {
          setLoadingProgress(100);
        }, 5000);
      }
    };

    assetUrls.forEach((assetUrl) => {
      const image = new Image();
      image.src = assetUrl;
      image.onload = handleAssetLoad;
      image.onerror = handleAssetLoad;
    });
  }, []);

  return (
    <React.Fragment>

      <AnimatePresence>
        <Loading key="loader" loadingProgress={loadingProgress} />
      </AnimatePresence>

      <div className='wrapper'>
        <img src={Noise} alt='' className='noise-foreground' />
        <Landing />
        <Solar />
      </div>

    </React.Fragment>
  )
}

export default App
