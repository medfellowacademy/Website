-- Add Dr. Malika Sharma to the faculty CMS.
-- Run once in the Supabase SQL editor. The public /faculty page renders from
-- cms_faculty when it has published rows (it currently does), so the code
-- fallback in lib/faculty-data.ts is NOT enough on its own — this row is what
-- makes her appear on the live site.
--
-- Photo: shipped in the repo at public/faculty/dr-malika-sharma.jpg
--        → served at /faculty/dr-malika-sharma.jpg

INSERT INTO cms_faculty
  (name, title, credentials, experience, specialty, bio, quote,
   specialties, student_rating, fellows_trained, highlights,
   photo_url, accent_color, accent_light, is_published, sort_order)
VALUES
  ('Dr. Malika Sharma',
   'Faculty – Dermatology & Aesthetic Medicine',
   'MBBS, MD, DNB (Dermatology, Venereology & Leprosy)',
   'Specialist in Dermatology, Venereology & Leprosy',
   'Dermatology',
   'Dermatologist with expertise across clinical dermatology, venereology and aesthetic practice. She trains fellows in the Fellowship in Dermatology and the Fellowship in Cosmetic & Aesthetic Medicine, covering the diagnosis and management of skin disease, procedural dermatology and cosmetic techniques.',
   '',
   '["Clinical Dermatology","Aesthetic Medicine","Venereology"]'::jsonb,
   4.9,
   '100+',
   '["MD, DNB — Dermatology, Venereology & Leprosy","Faculty for Fellowship in Dermatology","Faculty for Fellowship in Cosmetic & Aesthetic Medicine"]'::jsonb,
   '/faculty/dr-malika-sharma.jpg',
   '#9D174D',
   '#FCE7F3',
   true,
   8)
ON CONFLICT DO NOTHING;
