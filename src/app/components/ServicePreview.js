'use client'
import { motion } from 'framer-motion'

export default function ServicePreview() {
  return (
    <section style={{ padding: '3rem' }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        Our Services
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {[
          { img: '/images/service1.jpg', title: 'Wedding Shoots' },
          { img: '/images/service2.jpg', title: 'Product Photography' },
          { img: '/images/service3.jpg', title: 'Fashion Shoots' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            style={{ width: '250px', textAlign: 'center' }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
            <h3 style={{ marginTop: '1rem' }}>{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
