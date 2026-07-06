import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog | Medical Fellowship Insights & Career Advice | MedFellow Academy",
  description: "Expert articles on medical fellowship programs, career advancement for doctors, specialty training tips, and the latest in medical education — from MedFellow Academy.",
  keywords: "medical fellowship blog, fellowship career advice, medical education articles, MedFellow Academy blog",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog" },
  openGraph: {
    title: "MedFellow Academy Blog",
    description: "Expert articles on medical fellowship programs and career advancement for doctors.",
    type: "website",
    url: "https://www.medfellowacademy.com/blog",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedFellow Academy Blog",
    description: "Expert articles on medical fellowship programs and career advancement for doctors.",
  },
};

const posts = [
  {
    slug: "cosmetic-gynecology-procedures-every-gynecologist-should-learn",
    title: "Cosmetic Gynecology Procedures Every Gynecologist Should Learn in 2026",
    excerpt: "A clinical guide to vaginal rejuvenation training, energy-based procedures, and aesthetic gynecology techniques.",
    category: "Clinical Skills",
    readTime: "9 min read",
    date: "29 Jun 2026",
    image: "/courses/cosmetic-gynecology.jpg"
  },
  {
    slug: "career-scope-after-fellowship-in-cosmetic-gynecology",
    title: "Career Scope After Fellowship in Cosmetic Gynecology: Skills, Opportunities & Future Growth",
    excerpt: "Career pathways, in-demand skills, and future growth potential after completing a cosmetic gynecology fellowship.",
    category: "Career Planning",
    readTime: "7 min read",
    date: "29 Jun 2026",
    image: "/courses/cosmetic-gynecology.jpg"
  },
  {
    slug: "arthroscopy-vs-arthroplasty-fellowship",
    title: "Arthroscopy vs Arthroplasty Fellowship: Which Specialization Should Orthopedic Surgeons Choose?",
    excerpt: "A comparison guide to help orthopedic surgeons choose between an arthroscopy fellowship and an arthroplasty fellowship course.",
    category: "Career Planning",
    readTime: "8 min read",
    date: "29 Jun 2026",
    image: "/courses/arthroscopy-arthroplasty.jpg"
  },
  {
    slug: "career-scope-after-fellowship-in-arthroscopy-and-arthroplasty",
    title: "Career Scope After Fellowship in Arthroscopy and Arthroplasty: Jobs, Skills & Future Opportunities",
    excerpt: "Career opportunities, in-demand skills, and future growth potential after completing a fellowship in arthroscopy and arthroplasty.",
    category: "Career Planning",
    readTime: "7 min read",
    date: "29 Jun 2026",
    image: "/courses/arthroscopy-arthroplasty.jpg"
  },
  {
    slug: "arthroplasty-fellowship-eligibility-syllabus-duration-admission",
    title: "Arthroplasty Fellowship Eligibility, Syllabus, Duration & Admission Guide 2026",
    excerpt: "Eligibility, curriculum, admission process, and required documents for the Fellowship in Arthroscopy and Arthroplasty.",
    category: "Fellowship Guides",
    readTime: "9 min read",
    date: "29 Jun 2026",
    image: "/courses/arthroscopy-arthroplasty.jpg"
  },
];

const categories = Array.from(
  posts.reduce((map, post) => map.set(post.category, (map.get(post.category) ?? 0) + 1), new Map<string, number>())
).map(([name, count]) => ({ name, count }));

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-[#15401E] text-white py-16">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="text-sm font-semibold">📰 KNOWLEDGE HUB</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Medical Fellowship Blog</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Data-driven insights on fellowship training, career growth, and medical specialization. Everything you need to make informed decisions.
          </p>
        </div>
      </section>

      {/* Articles + Sidebar */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-primary mb-8">Latest Articles</h2>

              <div className="space-y-6">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <div className="card overflow-hidden hover:shadow-lg transition-all">
                      <div className="flex gap-4">
                        <div className="relative w-40 h-40 shrink-0 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-text-secondary mb-3 text-sm">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs text-text-secondary">
                            <span>📅 {post.date}</span>
                            <span>⏱️ {post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="card p-6">
                <h3 className="text-lg font-heading font-bold text-primary mb-4">Browse by Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="w-full flex items-center justify-between px-4 py-2 rounded-lg">
                      <span className="text-sm text-text-secondary">{category.name}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-linear-to-br from-secondary to-primary text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Stop reading, start doing. Apply for our fellowship courses and transform your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Apply Now
              </Link>
              <Link href="/fellowship-matcher" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Find Your Fellowship
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
