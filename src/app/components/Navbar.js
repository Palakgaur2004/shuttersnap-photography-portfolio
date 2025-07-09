'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '97%',
        zIndex: 1000,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        transition: 'all 0.4s ease-in-out',
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      {/* Logo/Brand */}
      <h1 style={{ fontSize: '1.8rem', margin: 0 }}>
        <span
          style={{
            fontFamily: `"Pacifico", cursive`,
            color: scrolled ? '#000' : '#fff',
          }}
        >
          Shutter
        </span>
        <span
          style={{
            fontFamily: 'sans-serif',
            color: scrolled ? '#000' : '#fff',
          }}
        >
          Snap
        </span>
      </h1>

      {/* Navigation Links */}
      <ul
        style={{
          display: 'flex',
          gap: '1.2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Gallery', path: '/gallery' },
          { label: 'FAQ', path: '/faq' },
          { label: 'Contact / Booking', path: '/contact' },
        ].map((item, index) => (
          <li key={index}>
            <Link href={item.path} passHref>
              <span
                style={{
                  color: scrolled ? '#000' : '#fff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '0.3rem 0.6rem',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
