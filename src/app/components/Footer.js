// components/Footer.js
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#111',
      color: '#fff',
      padding: '3rem 2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '2rem',
      fontSize: '0.95rem'
    }}>
      {/* Brand Info */}
      <div style={{ flex: '1 1 200px' }}>
        <h3 style={{ fontFamily: `'Pacifico', cursive`, fontSize: '1.8rem', marginBottom: '1rem' }}>
          Shutter<span style={{ fontFamily: 'sans-serif' }}>Snap</span>
        </h3>
        <p>
          Capturing moments that matter. Based in India, available worldwide.
        </p>
      </div>

      {/* Quick Links */}
      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ marginBottom: '0.8rem' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li><a href="/" style={linkStyle}>Home</a></li>
          <li><a href="/services" style={linkStyle}>Services</a></li>
          <li><a href="/gallery" style={linkStyle}>Gallery</a></li>
          <li><a href="/faq" style={linkStyle}>FAQ</a></li>
          <li><a href="/contact" style={linkStyle}>Contact / Booking</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ marginBottom: '0.8rem' }}>Get in Touch</h4>
        <p>Email: <a href="mailto:info@shuttersnap.com" style={linkStyle}>info@shuttersnap.com</a></p>
        <p>Phone: <a href="tel:+919999999999" style={linkStyle}>+91 99999 99999</a></p>
        <p>Instagram: <a href="https://instagram.com/shuttersnap" target="_blank" style={linkStyle}>@shuttersnap</a></p>
      </div>

      {/* Copyright */}
      <div style={{
        width: '100%',
        marginTop: '2rem',
        borderTop: '1px solid #333',
        paddingTop: '1rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#aaa'
      }}>
        © {new Date().getFullYear()} ShutterSnap Photography. All rights reserved.
      </div>
    </footer>
  )
}

// Reusable link style
const linkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  transition: 'color 0.3s',
  fontWeight: '400'
}
