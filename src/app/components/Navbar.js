'use client'
import { useEffect, useState } from 'react'

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
    <nav
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
      {/* Logo */}
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>
        <span style={{
          fontFamily: `'Pacifico', cursive`,
          color: scrolled ? '#000' : '#fff'
        }}>Shutter</span>
        <span style={{
          fontFamily: 'sans-serif',
          color: scrolled ? '#000' : '#fff'
        }}>Snap</span>
      </h1>

      {/* Navigation Links */}
      <ul style={{
        display: 'flex',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {['Home', 'Services', 'Gallery', 'Contact'].map((item, index) => (
          <li key={index}>
            <a
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={{
                color: scrolled ? '#000' : '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                padding: '0.3rem 0.6rem',
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
