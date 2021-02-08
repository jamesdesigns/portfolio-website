import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <i className="fab fa-artstation"></i>&nbsp;
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                CONTACT
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                SIGN UP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
