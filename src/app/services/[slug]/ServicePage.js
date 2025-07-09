'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicePage({ service }) {
  return (
    <div
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.3rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        {service.title}
      </motion.h1>

      {/* Gallery Images */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          gap: '1.2rem',
          justifyContent: 'center',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}
      >
        {service.gallery.slice(0, 3).map((img, index) => (
          <div key={index} style={{ maxWidth: '340px', width: '100%' }}>
            <Image
              src={img}
              alt={`${service.title} ${index + 1}`}
              width={340}
              height={240}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: '1.05rem',
          color: '#444',
          lineHeight: '1.8',
          marginBottom: '1.5rem',
          textAlign: 'center',
          maxWidth: '900px',
          marginInline: 'auto',
        }}
      >
        {service.description}
      </motion.p>

      {/* Price */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#000',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        {service.price}
      </motion.p>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {/* Back to Services Button */}
        <Link href="/services">
          <span
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.3rem',
              borderRadius: '8px',
              backgroundColor: '#eee',
              color: '#333',
              fontWeight: 500,
              cursor: 'pointer',
              border: '1px solid #ccc',
              textAlign: 'center',
              minWidth: '140px',
            }}
          >
            ← Back to Services
          </span>
        </Link>

        {/* Enquire Now Button */}
        <Link href="/contact">
          <span
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.3rem',
              borderRadius: '8px',
              backgroundColor: '#ff6a00',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'center',
              minWidth: '140px',
              boxShadow: '0 4px 12px rgba(255,106,0,0.3)',
            }}
          >
            Enquire Now →
          </span>
        </Link>
      </motion.div>
    </div>
  )
}
