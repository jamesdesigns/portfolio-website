import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Portfolio() {
  return (
    <>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px' }}>Web Design Projects</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="https://vibrant-leavitt-33e7f0.netlify.app/" target="_blank"><img src="/images/flexbox-sample.jpg" alt="Flexbox Sample" width="350" height="250" /></a></div>
        <div className="img-card"></div>
        <div className="img-card"></div>
      </div>
      <div className="container-card">
        <div className="img-card"></div>
        <div className="img-card"></div>
        <div className="img-card"></div>
      </div>
      <div className="container-card-2">
        <div className="img-card"></div>
        <div className="img-card"></div>
        <div className="img-card"></div>
      </div>
    </section>
    <Footer />
    </>
    );
}