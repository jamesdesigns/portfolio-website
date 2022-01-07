import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-4.mp4" autoPlay loop muted />
      <h1>Need a Website?</h1>
      <p>I design and sell websites that help you move forward.</p>
      <div className="hero-btns">
        <Button href="/" className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          HIRE ME
        </Button>
        
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH MY STORY <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default Hero
