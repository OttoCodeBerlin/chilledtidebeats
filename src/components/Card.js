import React from 'react'

import dogImage from '../images/sobaka-shchenok-fon-9.jpg'
export default function Card() {
  return (
    <div>
      <div className="card bg-dark text-white mb-3" style={{ maxWidth: '360px' }}>
        <img src={dogImage} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title text-black">Card title</h5>
          <p className="card-text smalltext text-black">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <small className="card-text text-black">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  )
}
