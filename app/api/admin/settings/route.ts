import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await cmsClient
      .from('cms_site_settings')
      .select('*')
      .order('category')
      .order('key');
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data: data ?? [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { updates } = await request.json(); // { key: value, ... }
    const rows = Object.entries(updates as Record<string, any>).map(([key, value]) => ({
      key,
      value,
      updated_at: new Date().toISOString(),
    }));
    const { error } = await cmsClient
      .from('cms_site_settings')
      .upsert(rows, { onConflict: 'key' });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
