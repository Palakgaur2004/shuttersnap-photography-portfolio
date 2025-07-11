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
          padding: '0.5rem 3rem',
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

        {/* Desktop links */}
        {isClient && (
          <ul className="nav-links" style={{
            display: 'flex',
            gap: '1.9rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <span className="nav-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Backdrop */}
      {isClient && menuOpen && (
        <div className="backdrop show" onClick={() => setMenuOpen(false)} />
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

        /* 🌟 NEW DESKTOP NAV STYLE 🌟 */
        .nav-text {
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: -0.3px;
          color: #111;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-text::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -3px;
          background-color: #ff6a00;
          transition: width 0.3s ease;
        }

        .nav-text:hover {
          color: #ff6a00;
        }

        .nav-text:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  )
}
