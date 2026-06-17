'use client';
import { useEffect, useState } from 'react';
import { Save, RefreshCw } from 'lucide-react';
import { type CmsSetting } from '@/lib/cms';

// Default settings to show even if DB is empty
const DEFAULT_SETTINGS: CmsSetting[] = [
  // ── Contact & General ────────────────────────────────────────────────────────
  { key: 'contact_email',   value: 'info@medfellow.in',         label: 'Contact Email',    description: 'Email shown on contact page and footer', category: 'contact', updated_at: '' },
  { key: 'contact_phone',   value: '+91 99850 44993',           label: 'Contact Phone',    description: 'Phone number shown on contact page', category: 'contact', updated_at: '' },
  { key: 'whatsapp_number', value: '919985044993',              label: 'WhatsApp Number',  description: 'WhatsApp number with country code, no + or spaces (e.g. 919985044993)', category: 'contact', updated_at: '' },
  { key: 'contact_address', value: 'Mahavir House, Basheer Bagh, Hyderabad 500029', label: 'Office Address', description: 'Address shown in footer and contact page', category: 'contact', updated_at: '' },
  { key: 'site_name',       value: 'MedFellow Academy',         label: 'Site Name',        description: 'Name shown in browser tab and emails', category: 'contact', updated_at: '' },

  // ── Announcement Bar ─────────────────────────────────────────────────────────
  { key: 'announcement_text', value: 'June 2026 batch applications now open — only 14 seats remaining | New: Fellowship in Neonatology — Dubai & Saudi Arabia now available | 4× salary uplift reported by Emergency Medicine fellows in 2025', label: 'Announcement Bar Messages', description: 'Text in the top rotating banner. Separate multiple messages with | (pipe). Leave blank to hide banner.', category: 'announcement', updated_at: '' },

  // ── Hero / Homepage ───────────────────────────────────────────────────────────
  { key: 'hero_heading',      value: 'MedFellow Academy\nWhere Doctors Evolve', label: 'Hero Main Heading',    description: 'Main heading. Use \\n to split into two lines (line 1 is black, line 2 is green)', category: 'homepage', updated_at: '' },
  { key: 'hero_subheading',   value: '',                                         label: 'Hero Subheading',      description: 'Optional smaller text below the heading (leave blank to hide)', category: 'homepage', updated_at: '' },
  { key: 'hero_rating_text',  value: '4.9 · Trusted by 500+ doctors',            label: 'Hero Rating Pill',     description: 'Text shown in the star rating pill above the heading', category: 'homepage', updated_at: '' },
  { key: 'apply_batch_text',  value: 'Apply for June 2026',                       label: 'Apply / Enroll Button Text', description: 'Text on the enroll CTA button in hero and navbar', category: 'homepage', updated_at: '' },

  // ── Stats Bar ────────────────────────────────────────────────────────────────
  { key: 'stat_specialties',    value: '60+',  label: 'Specialties (Hero)',          description: 'Shown in hero stats bar', category: 'stats', updated_at: '' },
  { key: 'stat_doctors',        value: '500+', label: 'Doctors Trained',             description: 'Shown in hero stats bar and Why section', category: 'stats', updated_at: '' },
  { key: 'stat_hospitals',      value: '20+',  label: 'Hospital Partners',           description: 'Shown in hero stats bar and Why section', category: 'stats', updated_at: '' },
  { key: 'stat_placement',      value: '98%',  label: 'Placement Rate',              description: 'Shown in hero stats bar and Why section', category: 'stats', updated_at: '' },
  { key: 'stat_income',         value: '156%', label: 'Average Income Increase',     description: 'Shown in Why MedFellow stats panel', category: 'stats', updated_at: '' },
  { key: 'stat_income_sub',     value: 'Reported within 18 months', label: 'Income Increase Sub-label', description: 'Sub-text below income stat', category: 'stats', updated_at: '' },
  { key: 'stat_doctors_sub',    value: 'Across 12 specialties',     label: 'Doctors Stat Sub-label',    description: 'Sub-text below doctors trained stat', category: 'stats', updated_at: '' },
  { key: 'stat_placement_sub',  value: 'Within 6 months of completion', label: 'Placement Stat Sub-label', description: 'Sub-text below placement rate stat', category: 'stats', updated_at: '' },
  { key: 'stat_rating_display', value: '4.9',                       label: 'Average Rating',             description: 'Shown in Why section stats panel', category: 'stats', updated_at: '' },
  { key: 'stat_reviews_text',   value: 'From 340 verified reviews', label: 'Reviews Sub-label',          description: 'Sub-text below rating stat', category: 'stats', updated_at: '' },

  // ── Ticker Bar ───────────────────────────────────────────────────────────────
  { key: 'ticker_items', value: 'ACTD Accredited — Recognised in 40+ countries\n4.9 / 5 from 340 verified reviews\nDr. Sneha Verma — 3.2× salary uplift after fellowship\nYashoda Hospital — Certified Training Partner\nInternationally accredited certificates\nDr. Rajan Nair — 2 hospital offers in 6 months\nKamineni Hospital — Certified Training Partner\n98% placement success rate\nContinental Hospital — Expert Faculty\nFlexible — learn while you practice\nDr. Kavita Singh — own clinic in 14 months', label: 'Scrolling Ticker Items', description: 'One item per line. These scroll across the green banner below the hero.', category: 'ticker', updated_at: '' },

  // ── Why MedFellow Section ────────────────────────────────────────────────────
  { key: 'why_heading',  value: 'Built for practicing doctors', label: 'Why MedFellow Heading', description: 'Main heading of the "Why MedFellow" section', category: 'why', updated_at: '' },
  { key: 'why_subtitle', value: "India's only fellowship platform that lets you specialise while continuing to work — with real hospital training and internationally accredited outcomes.", label: 'Why MedFellow Subtitle', description: 'Paragraph below the heading', category: 'why', updated_at: '' },
  { key: 'why_point_1_title', value: 'No career break needed',       label: 'Why Point 1 Title', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_1_desc',  value: 'All programs are structured around working doctors — asynchronous modules with live weekend sessions.', label: 'Why Point 1 Description', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_2_title', value: 'Hands-on hospital rotations',  label: 'Why Point 2 Title', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_2_desc',  value: 'Supervised clinical training at 20+ premier hospitals across India with direct patient exposure.', label: 'Why Point 2 Description', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_3_title', value: 'Internationally accredited',   label: 'Why Point 3 Title', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_3_desc',  value: 'ACTD-accredited certificates recognised globally and by leading hospital recruitment boards.', label: 'Why Point 3 Description', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_4_title', value: 'Dedicated faculty mentors',    label: 'Why Point 4 Title', description: '', category: 'why', updated_at: '' },
  { key: 'why_point_4_desc',  value: 'Every fellow is paired with a senior specialist for 1:1 guidance throughout the program.', label: 'Why Point 4 Description', description: '', category: 'why', updated_at: '' },

  // ── Accreditation Section ────────────────────────────────────────────────────
  { key: 'accreditation_heading',       value: 'Globally accredited by ACTD',  label: 'Accreditation Heading',     description: 'Main heading. "ACTD" will be highlighted in orange.', category: 'accreditation', updated_at: '' },
  { key: 'accreditation_body',          value: 'MedFellow Academy programs are internationally accredited by the American Council of Training and Development — your gateway to a globally recognised fellowship certificate.', label: 'Accreditation Body Text', description: 'Paragraph below heading', category: 'accreditation', updated_at: '' },
  { key: 'accreditation_cta_text',      value: 'Enroll & get accredited',       label: 'Accreditation CTA Button',  description: 'Text on the enroll button in this section', category: 'accreditation', updated_at: '' },
  { key: 'accreditation_badge_caption', value: 'American Council of Training and Development — recognised in 40+ countries', label: 'Badge Caption', description: 'Small text below the ACTD logo badge', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_1_title', value: '40+ countries',    label: 'Accreditation Point 1 Title', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_1_desc',  value: 'Certificates accepted globally', label: 'Accreditation Point 1 Description', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_2_title', value: 'Quality assured',  label: 'Accreditation Point 2 Title', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_2_desc',  value: 'Rigorous curriculum by ACTD',    label: 'Accreditation Point 2 Description', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_3_title', value: 'Career validated', label: 'Accreditation Point 3 Title', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_3_desc',  value: 'Recognised by top hospitals',    label: 'Accreditation Point 3 Description', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_4_title', value: 'Annually audited', label: 'Accreditation Point 4 Title', description: '', category: 'accreditation', updated_at: '' },
  { key: 'accr_point_4_desc',  value: 'Highest international standards', label: 'Accreditation Point 4 Description', description: '', category: 'accreditation', updated_at: '' },

  // ── Training Facilities Section ──────────────────────────────────────────────
  { key: 'training_heading',  value: 'Training that matches global standards',             label: 'Training Section Heading',  description: 'Main heading of the Training Facilities section', category: 'training', updated_at: '' },
  { key: 'training_subtitle', value: 'Three pillars designed to build confident, competent specialists.', label: 'Training Section Subtitle', description: 'Paragraph below the heading', category: 'training', updated_at: '' },
  { key: 'training_tab_1_label',       value: 'Hospital Training',                          label: 'Tab 1 Label',       description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_1_headline',    value: 'Clinical rotations at premier hospitals',    label: 'Tab 1 Headline',    description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_1_description', value: 'Supervised practice at super speciality hospitals across India. Fellows rotate through OTs, ICUs and specialty departments with direct patient exposure.', label: 'Tab 1 Description', description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_1_tag',         value: '20+ Hospital Partners',                      label: 'Tab 1 Tag',         description: 'Small label shown under the image', category: 'training', updated_at: '' },
  { key: 'training_tab_1_points',      value: 'OT, ICU & emergency department rotations\nSupervised patient management & case presentations\nExposure to 1,000+ cases per program year\nHospital letters of training on completion', label: 'Tab 1 Bullet Points', description: 'One point per line', category: 'training', updated_at: '' },
  { key: 'training_tab_2_label',       value: 'Digital Learning',                           label: 'Tab 2 Label',       description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_2_headline',    value: '24/7 online learning platform',              label: 'Tab 2 Headline',    description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_2_description', value: 'Structured digital curriculum built for working doctors. Live weekly sessions, recorded lectures, case-based modules, journal access and peer forums — on any device.', label: 'Tab 2 Description', description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_2_tag',         value: 'Learn anytime, anywhere',                    label: 'Tab 2 Tag',         description: 'Small label shown under the image', category: 'training', updated_at: '' },
  { key: 'training_tab_2_points',      value: 'Live weekend sessions with senior specialists\nOn-demand lecture library\n500+ clinical case studies & MCQs\nInternational journal & textbook access', label: 'Tab 2 Bullet Points', description: 'One point per line', category: 'training', updated_at: '' },
  { key: 'training_tab_3_label',       value: 'Expert Mentorship',                          label: 'Tab 3 Label',       description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_3_headline',    value: 'One-on-one senior specialist mentorship',    label: 'Tab 3 Headline',    description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_3_description', value: "Every fellow is paired with a dedicated senior faculty mentor. Small batches ensure personal attention, career guidance and access to your mentor's professional network.", label: 'Tab 3 Description', description: '', category: 'training', updated_at: '' },
  { key: 'training_tab_3_tag',         value: '50+ Faculty Mentors',                        label: 'Tab 3 Tag',         description: 'Small label shown under the image', category: 'training', updated_at: '' },
  { key: 'training_tab_3_points',      value: 'Dedicated faculty mentor assigned on Day 1\nMonthly 1:1 progress review sessions\nCareer guidance & placement introductions\nLifelong alumni network access', label: 'Tab 3 Bullet Points', description: 'One point per line', category: 'training', updated_at: '' },

  // ── Social Media ─────────────────────────────────────────────────────────────
  { key: 'social_facebook',  value: 'https://www.facebook.com/people/MedFellow-Academy/61576370840302/', label: 'Facebook URL',  description: 'Facebook page link (shown in footer)', category: 'social', updated_at: '' },
  { key: 'social_instagram', value: 'https://www.instagram.com/medfellow_academy/',                      label: 'Instagram URL', description: 'Instagram profile link', category: 'social', updated_at: '' },
  { key: 'social_linkedin',  value: 'https://www.linkedin.com/in/medfellow-academy-4628823b8/',          label: 'LinkedIn URL',  description: 'LinkedIn page link', category: 'social', updated_at: '' },
  { key: 'social_youtube',   value: '',                                                                   label: 'YouTube URL',   description: 'YouTube channel link', category: 'social', updated_at: '' },

  // ── SEO ──────────────────────────────────────────────────────────────────────
  { key: 'meta_title',       value: 'MedFellow Academy | Medical Fellowship Programs', label: 'Default Meta Title',       description: 'Default browser tab title for all pages', category: 'seo', updated_at: '' },
  { key: 'meta_description', value: "India's premier medical fellowship programs. Learn from top specialists and advance your medical career.", label: 'Default Meta Description', description: 'Default description for Google search', category: 'seo', updated_at: '' },
];

const CATEGORY_LABELS: Record<string, string> = {
  contact:       '📞 Contact & General',
  announcement:  '📢 Announcement Bar',
  homepage:      '🏠 Hero / Homepage',
  stats:         '📊 Stats & Numbers',
  ticker:        '📡 Scrolling Ticker',
  why:           '✅ Why MedFellow Section',
  accreditation: '🏅 Accreditation Section',
  training:      '🏥 Training Facilities Section',
  social:        '📱 Social Media',
  seo:           '🔍 SEO / Google',
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
      const res = await fetch('/api/admin/settings');
      const json = await res.json();
      const dbRows: CmsSetting[] = json.data ?? [];
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
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates: values }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? 'Save failed');
      }
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
              const val = values[row.key] ?? '';
              const isTall = row.key === 'ticker_items' || row.key === 'announcement_text' || row.key.endsWith('_points');
              const isMedium = !isTall && (val.length > 80 || row.key.includes('subtitle') || row.key.includes('body') || row.key.includes('description') || row.key.includes('address') || row.key.includes('_desc') || row.key.includes('heading'));
              const rows = isTall ? 10 : isMedium ? 3 : undefined;
              return (
                <div key={row.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{row.label}</label>
                  {row.description && <p className="text-xs text-gray-400 mb-1.5">{row.description}</p>}
                  {(isTall || isMedium) ? (
                    <textarea
                      value={val}
                      onChange={(e) => setValues({ ...values, [row.key]: e.target.value })}
                      rows={rows}
                      className={inputCls + ' resize-y'}
                    />
                  ) : (
                    <input
                      value={val}
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
