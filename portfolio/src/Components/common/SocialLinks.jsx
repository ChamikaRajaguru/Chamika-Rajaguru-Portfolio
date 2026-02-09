import React from 'react'

export default function SocialLinks() {
  return (
    <div className="social-links" style={{display: 'flex', gap: '0.75rem', alignItems: 'center'}}>
      <a href="#" aria-label="GitHub" className="muted">GitHub</a>
      <a href="#" aria-label="LinkedIn" className="muted">LinkedIn</a>
      <a href="#" aria-label="Email" className="muted">Email</a>
    </div>
  )
}
