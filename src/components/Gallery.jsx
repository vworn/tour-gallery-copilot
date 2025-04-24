// Create a gallery that maps over the tours array and renders TourCard for each
import React from 'react'
import TourCard from './TourCard'

const Gallery = ({ tours, removeTour }) => (
  <section className="gallery">
    {tours.map(t => (
      <TourCard key={t.id} {...t} removeTour={removeTour} />
    ))}
  </section>
)

export default Gallery
