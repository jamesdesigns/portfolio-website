import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Portfolio() {
  return (
    <div>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px', marginTop: '90px' }}>Website Templates</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="/" target="_blank"><img src="" alt="Template 1" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 2" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 3" width="350" height="250" /></a></div>
      </div>
    </section>
    <Footer />
    </div>
    );
}