import React from 'react'

import dogImage from '../images/sobaka-shchenok-fon-9.jpg'
export default function Card() {
  return (
    <div>
      <div class="card bg-dark text-white mb-3" style={{maxWidth: "540px"}}>
        <img src={dogImage} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  )
}
