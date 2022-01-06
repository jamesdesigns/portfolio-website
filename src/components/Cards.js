import React from 'react'
import './Cards.css'
import CardItem from './CardItem'


function Cards() {
  return (
    <div className="cards">
      <h1 className="thin-font-weight">Learn how you can build beautiful websites.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">

          <CardItem
              src="images/Tip-Calculator-Presentational.jpg"
              text="Learn how to design websites that attract more users and help them become more engaged."
              label="How to Design and Build websites"
              path="/blog"
            />
            <CardItem
              src="images/laptop-2.jpg"
              text="I have been designing for over 10 years and love designing and building website templates."
              label="Website Templates"
              path="/portfolio"
            />
            {/* <CardItem
              src="images/personal-website.jpg"
              text="Explore my best design work I have done over the last year."
              label="Web Projects"
              path="/portfolio"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
