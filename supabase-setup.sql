-- Run this SQL in your Supabase SQL Editor

-- Contact Enquiries Table
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  program TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
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
