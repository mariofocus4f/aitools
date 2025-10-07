import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

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

    // Persist locally (JSON file) to enable end-to-end testing without DB
    try {
      const submissionsDir = path.join(process.cwd(), 'data')
      const filePath = path.join(submissionsDir, 'submissions.json')
      await fs.mkdir(submissionsDir, { recursive: true })

      const nowIso = new Date().toISOString()
      const record = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        status: 'new',
        submittedAt: nowIso,
        submitterName: data.submitterName || null,
        submitterEmail: data.submitterEmail,
        tool: {
          name: data.name,
          domain: data.domain,
          shortDescription: data.shortDescription,
          longDescription: data.longDescription || null,
          categories: data.categories || [],
          pricingModels: data.pricingModels || [],
        },
      }

      let current: any[] = []
      try {
        const raw = await fs.readFile(filePath, 'utf8')
        current = JSON.parse(raw)
        if (!Array.isArray(current)) current = []
      } catch (_) {
        // file not found or invalid -> start fresh
        current = []
      }

      current.unshift(record)
      await fs.writeFile(filePath, JSON.stringify(current, null, 2), 'utf8')
    } catch (persistErr) {
      console.error('Local submissions persist error:', persistErr)
      // continue; we still accept submission even if local write fails
    }

    console.log('Tool submission received:', data)

    // Optional: push to Airtable if configured
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE) {
      try {
        const airtableResp = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE)}`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    // Minimal-safe payload compatible with generic columns
                    Name: data.name,
                    Notes: `${data.shortDescription || ''}\n\nDomain: ${data.domain}\nCategories: ${(Array.isArray(data.categories) ? data.categories.join(', ') : '')}\nPricing: ${(Array.isArray(data.pricingModels) ? data.pricingModels.join(', ') : '')}`.trim(),
                    // Assignee omitted (Collaborator column requires user id)
                    // Status omitted to avoid select permissions; manage in Airtable UI
                  },
                },
              ],
            }),
          })

        if (!airtableResp.ok) {
          const atErr = await airtableResp.text().catch(() => '')
          console.error('Airtable error:', airtableResp.status, atErr)
        }
      } catch (airtableError) {
        console.error('Airtable push failed:', airtableError)
      }
    }

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

