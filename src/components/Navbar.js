import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
export default function Navbar() {
  return (
    // <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'red' }}>
          <a className="navbar-brand" id="comp-logo" href="#">
            Chilled Tide Beats
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  {' '}
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/animals" className="nav-link">
                  {' '}
                  Our Animals
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/impressum" className="nav-link">
                  {' '}
                  Impressum
                </Link>
              </li>
              
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    // </BrowserRouter>
  )
}
