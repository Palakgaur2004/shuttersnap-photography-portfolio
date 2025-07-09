'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem'
    }}>

      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          flex: '1 1 450px',
          maxWidth: '600px',
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
          color: '#222',
        }}>
          Welcome to <span style={{ fontFamily: `"Pacifico", cursive` }}>Shutter</span><span>Snap</span>
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          lineHeight: '1.7',
        }}>
          At <strong>ShutterSnap Photography</strong>, we believe in capturing real emotions, unique moments, and timeless beauty.
          From intimate weddings to bold product shoots, every frame we capture is a reflection of our passion, creativity, and professionalism.
        </p>

        <p style={{
          fontSize: '1.05rem',
          color: '#666',
          marginTop: '1.5rem',
        }}>
          We don’t just take photos — we preserve memories that matter. Our approach blends artistic storytelling with technical excellence, ensuring every image tells a tale you’ll want to relive again and again.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Why choose ShutterSnap?</h4>
          <ul style={{
            listStyleType: 'none',
            paddingLeft: 'rem',
            color: '#444',
            fontSize: '1rem',
            lineHeight: '1.6',
          }}>
            <li>10+ years of hands-on photography experience</li>
            <li>Creative vision blended with cutting-edge equipment</li>
            <li>Fully customized shoot plans for every client</li>
            <li>Fast delivery with professional editing</li>
            <li>Friendly, flexible, and client-first team</li>
          </ul>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          flex: '0.3 1 400px',
          textAlign: 'center',
          marginLeft: 'auto',
          alignSelf: 'flex-start'
        }}
      >
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '500',
          marginBottom: '1rem',
          color: '#333',
        }}>
          Meet the Faces Behind ShutterSnap
        </h3>

        <Image
          src="/images/team.jpg"
          alt="Our Team"
          width={500}
          height={400}
          style={{
            borderRadius: '20px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            width: '100%',
            height: 'auto'
          }}
        />
      </motion.div>
    </section>
  )
}
