import { NextRequest, NextResponse } from 'next/server'

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

    // For development - if token is invalid, show maintenance message
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: Newsletter signup attempted with email:', email)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Newsletter w trakcie konfiguracji. Dziękujemy za zainteresowanie!' 
        },
        { status: 200 }
      )
    }

    // Use direct REST API call to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILERLITE_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        status: 'unconfirmed' // This triggers double opt-in
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('MailerLite API error:', response.status, errorData)
      
      if (response.status === 400) {
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

    const data = await response.json()
    console.log('Newsletter signup successful:', email, data)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Please check your email to confirm subscription' 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Newsletter signup error:', error)
    
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

