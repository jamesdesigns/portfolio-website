import React, { useState } from 'react'
// import axios from 'axios'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
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
      <h2 className="margin-top-30 medium-font-30">Do you have questions?</h2>
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

//  <form 
// 					onSubmit={onSubmit} 
// 					className="contact-container"
// 					>
// 					<div className="enter-form">
// 					<h2 className="margin-top-30 medium-font-20">Let's create something great.</h2>
// 					<br />
// 						<label><p className="form-text-med">{greeting}</p></label>
// 						<input value={values.name} onChange={set('name')} className="contact-name" type="text" id="name" name="name" required />
// 						<label><p className="form-text-med">Email:</p></label>
// 						<input value={values.email} onChange={set('email')} className="contact-name" type="email" id="email" name="email" required />
// 						<label><p className="form-text-med">Phone:</p></label>
// 						<input value={values.phone} onChange={set('phone')} className="contact-name" type="phone" id="phone" name="phone" />
// 						<label><p className="form-text-med">How can I help you today?</p></label>
// 						<input value={values.goal} onChange={set('goal')} className="contact-name" type="goal" id="goal" name="goal" required />
// 						<button className="btn btn--outline btn--large btn-submit mar-btm-60" type="submit">SUBMIT</button>
// 					</div>
// 					<div className="output-form">
// 						<p><small>{values.name}</small></p>
// 						<p><small>{values.email}</small></p>
// 						<p><small>{values.phone}</small></p>
// 						<p><small>{values.goal}</small></p> */}
// 						 <button className="btn btn--outline btn--large btn-submit mar-btm-30" type="submit">SUBMIT</button>
// 					 </div>
// 				</form>  