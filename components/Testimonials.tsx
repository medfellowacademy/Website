'use client';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Dr. Amit Patel',
    role: 'Emergency Medicine Fellow',
    hospital: 'Apollo Hospitals, Ahmedabad',
    text: 'I went from earning ₹80,000/month to ₹3.2 lakhs/month as an ER specialist in just 14 months. The fellowship completely transformed my career.',
    rating: 5,
  },
  {
    name: 'Dr. Sneha Verma',
    role: 'Critical Care Fellow',
    hospital: 'Max Healthcare, Delhi',
    text: 'Before the fellowship, I was stuck in a career plateau. Now I\'m a sought-after ICU consultant with multiple hospital partnerships.',
    rating: 5,
  },
  {
    name: 'Dr. Rajan Nair',
    role: 'Gastroenterology Fellow',
    hospital: 'Fortis Hospital, Bangalore',
    text: 'The hands-on training was exceptional. Within 6 months of completing the fellowship I had two hospital offers.',
    rating: 5,
  },
  {
    name: 'Dr. Pooja Reddy',
    role: 'Reproductive Medicine Fellow',
    hospital: 'CARE Fertility, Hyderabad',
    text: 'The curriculum is practical and immediately applicable. I feel far more confident in my specialty now.',
    rating: 5,
  },
  {
    name: 'Dr. Suresh Menon',
    role: 'Diabetology Fellow',
    hospital: 'KIMS Hospital, Kerala',
    text: 'I handled more cases in 12 months than in years of regular practice. Highly recommended for any doctor serious about specialising.',
    rating: 5,
  },
  {
    name: 'Dr. Kavita Singh',
    role: 'Pain Management Fellow',
    hospital: 'Medanta Hospital, Gurugram',
    text: 'The support from mentors even after completing the fellowship has been invaluable in setting up my own practice.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block mb-2 sm:mb-3">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium"
              style={{ background: '#D6EAF8', color: '#2E86C1' }}
            >
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium mb-2 sm:mb-3 px-4" style={{ color: '#1B4F72' }}>
            What Our Fellows Say
          </h2>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto px-4" style={{ color: '#5D6D7E', lineHeight: 1.7 }}>
            Real doctors. Real outcomes. See how our fellowship programs have transformed medical careers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative"
              style={{ 
                border: '1px solid #BFC9CA',
                boxShadow: '0 2px 8px rgba(27, 79, 114, 0.08)'
              }}
            >
              {/* Quote Icon Background */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-5"
                style={{ color: '#1B4F72' }}
              >
                <Quote className="w-full h-full" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: '#F39C12' }}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p 
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: '#5D6D7E' }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t" style={{ borderColor: '#EAF2FB' }}>
                  {/* Avatar Circle */}
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium"
                      style={{ background: '#D6EAF8', color: '#1B4F72' }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium mb-0.5" style={{ color: '#1B4F72' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs mb-1" style={{ color: '#5D6D7E' }}>
                        {testimonial.role}
                      </div>
                      <div className="text-xs truncate" style={{ color: '#2E86C1' }}>
                        {testimonial.hospital}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: '#5D6D7E' }}>
            Join <span className="font-medium" style={{ color: '#1B4F72' }}>500+ doctors</span> who have transformed their careers
          </p>
          <a
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90"
            style={{ background: '#1B4F72', color: '#FFFFFF' }}
          >
            View All Programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
