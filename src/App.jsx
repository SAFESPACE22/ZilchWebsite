import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import TourDates from './components/TourDates'
import Gallery from './components/Gallery'
import Bio from './components/Bio'
import Contact from './components/Contact'
import AudioPlayer from './components/AudioPlayer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">Z&RO</div>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#tour" onClick={() => setMobileMenuOpen(false)}>TOUR</a>
          <a href="#music" onClick={() => setMobileMenuOpen(false)}>RELEASES</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
        </div>
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>
      </nav>

      <Hero />

      <main className="container">
        <TourDates />
        <Gallery />
        <Bio />
        <Contact />
      </main>

      <AudioPlayer />
    </div>
  )
}

export default App
