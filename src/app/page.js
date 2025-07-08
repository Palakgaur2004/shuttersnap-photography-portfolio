// pages/index.js
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import AboutSection from './components/AboutSection'
import ServicePreview from './components/ServicePreview'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import './globals.css'
export default function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <AboutSection />
      <ServicePreview />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </>
  )
}
