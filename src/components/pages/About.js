import React from 'react'
import '../../App.css'
import Footer from '../Footer'
// import { gsap } from 'gsap';

export default function About() {

   return (
    <>
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="module-border-wrap">
        <div className="module">
          <img className="jamesProfileImg" src="https://artistjameshooper.com/img/james-hooper-img.jpg" alt="James Hooper" width="300" height="300" />
        </div>
      </div>
      <h1>James Hooper</h1>
      <p>When I am not creating design work, you may find me in the mountains...</p>
    </div>
   
    <section className="black-bg">
      <div className="myStory">
      <h3 className="large-font-100 center-align pad-btm-20 gradient-text">Hiking.</h3>
      <p>Hi, my name is James Hooper and I love spending time hiking in the outdoors when I am not working hard on my design work. Once in awhile, I need to step away from the computer screen to go do what I enjoy the most, spending time high up on a mountain ledge. It seems to be the one place I can go to feel the most refreshed and inspired. For me, it's like hitting the refresh button. </p>
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
      <p>Whether it's learning a new skill, or figuring out how to best capture the beauty of the backcountry, I am always pushing myself to learn and grow. I will never stop exploring new ways of doing things. </p>
      <br />
      <p>This video is one of many places I enjoy exploring and experiencing in the summer months. There is something very rewarding about backpacking for 20-30 miles to a campsite and experiencing complete solitude. Just me, nature and a few animals that wonder around our campsite.</p>
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
      <p>Drawing and sketching is what I do best. I have been an artist my entire life. This is where all my creative ideas come from. Some of the best ideas I come up with come from a simple sketch. It's important to carry around a sketchbook and jot down any and all ideas that come to you.</p>
      <br />
      <br />
      <div className="sketch-pic-3">
        <img className="sketches" src="images/sketches.png" alt="Sketches" />
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