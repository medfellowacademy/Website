import { NextResponse } from 'next/server';
import { getCountryPage } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ data: null }, { status: 400 });
  try {
    const data = await getCountryPage(slug);
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ data: null });
  }
}
