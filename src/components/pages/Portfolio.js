import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Portfolio() {
  return (
    <>
    <h1 className="portfolio" style={{fontSize: '45px' }}>PORTFOLIO</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><img src="/images/flexbox-sample.jpg" alt="Flexbox Sample" width="350" height="250" /></div>
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