import React, { useEffect, useRef } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/Home.css'
import profile from '../assets/images/profile.svg'

export default function Home() {
  const el = useRef(null)

  useEffect(() => {
    const node = el.current
    if (!node) return

    function onMove(e) {
      const rect = node.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      node.style.setProperty('--mx', `${(x - 0.5) * 24}px`)
      node.style.setProperty('--my', `${(y - 0.5) * 18}px`)
    }

    function onScroll() {
      const scroll = window.scrollY || window.pageYOffset
      node.style.setProperty('--sy', `${scroll * 0.06}px`)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="home-grid" ref={el}>
      <div className="dot-layer" aria-hidden="true" />
      <div className="star-layer" aria-hidden="true" />
      <div className="gradient-layer" aria-hidden="true" />
        <div className="home-content">
          <SectionTitle title="Hi, I'm Chamika" subtitle="UI/UX Designer | Web Developer" />
          <p className="muted home-paragraph">
            I'm focused on building clean, maintainable web applications using modern
            technologies. I enjoy problem solving, collaborating, and learning new tools.
          </p>

          
          <div className="btn-group">
            <a href="/Chamika_CV.pdf" download className="btn btn-accent">Download CV</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="profile-card">
          <img src={profile} alt="Profile" className="profile-avatar" />
        </div>
    </div>
  )
}
