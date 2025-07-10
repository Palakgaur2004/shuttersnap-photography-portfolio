import { NextResponse } from 'next/server'
import {connectToDB} from '@/lib/mongodb'
import Contact from '@/models/contact'
import { transporter, mailOptions } from '@/utils/mailer'

export async function POST(req) {
  try {
    // Step 1: Connect to MongoDB
    await connectToDB()

    // Step 2: Parse incoming request
    const body = await req.json()
    const { name, email, phone, message } = body

    // Step 3: Save to MongoDB
    const newContact = new Contact({ name, email, phone, message })
    await newContact.save()

    // Step 4: Send email notification
    await transporter.sendMail({
      ...mailOptions,
      subject: `📩 New message from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('❌ Email Sending Error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
