import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Portfolio() {
  return (
    <>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px' }}>Design Projects</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="https://vibrant-leavitt-33e7f0.netlify.app/" target="_blank"><img src="/images/flexbox-sample.jpg" alt="Flexbox Sample" width="350" height="250" /></a></div>
        <div className="img-card"><a href="https://epic-shockley-7f65af.netlify.app/#" target="_blank"><img src="/images/ava-romero-website.jpg" alt="Real Estate Agent Website" width="350" height="250" /></a></div>
        <div className="img-card"><a href="https://artistjameshooper.com" target="_blank"><img src="/images/artistjameshooper-website.jpg" alt="Artist James Hooper Website" width="350" height="250" /></a></div>
      </div>
      <div className="container-card-2">
        <div className="img-card"><a href="https://5fbdf9e6c22f9d947029b895--agitated-payne-af112e.netlify.app/" target="_blank"><img src="/images/react-tip-calculator.jpg" alt="Tip Calculator" width="350" height="250" /></a></div>
        <div className="img-card"><a href="#" target="_blank"><img src="/images/validation-design-guide.jpg" alt="Validation Design Guide for Utah's Backcountry Website" width="350" height="250" /></a></div>
        <div className="img-card"></div>
      </div>
    </section>
    <Footer />
    </>
    );
}