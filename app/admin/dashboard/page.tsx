import { getCmsStats, getPrograms, getFaculty, cmsClient } from '@/lib/cms';
import Link from 'next/link';
import { BookOpen, Users, MessageSquare, Settings, PlusCircle, Eye, ClipboardList, Inbox } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  let stats = {
    programs: { total: 0, published: 0 },
    faculty: { total: 0, published: 0 },
    testimonials: { total: 0, published: 0 },
  };
  let recentPrograms: any[] = [];
  let recentFaculty: any[] = [];
  let appStats = { total: 0, new: 0 };
  let enquiryStats = { total: 0, new: 0 };

  try {
    const [cmsStats, programs, faculty, apps, enquiries] = await Promise.all([
      getCmsStats(),
      getPrograms().then((p) => p.slice(0, 5)),
      getFaculty().then((f) => f.slice(0, 4)),
      cmsClient.from('applications').select('id, status'),
      cmsClient.from('contact_enquiries').select('id, status'),
    ]);
    stats = cmsStats;
    recentPrograms = programs;
    recentFaculty = faculty;
    if (apps.data) {
      appStats.total = apps.data.length;
      appStats.new = apps.data.filter((a: any) => a.status === 'new').length;
    }
    if (enquiries.data) {
      enquiryStats.total = enquiries.data.length;
      enquiryStats.new = enquiries.data.filter((e: any) => e.status === 'new').length;
    }
  } catch {}

  const STAT_CARDS = [
    { label: 'Applications',   value: appStats.total,           sub: `${appStats.new} new`,               icon: ClipboardList, href: '/admin/applications', color: 'bg-[#15401E]' },
    { label: 'Enquiries',      value: enquiryStats.total,       sub: `${enquiryStats.new} new`,            icon: Inbox,         href: '/admin/enquiries',    color: 'bg-blue-500' },
    { label: 'Programs',       value: stats.programs.total,     sub: `${stats.programs.published} live`,   icon: BookOpen,      href: '/admin/programs',     color: 'bg-indigo-500' },
    { label: 'Faculty',        value: stats.faculty.total,      sub: `${stats.faculty.published} live`,    icon: Users,         href: '/admin/faculty',      color: 'bg-emerald-500' },
    { label: 'Testimonials',   value: stats.testimonials.total, sub: `${stats.testimonials.published} live`, icon: MessageSquare, href: '/admin/testimonials', color: 'bg-amber-500' },
    { label: 'Site Settings',  value: '—',                      sub: 'Manage content',                     icon: Settings,      href: '/admin/settings',     color: 'bg-purple-500' },
  ];

  const QUICK_ACTIONS = [
    { label: 'View Applications', href: '/admin/applications', icon: ClipboardList, color: 'text-[#15401E] bg-[#e8f2ea] hover:bg-[#d4ebd7]' },
    { label: 'Add New Program',   href: '/admin/programs/new', icon: PlusCircle,    color: 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100' },
    { label: 'Add Faculty',       href: '/admin/faculty/new',  icon: PlusCircle,    color: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100' },
    { label: 'View Website',      href: '/',                   icon: Eye,           color: 'text-gray-600 bg-slate-50 hover:bg-slate-100', external: true },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome back — here&apos;s an overview of your content and leads</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {STAT_CARDS.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-0.5">{s.value}</div>
              <div className="text-sm font-semibold text-gray-700">{s.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
            </Link>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-base font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {QUICK_ACTIONS.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.label}
                href={a.href}
                target={a.external ? '_blank' : undefined}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${a.color}`}
              >
                <Icon className="w-4 h-4" />
                {a.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent programs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-800">Recent Programs</h2>
            <Link href="/admin/programs" className="text-xs text-[#15401E] font-semibold hover:underline">View all →</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentPrograms.length === 0 ? (
              <div className="p-5 text-center text-gray-400 text-sm">
                No programs yet.{' '}
                <Link href="/admin/programs/new" className="text-[#15401E] font-semibold hover:underline">Create one →</Link>
              </div>
            ) : recentPrograms.map((p) => (
              <div key={p.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50">
                <span className="text-xl">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-800 truncate">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.duration} · {p.eligibility}</div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.is_published ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                  {p.is_published ? 'Live' : 'Draft'}
                </span>
                <Link href={`/admin/programs/${p.id}`} className="text-xs text-[#15401E] hover:underline ml-1">Edit</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recent faculty */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-800">Faculty</h2>
            <Link href="/admin/faculty" className="text-xs text-[#15401E] font-semibold hover:underline">View all →</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentFaculty.length === 0 ? (
              <div className="p-5 text-center text-gray-400 text-sm">
                No faculty yet.{' '}
                <Link href="/admin/faculty/new" className="text-[#15401E] font-semibold hover:underline">Add one →</Link>
              </div>
            ) : recentFaculty.map((f) => (
              <div key={f.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-[#15401E] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {f.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-800 truncate">{f.name}</div>
                  <div className="text-xs text-gray-400 truncate">{f.specialty}</div>
                </div>
                <Link href={`/admin/faculty/${f.id}`} className="text-xs text-[#15401E] hover:underline">Edit</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
