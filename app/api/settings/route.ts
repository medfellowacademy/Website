import { NextResponse } from 'next/server';
import { getSettings } from '@/lib/cms';

export const dynamic = 'force-dynamic';

// Public settings endpoint — used by Footer, Navbar, AnnouncementBar (client components)
export async function GET() {
  try {
    const settings = await getSettings();
    // Map whatsapp_number → contact_whatsapp for Footer/Navbar compatibility
    if (settings.whatsapp_number && !settings.contact_whatsapp) {
      settings.contact_whatsapp = String(settings.whatsapp_number);
    }
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({});
  }
}
