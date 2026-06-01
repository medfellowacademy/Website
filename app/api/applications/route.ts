import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, email, phone, program_interest } = body;

    if (!full_name || !email || !phone || !program_interest) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { data, error } = await cmsClient
      .from('applications')
      .insert([{ full_name, email, phone, program_interest, status: 'new' }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Application error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const { data, error } = await cmsClient
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}
