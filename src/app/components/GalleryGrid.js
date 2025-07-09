'use client'
import Image from 'next/image'
import styles from './GalleryGrid.module.css'

export default function GalleryGrid({ images }) {
  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  )
}
