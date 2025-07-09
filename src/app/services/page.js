'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import serviceData from '@/app/data/services'

export default function ServicesPage() {
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
        Our Photography Services
      </motion.h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {serviceData.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              width: '320px',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              style={{
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />

            <h2 style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#222' }}>
              {service.title}
            </h2>

            <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
              {service.description.substring(0, 100)}...
            </p>

            <Link href={`/services/${service.slug}`}>
              <span
                style={{
                  padding: '0.6rem 1.2rem',
                  backgroundColor: '#ff6a00',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                Read More →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
