import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../images/james-hooper-logo-white.svg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <div class='footer-logo'>
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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
            <Link to='/termsofservice'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            {/* <Link to='/'>Support</Link> */}
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Web Design</Link>
            <Link to='/'>Web Development</Link>
            <Link to='/'>Art</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.instagram.com/artistjameshooper">Instagram</a>
            <a target="_blank" href="https://www.youtube.com/channel/UC_c1o-hqAK0CO6RlCQUYKeg">YouTube</a>
            <a target="_blank" href="https://www.linkedin.com/in/james-hooper-64775b163/">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Copyright © 2021 James Hooper Designs</small>
          <div class='social-icons'>
            <a class='social-icon-link instagram' target="_blank" href="https://www.instagram.com/artistjameshooper"><i class='fab fa-instagram' /></a>
            <a class='social-icon-link youtube' target="_blank" href="https://www.youtube.com/channel/UC_c1o-hqAK0CO6RlCQUYKeg"><i class='fab fa-youtube' /></a>
            <a class='social-icon-link github' target="_blank" href="https://github.com/jamesdesigns"><i class='fab fa-github' /></a>
            <a class='social-icon-link linkedin' target="_blank" href="https://www.linkedin.com/in/james-hooper-64775b163/"><i class='fab fa-linkedin' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;