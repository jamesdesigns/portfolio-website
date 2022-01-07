import React from 'react'
import '../../App.css'
import Footer from '../Footer'
// import { gsap } from 'gsap';

export default function About() {

   return (
    <div>
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="module-border-wrap">
        <div className="module">
          <img className="jamesProfileImg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" width="300" height="300" />
        </div>
      </div>
      <h1>Hello World.</h1>
      <p>My name is James.</p>
    </div>
   
    <section className="black-bg">
      <div className="myStory">
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Avid Hiker</h3>
      <p>When I am not designing for the web you will often find me spending time hiking in the outdoors. Occassionally, I need to step away from the computer screen to rest my eyes and go enjoy spending time high up on a mountain ridge. It seems to be the one place I can go to feel the most refreshed and inspired. For me, it's like hitting the refresh button. Experiencing the outdoors in locations like these few spots is what I enjoy the most outside of the design world. </p>
      <br />
      <br />
      <br />
      <div className="mountains-pic-1">
        <img className="james-bg" src="images/Outdoors-2.jpg" alt="High Uintas" /><br />
        <img className="james-bg" src="images/Outdoors.jpg" alt="High Uintas" />
      </div>
      <br /><br />

      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Sketch Artist</h3>
      <br />
      <br />
      <p>Drawing and sketching is what I enjoy the most when it comes to finding new and innovative ideas. This is where all my creative ideas come from. I have been an artist my entire life and some of the best ideas come from a simple sketch. It's important to carry around a sketchbook and jot down any and all ideas that come to me as a creative designer.</p>
      <br />
      <br />
      <div className="sketch-pic-3">
        <img className="sketches" src="images/sketches.png" alt="Sketches" />
      </div>
      <br /><br />

      <br /><br />
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Passionate Designer</h3>
      <p>Whether it's learning a new skill, or figuring out how to best capture the beauty of the backcountry, I am always pushing myself to learn and grow. I will never stop exploring new ways of doing things.
      I love the process of exploring and researching each page you need in a site map which leads to a more thorough website.</p>
      <br />
      <br />
      <div className="explore-pic-2">
      {/* <iframe className="youtube-size" width="750" height="422" src="https://www.youtube.com/embed/usuUlLZpX9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <img className="backcountry-website-bg" src="images/backcountry-sitemap.png" alt="Sitemap" />
        <img className="backcountry-website-bg" src="images/backcountry-website-design.png" alt="Utah's Backcountry Website" />

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
    </div>
    );
}