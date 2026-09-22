import { NextResponse } from 'next/server';
import { getEmiApplications } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getEmiApplications();
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
