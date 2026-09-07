'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Plus, GraduationCap, Edit, Trash2, Eye, EyeOff, ExternalLink, Upload, Download } from 'lucide-react';

const CSV_COLUMNS = [
  'enrollment_no', 'full_name', 'photo_url', 'program', 'batch', 'start_date', 'end_date',
  'status', 'mode', 'certificate_no', 'grade', 'issued_on', 'remarks', 'date_of_birth', 'is_active',
] as const;

/** Minimal RFC-4180-ish CSV parser (handles quoted fields, commas, escaped quotes, CRLF). */
function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let field = '';
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((v) => v.trim() !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); if (row.some((v) => v.trim() !== '')) rows.push(row); }
  if (rows.length < 2) return [];
  const header = rows[0].map((h) => h.trim().toLowerCase().replace(/\s+/g, '_'));
  return rows.slice(1).map((r) => {
    const obj: Record<string, string> = {};
    header.forEach((h, idx) => { obj[h] = (r[idx] ?? '').trim(); });
    return obj;
  });
}

interface StudentRow {
  id: string;
  enrollment_no: string;
  full_name: string;
  program: string;
  batch: string;
  status: string;
  is_active: boolean;
  updated_at: string;
}

export default function StudentsAdminPage() {
  const [rows, setRows] = useState<StudentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [toast, setToast] = useState('');
  const [importing, setImporting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 4000); }

  function downloadTemplate() {
    const csv = CSV_COLUMNS.join(',') + '\n' +
      'MFA-2026-01234,Dr. Anita Sharma,,Fellowship in Dermatology,August 2026,01 Aug 2026,31 Jul 2027,Certified,Hybrid,CERT-2027-01234,Distinction,15 Aug 2027,,1990-05-12,true\n';
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'medfellow-verifications-template.csv';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const rows = parseCsv(await file.text());
    if (!rows.length) { showToast('No rows found in that CSV'); return; }
    if (!confirm(`Import ${rows.length} record(s)? Existing enrollment numbers will error and be skipped.`)) return;

    setImporting(true);
    let ok = 0; let failed = 0;
    for (const r of rows) {
      const payload: Record<string, unknown> = {};
      for (const col of CSV_COLUMNS) {
        if (col === 'is_active') payload[col] = !/^(false|0|no|hidden)$/i.test(r[col] ?? '');
        else payload[col] = r[col] ?? '';
      }
      if (!String(payload.full_name || '').trim()) { failed++; continue; }
      try {
        const res = await fetch('/api/admin/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) ok++; else failed++;
      } catch { failed++; }
    }
    setImporting(false);
    showToast(`Imported ${ok} record(s)${failed ? `, ${failed} skipped/failed` : ''}`);
    load();
  }

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/students');
      const json = await res.json();
      setRows(json.data ?? []);
    } catch { showToast('Failed to load records'); }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function toggleActive(row: StudentRow) {
    try {
      await fetch(`/api/admin/students/${row.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: !row.is_active }),
      });
      showToast(row.is_active ? 'Record hidden from /verify' : 'Record is now verifiable');
      load();
    } catch { showToast('Update failed'); }
  }

  async function handleDelete(row: StudentRow) {
    if (!confirm(`Delete the record for "${row.full_name}" (${row.enrollment_no})? This cannot be undone.`)) return;
    try {
      await fetch(`/api/admin/students/${row.id}`, { method: 'DELETE' });
      showToast('Record deleted');
      load();
    } catch { showToast('Delete failed'); }
  }

  const filtered = q.trim()
    ? rows.filter((r) =>
        `${r.enrollment_no} ${r.full_name} ${r.program} ${r.batch}`.toLowerCase().includes(q.trim().toLowerCase()),
      )
    : rows;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white ${toast.includes('fail') ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fellow Verifications</h1>
          <p className="text-gray-400 text-sm mt-0.5">Records looked up on the public <code className="bg-gray-100 px-1 rounded">/verify</code> page by enrollment number</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadTemplate}
            className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
            title="Download a blank CSV template"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            disabled={importing}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all disabled:opacity-60"
          >
            <Upload className="w-4 h-4" />
            {importing ? 'Importing…' : 'Import CSV'}
          </button>
          <input ref={fileRef} type="file" accept=".csv,text/csv" hidden onChange={handleImport} />
          <Link
            href="/admin/students/new"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] text-white rounded-xl text-sm font-semibold hover:bg-[#0f2e15] transition-all"
          >
            <Plus className="w-4 h-4" />
            Add Record
          </Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>How it works:</strong> Anyone can visit <a href="/verify" target="_blank" rel="noopener noreferrer" className="underline">/verify</a>, type an enrollment/registration number, and see that fellow&apos;s details. Only records marked <strong>Verifiable</strong> here are shown.
      </div>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by enrollment no, name, program…"
        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white"
      />

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">
          <GraduationCap className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">{rows.length === 0 ? 'No verification records yet' : 'No records match your search'}</p>
          {rows.length === 0 && (
            <>
              <p className="text-sm mt-1">Add a fellow&apos;s details so they can be verified.</p>
              <Link href="/admin/students/new" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#15401E] text-white rounded-xl text-sm font-semibold hover:bg-[#0f2e15] transition-all">
                <Plus className="w-4 h-4" /> Add First Record
              </Link>
            </>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Enrollment No.</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Name</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Program</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Verifiable</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-gray-900">
                    <a href={`/verify?enrollment=${encodeURIComponent(row.enrollment_no)}`} target="_blank" rel="noopener noreferrer" className="text-[#15401E] hover:underline flex items-center gap-1">
                      {row.enrollment_no} <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-gray-900">{row.full_name}</td>
                  <td className="px-5 py-3.5 text-gray-500">{row.program || '—'}{row.batch ? ` · ${row.batch}` : ''}</td>
                  <td className="px-5 py-3.5 text-gray-500">{row.status || '—'}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${row.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                      {row.is_active ? 'Verifiable' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1 justify-end">
                      <button onClick={() => toggleActive(row)} title={row.is_active ? 'Hide from /verify' : 'Make verifiable'} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all">
                        {row.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <Link href={`/admin/students/${row.id}`} className="p-1.5 rounded-lg text-gray-400 hover:text-[#15401E] hover:bg-gray-100 transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button onClick={() => handleDelete(row)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
