import { NextRequest, NextResponse } from 'next/server'
import { mockTools } from '@/lib/mockData'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const toolId = searchParams.get('tool_id')

  if (!toolId) {
    return NextResponse.json({ error: 'Missing tool_id parameter' }, { status: 400 })
  }

  const tool = mockTools.find(t => t.id === toolId)

  if (!tool) {
    return NextResponse.json({ error: 'Tool not found' }, { status: 404 })
  }

  // TODO: Log click event to analytics database
  // await logAffiliateClick({
  //   toolId,
  //   timestamp: new Date(),
  //   userAgent: request.headers.get('user-agent'),
  //   referer: request.headers.get('referer'),
  // })

  const redirectUrl = tool.affiliateProgram?.affiliateLink || `https://${tool.domain}`

  // Redirect to affiliate link or tool website
  return NextResponse.redirect(redirectUrl, { status: 302 })
}

