import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../images/james-hooper-logo-white.svg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            {/* <i className="fab fa-artstation"></i>&nbsp;  */}
            <img className="james-logo" src={logo} alt="James Hooper Logo" />
            </Link>
          </div>
        <p className='footer-subscription-heading'>
          Join my newsletter to receive great deals on all my design services.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
            <Link to='/termsofservice'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            {/* <Link to='/'>Support</Link> */}
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Web Design</Link>
            <Link to='/'>Web Development</Link>
            <Link to='/'>Art</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a rel="noreferrer" href="https://www.instagram.com/artistjameshooper">Instagram</a>
            <a rel="noreferrer" href="https://www.youtube.com/channel/UC_c1o-hqAK0CO6RlCQUYKeg">YouTube</a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/james-hooper-64775b163/">LinkedIn</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
        <small className='website-rights'>Copyright © 2022 James Hooper Designs</small>
          <div className='social-icons'>
            <a className='social-icon-link instagram' rel="noreferrer" href="https://www.instagram.com/artistjameshooper"><i className='fab fa-instagram' /></a>
            <a className='social-icon-link youtube' rel="noreferrer" href="https://www.youtube.com/channel/UC_c1o-hqAK0CO6RlCQUYKeg"><i className='fab fa-youtube' /></a>
            <a className='social-icon-link github' rel="noreferrer" href="https://github.com/jamesdesigns"><i className='fab fa-github' /></a>
            <a className='social-icon-link linkedin' rel="noreferrer" href="https://www.linkedin.com/in/james-hooper-64775b163/"><i className='fab fa-linkedin' /></a>
          </div>
         
        </div>
      </section>
    </div>
  );
}

export default Footer;