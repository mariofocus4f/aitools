import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'domain', 'shortDescription', 'submitterEmail']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.submitterEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate domain format (basic)
    const domainRegex = /^https?:\/\/.+/
    if (!domainRegex.test(data.domain)) {
      return NextResponse.json(
        { error: 'Invalid domain URL. Must start with http:// or https://' },
        { status: 400 }
      )
    }

    // TODO: Save to database with status 'new'
    // const submission = await prisma.submission.create({
    //   data: {
    //     submitterName: data.submitterName,
    //     submitterEmail: data.submitterEmail,
    //     toolData: {
    //       name: data.name,
    //       domain: data.domain,
    //       shortDescription: data.shortDescription,
    //       longDescription: data.longDescription,
    //       categories: data.categories,
    //       pricingModels: data.pricingModels,
    //     },
    //     status: 'new',
    //   },
    // })

    console.log('Tool submission received:', data)

    // TODO: Send notification email to admin
    // await sendEmail({
    //   to: process.env.ADMIN_EMAIL,
    //   subject: 'New tool submission',
    //   body: `New tool: ${data.name} (${data.domain})`,
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Submission received. We will review it within 2-3 business days.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

