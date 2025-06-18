import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
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
