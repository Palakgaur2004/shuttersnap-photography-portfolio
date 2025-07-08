// components/ServicePreview.js
export default function ServicePreview() {
  return (
    <section style={{ padding: '3rem' }}>
      <h2 style={{ textAlign: 'center' }}>Our Services</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ width: '250px', textAlign: 'center' }}>
          <img src="/images/service1.jpg" alt="Wedding" style={{ width: '100%' }} />
          <h3>Wedding Shoots</h3>
        </div>
        <div style={{ width: '250px', textAlign: 'center' }}>
          <img src="/images/service2.jpg" alt="Product" style={{ width: '100%' }} />
          <h3>Product Photography</h3>
        </div>
        <div style={{ width: '250px', textAlign: 'center' }}>
          <img src="/images/service3.jpg" alt="Fashion" style={{ width: '100%' }} />
          <h3>Fashion Shoots</h3>
        </div>
      </div>
    </section>
  )
}
