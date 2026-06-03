import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  if (!path) {
    return NextResponse.json({ error: 'Missing path' }, { status: 400 });
  }

  const { data, error } = await cmsClient.storage
    .from('application-documents')
    .createSignedUrl(path, 3600); // valid for 1 hour

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ url: data.signedUrl });
}
