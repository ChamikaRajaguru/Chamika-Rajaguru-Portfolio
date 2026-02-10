import React, { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/Contact.css'
import Button from '../components/ui/Button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // placeholder: in real app send to backend or email service
    alert(`Thanks, ${form.name}! Your message was sent.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <SectionTitle title="Contact" subtitle="Get in touch" center />

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className=""
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            type="email"
            className=""
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className=""
            required
          />

          <div>
            <Button type="submit">Send Message</Button>
          </div>
        </form>

        <div className="contact-info">
          <h3 className="contact-title">Let's Talk</h3>
          <p className="muted contact-description">
            I hope to gain hands-on experience and enhance my skills through a web development internship.
          </p>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <p>yasindudahanayake@gmail.com</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <p>+94 775595827</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p>Homagama, Srilanka</p>
          </div>
        </div>
      </div>
    </div>
  )
}
