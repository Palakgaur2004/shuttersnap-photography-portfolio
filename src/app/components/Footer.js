'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#111',
        color: '#fff',
        padding: '3rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        fontSize: '0.95rem'
      }}
    >
      {/* Brand Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ flex: '1 1 200px' }}
      >
        <h3 style={{ fontFamily: `"Pacifico", cursive`, fontSize: '1.8rem', marginBottom: '1rem' }}>
          Shutter<span style={{ fontFamily: 'sans-serif' }}>Snap</span>
        </h3>
        <p>
          Capturing moments that matter. Based in India, available worldwide.
        </p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ flex: '1 1 200px' }}
      >
        <h4 style={{ marginBottom: '0.8rem' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li><Link href="/services" style={linkStyle}>Services</Link></li>
          <li><Link href="/gallery" style={linkStyle}>Gallery</Link></li>
          <li><Link href="/faq" style={linkStyle}>FAQ</Link></li>
          <li><Link href="/contact" style={linkStyle}>Contact / Booking</Link></li>
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ flex: '1 1 200px' }}
      >
        <h4 style={{ marginBottom: '0.8rem' }}>Get in Touch</h4>
        <p>Email: <a href="mailto:info@shuttersnap.com" style={linkStyle}>info@shuttersnap.com</a></p>
        <p>Phone: <a href="tel:+919999999999" style={linkStyle}>+91 99999 99999</a></p>
        <p>Instagram: <a href="https://instagram.com/shuttersnap" target="_blank" rel="noopener noreferrer" style={linkStyle}>@shuttersnap</a></p>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          marginTop: '2rem',
          borderTop: '1px solid #333',
          paddingTop: '1rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#aaa'
        }}
      >
        © {new Date().getFullYear()} ShutterSnap Photography. All rights reserved.
      </motion.div>
    </motion.footer>
  )
}

const linkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  transition: 'color 0.3s',
  fontWeight: '400'
}
