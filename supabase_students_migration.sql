-- ─── Student / Fellow Verification records (CMS) ──────────────────────────────
-- Run this once in the Supabase SQL Editor to enable the public /verify page
-- and the /admin/students manager. Mirrors the style of the other cms_* tables
-- (plain table, no RLS — access is only via the server-side service-role client
-- in lib/cms.ts).

CREATE TABLE IF NOT EXISTS cms_students (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  enrollment_no text UNIQUE NOT NULL,
  full_name text NOT NULL,
  photo_url text DEFAULT '',
  program text DEFAULT '',
  batch text DEFAULT '',
  start_date text DEFAULT '',
  end_date text DEFAULT '',
  status text DEFAULT 'Enrolled',
  mode text DEFAULT '',
  certificate_no text DEFAULT '',
  grade text DEFAULT '',
  issued_on text DEFAULT '',
  remarks text DEFAULT '',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS cms_students_enrollment_idx ON cms_students (enrollment_no);

SELECT 'cms_students ready' as status, (SELECT COUNT(*) FROM cms_students) as students;
