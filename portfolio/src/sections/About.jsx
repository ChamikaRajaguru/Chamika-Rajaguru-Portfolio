import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/About.css'
import aboutImg from '../assets/images/about-illustration.svg'
import figma from '../assets/images/skills/figma.svg'
import html5 from '../assets/images/skills/html5.svg'
import css3 from '../assets/images/skills/css3.svg'
import tailwind from '../assets/images/skills/tailwind.svg'
import bootstrap from '../assets/images/skills/bootstrap.svg'
import js from '../assets/images/skills/js.svg'
import cLogo from '../assets/images/skills/c.svg'
import reactLogo from '../assets/images/skills/react.svg'

export default function About() {
  return (
    <div>
      <SectionTitle title="About Me" center />

      <div className="about-grid">
        <div className="about-left">
          <div className="about-image">
            <img src={aboutImg} alt="About illustration" />
          </div>
        </div>

        <div className="about-right">
          <p className="muted">I am a Software Engineering undergraduate at NSBM Green University with a strong passion for UI/UX design and modern web development. I enjoy transforming ideas into intuitive, responsive, and visually appealing digital experiences.

            With hands-on experience in React and user-centered design principles, I focus on building applications that are both functional and user-friendly. I am continuously learning and exploring new technologies to improve my skills and deliver high-quality solutions.
          </p>

          <div className="skills-card card">
            <h3 className="card-title">Skills</h3>
            <ul className="skills-list muted mt-8">
              {[
                { name: 'Figma', icon: figma },
                { name: 'HTML5', icon: html5 },
                { name: 'CSS3', icon: css3 },
                { name: 'Tailwind CSS', icon: tailwind },
                { name: 'Bootstrap', icon: bootstrap },
                { name: 'JavaScript', icon: js },
                { name: 'C', icon: cLogo },
                { name: 'React JS', icon: reactLogo },
              ].map(s => (
                <li key={s.name} className="skill-item">
                  <img src={s.icon} alt={s.name} className="skill-logo" />
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="about-cards-grid">
        <div className="card">
          <h3 className="card-title">Education</h3>
          <p className="muted mt-8">B.Sc. in Software Engineering at NSBM Green University. Focused on building strong fundamentals in computer science and practical development skills.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Experience</h3>
          <p className="muted mt-8">Hands-on experience with React, UI/UX design, and responsive web development. Passionate about creating user-centric applications and continuous learning.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Passion</h3>
          <p className="muted mt-8">Enthusiastic about solving problems through code and design. I love exploring new technologies and collaborating with teams to deliver impactful solutions.</p>
        </div>
      </div>
    </div>
  )
}
