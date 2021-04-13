import React from 'react'
import '../../App.css'
import Footer from '../Footer'
// import ContactForm from '../ContactForm';



export default function Testimonials() {

  return (
    <>
      <div className="testimonials">
        <h1 className="margin-top-30 med-font-45 gradient-text">Satisfaction is Guaranteed.</h1>
        <div className="testimonial-container">

        <div className="module-border-wrap profile-test">
        <div className="module">
          <img className="jamesProfileImg" src="images/client-bigmountainbarbell.png" alt="James Hooper" width="300" height="300" />
        </div>
      </div>

          {/* <img className="james" width="200" height="200" src="images/client-bigmountainbarbell.png" alt="Lynndsey - Big Mountain Barbell" /> */}
          <blockquote className="selfQuote">
            <span className="fixQuote">“</span>
            James was a great designer and he considered
            everything that we were looking for in a new logo. I
            highly recommend him!
            <br />
        
            <div className="test">
              - Lynndsey Eldridge, 
              <a className="testimonialLink" href="https://www.bigmountainbarbell.com" target="_blank">
               &nbsp; Big Mountain Barbell</a>
            </div>
          </blockquote>
        </div>
      </div>
      <Footer />
    </>
  )
}