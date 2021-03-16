import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import { useState } from 'react'
// import '../Component.css'

export default function Contact() {

	const greeting = `Name:`;
	const COLORS = ['#588c75','#b0c47f','#f3e395','#f3ae73','#da645a','#79a38f','#c1d099','#f5eaaa','#f5be8f','#e1837b','#9bbaab','#d1dcb2','#f9eec0','#f7cda9'];
	const [ values, setValues ] = useState({
		name: '', email: '', phone:'', goal: ''
	});
	// const onChange = (event) => {
	// 	setValue(event.target.value);
	// };
	
	const set = name => {
		return ({ target: { value } }) => {
			setValues(oldValues => ({...oldValues, [name]: value }));
		}
	}

	const saveFormData = async () => {
		const repsonse = await fetch('/api/registration', {
			method: 'POST',
			body: JSON.stringify(values)
		});
		if (Response.status !== 200) {
			throw new Error('Request failed: ${response.status}');
		}
	}

	const onSubmit = async (event) => {
		event.preventDefault(); // Prevent default submission
		try {
			await saveFormData();
			alert('Your registration was successfully submitted!');
			setValues({
				name: ''
			});
		} catch (e) {
			alert(`Registration failed! ${e.message}`);
		}
	}
  return (
    <>
    <div className="contact">
      <div className="contact-title">
        <p className="large-font-75 heavy-font-weight">CONTACT</p>
        <p className="medium-font-30"><b>Email:</b> &nbsp;  jameshooperdesigns@gmail.com</p>
        <p className="medium-font-30"><b>Text:</b>  &nbsp;&nbsp;&nbsp;&nbsp;  <a className="white-text" href="sms:+18017189727&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">801-718-9727</a></p>
        <br />
				<form onSubmit={onSubmit} className="contact-container">
					<div className="enter-form">
						<label><p className="form-text-med">{greeting}</p></label>
						<input value={values.name} onChange={set('name')} className="contact-name" type="text" id="name" name="name" required />
						<label><p className="form-text-med">Email:</p></label>
						<input value={values.email} onChange={set('email')} className="contact-name" type="email" id="email" name="email" required />
						<label><p className="form-text-med">Phone:</p></label>
						<input value={values.phone} onChange={set('phone')} className="contact-name" type="phone" id="phone" name="phone" />
						<label><p className="form-text-med">How can I help you today?</p></label>
						<input value={values.goal} onChange={set('goal')} className="contact-name" type="goal" id="goal" name="goal" required />
					</div>
					<div className="output-form">
						<p><small>{values.name}</small></p>
						<p><small>{values.email}</small></p>
						<p><small>{values.phone}</small></p>
						<p><small>{values.goal}</small></p>
						<button type="submit">SUBMIT</button>
					</div>
				</form>
			
      </div>
    </div> 
    <Footer />
    </>
    )
}