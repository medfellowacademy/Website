import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// Use service role key (server-side only) for full CMS access.
// Falls back to anon key in browser contexts where service role is unavailable.
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const cmsClient = createClient(supabaseUrl, supabaseKey);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CmsProgram {
  id: string;
  slug: string;
  name: string;
  icon: string;
  duration: string;
  eligibility: string;
  description: string;
  overview: string;
  highlights: string[];
  online_price: number | null;
  month_11_1: number | null;
  month_10_2: number | null;
  month_9_3: number | null;
  month_6_6: number | null;
  month_12_offline: number | null;
  career_opportunities: string[];
  application_deadline: string;
  faqs: { question: string; answer: string }[];
  how_to_apply_steps: { title: string; desc: string }[];
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface CmsCurriculumModule {
  id: string;
  program_id: string;
  title: string;
  topics: string[];
  sort_order: number;
}

export interface CmsFaculty {
  id: string;
  name: string;
  title: string;
  credentials: string;
  experience: string;
  specialty: string;
  bio: string;
  quote: string;
  specialties: string[];
  student_rating: number;
  fellows_trained: string;
  highlights: string[];
  photo_url: string;
  accent_color: string;
  accent_light: string;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface CmsTestimonial {
  id: string;
  author_name: string;
  author_title: string;
  author_photo: string;
  content: string;
  rating: number;
  program_name: string;
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export interface CmsSetting {
  key: string;
  value: any;
  label: string;
  description: string;
  category: string;
  updated_at: string;
}

// ─── Programs ────────────────────────────────────────────────────────────────

export async function getPrograms() {
  const { data, error } = await cmsClient
    .from('cms_programs')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as CmsProgram[];
}

export async function getProgram(id: string) {
  const { data, error } = await cmsClient
    .from('cms_programs')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as CmsProgram;
}

export async function getProgramBySlug(slug: string) {
  const { data, error } = await cmsClient
    .from('cms_programs')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();
  if (error) return null;
  return data as CmsProgram;
}

export async function createProgram(input: Partial<CmsProgram>) {
  const { data, error } = await cmsClient
    .from('cms_programs')
    .insert({ ...input, updated_at: new Date().toISOString() })
    .select()
    .single();
  if (error) throw error;
  return data as CmsProgram;
}

export async function updateProgram(id: string, input: Partial<CmsProgram>) {
  const { data, error } = await cmsClient
    .from('cms_programs')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsProgram;
}

export async function deleteProgram(id: string) {
  const { error } = await cmsClient.from('cms_programs').delete().eq('id', id);
  if (error) throw error;
}

export async function toggleProgramPublish(id: string, current: boolean) {
  return updateProgram(id, { is_published: !current });
}

// ─── Curriculum Modules ──────────────────────────────────────────────────────

export async function getCurriculumModules(programId: string) {
  const { data, error } = await cmsClient
    .from('cms_curriculum_modules')
    .select('*')
    .eq('program_id', programId)
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data as CmsCurriculumModule[];
}

export async function upsertCurriculumModules(programId: string, modules: { title: string; topics: string[] }[]) {
  await cmsClient.from('cms_curriculum_modules').delete().eq('program_id', programId);
  if (modules.length === 0) return;
  const { error } = await cmsClient.from('cms_curriculum_modules').insert(
    modules.map((m, i) => ({ program_id: programId, title: m.title, topics: m.topics, sort_order: i }))
  );
  if (error) throw error;
}

// ─── Faculty ─────────────────────────────────────────────────────────────────

export async function getFaculty() {
  const { data, error } = await cmsClient
    .from('cms_faculty')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as CmsFaculty[];
}

export async function getFacultyMember(id: string) {
  const { data, error } = await cmsClient
    .from('cms_faculty')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as CmsFaculty;
}

export async function createFaculty(input: Partial<CmsFaculty>) {
  const { data, error } = await cmsClient
    .from('cms_faculty')
    .insert({ ...input, updated_at: new Date().toISOString() })
    .select()
    .single();
  if (error) throw error;
  return data as CmsFaculty;
}

export async function updateFaculty(id: string, input: Partial<CmsFaculty>) {
  const { data, error } = await cmsClient
    .from('cms_faculty')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsFaculty;
}

export async function deleteFaculty(id: string) {
  const { error } = await cmsClient.from('cms_faculty').delete().eq('id', id);
  if (error) throw error;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getTestimonials() {
  const { data, error } = await cmsClient
    .from('cms_testimonials')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as CmsTestimonial[];
}

export async function createTestimonial(input: Partial<CmsTestimonial>) {
  const { data, error } = await cmsClient
    .from('cms_testimonials')
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data as CmsTestimonial;
}

export async function updateTestimonial(id: string, input: Partial<CmsTestimonial>) {
  const { data, error } = await cmsClient
    .from('cms_testimonials')
    .update(input)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsTestimonial;
}

export async function deleteTestimonial(id: string) {
  const { error } = await cmsClient.from('cms_testimonials').delete().eq('id', id);
  if (error) throw error;
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export async function getSettings(): Promise<Record<string, any>> {
  const { data, error } = await cmsClient
    .from('cms_site_settings')
    .select('*')
    .order('category')
    .order('key');
  if (error) throw error;
  const map: Record<string, any> = {};
  (data as CmsSetting[]).forEach((s) => { map[s.key] = s.value; });
  return map;
}

export async function getSettingRows(): Promise<CmsSetting[]> {
  const { data, error } = await cmsClient
    .from('cms_site_settings')
    .select('*')
    .order('category')
    .order('key');
  if (error) throw error;
  return data as CmsSetting[];
}

export async function updateSetting(key: string, value: any) {
  const { error } = await cmsClient
    .from('cms_site_settings')
    .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: 'key' });
  if (error) throw error;
}

export async function updateManySettings(updates: Record<string, any>) {
  const rows = Object.entries(updates).map(([key, value]) => ({
    key,
    value,
    updated_at: new Date().toISOString(),
  }));
  const { error } = await cmsClient
    .from('cms_site_settings')
    .upsert(rows, { onConflict: 'key' });
  if (error) throw error;
}

// ─── FAQs ────────────────────────────────────────────────────────────────────

export interface CmsFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export async function getFaqs(publishedOnly = true) {
  let query = cmsClient
    .from('cms_faqs')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (publishedOnly) query = query.eq('is_published', true);
  const { data, error } = await query;
  if (error) throw error;
  return data as CmsFaq[];
}

export async function createFaq(input: Partial<CmsFaq>) {
  const { data, error } = await cmsClient
    .from('cms_faqs')
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data as CmsFaq;
}

export async function updateFaq(id: string, input: Partial<CmsFaq>) {
  const { data, error } = await cmsClient
    .from('cms_faqs')
    .update(input)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsFaq;
}

export async function deleteFaq(id: string) {
  const { error } = await cmsClient.from('cms_faqs').delete().eq('id', id);
  if (error) throw error;
}

// ─── Country Pages ────────────────────────────────────────────────────────────

export interface CmsCountryPage {
  id: string;
  slug: string;
  country_name: string;
  is_published: boolean;
  hero_badge: string;
  hero_heading: string;
  hero_subheading: string;
  hero_checks: string[];
  stats: { value: string; label: string }[];
  why_heading: string;
  why_points: { icon: string; title: string; desc: string }[];
  featured_specialties: { number: string; icon: string; name: string; slug: string; description: string; demandDriver: string }[];
  testimonials: { quote: string; author: string; role: string; rating: number }[];
  faqs: { question: string; answer: string }[];
  meta_title: string;
  meta_description: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export async function getCountryPages(publishedOnly = true) {
  let q = cmsClient.from('cms_country_pages').select('*').order('sort_order', { ascending: true });
  if (publishedOnly) q = q.eq('is_published', true);
  const { data, error } = await q;
  if (error) throw error;
  return data as CmsCountryPage[];
}

export async function getCountryPage(slug: string) {
  const { data, error } = await cmsClient
    .from('cms_country_pages')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) return null;
  return data as CmsCountryPage;
}

export async function getCountryPageById(id: string) {
  const { data, error } = await cmsClient
    .from('cms_country_pages')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as CmsCountryPage;
}

export async function createCountryPage(input: Partial<CmsCountryPage>) {
  const { data, error } = await cmsClient
    .from('cms_country_pages')
    .insert({ ...input, updated_at: new Date().toISOString() })
    .select()
    .single();
  if (error) throw error;
  return data as CmsCountryPage;
}

export async function updateCountryPage(id: string, input: Partial<CmsCountryPage>) {
  const { data, error } = await cmsClient
    .from('cms_country_pages')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsCountryPage;
}

export async function deleteCountryPage(id: string) {
  const { error } = await cmsClient.from('cms_country_pages').delete().eq('id', id);
  if (error) throw error;
}

// ─── Custom Pages ─────────────────────────────────────────────────────────────

export interface CmsPageSection {
  type: 'text' | 'features' | 'stats' | 'cta' | 'testimonials' | 'faq';
  heading?: string;
  body?: string;
  items?: Record<string, string>[];
  cta_text?: string;
  cta_url?: string;
  bg?: string;
}

export interface CmsCustomPage {
  id: string;
  slug: string;
  title: string;
  is_published: boolean;
  hero_heading: string;
  hero_subheading: string;
  hero_cta_text: string;
  hero_cta_url: string;
  hero_bg_color: string;
  sections: CmsPageSection[];
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
}

export async function getCustomPages(publishedOnly = false) {
  let q = cmsClient.from('cms_custom_pages').select('*').order('created_at', { ascending: false });
  if (publishedOnly) q = q.eq('is_published', true);
  const { data, error } = await q;
  if (error) throw error;
  return data as CmsCustomPage[];
}

export async function getCustomPage(slug: string) {
  const { data, error } = await cmsClient
    .from('cms_custom_pages')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();
  if (error) return null;
  return data as CmsCustomPage;
}

export async function getCustomPageById(id: string) {
  const { data, error } = await cmsClient
    .from('cms_custom_pages')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as CmsCustomPage;
}

export async function createCustomPage(input: Partial<CmsCustomPage>) {
  const { data, error } = await cmsClient
    .from('cms_custom_pages')
    .insert({ ...input, updated_at: new Date().toISOString() })
    .select()
    .single();
  if (error) throw error;
  return data as CmsCustomPage;
}

export async function updateCustomPage(id: string, input: Partial<CmsCustomPage>) {
  const { data, error } = await cmsClient
    .from('cms_custom_pages')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsCustomPage;
}

export async function deleteCustomPage(id: string) {
  const { error } = await cmsClient.from('cms_custom_pages').delete().eq('id', id);
  if (error) throw error;
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export interface CmsBlogFaq {
  question: string;
  answer: string;
}

export interface CmsBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover_image: string;
  read_time: string;
  content_markdown: string;
  faqs: CmsBlogFaq[];
  meta_title: string;
  meta_description: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export async function getBlogPosts(publishedOnly = false) {
  let q = cmsClient.from('cms_blog_posts').select('*').order('published_at', { ascending: false });
  if (publishedOnly) q = q.eq('is_published', true);
  const { data, error } = await q;
  if (error) throw error;
  return data as CmsBlogPost[];
}

export async function getBlogPost(slug: string) {
  const { data, error } = await cmsClient
    .from('cms_blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();
  if (error) return null;
  return data as CmsBlogPost;
}

export async function getBlogPostById(id: string) {
  const { data, error } = await cmsClient
    .from('cms_blog_posts')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as CmsBlogPost;
}

export async function createBlogPost(input: Partial<CmsBlogPost>) {
  const { data, error } = await cmsClient
    .from('cms_blog_posts')
    .insert({ ...input, updated_at: new Date().toISOString() })
    .select()
    .single();
  if (error) throw error;
  return data as CmsBlogPost;
}

export async function updateBlogPost(id: string, input: Partial<CmsBlogPost>) {
  const { data, error } = await cmsClient
    .from('cms_blog_posts')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsBlogPost;
}

export async function deleteBlogPost(id: string) {
  const { error } = await cmsClient.from('cms_blog_posts').delete().eq('id', id);
  if (error) throw error;
}

// ─── Students / Fellow Verification ───────────────────────────────────────────

export interface CmsStudent {
  id: string;
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
  verification_ref: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type LookupStatus = 'active' | 'inactive' | 'notfound';

/** Canonical form of an enrollment number: upper-case, runs of non-alphanumerics → single dash. */
export function normalizeEnrollment(raw: string): string {
  return (raw || '')
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Loose key for fuzzy matching — alphanumerics only, lower-case. */
function looseKey(raw: string): string {
  return (raw || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function genVerificationRef(): string {
  let s = '';
  for (let i = 0; i < 6; i++) s += Math.floor(Math.random() * 36).toString(36).toUpperCase();
  return `VRF-${s}`;
}

export async function getStudents() {
  const { data, error } = await cmsClient
    .from('cms_students')
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return data as CmsStudent[];
}

export async function getStudentById(id: string) {
  const { data, error } = await cmsClient
    .from('cms_students')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as CmsStudent;
}

/**
 * Public lookup for the /verify page. Tolerant of spacing/dashes/case, and
 * distinguishes "no such number" from "record exists but not active".
 */
export async function lookupStudentRecord(rawEnrollment: string): Promise<{ status: LookupStatus; student: CmsStudent | null }> {
  const normalized = normalizeEnrollment(rawEnrollment);
  if (!normalized) return { status: 'notfound', student: null };

  // Fast path: canonical match.
  let match: CmsStudent | null = null;
  const exact = await cmsClient.from('cms_students').select('*').ilike('enrollment_no', normalized).maybeSingle();
  if (exact.data) match = exact.data as CmsStudent;

  // Fallback: fuzzy compare against every record (table is small).
  if (!match) {
    const all = await cmsClient.from('cms_students').select('*');
    if (!all.error && all.data) {
      const key = looseKey(rawEnrollment);
      match = (all.data as CmsStudent[]).find((s) => looseKey(s.enrollment_no) === key) ?? null;
    }
  }

  if (!match) return { status: 'notfound', student: null };
  return { status: match.is_active ? 'active' : 'inactive', student: match };
}

/** Back-compat: active record only, or null. */
export async function getVerifiedStudent(enrollmentNo: string) {
  const { status, student } = await lookupStudentRecord(enrollmentNo);
  return status === 'active' ? student : null;
}

/** Fire-and-forget audit row for every /verify search. */
export async function logVerification(enrollmentNo: string, matched: boolean, studentId?: string | null) {
  try {
    await cmsClient.from('cms_verification_logs').insert({
      enrollment_no: normalizeEnrollment(enrollmentNo).slice(0, 120),
      matched,
      student_id: studentId ?? null,
    });
  } catch {
    /* logging must never break the page */
  }
}

/** Map of student_id → number of successful verifications (for the admin list). */
export async function getVerificationCounts(): Promise<Record<string, number>> {
  try {
    const { data } = await cmsClient.from('cms_verification_logs').select('student_id').eq('matched', true);
    const counts: Record<string, number> = {};
    for (const row of (data as { student_id: string | null }[]) ?? []) {
      if (row.student_id) counts[row.student_id] = (counts[row.student_id] ?? 0) + 1;
    }
    return counts;
  } catch {
    return {};
  }
}

export async function createStudent(input: Partial<CmsStudent>) {
  const payload: Partial<CmsStudent> = { ...input, updated_at: new Date().toISOString() };

  // Auto-generate an enrollment number when the admin leaves it blank.
  if (!payload.enrollment_no || !payload.enrollment_no.trim()) {
    const year = new Date().getFullYear();
    const { count } = await cmsClient
      .from('cms_students')
      .select('id', { count: 'exact', head: true })
      .ilike('enrollment_no', `MFA-${year}-%`);
    const seq = String((count ?? 0) + 1).padStart(5, '0');
    payload.enrollment_no = `MFA-${year}-${seq}`;
  } else {
    payload.enrollment_no = normalizeEnrollment(payload.enrollment_no);
  }

  if (!payload.verification_ref || !payload.verification_ref.trim()) {
    payload.verification_ref = genVerificationRef();
  }

  const { data, error } = await cmsClient
    .from('cms_students')
    .insert(payload)
    .select()
    .single();
  if (error) throw error;
  return data as CmsStudent;
}

export async function updateStudent(id: string, input: Partial<CmsStudent>) {
  const patch: Partial<CmsStudent> = { ...input, updated_at: new Date().toISOString() };
  if (typeof patch.enrollment_no === 'string' && patch.enrollment_no.trim()) {
    patch.enrollment_no = normalizeEnrollment(patch.enrollment_no);
  }
  const { data, error } = await cmsClient
    .from('cms_students')
    .update(patch)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as CmsStudent;
}

export async function deleteStudent(id: string) {
  const { error } = await cmsClient.from('cms_students').delete().eq('id', id);
  if (error) throw error;
}

// ─── Stats (for dashboard) ────────────────────────────────────────────────────

export async function getCmsStats() {
  const [programs, faculty, testimonials] = await Promise.all([
    cmsClient.from('cms_programs').select('id, is_published', { count: 'exact' }),
    cmsClient.from('cms_faculty').select('id, is_published', { count: 'exact' }),
    cmsClient.from('cms_testimonials').select('id, is_published', { count: 'exact' }),
  ]);
  return {
    programs: { total: programs.count ?? 0, published: programs.data?.filter((p) => p.is_published).length ?? 0 },
    faculty: { total: faculty.count ?? 0, published: faculty.data?.filter((f) => f.is_published).length ?? 0 },
    testimonials: { total: testimonials.count ?? 0, published: testimonials.data?.filter((t) => t.is_published).length ?? 0 },
  };
}
