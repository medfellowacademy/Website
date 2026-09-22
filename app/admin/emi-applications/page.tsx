'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, CheckCircle, XCircle, CreditCard, ExternalLink } from 'lucide-react';

interface EmiApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  program: string;
  status: 'pending_review' | 'approved' | 'not_eligible';
  emi_months: number | null;
  emi_monthly_amount: number | null;
  created_at: string;
}

const STATUS_CONFIG = {
  pending_review: { label: 'Pending Review', color: 'bg-amber-100 text-amber-700', icon: Clock },
  approved:       { label: 'Approved',       color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
  not_eligible:   { label: 'Not Eligible',   color: 'bg-red-100 text-red-600', icon: XCircle },
};

export default function EmiApplicationsPage() {
  const [items, setItems] = useState<EmiApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/admin/emi-applications')
      .then((r) => r.json())
      .then((j) => setItems(j.data ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const counts = {
    all: items.length,
    pending_review: items.filter((i) => i.status === 'pending_review').length,
    approved: items.filter((i) => i.status === 'approved').length,
    not_eligible: items.filter((i) => i.status === 'not_eligible').length,
  };

  const filtered = items.filter((item) => {
    const matchStatus = filterStatus === 'all' || item.status === filterStatus;
    const q = search.trim().toLowerCase();
    const matchSearch = !q || `${item.full_name} ${item.email} ${item.phone} ${item.program}`.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">EMI Applications</h1>
        <p className="text-gray-400 text-sm mt-0.5">
          Fee installment requests submitted at <code className="bg-gray-100 px-1 rounded">/emi-application</code> — review and approve to set the plan and notify the applicant.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {(['all', ...Object.keys(STATUS_CONFIG)] as const).map((key) => {
          const cfg = key === 'all' ? { label: 'All', color: 'bg-gray-100 text-gray-700' } : STATUS_CONFIG[key as keyof typeof STATUS_CONFIG];
          return (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${filterStatus === key ? 'ring-2 ring-[#15401E]/30' : ''} ${cfg.color}`}
            >
              {cfg.label} ({counts[key as keyof typeof counts]})
            </button>
          );
        })}
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, email, phone, program…"
        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white"
      />

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">
          <CreditCard className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">{items.length === 0 ? 'No EMI applications yet' : 'No records match your search'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Applicant</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Program</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Submitted</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((row) => {
                const cfg = STATUS_CONFIG[row.status] ?? STATUS_CONFIG.pending_review;
                const Icon = cfg.icon;
                return (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-gray-900">{row.full_name}</p>
                      <p className="text-xs text-gray-400">{row.email} · {row.phone}</p>
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">{row.program || '—'}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${cfg.color}`}>
                        <Icon className="w-3 h-3" /> {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">{new Date(row.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                    <td className="px-5 py-3.5 text-right">
                      <Link href={`/admin/emi-applications/${row.id}`} className="inline-flex items-center gap-1 text-[#15401E] font-semibold hover:underline">
                        Review <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
