'use client'
import { useState, useEffect, useRef } from 'react'

const images = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
]

export default function ImageSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef(null)

  const delay = 3000 // 3 seconds

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, delay)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [index, paused])

  return (
    <div
      style={{
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </div>
  )
}
