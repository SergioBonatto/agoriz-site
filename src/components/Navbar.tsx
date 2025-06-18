import { type FC, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import '../styles/Navbar.css'

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src="/agoriz-logo.png" alt="Agoriz Logo" className="navbar-logo-image" />
          <h1>Agoriz</h1>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#"         onClick={toggleMenu}>Home</a>
          <a href="#about"    onClick={toggleMenu}>About</a>
          <a href="#services" onClick={handleServiceClick}>Services</a>
          <a href="#team"     onClick={toggleMenu}>Team</a>
          <a href="#contact"  onClick={toggleMenu}>Contact</a>
          <ThemeToggle />
        </div>

        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
