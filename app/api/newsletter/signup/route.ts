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

    // TODO: Integrate with newsletter service (Mailchimp, ConvertKit, etc.)
    // const response = await mailchimp.lists.addListMember(LIST_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    // })

    console.log('Newsletter signup:', email)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

