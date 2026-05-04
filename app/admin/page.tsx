'use client';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';

type ContactEnquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
};

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  program: string;
  qualification: string;
  experience: string;
  message: string;
  status: string;
  created_at: string;
  dob?: string;
  gender?: string;
  reg_number?: string;
  state_council?: string;
  year_of_reg?: string;
  practice_type?: string;
  hospital_name?: string;
  clinic_name?: string;
  city?: string;
  mode_preference?: string;
  reason?: string;
};

type InvoiceItem = { desc: string; qty: number; rate: number };

type InvoiceData = {
  invoiceNo: string;
  date: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCity: string;
  program: string;
  items: InvoiceItem[];
  notes: string;
  taxPercent: number;
};

const PROGRAM_LABELS: Record<string, string> = {
  arthroscopy: 'Arthroscopy & Arthroplasty',
  gastro: 'Gastroenterology',
  reproductive: 'Reproductive Medicine',
  pain: 'Pain Management',
  diabeto: 'Diabetology',
  endo: 'Endocrinology',
  rheum: 'Rheumatology',
  neuro: 'Neurology',
  radio: 'Radiology',
  usg: 'Ultrasonography',
  cardio: 'Interventional Cardiology',
  ortho: 'Orthopedics',
  gyn: 'Gynecology & Obstetrics',
  surgery: 'General Surgery',
  spine: 'Spine Surgery',
  emergency: 'Emergency Medicine',
  critical: 'Critical Care Medicine',
};

function parseDocuments(msg: string | null | undefined): string[] {
  if (!msg) return [];
  
  // Try parsing as JSON first (new format with file paths)
  try {
    const parsed = JSON.parse(msg);
    if (Array.isArray(parsed)) {
      return parsed.filter(Boolean);
    }
  } catch {
    // Not JSON, try old format
  }
  
  // Fall back to old format: [Uploaded documents: file1.jpg, file2.pdf]
  const match = msg.match(/\[Uploaded documents: (.+?)\]/);
  if (!match) return [];
  return match[1].split(', ').filter(Boolean);
}

function fmt(n: number) {
  return n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'applications' | 'invoice'>('enquiries');
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<ContactEnquiry | Application | null>(null);

  const today = new Date().toISOString().split('T')[0];
  const due7 = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];
  const [inv, setInv] = useState<InvoiceData>({
    invoiceNo: `MFA-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`,
    date: today,
    dueDate: due7,
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientCity: '',
    program: '',
    items: [{ desc: 'Fellowship Program Fee', qty: 1, rate: 0 }],
    notes: 'Payment via NEFT / RTGS / UPI.\nPlease quote the invoice number as reference.',
    taxPercent: 18,
  });

  const ADMIN_PASSWORD = 'MedFellow@Admin2026';

  const fetchRef = useRef(0);

  const fetchData = () => {
    const id = ++fetchRef.current;
    Promise.all([
      supabase.from('contact_enquiries').select('*').order('created_at', { ascending: false }),
      supabase.from('applications').select('*').order('created_at', { ascending: false }),
    ]).then(([enquiryRes, appRes]) => {
      if (id !== fetchRef.current) return;
      if (enquiryRes.data) setEnquiries(enquiryRes.data);
      if (appRes.data) setApplications(appRes.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!authenticated) return;
    setLoading(true);
    fetchRef.current += 1;
    const id = fetchRef.current;
    Promise.all([
      supabase.from('contact_enquiries').select('*').order('created_at', { ascending: false }),
      supabase.from('applications').select('*').order('created_at', { ascending: false }),
    ]).then(([enquiryRes, appRes]) => {
      if (id !== fetchRef.current) return;
      if (enquiryRes.data) setEnquiries(enquiryRes.data);
      if (appRes.data) setApplications(appRes.data);
      setLoading(false);
    });
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const updateStatus = async (id: string, status: string, table: string) => {
    await supabase.from(table).update({ status }).eq('id', id);
    fetchData();
    setSelected(null);
  };

  // Invoice helpers
  const subtotal = inv.items.reduce((s, it) => s + it.qty * it.rate, 0);
  const taxAmt = Math.round(subtotal * inv.taxPercent / 100);
  const total = subtotal + taxAmt;

  const setItem = (idx: number, field: keyof InvoiceItem, val: string | number) =>
    setInv(prev => ({ ...prev, items: prev.items.map((it, i) => i === idx ? { ...it, [field]: val } : it) }));
  const addItem = () =>
    setInv(prev => ({ ...prev, items: [...prev.items, { desc: '', qty: 1, rate: 0 }] }));
  const removeItem = (idx: number) =>
    setInv(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== idx) }));
  const fillFromApp = (app: Application) => {
    const label = PROGRAM_LABELS[app.program] || app.program;
    setInv(prev => ({
      ...prev,
      invoiceNo: `MFA-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`,
      clientName: `Dr. ${app.first_name} ${app.last_name}`,
      clientEmail: app.email,
      clientPhone: app.phone,
      clientCity: app.city || '',
      program: label,
      items: [{ desc: `Fellowship – ${label}`, qty: 1, rate: 0 }],
    }));
    setActiveTab('invoice');
  };

  const statusColor = (status: string) => {
    const map: Record<string, string> = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
      pending: 'bg-orange-100 text-orange-800',
      reviewing: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
    };
    return map[status] || 'bg-gray-100 text-gray-800';
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-primary to-primary-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-primary">Admin Panel</h1>
            <p className="text-gray-500 mt-2">Med Fellow Academy</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {authError && <p className="text-red-600 text-sm">{authError}</p>}
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <div>
              <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
              <p className="text-xs text-gray-500">Med Fellow Academy</p>
            </div>
          </div>
          <button onClick={() => setAuthenticated(false)} className="text-sm text-gray-500 hover:text-red-600 transition-colors">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 print:hidden">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-3xl font-bold text-primary">{enquiries.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total Enquiries</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-3xl font-bold text-blue-600">{enquiries.filter(e => e.status === 'new').length}</p>
            <p className="text-sm text-gray-500 mt-1">New Enquiries</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-3xl font-bold text-orange-500">{applications.length}</p>
            <p className="text-sm text-gray-500 mt-1">Applications</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-3xl font-bold text-green-600">{applications.filter(a => a.status === 'pending').length}</p>
            <p className="text-sm text-gray-500 mt-1">Pending Review</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {([
              { key: 'enquiries', label: `Contact Enquiries (${enquiries.length})` },
              { key: 'applications', label: `Applications (${applications.length})` },
              { key: 'invoice', label: '🧾 Invoice Generator' },
            ] as { key: typeof activeTab; label: string }[]).map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition-colors ${activeTab === tab.key ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-gray-500 hover:text-primary'}`}
              >
                {tab.label}
              </button>
            ))}
            <button onClick={fetchData} className="ml-auto px-6 py-4 text-sm text-gray-500 hover:text-primary transition-colors whitespace-nowrap">
              {loading ? '⟳ Refreshing...' : '⟳ Refresh'}
            </button>
          </div>

          {/* Enquiries Table */}
          {activeTab === 'enquiries' && (
            <div className="overflow-x-auto">
              {enquiries.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <p className="text-4xl mb-3">📭</p>
                  <p>No enquiries yet</p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-gray-600">Name</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Email</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Phone</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Subject</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Date</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {enquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(enq)}>
                        <td className="px-6 py-4 font-medium text-gray-900">{enq.name}</td>
                        <td className="px-6 py-4 text-gray-600">{enq.email}</td>
                        <td className="px-6 py-4 text-gray-600">{enq.phone}</td>
                        <td className="px-6 py-4 text-gray-600 max-w-37.5 truncate">{enq.subject}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(enq.status)}`}>
                            {enq.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{new Date(enq.created_at).toLocaleDateString('en-IN')}</td>
                        <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                          <select
                            title="Update enquiry status"
                            value={enq.status}
                            onChange={(e) => updateStatus(enq.id, e.target.value, 'contact_enquiries')}
                            className="text-xs border border-gray-200 rounded px-2 py-1 outline-none"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Applications Table */}
          {activeTab === 'applications' && (
            <div className="overflow-x-auto">
              {applications.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <p className="text-4xl mb-3">📋</p>
                  <p>No applications yet</p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-gray-600">Name</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Email</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Phone</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Program</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Qualification</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Documents</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Date</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Action</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {applications.map((app) => {
                      const docs = parseDocuments(app.message);
                      const docCount = docs.length;
                      
                      return (
                        <tr key={app.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(app)}>
                          <td className="px-6 py-4 font-medium text-gray-900">{app.first_name} {app.last_name}</td>
                          <td className="px-6 py-4 text-gray-600">{app.email}</td>
                          <td className="px-6 py-4 text-gray-600">{app.phone}</td>
                          <td className="px-6 py-4 text-gray-600 max-w-37.5 truncate">{PROGRAM_LABELS[app.program] || app.program}</td>
                          <td className="px-6 py-4 text-gray-600">{app.qualification}</td>
                          <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                            {docCount > 0 ? (
                              <button
                                onClick={() => setSelected(app)}
                                className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                                title={`View ${docCount} document${docCount > 1 ? 's' : ''}`}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                {docCount} doc{docCount > 1 ? 's' : ''}
                              </button>
                            ) : (
                              <span className="text-gray-400 text-xs">No docs</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(app.status)}`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{new Date(app.created_at).toLocaleDateString('en-IN')}</td>
                          <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                            <select
                              title="Update application status"
                              value={app.status}
                              onChange={(e) => updateStatus(app.id, e.target.value, 'applications')}
                              className="text-xs border border-gray-200 rounded px-2 py-1 outline-none"
                            >
                              <option value="pending">Pending</option>
                              <option value="reviewing">Reviewing</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="px-6 py-4" onClick={e => e.stopPropagation()}>
                            <button
                              onClick={() => fillFromApp(app)}
                              className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors font-medium whitespace-nowrap"
                            >
                              🧾 Invoice
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Invoice Generator */}
          {activeTab === 'invoice' && (
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">

                {/* ── Form ── */}
                <div className="space-y-6">

                  {/* Auto-fill */}
                  {applications.length > 0 && (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Auto-fill from Application</p>
                      <select
                        title="Select application"
                        defaultValue=""
                        onChange={e => { const app = applications.find(a => a.id === e.target.value); if (app) fillFromApp(app); }}
                        className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white"
                      >
                        <option value="" disabled>Select an applicant…</option>
                        {applications.map(a => (
                          <option key={a.id} value={a.id}>Dr. {a.first_name} {a.last_name} — {PROGRAM_LABELS[a.program] || a.program}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Invoice Meta */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Invoice Details</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Invoice No.</label>
                        <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.invoiceNo} onChange={e => setInv(p => ({ ...p, invoiceNo: e.target.value }))} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Date</label>
                        <input type="date" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.date} onChange={e => setInv(p => ({ ...p, date: e.target.value }))} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Due Date</label>
                        <input type="date" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.dueDate} onChange={e => setInv(p => ({ ...p, dueDate: e.target.value }))} />
                      </div>
                    </div>
                  </div>

                  {/* Client */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Bill To</p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Full Name</label>
                        <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" placeholder="Dr. Jane Smith" value={inv.clientName} onChange={e => setInv(p => ({ ...p, clientName: e.target.value }))} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><label className="text-xs text-gray-500 mb-1 block">Email</label><input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.clientEmail} onChange={e => setInv(p => ({ ...p, clientEmail: e.target.value }))} /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Phone</label><input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.clientPhone} onChange={e => setInv(p => ({ ...p, clientPhone: e.target.value }))} /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">City</label><input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.clientCity} onChange={e => setInv(p => ({ ...p, clientCity: e.target.value }))} /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Program</label><input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.program} onChange={e => setInv(p => ({ ...p, program: e.target.value }))} /></div>
                      </div>
                    </div>
                  </div>

                  {/* Line Items */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Line Items</p>
                    <div className="space-y-2">
                      <div className="grid grid-cols-[1fr_52px_90px_32px] gap-2 text-xs font-semibold text-gray-400 px-1">
                        <span>Description</span><span className="text-center">Qty</span><span className="text-right">Rate (₹)</span><span />
                      </div>
                      {inv.items.map((it, idx) => (
                        <div key={idx} className="grid grid-cols-[1fr_52px_90px_32px] gap-2 items-center">
                          <input placeholder="e.g. Fellowship Fee" className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={it.desc} onChange={e => setItem(idx, 'desc', e.target.value)} />
                          <input type="number" min={1} className="text-sm border border-gray-200 rounded-lg px-2 py-2 outline-none text-center" value={it.qty} onChange={e => setItem(idx, 'qty', Number(e.target.value))} />
                          <input type="number" min={0} className="text-sm border border-gray-200 rounded-lg px-2 py-2 outline-none text-right" value={it.rate} onChange={e => setItem(idx, 'rate', Number(e.target.value))} />
                          <button onClick={() => removeItem(idx)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors text-xl leading-none">×</button>
                        </div>
                      ))}
                      <button onClick={addItem} className="text-xs text-primary font-semibold hover:text-primary-dark flex items-center gap-1 mt-1">+ Add line item</button>
                    </div>
                  </div>

                  {/* Tax & Notes */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">GST %</label>
                      <input type="number" min={0} max={100} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none" value={inv.taxPercent} onChange={e => setInv(p => ({ ...p, taxPercent: Number(e.target.value) }))} />
                    </div>
                    <div className="flex items-end">
                      <div className="w-full bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-xs text-gray-400 block">Total</span>
                        <span className="font-bold text-primary text-base">₹{fmt(total)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Notes / Payment Instructions</label>
                    <textarea rows={3} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none resize-none" value={inv.notes} onChange={e => setInv(p => ({ ...p, notes: e.target.value }))} />
                  </div>

                  <button
                    onClick={() => window.print()}
                    className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                  >
                    🖨️ Print / Download Invoice
                  </button>
                </div>

                {/* ── Preview ── */}
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Live Preview</p>
                  <InvoicePreview inv={inv} subtotal={subtotal} taxAmt={taxAmt} total={total} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Print-only invoice */}
      <div className="hidden print:block p-8">
        <InvoicePreview inv={inv} subtotal={subtotal} taxAmt={taxAmt} total={total} />
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 print:hidden" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-primary">Details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>

            {'first_name' in selected ? (
              <div className="space-y-5 text-sm">
                <Section title="Personal">
                  <Row label="Name" value={`${(selected as Application).first_name} ${(selected as Application).last_name}`} />
                  <Row label="Email" value={(selected as Application).email} />
                  <Row label="Phone" value={(selected as Application).phone} />
                  <Row label="DOB" value={(selected as Application).dob} />
                  <Row label="Gender" value={(selected as Application).gender} />
                </Section>
                <Section title="Professional">
                  <Row label="Qualification" value={(selected as Application).qualification} />
                  <Row label="Reg Number" value={(selected as Application).reg_number} />
                  <Row label="State Council" value={(selected as Application).state_council} />
                  <Row label="Year of Reg" value={(selected as Application).year_of_reg} />
                  <Row label="Practice Type" value={(selected as Application).practice_type} />
                  <Row label="Experience" value={(selected as Application).experience} />
                  <Row label="Hospital" value={(selected as Application).hospital_name} />
                  <Row label="Clinic" value={(selected as Application).clinic_name} />
                  <Row label="City" value={(selected as Application).city} />
                </Section>
                <Section title="Course">
                  <Row label="Program" value={PROGRAM_LABELS[(selected as Application).program] || (selected as Application).program} />
                  <Row label="Mode" value={(selected as Application).mode_preference} />
                  <Row label="Reason" value={(selected as Application).reason} />
                </Section>
                {parseDocuments((selected as Application).message).length > 0 && (
                  <Section title="Documents Submitted">
                    <div className="space-y-3 pt-1">
                      {/* Download All Button */}
                      {parseDocuments((selected as Application).message).length > 1 && (
                        <button
                          onClick={async () => {
                            const docs = parseDocuments((selected as Application).message);
                            for (const doc of docs) {
                              try {
                                const { data, error } = await supabase.storage
                                  .from('application-documents')
                                  .download(doc);
                                
                                if (error) throw error;
                                
                                const url = window.URL.createObjectURL(data);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = doc;
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                                window.URL.revokeObjectURL(url);
                                
                                // Small delay between downloads
                                await new Promise(resolve => setTimeout(resolve, 500));
                              } catch (err) {
                                console.error('Download error:', err);
                              }
                            }
                          }}
                          className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                          </svg>
                          Download All Documents ({parseDocuments((selected as Application).message).length})
                        </button>
                      )}
                      
                      {/* Individual Documents */}
                      <div className="flex flex-col gap-2">
                        {parseDocuments((selected as Application).message).map(doc => {
                          const handleView = async () => {
                            try {
                              const { data, error } = await supabase.storage
                                .from('application-documents')
                                .createSignedUrl(doc, 3600); // 1 hour expiry
                              
                              if (error) throw error;
                              
                              if (data?.signedUrl) {
                                window.open(data.signedUrl, '_blank');
                              }
                            } catch (err) {
                              console.error('View error:', err);
                              alert('Failed to view document. Please try again.');
                            }
                          };

                          const handleDownload = async () => {
                            try {
                              const { data, error } = await supabase.storage
                                .from('application-documents')
                                .download(doc);
                              
                              if (error) throw error;
                              
                              const url = window.URL.createObjectURL(data);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = doc;
                              document.body.appendChild(a);
                              a.click();
                              document.body.removeChild(a);
                              window.URL.revokeObjectURL(url);
                            } catch (err) {
                              console.error('Download error:', err);
                              alert('Failed to download document. Please try again.');
                            }
                          };

                          return (
                            <div key={doc} className="flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors group">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="text-lg shrink-0">📄</span>
                                <span className="text-xs font-medium truncate">{doc}</span>
                              </div>
                              <div className="flex gap-2 shrink-0">
                                <button
                                  onClick={handleView}
                                  className="px-3 py-1.5 bg-green-600 text-white rounded-md text-xs font-semibold hover:bg-green-700 transition-colors flex items-center gap-1.5"
                                  title="View document"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  View
                                </button>
                                <button
                                  onClick={handleDownload}
                                  className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1.5"
                                  title="Download document"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  Download
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Section>
                )}
                <Section title="Application">
                  <Row label="Status" value={(selected as Application).status} />
                  <Row label="Applied On" value={new Date((selected as Application).created_at).toLocaleString('en-IN')} />
                </Section>
                <button
                  onClick={() => { fillFromApp(selected as Application); setSelected(null); }}
                  className="w-full bg-primary/10 text-primary border border-primary/20 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  🧾 Generate Invoice for this Applicant
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-sm">
                {Object.entries(selected).map(([key, val]) =>
                  key !== 'id' && val ? (
                    <div key={key} className="flex gap-3">
                      <span className="font-semibold text-gray-600 w-28 shrink-0 capitalize">{key.replace(/_/g, ' ')}:</span>
                      <span className="text-gray-800 break-all">{String(val)}</span>
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function InvoicePreview({ inv, subtotal, taxAmt, total }: {
  inv: InvoiceData; subtotal: number; taxAmt: number; total: number;
}) {
  const fmtDate = (d: string) =>
    d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-sm">
      {/* Header band */}
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-xl font-extrabold tracking-tight">MedFellow Academy</p>
            <p className="text-white/65 text-xs mt-1 leading-relaxed">
              23-5-449, Second Floor, Nagul Chinta<br />
              Hyderabad – 500065, Telangana<br />
              info@medfellow.in · +91 9985044993
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-3xl font-black tracking-widest opacity-90">INVOICE</p>
            <p className="text-white/75 text-xs mt-1">#{inv.invoiceNo}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Dates row */}
        <div className="flex justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Invoice Date</p>
            <p className="font-semibold text-gray-800">{fmtDate(inv.date)}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Due Date</p>
            <p className="font-semibold text-orange-500">{fmtDate(inv.dueDate)}</p>
          </div>
        </div>

        {/* Bill To */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Bill To</p>
          <p className="font-bold text-gray-900 text-base">{inv.clientName || '—'}</p>
          {inv.program    && <p className="text-gray-500 text-xs mt-0.5">{inv.program}</p>}
          {inv.clientEmail && <p className="text-gray-500 text-xs">{inv.clientEmail}</p>}
          {inv.clientPhone && <p className="text-gray-500 text-xs">{inv.clientPhone}</p>}
          {inv.clientCity  && <p className="text-gray-500 text-xs">{inv.clientCity}</p>}
        </div>

        {/* Items table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-2 font-bold text-gray-400 uppercase tracking-wide">Description</th>
              <th className="text-center py-2 font-bold text-gray-400 uppercase tracking-wide w-10">Qty</th>
              <th className="text-right py-2 font-bold text-gray-400 uppercase tracking-wide w-20">Rate</th>
              <th className="text-right py-2 font-bold text-gray-400 uppercase tracking-wide w-20">Amount</th>
            </tr>
          </thead>
          <tbody>
            {inv.items.map((it, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-2.5 text-gray-800">{it.desc || '—'}</td>
                <td className="py-2.5 text-center text-gray-500">{it.qty}</td>
                <td className="py-2.5 text-right text-gray-500">₹{fmt(it.rate)}</td>
                <td className="py-2.5 text-right font-semibold text-gray-800">₹{fmt(it.qty * it.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>₹{fmt(subtotal)}</span></div>
          <div className="flex justify-between text-gray-500"><span>GST ({inv.taxPercent}%)</span><span>₹{fmt(taxAmt)}</span></div>
          <div className="flex justify-between font-bold text-base text-primary border-t-2 border-primary pt-3">
            <span>Total Due</span><span>₹{fmt(total)}</span>
          </div>
        </div>

        {/* Notes */}
        {inv.notes && (
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Notes</p>
            <p className="text-xs text-amber-800 whitespace-pre-line leading-relaxed">{inv.notes}</p>
          </div>
        )}

        <p className="text-center text-[10px] text-gray-400 pt-1">Thank you for choosing MedFellow Academy</p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest font-bold text-primary/60 mb-2 border-b pb-1">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="flex gap-3">
      <span className="font-semibold text-gray-600 w-28 shrink-0">{label}:</span>
      <span className="text-gray-800 break-all">{value}</span>
    </div>
  );
}
