import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: Request) {
  console.log(request.nextUrl)

  return NextResponse.json({})
}
