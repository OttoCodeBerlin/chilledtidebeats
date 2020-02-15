import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Animals from './pages/Animals'
import Impressum from './pages/Impressum'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Kuehlautomat from './pages/Kuehlautomat'
import KuehlautomatFlex from './pages/KuehlautomatFlex'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header className="App-header home-page" style={{ height: 'auto' }}>
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/animals" component={Animals} />
          <Route path="/kab" component={Kuehlautomat} />
          <Route path="/kab-flex" component={KuehlautomatFlex} />
          {/* <Home /> */}
        </header>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
