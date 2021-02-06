import React from 'react'
import './Cards.css'
import CardItem from './CardItem'


function Cards() {
  return (
    <div className="cards">
      <h1>Check Out My Best Work</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Tip Calculator that works as a tip and pay using the QR Scan code."
              label="Tip Calculator App"
              path="/portfolio"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Sushi Restaurant that allows the restaurant owner to update their inventory live."
              label="Restuarant Website"
              path="/portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Tip Calculator that works as a tip and pay using the QR Scan code."
              label="Tip Calculator App"
              path="/portfolio"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Sushi Restaurant that allows the restaurant owner to update their inventory live."
              label="Restuarant Website"
              path="/portfolio"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Sushi Restaurant that allows the restaurant owner to update their inventory live."
              label="Restuarant Website"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
