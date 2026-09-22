'use client';
import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, XCircle, Mail, MessageSquare } from 'lucide-react';

interface EmiApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  program: string;
  city: string;
  qualification: string;
  employment_type: string;
  monthly_income: string;
  course_fee: number | null;
  notes: string;
  status: 'pending_review' | 'approved' | 'not_eligible';
  review_notes: string;
  reviewed_by: string;
  reviewed_at: string | null;
  emi_months: number | null;
  emi_monthly_amount: number | null;
  emi_start_date: string;
  emi_processing_fee: number | null;
  emi_notes: string;
  notifications: { channel: 'email' | 'sms'; event: string; sent_at: string; ok: boolean }[];
  created_at: string;
}

const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-1';

function DetailRow({ label, value }: { label: string; value?: string | number | null }) {
  if (!value && value !== 0) return null;
  return (
    <div className="px-4 py-2.5 border-b border-gray-50 last:border-0">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-wide text-gray-400">{label}</dt>
      <dd className="text-sm text-gray-900 mt-0.5">{value}</dd>
    </div>
  );
}

export default function EmiApplicationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [data, setData] = useState<EmiApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');
  const [saving, setSaving] = useState(false);

  const [emiMonths, setEmiMonths] = useState('');
  const [emiMonthly, setEmiMonthly] = useState('');
  const [emiStart, setEmiStart] = useState('');
  const [emiFee, setEmiFee] = useState('');
  const [emiNotes, setEmiNotes] = useState('');
  const [rejectNotes, setRejectNotes] = useState('');
  const [showReject, setShowReject] = useState(false);

  function load() {
    fetch(`/api/admin/emi-applications/${id}`)
      .then((r) => r.json())
      .then((j) => setData(j.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }
  useEffect(load, [id]);

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 4000); }

  async function handleApprove() {
    if (!emiMonths || !emiMonthly) {
      showToast('Tenure and monthly amount are required');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/emi-applications/${id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emi_months: emiMonths, emi_monthly_amount: emiMonthly,
          emi_start_date: emiStart, emi_processing_fee: emiFee || null,
          emi_notes: emiNotes,
        }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error ?? 'Failed to approve');
      setData(j.data);
      showToast('Approved — applicant notified by email and SMS');
    } catch (e: any) {
      showToast(e.message ?? 'Failed to approve');
    }
    setSaving(false);
  }

  async function handleReject() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/emi-applications/${id}/reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review_notes: rejectNotes }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error ?? 'Failed to update');
      setData(j.data);
      setShowReject(false);
      showToast('Marked not eligible — applicant notified by email and SMS');
    } catch (e: any) {
      showToast(e.message ?? 'Failed to update');
    }
    setSaving(false);
  }

  if (loading) return <div className="p-12 text-center text-gray-400">Loading…</div>;
  if (!data) return <div className="p-12 text-center text-red-400">Application not found.</div>;

  const decided = data.status !== 'pending_review';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white bg-[#15401E]">{toast}</div>
      )}

      <button onClick={() => router.push('/admin/emi-applications')} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800">
        <ArrowLeft className="w-4 h-4" /> Back to EMI Applications
      </button>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{data.full_name}</h1>
            <p className="text-sm text-gray-400">{data.email} · {data.phone}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            data.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
            data.status === 'not_eligible' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700'
          }`}>
            {data.status === 'pending_review' ? 'Pending Review' : data.status === 'approved' ? 'Approved' : 'Not Eligible'}
          </span>
        </div>

        <dl className="mt-4 grid sm:grid-cols-2 rounded-xl border border-gray-100 overflow-hidden">
          <DetailRow label="Program" value={data.program} />
          <DetailRow label="City" value={data.city} />
          <DetailRow label="Qualification" value={data.qualification} />
          <DetailRow label="Employment Type" value={data.employment_type} />
          <DetailRow label="Monthly Income" value={data.monthly_income} />
          <DetailRow label="Course Fee" value={data.course_fee ? `₹${data.course_fee.toLocaleString('en-IN')}` : null} />
          <DetailRow label="Submitted" value={new Date(data.created_at).toLocaleString('en-GB')} />
        </dl>
        {data.notes && (
          <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-gray-400 mb-1">Applicant Notes</p>
            <p className="text-sm text-gray-700">{data.notes}</p>
          </div>
        )}
      </div>

      {decided ? (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            {data.status === 'approved' ? '✅ EMI Plan (sent to applicant)' : '❌ Marked Not Eligible'}
          </h2>
          {data.status === 'approved' ? (
            <dl className="grid sm:grid-cols-2 rounded-xl border border-gray-100 overflow-hidden">
              <DetailRow label="Tenure" value={data.emi_months ? `${data.emi_months} months` : null} />
              <DetailRow label="Monthly Amount" value={data.emi_monthly_amount ? `₹${data.emi_monthly_amount.toLocaleString('en-IN')}` : null} />
              <DetailRow label="Start Date" value={data.emi_start_date} />
              <DetailRow label="Processing Fee" value={data.emi_processing_fee ? `₹${data.emi_processing_fee.toLocaleString('en-IN')}` : null} />
              {data.emi_notes && <DetailRow label="Notes to Applicant" value={data.emi_notes} />}
            </dl>
          ) : (
            <p className="text-sm text-gray-700">{data.review_notes || 'No reason provided.'}</p>
          )}
          <p className="text-xs text-gray-400 mt-3">Reviewed by {data.reviewed_by || 'Admin'} on {data.reviewed_at ? new Date(data.reviewed_at).toLocaleString('en-GB') : '—'}</p>

          {data.notifications?.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
              {data.notifications.map((n, i) => (
                <span key={i} className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${n.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                  {n.channel === 'email' ? <Mail className="w-3 h-3" /> : <MessageSquare className="w-3 h-3" />}
                  {n.event} {n.ok ? 'sent' : 'failed'}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">
              Mark Eligible &amp; Set EMI Plan
            </h2>
            <p className="text-xs text-gray-400 -mt-2">Submitting this marks the application eligible and emails/texts the applicant this exact plan.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Tenure (months) *</label>
                <input type="number" min="1" value={emiMonths} onChange={(e) => setEmiMonths(e.target.value)} placeholder="6" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Monthly Amount (₹) *</label>
                <input type="number" min="0" value={emiMonthly} onChange={(e) => setEmiMonthly(e.target.value)} placeholder="15000" className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Start Date</label>
                <input value={emiStart} onChange={(e) => setEmiStart(e.target.value)} placeholder="01 Nov 2026" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Processing Fee (₹)</label>
                <input type="number" min="0" value={emiFee} onChange={(e) => setEmiFee(e.target.value)} placeholder="0" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Note to Applicant <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea value={emiNotes} onChange={(e) => setEmiNotes(e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="Any additional instructions for the applicant…" />
            </div>
            <button
              onClick={handleApprove}
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" /> {saving ? 'Saving…' : 'Approve & Send Plan'}
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {!showReject ? (
              <button onClick={() => setShowReject(true)} className="inline-flex items-center gap-2 px-5 py-2.5 border border-red-200 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-50 transition-all">
                <XCircle className="w-4 h-4" /> Mark Not Eligible
              </button>
            ) : (
              <div className="space-y-3">
                <label className={labelCls}>Reason <span className="text-gray-400 font-normal">(optional, shown to applicant)</span></label>
                <textarea value={rejectNotes} onChange={(e) => setRejectNotes(e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="e.g. Insufficient documentation, income criteria not met…" />
                <div className="flex gap-2">
                  <button onClick={handleReject} disabled={saving} className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all">
                    {saving ? 'Saving…' : 'Confirm Not Eligible'}
                  </button>
                  <button onClick={() => setShowReject(false)} className="px-5 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
