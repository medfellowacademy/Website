-- ─── Blog Posts (CMS) ─────────────────────────────────────────────────────────
-- Run this once in the Supabase SQL Editor to enable writing/publishing blog
-- posts from /admin/blog. Mirrors the style of supabase_cms_migration.sql
-- (plain table, no RLS — access is only via the server-side service-role
-- client in lib/cms.ts).

CREATE TABLE IF NOT EXISTS cms_blog_posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text DEFAULT '',
  category text DEFAULT 'Fellowship Guides',
  cover_image text DEFAULT '',
  read_time text DEFAULT '',
  content_markdown text DEFAULT '',
  faqs jsonb DEFAULT '[]'::jsonb,
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  is_published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS cms_blog_posts_published_idx
  ON cms_blog_posts (is_published, published_at DESC);

SELECT 'cms_blog_posts ready' as status, (SELECT COUNT(*) FROM cms_blog_posts) as posts;
