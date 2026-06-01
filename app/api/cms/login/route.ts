import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const adminEmail = process.env.CMS_ADMIN_EMAIL;
  const adminPassword = process.env.CMS_ADMIN_PASSWORD;

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.CMS_JWT_SECRET ?? 'fallback-secret');
  const token = await new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);

  const response = NextResponse.json({ success: true });
  response.cookies.set('cms_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });

  return response;
}
