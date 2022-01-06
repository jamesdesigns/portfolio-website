import React, { useState } from 'react';
// import axios from 'axios'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sent");
    const { name, email, phone, goal } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      goal: goal.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form 
      className="contact-container"
      onSubmit={handleSubmit}
      >
      <div className="enter-form">
      <h2 className="margin-top-30 medium-font-30">Let's chat. I am here to help. </h2>
        <div>
        <label className="medium-font-20" htmlFor="name">Name:</label>
          <input
            className="contact-name" 
            type="text"
            id="name" 
            required 
           />
        </div>
        <div>
          <label className="medium-font-20" htmlFor="email">Email:</label>
          <input 
            className="contact-name" 
            type="email" 
            id="email" 
            required 
          />
        </div>
        <div>
          <label className="medium-font-20" htmlFor="phone">Phone:</label>
          <input 
            className="contact-name" 
            type="phone" 
            id="phone" 
            required 
          />
        </div>
        <div>
          <label className="medium-font-20" htmlFor="goal">How can I help you today?</label>
          <input 
            className="contact-name" 
            type="goal"
            id="goal" 
            required 
          />
        </div>
        <button 
          className="btn btn--outline btn--large btn-submit mar-btm-60"
          type="submit"
        >{status}</button>
      </div>
    </form>
  );
};


export default ContactForm;
