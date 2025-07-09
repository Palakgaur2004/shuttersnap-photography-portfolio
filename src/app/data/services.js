const serviceData = [
  {
    slug: 'wedding-photography',
    title: 'Wedding Photography',
    description: 'Capture your special day with timeless elegance. Our wedding photography ensures every moment — from the first look to the last dance — is beautifully preserved with style and emotion.',
    price: 'Starting from ₹15,000',
    image: '/services/wedding-main.jpg',   // ✅ Corrected path
    gallery: [
      '/services/wedding1.jpg',
      '/services/wedding2.jpg',
      '/services/wedding3.jpg'
    ]
  },
  {
    slug: 'product-photography',
    title: 'Product Photography',
    description: 'Bring your products to life with high-quality images that sell. Perfect for e-commerce, catalogs, and social media, our product photography makes your brand shine.',
    price: 'Starting from ₹5,000',
    image: '/services/product-main.jpg',
    gallery: [
      '/services/product1.jpg',
      '/services/product2.jpg',
      '/services/product3.jpg'
    ]
  },
  {
    slug: 'event-coverage',
    title: 'Event Coverage',
    description: 'From conferences to birthdays, we provide professional event coverage that captures all the key moments and authentic energy of your occasion.',
    price: 'Starting from ₹8,000',
    image: '/services/event-main.jpg',
    gallery: [
      '/services/event1.jpg',
      '/services/event2.jpg',
      '/services/event3.jpg'
    ]
  }
]

export default serviceData
