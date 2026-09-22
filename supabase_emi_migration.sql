-- ─── EMI / Fee Installment Applications ────────────────────────────────────
-- Run this once in the Supabase SQL Editor. Mirrors the style of the other
-- cms_* tables (plain table, no RLS — access is only via the server-side
-- service-role client in lib/cms.ts).
--
-- Flow: a prospective/enrolled student submits this form → row is created
-- with status 'pending_review' and a "received" email/SMS goes out →
-- an admin reviews it in /admin/emi-applications and either:
--   - marks it NOT eligible (status 'not_eligible', optional reason), or
--   - marks it eligible AND sets the EMI plan in one action
--     (status 'approved', emi_* fields filled in)
-- Either action fires the matching email/SMS to the applicant.

CREATE TABLE IF NOT EXISTS cms_emi_applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Applicant details
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  program text DEFAULT '',
  city text DEFAULT '',
  qualification text DEFAULT '',
  employment_type text DEFAULT '',
  monthly_income text DEFAULT '',
  course_fee numeric DEFAULT NULL,
  notes text DEFAULT '',

  -- Review outcome (admin-driven; nothing here is auto-computed)
  status text DEFAULT 'pending_review',  -- pending_review | approved | not_eligible
  review_notes text DEFAULT '',
  reviewed_by text DEFAULT '',
  reviewed_at timestamptz,

  -- EMI plan terms, filled in only when status = 'approved'
  emi_months integer,
  emi_monthly_amount numeric,
  emi_start_date text DEFAULT '',
  emi_processing_fee numeric,
  emi_notes text DEFAULT '',

  -- Notification audit trail — e.g. [{"channel":"email","event":"received","sent_at":"...","ok":true}]
  notifications jsonb DEFAULT '[]'::jsonb,

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS cms_emi_applications_status_idx ON cms_emi_applications (status, created_at DESC);

SELECT 'cms_emi_applications ready' as status,
       (SELECT COUNT(*) FROM cms_emi_applications) as applications;
