import React from 'react'
import './Cards.css'
import CardItem from './CardItem'


function Cards() {
  return (
    <div className="cards">
      <h1>Hello. I am here to help build great websites.</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards__items">

            <CardItem
              src="images/img-2.jpg"
              text="I have been designing for over 10 years for clients and love designing and building websites."
              label="My Story"
              path="/about"
            />
            <CardItem
              src="images/img-home.jpg"
              text="Learn how to design websites that attract more users and help them become more engaged."
              label="How to Design and Build websites"
              path="/blog"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Explore my best design work I have done over the last year."
              label="Web Design Portfolio"
              path="/portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Reach out to me if you are interested in a website. I offer creative and affordable solutions."
              label="Contact James Hooper"
              path="/contact"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Sign up today if you want to learn how to grow as a designer and developer."
              label="Sign Up and Start Learning Today!"
              path="/sign-up"
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
