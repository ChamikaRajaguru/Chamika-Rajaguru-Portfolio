import React from 'react'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title" style={{marginBottom: '1rem'}}>
      <h2>{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
    </div>
  )
}
