// components/BookingCTA.js
export default function BookingCTA() {
  return (
    <section style={{ textAlign: 'center', padding: '3rem', background: '#000', color: '#fff' }}>
      <h2>Ready to Book a Session?</h2>
      <p>Let’s capture your story beautifully.</p>
      <a href="/booking" style={{ marginTop: '1rem', display: 'inline-block', background: '#fff', color: '#000', padding: '0.5rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
        Book Now
      </a>
    </section>
  )
}
