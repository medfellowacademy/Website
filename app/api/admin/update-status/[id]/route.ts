import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const { table, status, notes } = body;

  if (!table) return NextResponse.json({ error: 'table is required' }, { status: 400 });

  const updatePayload: Record<string, any> = {};
  if (status !== undefined) updatePayload.status = status;
  if (notes !== undefined) updatePayload.notes = notes;

  if (Object.keys(updatePayload).length === 0) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 });
  }

  const { data, error } = await cmsClient
    .from(table)
    .update(updatePayload)
    .eq('id', id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, data });
}
