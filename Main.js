 import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';
import admin from './admin1.png';
function Main() {
  return (
    

<div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <div className='image-container'>
        <img src={admin} alt="admin portal"/>
      </div>
    
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        </Button>
      </div>

    </div>
  )
}

export default Main
 
