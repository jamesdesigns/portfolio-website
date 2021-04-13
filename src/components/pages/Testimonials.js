import React from 'react'
import '../../App.css'
import Footer from '../Footer'
// import ContactForm from '../ContactForm';



export default function Testimonials() {

  return (
    <>
      <div className="testimonials">
        <h1 className="margin-top-30 med-font-45">Testimonials</h1>
        <div className="testimonial-container">
          <img className="james" width="200" height="200" src="img/client-bigmountainbarbell.png" alt="Lynndsey - Big Mountain Barbell" />
          <blockquote className="selfQuote">
            <span className="fixQuote">“</span>
            James was a great designer and he considered
            everything that we were looking for in a new logo. I
            highly recommend him!
            <br />
            <div className="test">
              - Lynndsey Eldridge, 
              <a className="testimonialLink" href="https://www.bigmountainbarbell.com" target="_blank">
              Big Mountain Barbell</a>
            </div>
          </blockquote>
        </div>
      </div>
      <Footer />
    </>
  )
}