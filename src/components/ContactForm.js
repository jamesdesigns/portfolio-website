import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      goal: '',
      status: 'Submit'
    };
  }

  handleChange(event) {
      const field = event.target.id;
      if (field === "name") {
        this.setState({ name: event.target.value });
      } else if (field === "email") {
        this.setState({ email: event.target.value });
      } else if (field === "phone") {
        this.setState({ phone: event.target.value });
      } else if (field === "goal") {
        this.setState({ goal: event.target.value });
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending "});
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", phone: "", goal: "", status: "Submit"});
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  render() {
    let buttonText = this.state.status;


    return (
      <form 
        className="contact-container"
        onSubmit={this.handleSubmit.bind(this)} 
        method="POST"
        >
        <div className="enter-form">
        <h2 className="margin-top-30 medium-font-30">Let's create something great.</h2>
          <div>
            <label className="medium-font-20" htmlFor="name">Name:</label>
            <input 
              className="contact-name" 
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label className="medium-font-20" htmlFor="email">Email:</label>
            <input 
              className="contact-name"
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label className="medium-font-20" htmlFor="phone">Phone:</label>
            <input 
              className="contact-name"
              type="phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div>
            <label className="medium-font-20" htmlFor="goal">How can I help you today?</label>
            <textarea 
              className="contact-name"
              id="goal"
              value={this.state.goal}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <button 
            className="btn btn--outline btn--large btn-submit mar-btm-60"
            type="submit"
          >{buttonText}</button>


        </div>
      </form>
    );
  }
}

export default ContactForm;

	{/* <form 
					onSubmit={onSubmit} 
					className="contact-container"
					>
					<div className="enter-form">
					<h2 className="margin-top-30 medium-font-20">Let's create something great.</h2>
					<br />
						<label><p className="form-text-med">{greeting}</p></label>
						<input value={values.name} onChange={set('name')} className="contact-name" type="text" id="name" name="name" required />
						<label><p className="form-text-med">Email:</p></label>
						<input value={values.email} onChange={set('email')} className="contact-name" type="email" id="email" name="email" required />
						<label><p className="form-text-med">Phone:</p></label>
						<input value={values.phone} onChange={set('phone')} className="contact-name" type="phone" id="phone" name="phone" />
						<label><p className="form-text-med">How can I help you today?</p></label>
						<input value={values.goal} onChange={set('goal')} className="contact-name" type="goal" id="goal" name="goal" required />
						<button className="btn btn--outline btn--large btn-submit mar-btm-60" type="submit">SUBMIT</button>
					</div>
					<div className="output-form">
						<p><small>{values.name}</small></p>
						<p><small>{values.email}</small></p>
						<p><small>{values.phone}</small></p>
						<p><small>{values.goal}</small></p> */}
						{/* <button className="btn btn--outline btn--large btn-submit mar-btm-30" type="submit">SUBMIT</button> */}
					{/* </div>
				</form>  */}