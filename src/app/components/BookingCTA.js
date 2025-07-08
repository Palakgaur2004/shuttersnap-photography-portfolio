'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function BookingCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
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
      <h3
        style={{
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          fontSize: '0.9rem',
          color: '#ff6a00',
          marginBottom: '0.8rem',
        }}
      >
        Let’s Create Something Beautiful
      </h3>

      <h2
        style={{
          fontSize: '2.2rem',
          marginBottom: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Ready to Book Your Session?
      </h2>

      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '700px',
          marginBottom: '1.4rem',
          color: '#555',
          lineHeight: '1.8',
        }}
      >
        Whether it’s your big day, a creative shoot, or a milestone worth preserving — we’re here to turn your moments into timeless memories. With expert lighting, artistic angles, and heartfelt storytelling, your vision is in good hands.
      </p>

      <p
        style={{
          fontSize: '1rem',
          color: '#666',
          marginBottom: '2.5rem',
        }}
      >
        Don’t wait for perfect — let’s capture it together.
      </p>

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
    </section>
  )
}
