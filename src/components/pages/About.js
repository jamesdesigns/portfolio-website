import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function About() {

   return (
    <>
    <h1 className="about">JAMES HOOPER</h1>
    <div className="about-page">
      <div className="about-container">
        <h2 className="pad-btm-20">Education</h2>
        <ul style={{ listStyleType: "none"}}>
          <li>Utah Valley University</li>
          <li>B.S. Web Design & Development</li>
          <br />
          <li>University of Utah</li>
          <li>B.F.A. Graphic Design</li>
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
    <Footer />
    </>
    );
}