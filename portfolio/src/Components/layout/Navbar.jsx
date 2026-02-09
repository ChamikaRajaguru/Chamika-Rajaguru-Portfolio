import React, { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Chamika Rajaguru</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <nav>
            <button
              className="nav-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            <ul className={`nav-links ${open ? 'open' : ''}`}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="nav-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-icons" style={{display: 'flex', gap: '0.5rem'}}>
            <a href="https://github.com/ChamikaRajaguru" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.75 5.48.75 11.78c0 4.93 3.17 9.11 7.57 10.59.55.1.75-.24.75-.53 0-.26-.01-1-.02-1.95-3.08.67-3.73-1.46-3.73-1.46-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.7-1.45-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.95 0 0 .94-.3 3.08 1.13.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.14-1.43 3.08-1.13 3.08-1.13.61 1.54.23 2.67.11 2.95.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.19-5.08 5.47.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.49 7.56-5.66 7.56-10.59C23.25 5.48 18.27.5 12 .5z"/></svg>
            </a>

            <a href="https://www.linkedin.com/in/chamika-rajaguru-612652371" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.354V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.372 4.268 5.457v6.284zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zM6.956 20.452H3.718V9h3.238v11.452z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
