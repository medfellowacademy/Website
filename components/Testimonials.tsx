'use client';
import { Star, CheckCircle2 } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useEffect } from 'react';

interface TestimonialItem {
  name: string;
  role: string;
  hospital: string;
  text: string;
  rating: number;
  initials: string;
  color: string;
}

const AVATAR_BG = ['#e8f2ea', '#DCFCE7', '#FEF3C7', '#FCE7F3', '#EDE9FE', '#F3F4F6'];

const TESTIMONIALS: TestimonialItem[] = [
  { name: 'Dr. Amit Patel',   role: 'Emergency Medicine Fellow', hospital: 'Super Speciality Hospital, Ahmedabad', text: 'I went from Rs 80,000/month to Rs 3.2 lakhs/month as an ER specialist in just 14 months. The fellowship completely transformed my career.', rating: 5, initials: 'AP', color: AVATAR_BG[0] },
  { name: 'Dr. Sneha Verma',  role: 'Critical Care Fellow',      hospital: 'Super Speciality Hospital, Delhi',        text: 'Before the fellowship I was stuck in a career plateau. Now I am a sought-after ICU consultant with multiple hospital partnerships.', rating: 5, initials: 'SV', color: AVATAR_BG[1] },
  { name: 'Dr. Rajan Nair',   role: 'Gastroenterology Fellow',   hospital: 'Super Speciality Hospital, Bangalore',   text: 'The hands-on training was exceptional. Within 6 months of completing the fellowship I had two hospital offers and a 2.4× salary increase.', rating: 5, initials: 'RN', color: AVATAR_BG[2] },
  { name: 'Dr. Pooja Reddy',  role: 'Reproductive Medicine',     hospital: 'CARE Fertility, Hyderabad',    text: 'The curriculum is practical and immediately applicable. I feel far more confident and have set up my own IVF practice.', rating: 5, initials: 'PR', color: AVATAR_BG[3] },
  { name: 'Dr. Suresh Menon', role: 'Diabetology Fellow',        hospital: 'KIMS Hospital, Kerala',        text: 'I handled more cases in 12 months than in years of regular practice. Highly recommended for any doctor serious about specialising.', rating: 5, initials: 'SM', color: AVATAR_BG[4] },
  { name: 'Dr. Kavita Singh', role: 'Pain Management Fellow',    hospital: 'Super Speciality Hospital, Gurugram',            text: 'The mentorship even after completing the fellowship has been invaluable in setting up my own pain management clinic.', rating: 5, initials: 'KS', color: AVATAR_BG[5] },
];

export default function Testimonials({ testimonials }: { testimonials?: TestimonialItem[] }) {
  const data = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIALS;

  useEffect(() => {
    data.forEach(t => analytics.testimonialView(t.name));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section-padding bg-[#FAFAFA] border-b border-[#E5E7EB]">
      <div className="container-custom">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <div>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title mt-1">What our fellows say</h2>
          </div>
          {/* Rating summary */}
          <div className="flex items-center gap-3 py-2 px-3 bg-white border border-[#E5E7EB] rounded-lg w-fit">
            <div className="text-center">
              <p className="text-[1.25rem] font-bold text-[#111827] leading-none">4.9</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
            </div>
            <div className="w-px h-8 bg-[#E5E7EB]" />
            <p className="text-[0.75rem] text-[#6B7280]">340 verified<br/>reviews</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E7EB] rounded-lg p-5 hover:border-[#C6DFC9] hover:shadow-sm transition-all duration-150"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[0.875rem] text-[#374151] leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#F3F4F6]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[0.6875rem] font-bold"
                  style={{ background: t.color, color: '#15401E' }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-[0.8125rem] font-semibold text-[#111827] truncate">{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15401E] flex-shrink-0" />
                  </div>
                  <p className="text-[0.75rem] text-[#9CA3AF] truncate">{t.role} · {t.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
