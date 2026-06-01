'use client';
import { useEffect, useState } from 'react';
import { Save, RefreshCw } from 'lucide-react';
import { getSettingRows, updateManySettings, CmsSetting } from '@/lib/cms';

// Default settings to show even if DB is empty
const DEFAULT_SETTINGS: CmsSetting[] = [
  // Contact & General
  { key: 'contact_email', value: 'info@medfellow.in', label: 'Contact Email', description: 'Email shown on contact page and footer', category: 'contact', updated_at: '' },
  { key: 'contact_phone', value: '+91 99850 44993', label: 'Contact Phone', description: 'Phone number shown on contact page', category: 'contact', updated_at: '' },
  { key: 'whatsapp_number', value: '919985044993', label: 'WhatsApp Number', description: 'WhatsApp number with country code, no + or spaces (e.g. 919985044993)', category: 'contact', updated_at: '' },
  { key: 'contact_address', value: 'Hyderabad, Telangana, India', label: 'Office Address', description: 'Address shown in footer and contact page', category: 'contact', updated_at: '' },
  { key: 'site_name', value: 'MedFellow Academy', label: 'Site Name', description: 'Name shown in browser tab and emails', category: 'contact', updated_at: '' },
  // Hero / Homepage
  { key: 'hero_heading', value: 'MedFellow Academy Where Doctors Evolve', label: 'Hero Heading', description: 'Main heading on the homepage hero', category: 'homepage', updated_at: '' },
  { key: 'hero_rating_text', value: '4.9 · Trusted by 500+ doctors', label: 'Hero Rating Text', description: 'Rating pill text below the heading', category: 'homepage', updated_at: '' },
  { key: 'apply_batch_text', value: 'Apply for June 2026', label: 'Apply Button Text', description: 'Text on the Apply CTA button in hero', category: 'homepage', updated_at: '' },
  // Stats Bar
  { key: 'stat_specialties', value: '60+', label: 'Specialties Count', description: 'Shown in hero stats bar', category: 'stats', updated_at: '' },
  { key: 'stat_doctors', value: '500+', label: 'Doctors Trained', description: 'Shown in hero stats bar', category: 'stats', updated_at: '' },
  { key: 'stat_hospitals', value: '20+', label: 'Hospital Partners', description: 'Shown in hero stats bar', category: 'stats', updated_at: '' },
  { key: 'stat_placement', value: '98%', label: 'Placement Rate', description: 'Shown in hero stats bar', category: 'stats', updated_at: '' },
  // Social Media
  { key: 'social_facebook', value: '', label: 'Facebook URL', description: 'Facebook page link (shown in footer)', category: 'social', updated_at: '' },
  { key: 'social_instagram', value: '', label: 'Instagram URL', description: 'Instagram profile link', category: 'social', updated_at: '' },
  { key: 'social_linkedin', value: '', label: 'LinkedIn URL', description: 'LinkedIn page link', category: 'social', updated_at: '' },
  { key: 'social_youtube', value: '', label: 'YouTube URL', description: 'YouTube channel link', category: 'social', updated_at: '' },
  // SEO
  { key: 'meta_title', value: 'MedFellow Academy | Medical Fellowship Programs', label: 'Default Meta Title', description: 'Default browser tab title for all pages', category: 'seo', updated_at: '' },
  { key: 'meta_description', value: 'India\'s premier medical fellowship programs. Learn from top specialists and advance your medical career.', label: 'Default Meta Description', description: 'Default description for Google search', category: 'seo', updated_at: '' },
];

const CATEGORY_LABELS: Record<string, string> = {
  contact: '📞 Contact & General',
  homepage: '🏠 Homepage',
  stats: '📊 Stats Bar',
  social: '📱 Social Media',
  seo: '🔍 SEO / Google',
};

export default function SettingsPage() {
  const [rows, setRows] = useState<CmsSetting[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  async function load() {
    setLoading(true);
    try {
      const dbRows = await getSettingRows();
      // Merge DB rows over defaults
      const merged = DEFAULT_SETTINGS.map((def) => {
        const db = dbRows.find((r) => r.key === def.key);
        return db ? { ...def, value: db.value, updated_at: db.updated_at } : def;
      });
      // Add any extra DB rows not in defaults
      dbRows.forEach((r) => {
        if (!merged.find((m) => m.key === r.key)) merged.push(r);
      });
      setRows(merged);
      const v: Record<string, string> = {};
      merged.forEach((r) => { v[r.key] = typeof r.value === 'string' ? r.value : JSON.stringify(r.value); });
      setValues(v);
    } catch {
      // Use defaults if DB unavailable
      setRows(DEFAULT_SETTINGS);
      const v: Record<string, string> = {};
      DEFAULT_SETTINGS.forEach((r) => { v[r.key] = r.value ?? ''; });
      setValues(v);
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleSave() {
    setSaving(true);
    try {
      await updateManySettings(values);
      setToast('Settings saved!');
      setTimeout(() => setToast(''), 3000);
    } catch {
      setToast('Save failed — check DB connection');
      setTimeout(() => setToast(''), 4000);
    } finally {
      setSaving(false);
    }
  }

  // Group by category
  const categories = Array.from(new Set(rows.map((r) => r.category))).filter(Boolean);

  const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';

  if (loading) return <div className="p-12 text-center text-gray-400">Loading settings…</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white ${toast.includes('failed') ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
          <p className="text-gray-400 text-sm mt-0.5">Manage global website content and configuration</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={load} className="p-2.5 hover:bg-gray-100 rounded-xl transition-all" title="Refresh">
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving…' : 'Save All'}
          </button>
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat) => {
        const catRows = rows.filter((r) => r.category === cat);
        return (
          <div key={cat} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">
              {CATEGORY_LABELS[cat] ?? cat}
            </h2>
            {catRows.map((row) => {
              const isLong = (values[row.key] ?? '').length > 80 || row.key.includes('subtitle') || row.key.includes('description') || row.key.includes('address');
              return (
                <div key={row.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{row.label}</label>
                  {row.description && <p className="text-xs text-gray-400 mb-1.5">{row.description}</p>}
                  {isLong ? (
                    <textarea
                      value={values[row.key] ?? ''}
                      onChange={(e) => setValues({ ...values, [row.key]: e.target.value })}
                      rows={3}
                      className={inputCls}
                    />
                  ) : (
                    <input
                      value={values[row.key] ?? ''}
                      onChange={(e) => setValues({ ...values, [row.key]: e.target.value })}
                      className={inputCls}
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Footer save */}
      <div className="flex justify-end pb-8">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl font-semibold disabled:opacity-60 transition-all"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save All Settings'}
        </button>
      </div>
    </div>
  );
}
