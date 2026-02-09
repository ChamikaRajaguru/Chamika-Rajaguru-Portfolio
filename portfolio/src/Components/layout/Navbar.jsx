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
        <div className="brand">Chamika Portfolio</div>

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
      </div>
    </header>
  )
}
