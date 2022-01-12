import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import{ init } from '@emailjs/browser';
init("user_xVcIQK8bavHEa1ja4R9cz");


const ContactMe = () => {
  
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);


    const submit = () => {
      if (name && email && message) {
        // TODO - Send mail

        const USERID = process.env.REACT_APP_API_KEY_USERID;
        const TEMPLATEID = process.env.REACT_APP_TEMPLATEID;
        const SERVICEID = process.env.REACT_APP_SERVICEID;

        const serviceId = SERVICEID;
        const templateId = TEMPLATEID;
        const userId = USERID;
        const templateParams = {
          name,
          email,
          message
        }


        emailjs.send(serviceId, templateId, templateParams, userId).then(response => console.log(response)).then(error => console.log(error));
    
        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
      } else {
        alert('Oops. Please fill out all the fields.');
      }
    }

    const sendEmail = (e) => {
      const USERID = process.env.REACT_APP_API_KEY_USERID;
      const TEMPLATEID = process.env.REACT_APP_TEMPLATEID;
      const SERVICEID = process.env.REACT_APP_SERVICEID;


      e.preventDefault();
  
      emailjs.sendForm(SERVICEID, TEMPLATEID, form.current, USERID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };




  return(
    <form ref={form} onSubmit={sendEmail}>
  <div id="contact-form" className="contact-container">
      <input className="contact-name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="contact-name"  type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea className="contact-name"  placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button className="btn btn--outline btn--large btn-submit mar-btm-60" onClick={submit}>Send Message</button>
      <span className={emailSent ? 'visible' : null}><span className="hidden">Thank you for your message, we will be in touch soon!</span></span><br /><br /><br />
  </div>
  </form>
  );
};

export default  ContactMe;