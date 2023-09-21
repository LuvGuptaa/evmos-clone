import React from 'react'
import './styles/App.scss'
import Landing from './sections/Landing'
import Noise from '../public/assets/noise.png'

function App() {

  return (
    <React.Fragment>
      <div className='wrapper'>
        <img src={Noise} alt='' className='noise-foreground' />
        <Landing />
      </div>
    </React.Fragment>
  )
}

export default App
