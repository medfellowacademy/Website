import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await cmsClient
      .from('cms_programs')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, error } = await cmsClient
      .from('cms_programs')
      .insert({ ...body, updated_at: new Date().toISOString() })
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
