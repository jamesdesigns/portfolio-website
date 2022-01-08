import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Portfolio() {
  return (
    <div>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px', marginTop: '90px' }}>Real Estate Websites</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="/" target="_blank"><img src="" alt="Template 1" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 2" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 3" width="350" height="250" /></a></div>
      </div>
      <div className="container-card-2">
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 4" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer" target="_blank"><img src="" alt="Template 5" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 6" width="350" height="225" /></a></div>
      </div>
    </section>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px' }}>Portfolio Websites</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="/" target="_blank"><img src="" alt="Template 7" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 8" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 9" width="350" height="250" /></a></div>
      </div>
      <div className="container-card-2">
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 10" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer" target="_blank"><img src="" alt="Template 11" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 12" width="350" height="225" /></a></div>
      </div>
    </section>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px' }}>Photography Websites</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="/" target="_blank"><img src="" alt="Template 13" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 14" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 15" width="350" height="250" /></a></div>
      </div>
      <div className="container-card-2">
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 16" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer" target="_blank"><img src="" alt="Template 17" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 18" width="350" height="225" /></a></div>
      </div>
    </section>
    <h1 className="portfolio thin-font-weight" style={{fontSize: '35px' }}>Restaurant Websites</h1>
    <section>
      <div className="container-card">
        <div className="img-card"><a href="/" target="_blank"><img src="" alt="Template 19" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 20" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 21" width="350" height="250" /></a></div>
      </div>
      <div className="container-card-2">
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 22" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer" target="_blank"><img src="" alt="Template 23" width="350" height="250" /></a></div>
        <div className="img-card"><a href="/" rel="noreferrer"><img src="" alt="Template 12" width="350" height="24" /></a></div>
      </div>
    </section>
    <Footer />
    </div>
    );
}