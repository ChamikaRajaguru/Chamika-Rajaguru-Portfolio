import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <div>
      <SectionTitle title="Certificates" subtitle="Continued learning" />

      <div className="projects-grid">
        {certificates.map((c) => (
          <Card key={c.id}>
            <h3 style={{margin:0, fontWeight:600}}>{c.title}</h3>
            <p className="muted" style={{marginTop: '0.5rem'}}>{c.issuer} • {c.year}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
