import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my best work here!</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards_items">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
