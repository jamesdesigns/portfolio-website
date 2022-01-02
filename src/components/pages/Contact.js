import React from 'react'
import '../../App.css'
import Footer from '../Footer'
// import { useState } from 'react'
import ContactForm from '../ContactForm';
// import '../Component.css'


export default function Contact() {

  return (
    <div>
    <div className="contact">
      <div className="contact-title">
        <p className="med-font-45 heavy-font-weight">CONTACT</p>
        <p className="medium-font-20"><b>Email:</b> &nbsp;  jameshooperdesigns@gmail.com</p>
        <p className="medium-font-20"><b>Text:</b>  &nbsp;&nbsp;&nbsp;&nbsp;  <a className="white-text" href="sms:+13854190591&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">385-419-0591</a></p>
        <br />
				<ContactForm />
      </div>
    </div> 
    <Footer />
    </div>
    )
}