'use client'
import { usePathname } from 'next/navigation'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <>
      <Navbar />
      {children}
      {!isHomePage && <Footer />}
    </>
  )
}
