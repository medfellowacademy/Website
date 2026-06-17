'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, BookOpen, Users, MessageSquare,
  Settings, LogOut, Globe, ChevronRight, Menu, HelpCircle,
  ClipboardList, Inbox, MapPin, FileText
} from 'lucide-react';
import { useState } from 'react';

const NAV = [
  { href: '/admin/dashboard',     label: 'Dashboard',     icon: LayoutDashboard },
  { href: '/admin/applications',  label: 'Applications',  icon: ClipboardList },
  { href: '/admin/enquiries',     label: 'Enquiries',     icon: Inbox },
  { href: '/admin/programs',      label: 'Programs',      icon: BookOpen },
  { href: '/admin/faculty',       label: 'Faculty',       icon: Users },
  { href: '/admin/testimonials',  label: 'Testimonials',  icon: MessageSquare },
  { href: '/admin/faqs',          label: 'FAQs',          icon: HelpCircle },
  { href: '/admin/countries',     label: 'Country Pages', icon: MapPin },
  { href: '/admin/pages',         label: 'Custom Pages',  icon: FileText },
  { href: '/admin/settings',      label: 'Site Settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname.startsWith('/admin/login')) return <>{children}</>;

  async function handleLogout() {
    await fetch('/api/cms/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-[#15401E] text-white w-64">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center text-lg shrink-0">🏥</div>
          <div>
            <div className="font-bold text-sm leading-tight">MedFellow CMS</div>
            <div className="text-white/40 text-xs">Admin Dashboard</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                active
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: view site + logout */}
      <div className="p-3 border-t border-white/10 space-y-1">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-all"
        >
          <Globe className="w-4 h-4 shrink-0" />
          View Website
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:bg-red-500/20 hover:text-red-300 transition-all"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 flex">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4 shrink-0">
          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1 text-sm text-gray-500">
            {NAV.find((n) => pathname === n.href || pathname.startsWith(n.href + '/'))?.label ?? 'Admin'}
          </div>
          <a
            href="/"
            target="_blank"
            className="text-xs text-[#15401E] font-semibold hover:underline hidden sm:block"
          >
            ↗ View Site
          </a>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
