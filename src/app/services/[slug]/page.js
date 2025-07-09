'use client' // Now we're using client rendering

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import serviceData from '@/app/data/services'
import ServicePage from './ServicePage'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const [service, setService] = useState(null)

  useEffect(() => {
    if (slug) {
      const found = serviceData.find((item) => item.slug === slug)
      setService(found)
    }
  }, [slug])

  if (!service) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading or Service not found...</p>
  }

  return <ServicePage service={service} />
}
