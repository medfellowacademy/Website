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
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export async function getFaqs() {
  const { data, error } = await cmsClient
    .from('cms_faqs')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
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
