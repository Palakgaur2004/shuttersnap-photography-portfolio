'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicePage({ service }) {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        {service.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}
      >
        {service.gallery.slice(0, 3).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${service.title} ${index + 1}`}
            width={340}
            height={240}
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: '1.1rem',
          color: '#444',
          lineHeight: '1.8',
          marginBottom: '1.2rem',
          textAlign: 'center',
          maxWidth: '1000px',
          marginInline: 'auto',
        }}
      >
        {service.description}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#000',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        {service.price}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <Link href="/services">
          <span style={{
            padding: '0.7rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: '#f0f0f0',
            color: '#333',
            fontWeight: 500,
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}>
            ← Back to Services
          </span>
        </Link>

        <Link href="/contact">
          <span style={{
            padding: '0.7rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: '#ff6a00',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(255,106,0,0.3)',
          }}>
            Enquire Now
          </span>
        </Link>
      </motion.div>
    </div>
  )
}
