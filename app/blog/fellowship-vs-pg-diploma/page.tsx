import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlogArticle() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Fellowship vs PG Diploma</span>
            </div>

            {/* Category & Reading Time */}
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Career Planning
              </span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 15 Jan 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Fellowship vs PG Diploma: Which Should You Choose in 2026?
            </h1>

            {/* Author & Stats */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  MA
                </div>
                <div>
                  <p className="font-semibold text-primary">Med Fellow Academy</p>
                  <p className="text-sm text-text-secondary">Medical Education Experts</p>
                </div>
              </div>
              <div className="text-sm text-text-secondary">
                👁️ 12.4K views
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                You&apos;ve completed your MBBS or MD, and now you&apos;re looking to specialize further. The big question: Fellowship or PG Diploma? This decision will shape your career trajectory, income potential, and professional credibility for decades. Let&apos;s break it down with real data.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                The Short Answer (TL;DR)
              </h2>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Choose Fellowship if:</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ You want MCI + international recognition</li>
                  <li>✓ You need 200+ hands-on procedures (not just observation)</li>
                  <li>✓ You&apos;re targeting ₹40L+ salaries or senior positions</li>
                  <li>✓ You want to practice independently or abroad</li>
                </ul>
                <p className="text-lg font-semibold text-primary mt-6 mb-3">Choose PG Diploma if:</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ You need a quick certification (6-8 months)</li>
                  <li>✓ You&apos;re content with assistant-level roles</li>
                  <li>✓ Budget is extremely tight (&lt;₹3 lakhs)</li>
                  <li>✓ You just need a certificate for your CV</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                1. Recognition & Credibility
              </h2>
              
              <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                Fellowship Programs (12 months)
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-primary">MCI Recognition:</strong> Yes, if completed at MCI-approved institutions
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-primary">International Boards:</strong> Many fellowships offer dual certification (e.g., European Board, American equivalents)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-primary">Hospital Recognition:</strong> Top hospitals (AIIMS, Apollo, Fortis) recognize fellowship credentials for consultant positions
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                PG Diplomas (6-8 months)
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <div>
                    <strong className="text-primary">MCI Recognition:</strong> Limited or none (institution-specific certificate)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <div>
                    <strong className="text-primary">International Recognition:</strong> Rarely accepted outside India
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl mt-1">~</span>
                  <div>
                    <strong className="text-primary">Hospital Recognition:</strong> May qualify for junior roles, but not consultant-level
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                2. Hands-On Training: The Real Difference
              </h2>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full card">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-4 text-left">Parameter</th>
                      <th className="p-4 text-center">Fellowship</th>
                      <th className="p-4 text-center">PG Diploma</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Duration</td>
                      <td className="p-4 text-center">12 months</td>
                      <td className="p-4 text-center">6-8 months</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Procedures Performed</td>
                      <td className="p-4 text-center text-green-600 font-bold">200-500+</td>
                      <td className="p-4 text-center text-red-600 font-bold">20-80</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Clinical Exposure</td>
                      <td className="p-4 text-center">Primary operator</td>
                      <td className="p-4 text-center">Observer/Assistant</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Faculty Ratio</td>
                      <td className="p-4 text-center">1:3 to 1:5</td>
                      <td className="p-4 text-center">1:15 to 1:25</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                <p className="font-semibold text-red-700 mb-2">⚠️ Critical Reality Check:</p>
                <p className="text-text-secondary">
                  In most PG Diplomas, you&apos;ll spend 70% of the time observing and 30% assisting. You rarely get to perform procedures independently. Fellowships flip this: 70% hands-on, 30% observation.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                3. Salary & ROI: The Numbers Don&apos;t Lie
              </h2>

              <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                Example: Gastroenterology
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="card p-6 bg-green-50">
                  <h4 className="text-xl font-bold text-primary mb-4">Fellowship Graduate</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Investment:</span>
                      <span className="font-bold text-primary">₹7.5 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Avg Starting Salary:</span>
                      <span className="font-bold text-secondary">₹42 LPA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">ROI Break-Even:</span>
                      <span className="font-bold text-accent">2.1 months</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="text-text-secondary">5-Year Earnings:</span>
                      <span className="font-bold text-primary text-xl">₹2.5 Cr</span>
                    </div>
                  </div>
                </div>

                <div className="card p-6 bg-gray-50">
                  <h4 className="text-xl font-bold text-text-secondary mb-4">PG Diploma Graduate</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Investment:</span>
                      <span className="font-bold text-text-secondary">₹3-5 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Avg Starting Salary:</span>
                      <span className="font-bold text-text-secondary">₹18-24 LPA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">ROI Break-Even:</span>
                      <span className="font-bold text-text-secondary">2-3 months</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="text-text-secondary">5-Year Earnings:</span>
                      <span className="font-bold text-text-secondary text-xl">₹1.2 Cr</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-primary mb-4">
                The Verdict: Fellowship grads earn ₹1.3 Cr MORE over 5 years despite higher upfront cost.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                4. Career Opportunities
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Fellowship Opens Doors To:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Consultant positions at corporate hospitals (₹50L+ packages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Independent practice setup with credibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Academic positions (Associate Professor, teaching roles)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>International opportunities (Middle East, UK, USA with exams)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">PG Diploma Typical Roles:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">~</span>
                      <span>Junior consultant/Senior resident roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">~</span>
                      <span>Clinic jobs with limited autonomy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">~</span>
                      <span>Rarely qualify for senior positions at premier hospitals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Final Recommendation
              </h2>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary mb-4">
                  If you&apos;re serious about building a long-term medical career with high income potential and professional respect, <strong className="text-primary">invest in a proper fellowship</strong>.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary mb-4">
                  Yes, it costs more upfront. Yes, it takes longer. But the ROI is undeniable: ₹18-20 lakhs more per year for the rest of your career.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary">
                  PG Diplomas are fine for a quick certification boost, but they won&apos;t give you the clinical competence or credibility that fellowships provide.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Choose the Right Path?
                </h3>
                <p className="text-text-secondary mb-6">
                  Download our free 45-page Fellowship Selection Guide with detailed ROI calculators, specialty comparisons, and decision frameworks.
                </p>
                <Link href="/free-guide" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all">
                  📥 Download Free Guide
                </Link>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  MF
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">About Med Fellow Academy</h3>
                  <p className="text-text-secondary mb-4">
                    India&apos;s leading medical fellowship institution with 500+ successful graduates, 98% placement rate, and partnerships with 8 premier hospitals. We provide MCI-recognized fellowships with guaranteed hands-on training and career support.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/programs" className="text-secondary font-semibold hover:text-primary">
                      View Our Programs →
                    </Link>
                    <Link href="/blog" className="text-secondary font-semibold hover:text-primary">
                      More Articles →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/earning-potential-gastroenterology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Salary Insights
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Real Earning Potential After Gastroenterology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Data-backed breakdown of salary ranges and consulting opportunities...</p>
              </Link>

              <Link href="/blog/critical-care-job-market-2026" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  Job Market
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Critical Care Fellowship Job Market in 2026
                </h3>
                <p className="text-sm text-text-secondary">Hospital demand, salary trends, and placement statistics...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
