import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div>
      <SectionTitle title="Projects" subtitle="Selected work" />

      <div className="projects-grid">
        {projects.map((p) => (
          <Card key={p.id} className="project-card">
            <h3 style={{margin:0, fontWeight:600}}>{p.title}</h3>
            <p className="muted" style={{marginTop: '0.5rem'}}>{p.description}</p>
            <div style={{marginTop: '0.75rem', display: 'flex', gap: '0.5rem'}}>
              {p.tags.map((t) => (
                <span key={t} className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59,130,246,0.12)'}}>
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
