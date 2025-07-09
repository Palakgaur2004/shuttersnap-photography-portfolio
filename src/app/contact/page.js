'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', message: ''
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! We will reach out to you soon.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '4rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3rem',
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: '1200px',
        margin: 'auto',
      }}
    >
      {/* Left Side */}
      <motion.div
        style={{ flex: '1 1 400px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Let’s Talk 📸
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
          Got a project in mind or want to book a session? Fill out the form or contact us directly.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem' }}>
          <Mail color="#ff6a00" />
          <span style={{ color: '#333' }}>info@shuttersnap.com</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem' }}>
          <Phone color="#ff6a00" />
          <span style={{ color: '#333' }}>+91 99999 99999</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '0.5rem' }}>
          <MapPin color="#ff6a00" />
          <span style={{ color: '#333' }}>Indore, MP, India</span>
        </div>

        <p style={{ fontStyle: 'italic', color: '#666' }}>
          “Capturing stories one frame at a time.”
        </p>
      </motion.div>

      {/* Right Side Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: '1 1 400px',
          backgroundColor: '#fafafa',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange}
          required style={inputStyle} />

        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange}
          required style={inputStyle} />

        <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange}
          required style={inputStyle} />

        <textarea name="message" rows="4" placeholder="Tell us about your session..." value={form.message}
          onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical' }} />

        <button type="submit" style={buttonStyle}>Submit Booking</button>
      </motion.form>
    </section>
  )
}

const inputStyle = {
  padding: '0.9rem 1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '1rem',
  outline: 'none',
  backgroundColor: '#fff',
}

const buttonStyle = {
  backgroundColor: '#ff6a00',
  color: '#fff',
  padding: '0.9rem 1.5rem',
  borderRadius: '8px',
  fontWeight: '600',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
}
