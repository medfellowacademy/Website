import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: programId } = await params;
    const { modules } = await request.json();

    // Delete existing modules for this program
    const { error: delError } = await cmsClient
      .from('cms_curriculum_modules')
      .delete()
      .eq('program_id', programId);
    if (delError) return NextResponse.json({ error: delError.message }, { status: 500 });

    // Insert new modules if any
    if (modules && modules.length > 0) {
      const rows = modules.map((m: any, i: number) => ({
        program_id: programId,
        title: m.title,
        topics: m.topics,
        sort_order: i,
      }));
      const { error: insError } = await cmsClient
        .from('cms_curriculum_modules')
        .insert(rows);
      if (insError) return NextResponse.json({ error: insError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
