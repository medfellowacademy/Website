import { NextResponse } from 'next/server';
import { getCountryPages, createCountryPage } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getCountryPages(false);
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const page = await createCountryPage(body);
    return NextResponse.json({ data: page });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
