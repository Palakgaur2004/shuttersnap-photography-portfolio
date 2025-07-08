// components/Footer.js
export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', background: '#222', color: '#ccc' }}>
      <p>© {new Date().getFullYear()} ShutterSnap Photography. All rights reserved.</p>
    </footer>
  )
}
