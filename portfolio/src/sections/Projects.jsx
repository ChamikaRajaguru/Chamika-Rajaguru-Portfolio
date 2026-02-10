import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/Project.css'
import Card from '../components/ui/Card'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div>
      <SectionTitle title="Projects"  center />

      <div className="projects-grid">
        {projects.map((p) => (
          <Card key={p.id} className="project-card">
            <h3 className="card-title">{p.title}</h3>
            <p className="muted mt-8">{p.description}</p>
            <div className="tags-row">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            {p.link && p.link !== '#' && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
