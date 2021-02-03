import React from 'react'
import '../App.css'
import { Button } from './Button'
import HeroSection from './HeroSection.css'

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>HIRE ME.</h1>
      <p>I design websites and logos that help you stand out from the competition.</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          HIRE ME
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default Hero
