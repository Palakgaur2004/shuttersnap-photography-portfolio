'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Do you offer services outside Indore?",
    answer: "Yes, we provide photography services across India and are available for international assignments as well."
  },
  {
    question: "How do I book a session?",
    answer: "Simply head to the Contact / Booking page and fill out the form. We’ll get back to you within 24 hours."
  },
  {
    question: "How long does it take to deliver the photos?",
    answer: "We usually deliver fully edited photos within 7-10 business days after the shoot."
  },
  {
    question: "Do you provide videography services too?",
    answer: "Yes, we offer cinematic video coverage along with photography packages upon request."
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely! All our packages are flexible. You can mix and match services based on your needs."
  },
  {
    question: "What kind of events do you cover?",
    answer: "We cover weddings, pre-weddings, birthdays, corporate events, product shoots, and more."
  },
  {
    question: "What are your payment terms?",
    answer: "We take a 50% advance at the time of booking and the rest after final delivery of content."
  },
  {
    question: "Do you offer prints or albums?",
    answer: "Yes, we offer premium quality albums and prints as add-ons. Let us know while booking."
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section style={{
      padding: '5rem 2rem',
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: '#fff'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        marginBottom: '0.9rem',
        color: '#222'
      }}>
        Frequently Asked Questions 
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#fafafa',
            transition: 'all 0.3s ease'
          }}>
            <button
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#333',
                background: 'none',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {openIndex === index && (
              <div style={{
                padding: '0 1rem 1rem',
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: '1.5'
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
