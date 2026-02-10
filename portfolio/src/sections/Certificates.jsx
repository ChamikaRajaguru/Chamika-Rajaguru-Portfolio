import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/Certificate.css'
import Card from '../components/ui/Card'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <div>
      <SectionTitle title="Certificates"  center />

      <div className="certificates-grid">
        {certificates.slice(0, 3).map((c) => (
          <Card key={c.id}>
              <h3 className="card-title">{c.title}</h3>
              <p className="muted mt-8">{c.issuer} • {c.year}</p>
              {c.link && c.link !== '#' && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate →
                </a>
              )}
          </Card>
        ))}
      </div>
    </div>
  )
}
