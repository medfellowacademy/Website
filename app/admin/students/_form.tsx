'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, ExternalLink } from 'lucide-react';

export interface StudentFormData {
  enrollment_no: string;
  full_name: string;
  photo_url: string;
  program: string;
  batch: string;
  start_date: string;
  end_date: string;
  status: string;
  mode: string;
  certificate_no: string;
  grade: string;
  issued_on: string;
  remarks: string;
  date_of_birth: string;
  is_active: boolean;
  verification_ref?: string;
}

const BLANK: StudentFormData = {
  enrollment_no: '', full_name: '', photo_url: '', program: '', batch: '',
  start_date: '', end_date: '', status: 'Enrolled', mode: '', certificate_no: '',
  grade: '', issued_on: '', remarks: '', date_of_birth: '', is_active: true,
};

const STATUS_OPTIONS = ['Enrolled', 'In Progress', 'Completed', 'Certified', 'Withdrawn'];
const MODE_OPTIONS = ['', 'Online', 'Hybrid', 'Offline'];

const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-1';
const sectionCls = 'bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4';

export default function StudentForm({ initial, recordId, isNew }: { initial?: Partial<StudentFormData>; recordId?: string; isNew: boolean }) {
  const router = useRouter();
  const [form, setForm] = useState<StudentFormData>({ ...BLANK, ...initial });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3500); }
  function set<K extends keyof StudentFormData>(k: K, v: StudentFormData[K]) { setForm(f => ({ ...f, [k]: v })); }

  async function handleSave() {
    if (!form.full_name.trim()) {
      showToast('Full name is required');
      return;
    }
    setSaving(true);
    try {
      const { verification_ref: _ref, ...rest } = form;
      const payload = { ...rest, enrollment_no: form.enrollment_no.trim() };
      const url = isNew ? '/api/admin/students' : `/api/admin/students/${recordId}`;
      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) { const j = await res.json(); throw new Error(j.error ?? 'Save failed'); }
      const j = await res.json();
      showToast('Saved!');
      if (isNew) router.push(`/admin/students/${j.data.id}`);
    } catch (e: any) {
      showToast(e.message ?? 'Save failed');
    }
    setSaving(false);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white ${toast.includes('fail') || toast.includes('required') ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/admin/students')} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'Add Verification Record' : `Edit: ${form.full_name}`}</h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Verify at: <a href={`/verify?enrollment=${encodeURIComponent(form.enrollment_no || '')}`} target="_blank" rel="noopener noreferrer" className="text-[#15401E] hover:underline inline-flex items-center gap-1">/verify?enrollment={form.enrollment_no || '…'} <ExternalLink className="w-3 h-3" /></a>
            </p>
          </div>
        </div>
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Record'}
        </button>
      </div>

      {/* Identity */}
      <div className={sectionCls}>
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">🎓 Fellow Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Enrollment / Registration No.</label>
            <input value={form.enrollment_no} onChange={e => set('enrollment_no', e.target.value)} placeholder="MFA-2026-01234" className={inputCls + ' font-mono'} />
            <p className="text-xs text-gray-400 mt-1">The number fellows type on /verify. Leave blank to auto-generate <code className="bg-gray-100 px-1 rounded">MFA-YYYY-NNNNN</code>.</p>
          </div>
          <div>
            <label className={labelCls}>Full Name *</label>
            <input value={form.full_name} onChange={e => set('full_name', e.target.value)} placeholder="Dr. Anita Sharma" className={inputCls} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Date of Birth <span className="text-gray-400 font-normal">(optional 2nd check)</span></label>
            <input type="date" value={form.date_of_birth} onChange={e => set('date_of_birth', e.target.value)} className={inputCls} />
            <p className="text-xs text-gray-400 mt-1">If set, visitors must also enter this DOB before the full record is shown.</p>
          </div>
          {!isNew && form.verification_ref && (
            <div>
              <label className={labelCls}>Verification Reference</label>
              <input value={form.verification_ref} readOnly className={inputCls + ' font-mono bg-gray-50 text-gray-500'} />
              <p className="text-xs text-gray-400 mt-1">Auto-generated. Shown on the verification result.</p>
            </div>
          )}
        </div>
        <div>
          <label className={labelCls}>Photo <span className="text-gray-400 font-normal">(path or URL)</span></label>
          <input value={form.photo_url} onChange={e => set('photo_url', e.target.value)} placeholder="/students/anita-sharma.jpg" className={inputCls} />
          {form.photo_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.photo_url} alt="Photo preview" className="mt-2 h-24 w-24 rounded-xl object-cover border border-gray-200" onError={e => (e.currentTarget.style.display = 'none')} />
          )}
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="active" checked={form.is_active} onChange={e => set('is_active', e.target.checked)} className="w-4 h-4 accent-[#15401E]" />
          <label htmlFor="active" className="text-sm font-medium text-gray-700">Verifiable (show this record on /verify)</label>
        </div>
      </div>

      {/* Program */}
      <div className={sectionCls}>
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">📚 Program</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Program / Fellowship</label>
            <input value={form.program} onChange={e => set('program', e.target.value)} placeholder="Fellowship in Dermatology" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Batch</label>
            <input value={form.batch} onChange={e => set('batch', e.target.value)} placeholder="August 2026" className={inputCls} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Start Date</label>
            <input value={form.start_date} onChange={e => set('start_date', e.target.value)} placeholder="01 Aug 2026" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>End Date</label>
            <input value={form.end_date} onChange={e => set('end_date', e.target.value)} placeholder="31 Jul 2027" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Mode</label>
            <select value={form.mode} onChange={e => set('mode', e.target.value)} className={inputCls}>
              {MODE_OPTIONS.map(m => <option key={m} value={m}>{m || '—'}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Result / Certification */}
      <div className={sectionCls}>
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">🏅 Status &amp; Certification</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Status</label>
            <select value={form.status} onChange={e => set('status', e.target.value)} className={inputCls}>
              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Certificate No.</label>
            <input value={form.certificate_no} onChange={e => set('certificate_no', e.target.value)} placeholder="CERT-2027-01234" className={inputCls + ' font-mono'} />
          </div>
          <div>
            <label className={labelCls}>Grade / Result</label>
            <input value={form.grade} onChange={e => set('grade', e.target.value)} placeholder="Distinction" className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Certificate Issued On</label>
          <input value={form.issued_on} onChange={e => set('issued_on', e.target.value)} placeholder="15 Aug 2027" className={inputCls + ' max-w-xs'} />
        </div>
        <div>
          <label className={labelCls}>Remarks <span className="text-gray-400 font-normal">(optional)</span></label>
          <textarea value={form.remarks} onChange={e => set('remarks', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="Any additional note shown on the verification page…" />
        </div>
      </div>

      {/* Bottom save */}
      <div className="flex justify-end pb-8">
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Record'}
        </button>
      </div>
    </div>
  );
}
