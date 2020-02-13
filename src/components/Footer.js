import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="page-footer  fixed-bottom" style={{ backgroundColor: 'red' }}>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a style={{ color: 'darkgrey', textDecoration: 'none' }} href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  )
}
