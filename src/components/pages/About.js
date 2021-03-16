import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import { gsap } from 'gsap';

export default function About() {

   return (
    <>
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>James Hooper</h1>
      {/* <p>I work hard to create design work that will leave a lasting impression.</p> */}
      <p>When I am not working hard, you can find me in the backcountry.</p>
      {/* <p>I am always searching high and low for inspiration in life.</p> */}
      {/* <div className="white-text"><small>(For me, nature is <i>the</i> greatest place to find inspiration.)</small></div> */}
    </div>
    <div className="bio-container">
    {/* <h1 className="about">Hello! I am James Hooper.</h1> */}
      {/* <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" /> */}

    </div>
   
    <section className="black-bg">
      <div className="myStory">
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Hiking.</h3>
      <p>Hi, my name is James Hooper and I love designing professional work for clients. I have been creative my entire life, which ultimately led me to my passion with web design and development. After I earned a bachelors degree in Graphic Design from the University of Utah, I discovered that I wanted to learn everything there was to designing, building, and creating engaging websites.</p>
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <br />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <br /><br />
      {/* <h3 className="large-font-100 center-align pad-btm-20 gradient-text"><span>&#8595;</span></h3> */}
      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Exploring.</h3>
      <p>Hi, my name is James Hooper and I love designing professional work for clients. I have been creative my entire life, which ultimately led me to my passion with web design and development. After I earned a bachelors degree in Graphic Design from the University of Utah, I discovered that I wanted to learn everything there was to designing, building, and creating engaging websites.</p>
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <br />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <br /><br />
      {/* <h3 className="large-font-100 center-align pad-btm-20 gradient-text"><span>&#8595;</span></h3> */}
      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Sketching.</h3>
      <br />
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <br />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text"><span>	&#127925;</span><br />Listening to Music.</h3>
      <br />
      <br />
      <p>Hi, my name is James Hooper and I love designing professional work for clients. I have been creative my entire life, which ultimately led me to my passion with web design and development. After I earned a bachelors degree in Graphic Design from the University of Utah, I discovered that I wanted to learn everything there was to designing, building, and creating engaging websites.</p>
      <br />
      <br />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      <br />
      <br />
      {/* <h3 className="large-font-100 center-align pad-btm-20 gradient-text"><span>&#8595;</span></h3> */}
      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Always pushing myself to do more.</h3>
      <br />
      <br />
      </div>
      <div className="about-page">
      <div className="about-container">
        <h2 className="pad-btm-20">Education</h2>
        <ul style={{ listStyleType: "none"}}>
          <li>Utah Valley University</li>
          <li className="white-text">B.S. Web Design &amp; Development</li>
          <br />
          <li>University of Utah</li>
          <li className="white-text">B.F.A. Graphic Design</li>
        </ul>
      </div>
      <div className="about-container">
        <h2 className="pad-btm-20">Coding Skills</h2>
        <ul className="pad-left-20">
          <li>HTML5/CSS/Sass</li>
          <li>JavaScript</li>
          <li>Gatsby</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Responsive Web</li>
          <li>Bootstrap 4</li>
          <li>Wordpress</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="about-container">
        <h2 className="pad-btm-20">Design Skills</h2>
        <ul className="pad-left-20">
          <li>UI Design</li>
          <li>UX Design</li>
          <li>Responsive Web Design</li>
          <li>Graphic Design</li>
          <li>Illustrations</li>
        </ul>
      </div>
      <div className="about-container">
        <h2 className="pad-btm-20">Design Tools</h2>
        <ul className="pad-left-20">
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe InDesign</li>
          <li>Adobe After Effects</li>
          <li>Sketch</li>
          <li>InVision</li>
        </ul>
      </div>
    </div>
    </section>
    <Footer />
    </>
    );
}