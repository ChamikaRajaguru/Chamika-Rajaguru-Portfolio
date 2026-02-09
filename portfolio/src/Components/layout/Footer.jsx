import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer" style={{marginTop: '3rem'}}>
      <div className="container" style={{padding: '1.25rem 0', textAlign: 'center'}}>
        <div className="muted">© {new Date().getFullYear()} Chamika Rajaguru — Built for internship applications.</div>
      </div>
    </footer>
  )
}
