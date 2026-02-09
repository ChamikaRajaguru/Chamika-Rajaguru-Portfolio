import React from 'react'

export default function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={`section-title ${center ? 'center' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
    </div>
  )
}
