"use client";
import GalleryGrid from "../components/GalleryGrid";
import { motion } from "framer-motion";

const photos = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.jpg",
];

export default function GalleryPage() {
  return (
    <section
      style={{
        padding: "0.1rem 2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#222",
          marginBottom: "2rem",
        }}
      >
        Explore Our Captures 
      </motion.h1>

      <GalleryGrid images={photos} />
    </section>
  );
}
