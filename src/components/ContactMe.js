import React, { useState } from 'react'
import emailjs from 'emailjs-com'



const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
      if (name && email && message) {
        // TODO - Send mail

        const serviceId = 'service_uuiez43';
        const templateId = 'template_p6d9itj';
        const userId = 'user_xVcIQK8bavHEa1ja4R9cz';
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
      //   const isValidEmail = email => {
      //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //     return regex.test(String(email).toLowerCase());
      // };
        alert('Please fill in all fields.');
      }
    }




  return(
  <div id="contact-form" className="contact-container">
    <input className="contact-name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
    <input className="contact-name"  type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
    <textarea className="contact-name"  placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
    <button className="btn btn--outline btn--large btn-submit mar-btm-60" onClick={submit}>Send Message</button>
    <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
  </div>
  );
};

export default  ContactMe;