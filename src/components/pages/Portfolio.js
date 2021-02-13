import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Portfolio() {
  return (
    <>
    <h1 className="portfolio">PORTFOLIO</h1>
    <section className="margin-bottom-50">
      <div className="container-card">
        <div className="img-card"></div>
        <div className="img-card"></div>
        <div className="img-card"></div>
      </div>
      <div className="container-card">
        <div className="img-card"></div>
        <div className="img-card"></div>
        <div className="img-card"></div>
      </div>
    </section>
    <Footer />
    </>
    );
}