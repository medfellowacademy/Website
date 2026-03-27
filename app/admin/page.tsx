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
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'applications'>('enquiries');
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<ContactEnquiry | Application | null>(null);

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
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
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

      <div className="max-w-7xl mx-auto px-6 py-8">
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
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-6 py-4 font-semibold text-sm transition-colors ${activeTab === 'enquiries' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-gray-500 hover:text-primary'}`}
            >
              Contact Enquiries ({enquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-6 py-4 font-semibold text-sm transition-colors ${activeTab === 'applications' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-gray-500 hover:text-primary'}`}
            >
              Applications ({applications.length})
            </button>
            <button onClick={fetchData} className="ml-auto px-6 py-4 text-sm text-gray-500 hover:text-primary transition-colors">
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
                      <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Date</th>
                      <th className="px-6 py-3 font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(app)}>
                        <td className="px-6 py-4 font-medium text-gray-900">{app.first_name} {app.last_name}</td>
                        <td className="px-6 py-4 text-gray-600">{app.email}</td>
                        <td className="px-6 py-4 text-gray-600">{app.phone}</td>
                        <td className="px-6 py-4 text-gray-600 max-w-37.5 truncate">{app.program}</td>
                        <td className="px-6 py-4 text-gray-600">{app.qualification}</td>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-primary">Details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <div className="space-y-3 text-sm">
              {Object.entries(selected).map(([key, val]) => (
                key !== 'id' && (
                  <div key={key} className="flex gap-3">
                    <span className="font-semibold text-gray-600 w-28 shrink-0 capitalize">{key.replace(/_/g, ' ')}:</span>
                    <span className="text-gray-800 break-all">{String(val)}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
