import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="home-grid">
        <div>
          <p className="muted">
            I'm a driven developer with experience learning and building projects
            using JavaScript, React, and Node.js. I focus on creating simple,
            accessible, and performant user experiences.
          </p>
        </div>
        <div className="card">
          <h3 style={{margin:0, fontWeight:600}}>Skills</h3>
          <ul style={{marginTop: '0.5rem'}} className="muted">
            <li>JavaScript / TypeScript</li>
            <li>React / Vite</li>
            <li>Node.js / Express</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
