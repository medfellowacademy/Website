'use client';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, CheckCircle, Clock } from 'lucide-react';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  created_at: string;
}

const STATUS_CONFIG = {
  new:       { label: 'New',       color: 'bg-blue-100 text-blue-700',       icon: Clock },
  contacted: { label: 'Contacted', color: 'bg-amber-100 text-amber-700',     icon: Phone },
  resolved:  { label: 'Resolved',  color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
};

export default function EnquiriesPage() {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      const json = await res.json();
      setItems(json.data ?? []);
    } catch { /* ignore */ }
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function updateStatus(id: string, status: Enquiry['status']) {
    try {
      const res = await fetch(`/api/admin/update-status/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, table: 'contact_enquiries' }),
      });
      if (!res.ok) throw new Error();
      setItems((p) => p.map((x) => x.id === id ? { ...x, status } : x));
      showToast('Status updated');
    } catch { showToast('Update failed'); }
  }

  const filtered = items.filter((item) => {
    const matchSearch = !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      (item.phone ?? '').includes(search) ||
      item.message.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const counts = {
    all: items.length,
    new: items.filter((i) => i.status === 'new').length,
    contacted: items.filter((i) => i.status === 'contacted').length,
    resolved: items.filter((i) => i.status === 'resolved').length,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Enquiries</h1>
          <p className="text-gray-400 text-sm mt-0.5">{items.length} total messages</p>
        </div>
        <button onClick={load} className="px-4 py-2 text-sm font-semibold bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
          ↻ Refresh
        </button>
      </div>

      {/* Status filter tabs */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'new', 'contacted', 'resolved'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              filterStatus === s
                ? 'bg-[#15401E] text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            {s === 'all' ? 'All' : STATUS_CONFIG[s].label}
            <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${filterStatus === s ? 'bg-white/20' : 'bg-gray-100'}`}>
              {counts[s]}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name, email, phone, message…"
          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white"
        />
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading enquiries…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-4xl mb-3">💬</div>
            <div className="text-gray-500 font-semibold mb-1">No enquiries yet</div>
            <div className="text-gray-400 text-sm">Messages from the Contact page will appear here.</div>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {filtered.map((item) => {
              const cfg = STATUS_CONFIG[item.status];
              const StatusIcon = cfg.icon;
              const isExpanded = expanded === item.id;
              return (
                <div key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-start gap-3 px-5 py-4">
                    {/* Expand */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : item.id)}
                      className="mt-0.5 text-gray-400 hover:text-gray-600 shrink-0"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                      {item.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${cfg.color}`}>
                          <StatusIcon className="w-2.5 h-2.5" />
                          {cfg.label}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.email}{item.phone ? ` · ${item.phone}` : ''}</div>
                      {item.subject && <div className="text-xs text-gray-600 font-medium mt-0.5">Re: {item.subject}</div>}
                      <p className={`text-sm text-gray-600 mt-1 ${isExpanded ? '' : 'line-clamp-2'}`}>{item.message}</p>

                      {isExpanded && (
                        <div className="mt-3">
                          <div className="text-xs text-gray-400 mb-2">
                            Sent: {new Date(item.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                          </div>
                          {/* Status change */}
                          <div>
                            <div className="text-xs font-semibold text-gray-600 mb-1.5">Update Status</div>
                            <div className="flex flex-wrap gap-1.5">
                              {(Object.keys(STATUS_CONFIG) as Enquiry['status'][]).map((s) => (
                                <button
                                  key={s}
                                  onClick={() => updateStatus(item.id, s)}
                                  className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-all border ${
                                    item.status === s
                                      ? STATUS_CONFIG[s].color + ' border-transparent'
                                      : 'border-gray-200 text-gray-500 hover:border-gray-300 bg-white'
                                  }`}
                                >
                                  {STATUS_CONFIG[s].label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Date */}
                    <div className="text-xs text-gray-400 shrink-0 text-right hidden sm:block">
                      {new Date(item.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
