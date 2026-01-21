import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Amit Patel",
      role: "Emergency Medicine Fellow → ER Department Head",
      text: "I went from earning ₹80,000/month as a general practitioner to ₹3.2 lakhs/month as an ER specialist in just 14 months. The fellowship didn't just teach me skills—it repositioned my entire career trajectory.",
      outcome: "300% income increase in 14 months",
      videoUrl: "#video-amit-patel",
      hasVideo: true,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80"
    },
    {
      name: "Dr. Sneha Verma",
      role: "Critical Care Fellow → ICU Consultant",
      text: "Before the fellowship, I was stuck in a career plateau with limited growth. Now I'm a sought-after ICU consultant with multiple hospital partnerships and my own critical care practice. The transformation has been life-changing.",
      outcome: "From salaried doctor to practice owner",
      videoUrl: "#video-sneha-verma",
      hasVideo: true,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
    }
  ];

  const googleReviews = {
    rating: 4.9,
    totalReviews: 247,
    reviewUrl: "https://g.page/r/medfellowacademy/review"
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Real Doctors. Real Transformations. Real Results.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            These aren't just testimonials—they're proof that ambitious doctors can multiply their income and impact in months, not decades.
          </p>
          
          {/* Google Reviews Integration */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-primary">{googleReviews.rating}/5.0</div>
              <div className="text-xs text-text-secondary">{googleReviews.totalReviews} Google Reviews</div>
            </div>
            <a 
              href={googleReviews.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary text-sm font-semibold"
            >
              View All →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              {testimonial.hasVideo && (
                <div className="mb-6 relative group">
                  <div className="aspect-video bg-linear-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center cursor-pointer hover:from-primary/20 hover:to-secondary/20 transition-all">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-3xl">▶️</span>
                      </div>
                      <p className="text-sm font-semibold text-primary">Watch Video Testimonial</p>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-lg text-text-primary mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-secondary/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs font-bold text-accent">
                    ✓ {testimonial.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Reviews CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Join 500+ doctors who have transformed their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/success-stories" className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              View All Success Stories
            </a>
            <a href={googleReviews.reviewUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Read Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
