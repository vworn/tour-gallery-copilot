// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked
import React from 'react'

const TourCard = ({ id, name, info, image, price, removeTour }) => (
  <article className="tour-card">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{info}</p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </footer>
  </article>
)

export default TourCard
