import React, { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import '../styles/Contact.css'
import Button from '../components/ui/Button'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (replace with your public key)
emailjs.init('YOUR_PUBLIC_KEY_HERE')

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const templateParams = {
        to_email: 'chamikasdrajaguru@gmail.com',
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }

      await emailjs.send(
        'YOUR_SERVICE_ID_HERE',
        'YOUR_TEMPLATE_ID_HERE',
        templateParams
      )

      setStatus('success')
      alert(`Thanks, ${form.name}! Your message was sent successfully.`)
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('error')
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SectionTitle title="Contact"  center />

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
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>

        <div className="contact-info">
          <h3 className="contact-title">Let's Talk</h3>
          <p className="muted contact-description">
            I hope to gain hands-on experience and enhance my skills through a web development internship.
          </p>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <p>chamikasdrajaguru@gmail.com</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <p>+94 763134525</p>
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
