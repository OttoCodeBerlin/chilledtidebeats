import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header home-page" style={{ height: 'auto' }}>
        <Home style={{ marginTop: 100 }} />
      </header>
      <Footer />
    </div>
  )
}

export default App
