import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import { useState } from 'react'
// import '../Component.css'

export default function Contact() {

	const greeting = `Hello! What's your name?`;
	const [ values, setValues ] = useState({
		name: '', email: '', phone:'', priority: '', color: '',
	});
	// const onChange = (event) => {
	// 	setValue(event.target.value);
	// };
	
	const set = name => {
		return ({ target: { value } }) => {
			setValues(oldValues => ({...oldValues, [name]: value }));
		}
	}
  return (
    <>
    <div className="contact">
      <div className="contact-title">
        <p className="large-font-100 heavy-font-weight">CONTACT</p>
        <p className="medium-font-30"><b>Email:</b> &nbsp;  jameshooperdesigns@gmail.com</p>
        <p className="medium-font-30"><b>Text:</b>  &nbsp;&nbsp;&nbsp;&nbsp;  <a className="white-text" href="sms:+18017189727&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">801-718-9727</a></p>
        <br />
				<form className="contact-container">
					<label><h2>{greeting}</h2></label>
					<input value={values.name} onChange={set('name')} className="contact-name" type="text" id="name" name="name" required />
					{/* <p><small>{values.name}</small></p> */}
					<br /><br /><br /><br />
					
					{/* <label><h2>What's the best way to contact you?</h2></label>
					<input value={values.email} onChange={set('email')} className="contact-name" type="email" id="email" name="email" />
					<input value={values.phone} onChange={set('phone')} className="contact-name" type="phone" id="number" name="phone" />
					<p><small>{values.email}</small></p>
					<p><small>{values.phone}</small></p> 
					<br /><br />
					
					<label><h2>What's your priority for your new website?</h2></label>
					<input className="contact-name" type="priority" id="priority" name="priority" />
					<p><small>{values.priority}</small></p>
					<br /><br />
					<label><h2>Choose a color for your website.</h2></label>
					<input className="contact-name" type="color" id="color" name="color" />
					<p><small>{values.color}</small></p>
					<br /><br />
					<label><h2>Describe how you imagine your new website</h2></label>
					<input className="contact-name" type="goal" id="goal" name="goal" />
					<p><small>{values.goal}</small></p>
					<br /><br />  */}
				</form>
      </div>
    </div> 
    <Footer />
    </>
    )
}