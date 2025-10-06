import { NextRequest, NextResponse } from 'next/server'
import MailerLite from 'mailerlite-api-v2-node'

const mailerLite = new MailerLite(process.env.MAILERLITE_API_TOKEN!)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate API token
    if (!process.env.MAILERLITE_API_TOKEN) {
      console.error('MAILERLITE_API_TOKEN not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Add subscriber to MailerLite with double opt-in
    const response = await mailerLite.subscribers.create({
      email: email,
      groups: [process.env.MAILERLITE_GROUP_ID || 'default'],
      status: 'unconfirmed', // This triggers double opt-in
      fields: {
        source: 'trustyai-website',
        signup_date: new Date().toISOString()
      }
    })

    console.log('Newsletter signup successful:', email, response)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Please check your email to confirm subscription' 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Newsletter signup error:', error)
    
    // Handle specific MailerLite errors
    if (error.response?.status === 400) {
      return NextResponse.json(
        { error: 'Email already subscribed or invalid' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

