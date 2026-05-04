-- Run this SQL in your Supabase SQL Editor

-- Applications Table
CREATE TABLE public.applications (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  program text NOT NULL,
  qualification text NOT NULL,
  experience text,
  message text,
  status text DEFAULT 'pending'::text CHECK (status = ANY (ARRAY['pending'::text, 'reviewing'::text, 'accepted'::text, 'rejected'::text])),
  created_at timestamp with time zone DEFAULT now(),
  dob text,
  gender text,
  reg_number text,
  state_council text,
  year_of_reg text,
  practice_type text,
  hospital_name text,
  clinic_name text,
  city text,
  mode_preference text,
  reason text,
  CONSTRAINT applications_pkey PRIMARY KEY (id)
);

-- Contact Enquiries Table
CREATE TABLE public.contact_enquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new'::text CHECK (status = ANY (ARRAY['new'::text, 'contacted'::text, 'resolved'::text])),
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT contact_enquiries_pkey PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (for form submissions)
CREATE POLICY "Allow public inserts on contact_enquiries"
  ON contact_enquiries FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public inserts on applications"
  ON applications FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated users to read and update
CREATE POLICY "Allow authenticated read on contact_enquiries"
  ON contact_enquiries FOR SELECT TO anon USING (true);

CREATE POLICY "Allow authenticated read on applications"
  ON applications FOR SELECT TO anon USING (true);

CREATE POLICY "Allow authenticated update on contact_enquiries"
  ON contact_enquiries FOR UPDATE TO anon USING (true);

CREATE POLICY "Allow authenticated update on applications"
  ON applications FOR UPDATE TO anon USING (true);

-- Create Storage Bucket for Application Documents (skip if already exists)
-- To check if bucket exists, run: SELECT * FROM storage.buckets WHERE id = 'application-documents';
INSERT INTO storage.buckets (id, name, public)
VALUES ('application-documents', 'application-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies for application-documents bucket
-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Allow public uploads to application-documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads from application-documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public updates to application-documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public deletes from application-documents" ON storage.objects;

-- Recreate policies
CREATE POLICY "Allow public uploads to application-documents"
  ON storage.objects FOR INSERT TO anon
  WITH CHECK (bucket_id = 'application-documents');

CREATE POLICY "Allow public reads from application-documents"
  ON storage.objects FOR SELECT TO anon
  USING (bucket_id = 'application-documents');

CREATE POLICY "Allow public updates to application-documents"
  ON storage.objects FOR UPDATE TO anon
  USING (bucket_id = 'application-documents');

CREATE POLICY "Allow public deletes from application-documents"
  ON storage.objects FOR DELETE TO anon
  USING (bucket_id = 'application-documents');
