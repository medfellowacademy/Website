import { NextResponse } from 'next/server';
import { getEmiApplicationById } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await getEmiApplicationById(id);
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 404 });
  }
}
