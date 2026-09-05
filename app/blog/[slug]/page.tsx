import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { getBlogPost } from "@/lib/cms";

export const dynamic = "force-dynamic";

const SITE_URL = "https://www.medfellowacademy.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const image = post.cover_image
    ? (post.cover_image.startsWith("http") ? post.cover_image : `${SITE_URL}${post.cover_image}`)
    : `${SITE_URL}/og-image.png`;

  return {
    title: `${title} | MedFellow Academy`,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CmsBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const contentHtml = marked.parse(post.content_markdown || "") as string;
  const dateLabel = new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
    day: "2-digit", month: "short", year: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image ? (post.cover_image.startsWith("http") ? post.cover_image : `${SITE_URL}${post.cover_image}`) : `${SITE_URL}/og-image.png`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { "@type": "Organization", name: "MedFellow Academy" },
    publisher: {
      "@type": "Organization",
      name: "MedFellow Academy",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}/` },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />

      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>

          <div className="flex items-center gap-4 mb-4 flex-wrap">
            {post.category && (
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                {post.category}
              </span>
            )}
            {post.read_time && <span className="text-sm text-text-secondary">⏱️ {post.read_time}</span>}
            <span className="text-sm text-text-secondary">📅 {dateLabel}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                MA
              </div>
              <div>
                <p className="font-semibold text-primary">Med Fellow Academy</p>
                <p className="text-sm text-text-secondary">Medical Education Experts</p>
              </div>
            </div>
          </div>

          {post.cover_image && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                unoptimized={post.cover_image.startsWith("http")}
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
                MF
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">About Med Fellow Academy</h3>
                <p className="text-text-secondary mb-4">
                  MedFellow Academy provides structured, flexible fellowship courses for practicing
                  doctors — combining evidence-based curriculum, expert faculty mentorship, and hands-on
                  clinical training across 60+ specialties.
                </p>
                <div className="flex gap-4">
                  <Link href="/courses" className="text-secondary font-semibold hover:text-primary">
                    View Our Courses →
                  </Link>
                  <Link href="/blog" className="text-secondary font-semibold hover:text-primary">
                    More Articles →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && (
        <FAQ faqs={post.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      )}

      <Footer />
    </div>
  );
}
