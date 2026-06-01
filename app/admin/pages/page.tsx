'use client';
import { useState } from 'react';
import { Save, ChevronDown, ChevronRight } from 'lucide-react';
import { updateManySettings } from '@/lib/cms';

// Static editable content sections for key pages
const PAGE_SECTIONS = [
  {
    id: 'home_about',
    page: 'Homepage',
    section: 'About Section',
    fields: [
      { key: 'about_title', label: 'Section Title', placeholder: 'Why Choose MedFellow Academy?', type: 'input' },
      { key: 'about_subtitle', label: 'Subtitle', placeholder: 'Short supporting line...', type: 'input' },
      { key: 'about_body', label: 'Body Text', placeholder: 'Main body paragraph...', type: 'textarea' },
    ],
  },
  {
    id: 'home_banner',
    page: 'Homepage',
    section: 'CTA Banner',
    fields: [
      { key: 'banner_title', label: 'Banner Title', placeholder: 'Ready to Transform Your Career?', type: 'input' },
      { key: 'banner_subtitle', label: 'Banner Subtitle', placeholder: 'Join thousands of doctors...', type: 'input' },
      { key: 'banner_cta', label: 'CTA Button Text', placeholder: 'Apply Now', type: 'input' },
    ],
  },
  {
    id: 'footer',
    page: 'Global',
    section: 'Footer',
    fields: [
      { key: 'footer_tagline', label: 'Footer Tagline', placeholder: 'Empowering doctors, transforming healthcare.', type: 'input' },
      { key: 'footer_copyright', label: 'Copyright Text', placeholder: '© 2026 MedFellow Academy. All rights reserved.', type: 'input' },
    ],
  },
  {
    id: 'contact',
    page: 'Contact Page',
    section: 'Contact Info',
    fields: [
      { key: 'contact_heading', label: 'Page Heading', placeholder: 'Get In Touch', type: 'input' },
      { key: 'contact_intro', label: 'Intro Text', placeholder: 'We\'re here to help you...', type: 'textarea' },
      { key: 'contact_hours', label: 'Office Hours', placeholder: 'Mon-Sat, 9 AM – 6 PM IST', type: 'input' },
    ],
  },
  {
    id: 'programs_page',
    page: 'Programs Page',
    section: 'Programs Hero',
    fields: [
      { key: 'programs_hero_title', label: 'Page Title', placeholder: 'Our Fellowship Programs', type: 'input' },
      { key: 'programs_hero_subtitle', label: 'Page Subtitle', placeholder: 'Choose from our range of specialized fellowship programs...', type: 'textarea' },
    ],
  },
];

export default function PagesPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [open, setOpen] = useState<Record<string, boolean>>({ home_about: true });
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState('');

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function handleSectionSave(sectionId: string, keys: string[]) {
    setSaving({ ...saving, [sectionId]: true });
    const payload: Record<string, string> = {};
    keys.forEach((k) => { payload[k] = values[k] ?? ''; });
    try {
      await updateManySettings(payload);
      showToast('Section saved!');
    } catch {
      showToast('Save failed');
    } finally {
      setSaving({ ...saving, [sectionId]: false });
    }
  }

  // Group by page
  const pages = Array.from(new Set(PAGE_SECTIONS.map((s) => s.page)));

  const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#213F5F]/20 focus:border-[#213F5F] bg-white transition-all';
  const labelCls = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">
          ✓ {toast}
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Page Content</h1>
        <p className="text-gray-400 text-sm mt-0.5">Edit static content sections across different pages</p>
      </div>

      {pages.map((page) => {
        const sections = PAGE_SECTIONS.filter((s) => s.page === page);
        return (
          <div key={page} className="space-y-3">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">{page}</h2>
            {sections.map((section) => {
              const isOpen = !!open[section.id];
              return (
                <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Section header */}
                  <button
                    type="button"
                    onClick={() => setOpen({ ...open, [section.id]: !isOpen })}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-800 text-sm">{section.section}</span>
                    {isOpen ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 space-y-4 border-t border-gray-50">
                      <div className="pt-4 space-y-4">
                        {section.fields.map((field) => (
                          <div key={field.key}>
                            <label className={labelCls}>{field.label}</label>
                            {field.type === 'textarea' ? (
                              <textarea
                                value={values[field.key] ?? ''}
                                onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                                placeholder={field.placeholder}
                                rows={3}
                                className={inputCls}
                              />
                            ) : (
                              <input
                                value={values[field.key] ?? ''}
                                onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                                placeholder={field.placeholder}
                                className={inputCls}
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => handleSectionSave(section.id, section.fields.map((f) => f.key))}
                          disabled={saving[section.id]}
                          className="flex items-center gap-2 px-4 py-2 bg-[#213F5F] hover:bg-[#1a3250] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all"
                        >
                          <Save className="w-3.5 h-3.5" />
                          {saving[section.id] ? 'Saving…' : 'Save Section'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
