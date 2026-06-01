import { NextResponse } from 'next/server';
import { getSettings } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // cache for 60s

export async function GET() {
  try {
    const settings = await getSettings();
    return NextResponse.json(settings, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    });
  } catch {
    return NextResponse.json({}, { status: 200 });
  }
}
