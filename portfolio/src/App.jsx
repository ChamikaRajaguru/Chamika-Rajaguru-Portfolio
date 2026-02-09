import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import './index.css'

function App() {
  return (
    <div className="site">
      <Navbar />

      <main className="container">
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="certificates" className="section">
          <Certificates />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
