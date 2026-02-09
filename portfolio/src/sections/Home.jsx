import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'

export default function Home() {
  return (
    <div className="home-grid">
        <div>
          <SectionTitle title="Hi, I'm Chamika" subtitle="Aspiring Software Engineer — seeking internships" />
          <p className="muted" style={{marginBottom: '1rem'}}>
            I'm focused on building clean, maintainable web applications using modern
            technologies. I enjoy problem solving, collaborating, and learning new tools.
          </p>

          
          <div style={{marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center'}}>
            <a href="/Chamika_CV.pdf" download className="btn btn-accent">Download CV</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="card profile-card">
          <div className="muted">Profile image placeholder</div>
        </div>
    </div>
  )
}
