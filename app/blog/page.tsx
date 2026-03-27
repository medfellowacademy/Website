import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';

export default function Blog() {
  const featuredPosts = [
    {
      slug: "fellowship-vs-pg-diploma",
      title: "Fellowship vs PG Diploma: Which Should You Choose in 2026?",
      excerpt: "Complete comparison of career outcomes, salary growth, and clinical competency development between fellowships and PG diplomas.",
      category: "Career Planning",
      readTime: "8 min read",
      date: "15 Jan 2026",
      views: "12.4K",
      featured: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      slug: "earning-potential-gastroenterology",
      title: "Real Earning Potential After Gastroenterology Fellowship",
      excerpt: "Data-backed breakdown of salary ranges, private practice income, and consulting opportunities for gastroenterologists in India.",
      category: "Salary Insights",
      readTime: "6 min read",
      date: "12 Jan 2026",
      views: "9.8K",
      featured: true,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    }
  ];

  const recentPosts = [
    {
      slug: "ercp-learning-curve",
      title: "Mastering ERCP: What's the Realistic Learning Curve?",
      excerpt: "Based on 500+ procedures by our fellows—timeline, milestones, and competency benchmarks.",
      category: "Clinical Skills",
      readTime: "7 min read",
      date: "10 Jan 2026",
      views: "7.2K",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
    },
    {
      slug: "weekend-fellowship-worth-it",
      title: "Weekend Fellowships: Worth It for Practicing Doctors?",
      excerpt: "Pros, cons, and real experiences from doctors who completed weekend fellowship programs.",
      category: "Learning Models",
      readTime: "5 min read",
      date: "8 Jan 2026",
      views: "6.5K",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    },
    {
      slug: "critical-care-job-market-2026",
      title: "Critical Care Fellowship Job Market in 2026: Complete Analysis",
      excerpt: "Hospital demand, salary trends, and placement statistics for critical care specialists.",
      category: "Job Market",
      readTime: "9 min read",
      date: "5 Jan 2026",
      views: "8.9K",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
    },
    {
      slug: "orthopedic-fellowship-roi",
      title: "ROI of Orthopedic Fellowships: A Data-Driven Analysis",
      excerpt: "Investment vs returns: detailed financial breakdown of arthroscopy and joint replacement fellowships.",
      category: "ROI Analysis",
      readTime: "10 min read",
      date: "3 Jan 2026",
      views: "11.2K",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
    },
    {
      slug: "ivf-fellowship-guide",
      title: "Complete Guide to IVF Fellowship Training in India",
      excerpt: "Success rates, procedure volumes, certification requirements, and career paths in reproductive medicine.",
      category: "Fellowship Guides",
      readTime: "12 min read",
      date: "1 Jan 2026",
      views: "5.7K",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80"
    },
    {
      slug: "pain-management-opportunities",
      title: "Untapped Opportunities in Pain Management Fellowships",
      excerpt: "Why interventional pain management is the fastest-growing specialty in 2026.",
      category: "Career Opportunities",
      readTime: "6 min read",
      date: "29 Dec 2025",
      views: "4.3K",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    }
  ];

  const categories = [
    { name: "Career Planning", count: 24 },
    { name: "Salary Insights", count: 18 },
    { name: "Clinical Skills", count: 32 },
    { name: "Job Market", count: 15 },
    { name: "ROI Analysis", count: 12 },
    { name: "Fellowship Guides", count: 28 },
    { name: "Learning Models", count: 10 },
    { name: "Career Opportunities", count: 14 }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
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

      {/* Featured Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-primary mb-8">Featured Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div className="card overflow-hidden hover:shadow-xl transition-all h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-bold shadow-lg">
                        FEATURED
                      </span>
                      <span className="px-3 py-1 bg-secondary text-white rounded-full text-xs font-bold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                      <span>👁️ {post.views}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts + Sidebar */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-primary mb-8">Recent Articles</h2>
              
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="group">
                    <div className="card overflow-hidden hover:shadow-lg transition-all">
                      <div className="flex gap-4">
                        <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden">
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
                            <span>👁️ {post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Newsletter */}
              <div className="card p-6 mb-6 bg-linear-to-br from-primary to-primary-dark text-white">
                <h3 className="text-xl font-heading font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get weekly insights on fellowship training, career tips, and medical education trends.
                </p>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg mb-3 text-primary"
                />
                <button className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all">
                  Subscribe Free
                </button>
                <p className="text-xs opacity-75 mt-3 text-center">
                  5,000+ doctors already subscribed
                </p>
              </div>

              {/* Categories */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-heading font-bold text-primary mb-4">Browse by Category</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button key={index} className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-background transition-colors text-left">
                      <span className="text-sm text-text-secondary">{category.name}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Downloads */}
              <div className="card p-6">
                <h3 className="text-lg font-heading font-bold text-primary mb-4">Free Guides</h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 bg-background rounded-lg hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <h4 className="text-sm font-bold text-primary">Fellowship Selection Guide 2026</h4>
                        <p className="text-xs text-text-secondary">Complete 45-page PDF</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block p-3 bg-background rounded-lg hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <h4 className="text-sm font-bold text-primary">Salary Comparison Report</h4>
                        <p className="text-xs text-text-secondary">All specialties data</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block p-3 bg-background rounded-lg hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h4 className="text-sm font-bold text-primary">ROI Calculator Spreadsheet</h4>
                        <p className="text-xs text-text-secondary">Excel template</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-linear-to-br from-secondary to-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Stop reading, start doing. Apply for our fellowship programs and transform your career.
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
