'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact / Booking', path: '/contact' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          backgroundColor: '#fff',
          boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
          borderBottom: '1px solid #eee',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <h1 style={{ fontSize: '1.6rem', margin: 0 }}>
          <span style={{ fontFamily: `"Pacifico", cursive`, color: '#000' }}>Shutter</span>
          <span style={{ fontFamily: 'sans-serif', color: '#000' }}>Snap</span>
        </h1>

        {/* Hamburger (mobile only) */}
        {isClient && (
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              cursor: 'pointer',
              gap: '5px',
              zIndex: 1100,
            }}
          >
            {!menuOpen ? (
              <>
                <span style={{ width: '25px', height: '3px', backgroundColor: '#000' }}></span>
                <span style={{ width: '25px', height: '3px', backgroundColor: '#000' }}></span>
                <span style={{ width: '25px', height: '3px', backgroundColor: '#000' }}></span>
              </>
            ) : (
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>✖</span>
            )}
          </div>
        )}

        {/* Desktop links (hide on mobile using media query) */}
        {isClient && (
          <ul className="nav-links" style={{
            display: 'flex',
            gap: '1.2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <span style={{
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    cursor: 'pointer',
                  }}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Backdrop */}
      {isClient && menuOpen && (
        <div
          className="backdrop show"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isClient && menuOpen && (
        <ul className="mobile-menu open">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.path} onClick={() => setMenuOpen(false)}>
                <span className="nav-link">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }

        .backdrop.show {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          z-index: 999;
        }

        .mobile-menu.open {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          list-style: none;
          padding: 2rem;
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background-color: #fff;
          z-index: 1000;
          margin: 0;
          animation: slideDown 0.3s ease-out;
        }

        .nav-link {
          color: #000;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
 