import React from 'react'
import '../../App.css'
import Footer from '../Footer'
// import '../Component.css'

export default function Contact() {
  return (
    <>
    <div className="contact">
      <div className="contact-title">
        <p className="large-font-100 heavy-font-weight">CONTACT</p>
        <p className="medium-font-30"><b>Email:</b> &nbsp;  jameshooperdesigns@gmail.com</p>
        <p className="medium-font-30"><b>Text:</b>  &nbsp;&nbsp;&nbsp;&nbsp;  <a className="white-text" href="sms:+18017189727&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">801-718-9727</a></p>
        <br />
				<div className="contact-container">
					<h2>Hello! What's your name?</h2>
					<input className="contact-name" type="text" id="name" name="name" />
					<br /><br /><br /><br />
					{/* <h2>What's the best way to contact you?</h2>
					<input className="contact-name" type="email" id="address" name="email" />
					<br /><br />
					<h2>What's your priority for your new website?</h2>
					<input className="contact-name" type="email" id="address" name="email" />
					<br /><br />
					<h2>Choose a color for your website.</h2>
					<input className="contact-name" type="email" id="address" name="email" />
					<br /><br />
					<h2>Describe how you imagine your new website</h2>
					<input className="contact-name" type="email" id="address" name="email" />
					<br /><br /> */}
				</div>
      </div>
    </div> 
    <Footer />
    </>
    )
}