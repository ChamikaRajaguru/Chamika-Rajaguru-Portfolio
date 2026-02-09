import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/Certificate.css'
import Card from '../components/ui/Card'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <div>
      <SectionTitle title="Certificates"  center />

      <div className="projects-grid">
        {certificates.map((c) => (
          <Card key={c.id}>
              <h3 className="card-title">{c.title}</h3>
              <p className="muted mt-8">{c.issuer} • {c.year}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
