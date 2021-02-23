import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Contact() {
  return (
    <>
    
    <div className="contact">
      <div className="contact-title">
        <p className="large-font-100 heavy-font-weight">CONTACT</p>
        <p className="medium-font-30"><b>Email:</b> &nbsp;  jameshooperdesigns@gmail.com</p>
        <p className="medium-font-30"><b>Text:</b>  &nbsp;&nbsp;&nbsp;&nbsp;  <a className="white-text" href="sms:+18017189727&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">801-718-9727</a></p>
        <br />
        <h2>What's your name?</h2>
        <input type="text" id="name" name="name" />
      </div>
    </div>
    <Footer />
    </>
    )
}