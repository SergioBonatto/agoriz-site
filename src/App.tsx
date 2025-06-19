import { ThemeProvider } from './contexts/theme/ThemeContext'
import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Team from './components/sections/Team'
import Footer from './components/layout/Footer'
import { SEO } from './utils/SEO'

import './App.css'
import Contact from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
