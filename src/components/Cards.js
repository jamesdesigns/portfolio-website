import React from 'react'
import './Cards.css'
import CardItem from './CardItem'


function Cards() {
  return (
    <div className="cards">
      <h1 className="thin-font-weight">Learn how you can build beautiful websites.</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards__items">

          <CardItem
              src="images/"
              text="Learn how to design websites that attract more users and help them become more engaged."
              label="How to Design and Build websites"
              path="/blog"
            />
            <CardItem
              src="images/"
              text="I have been designing for over 10 years for clients and love designing and building websites."
              label="My Story"
              path="/about"
            />
            <CardItem
              src="images/"
              text="Explore my best design work I have done over the last year."
              label="Web Design Portfolio"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
