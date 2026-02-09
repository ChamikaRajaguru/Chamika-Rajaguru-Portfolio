import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import SocialLinks from '../components/common/SocialLinks'

export default function Home() {
  return (
    <div className="home-grid">
      <div>
        <SectionTitle title="Hi, I'm Chamika" subtitle="Aspiring Software Engineer — seeking internships" />
        <p className="muted" style={{marginBottom: '1rem'}}>
          I'm focused on building clean, maintainable web applications using modern
          technologies. I enjoy problem solving, collaborating, and learning new tools.
        </p>

        <div>
          <SocialLinks />
        </div>
      </div>

      <div className="card profile-card">
        <div className="muted">Profile image placeholder</div>
      </div>
    </div>
  )
}
