import React from 'react'
import '../../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer footer">
      <div className="container footer-inner">
        <div className="muted text-center">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
