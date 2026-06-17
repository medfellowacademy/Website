import { NextResponse } from 'next/server';
import { getCustomPages, createCustomPage } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getCustomPages(false);
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const page = await createCustomPage(body);
    return NextResponse.json({ data: page });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
