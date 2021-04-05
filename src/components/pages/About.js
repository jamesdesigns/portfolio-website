import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import { gsap } from 'gsap';

export default function About() {

   return (
    <>
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <img className="jamesProfileImg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" width="300" height="300" />
      <h1>James Hooper</h1>
      <p>When I am not working, you can find me in the mountains...</p>
    </div>
   
    <section className="black-bg">
      <div className="myStory">
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Hiking.</h3>
      <p>Hi, my name is James Hooper and I love spending time hiking in the outdoors when I am not working hard on my design work. Every once in awhile, I need to step away from work to go experience the beauty of nature. It seems to be the one place I can go to feel refreshed, having spent a good portion of my life in the outdoors. It's like hitting the refresh button. </p>
      <br />
      <br />
      <br />
      <div className="mountains-pic-1">
        <img className="james-bg" src="images/Outdoors-2.jpg" alt="High Uintas" /><br />
        <img className="james-bg" src="images/Outdoors.jpg" alt="High Uintas" />
      </div>
      <br /><br />

      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Exploring.</h3>
      <p>I have always enjoyed exploring the beautiful things in life. From drawing the intricate form of the human body, to creating interactive websites, and finding myself immersed exploring the work of video production. My mind never stops thinking about new and creative ways of designing the next great project. I will never stop exploring new ways of doing things. Whether it's learning a new skill, or figuring out how to capture the beauty of the backcountry, I am always pushing myself to learn and grow.</p>
      <br />
      <p>This video is one of many places I enjoy exploring and experiencing in the summer months. Hiking in the backcountry is a great way to enjoy complete solitude. There is something very rewarding about backpacking for 20-30 miles to a campsite and experiencing complete solitude. Just you, nature and the animals that wonder around your space, curious about foreign visitors.</p>
      <br />
      <br />
      <div className="explore-pic-2">
      <iframe width="750" height="422" src="https://www.youtube.com/embed/usuUlLZpX9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" /> */}
        {/* <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" /> */}
      </div>
      <br /><br />

      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Sketching.</h3>
      <br />
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <br />
      <div className="sketch-pic-3">
        <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
        <img className="james-bg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" />
      </div>
      <br /><br />
      
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