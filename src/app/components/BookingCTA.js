'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BookingCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#fff',
        color: '#222',
        padding: '5rem 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '2px solid #eee',
        borderBottom: '2px solid #eee',
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          fontSize: '0.9rem',
          color: '#ff6a00',
          marginBottom: '0.8rem',
        }}
      >
        Let’s Create Something Beautiful
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          fontSize: '2.2rem',
          marginBottom: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Ready to Book Your Session?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          fontSize: '1.1rem',
          maxWidth: '700px',
          marginBottom: '1.4rem',
          color: '#555',
          lineHeight: '1.8',
        }}
      >
        Whether it’s your big day, a creative shoot, or a milestone worth preserving — we’re here to turn your moments into timeless memories. With expert lighting, artistic angles, and heartfelt storytelling, your vision is in good hands.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontSize: '1rem',
          color: '#666',
          marginBottom: '2.5rem',
        }}
      >
        Don’t wait for perfect — let’s capture it together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/contact">
          <span
            style={{
              backgroundColor: isHovered ? '#ff6a00' : '#222',
              color: '#fff',
              padding: '0.85rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: isHovered
                ? '0 0 20px rgba(255, 106, 0, 0.5)'
                : '0 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease-in-out',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book Now
          </span>
        </Link>
      </motion.div>
    </motion.section>
  )
}
