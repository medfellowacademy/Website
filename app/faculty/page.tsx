import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getFaculty } from '@/lib/cms';
import { FACULTY_DATA, toFacultySlug, FacultyMember } from '@/components/Faculty';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Our Faculty | Expert Medical Educators at MedFellow Academy',
  description: 'Meet MedFellow Academy\'s distinguished faculty — senior specialists and academic leaders with 15–25+ years of clinical experience.',
};

async function getAllFaculty(): Promise<FacultyMember[]> {
  try {
    const cmsData = await getFaculty();
    const published = cmsData.filter(f => f.is_published);
    if (published.length > 0) {
      return published.map(f => ({
        name:          f.name,
        title:         f.title ?? '',
        credentials:   f.credentials ?? '',
        experience:    f.experience ?? '',
        specialty:     f.specialty ?? '',
        bio:           f.bio ?? '',
        quote:         f.quote ?? '',
        specialties:   f.specialties ?? [],
        studentRating: f.student_rating ?? 4.8,
        fellowsTrained: f.fellows_trained ?? '',
        highlights:    f.highlights ?? [],
        photo:         f.photo_url ?? '',
        accentColor:   f.accent_color ?? '#15401E',
        accentLight:   f.accent_light ?? '#e8f2ea',
      }));
    }
  } catch {}
  return FACULTY_DATA;
}

export default async function FacultyPage() {
  const faculty = await getAllFaculty();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      {/* Page header */}
      <section className="bg-white border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom">
          <span className="section-label">{faculty.length} Faculty Members</span>
          <h1 className="section-title mt-2 mb-3">Our Faculty</h1>
          <p className="section-subtitle">
            Learn from distinguished clinicians and academic leaders who are active experts in their fields.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {faculty.map((member, index) => {
              const slug = toFacultySlug(member.name);
              return (
                <Link
                  key={index}
                  href={`/faculty/${slug}`}
                  className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#C6DFC9] hover:shadow-lg transition-all duration-200"
                >
                  {/* Full image */}
                  <div
                    className="relative w-full bg-[#F9FAFB]"
                    style={{ aspectRatio: '3/4' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <span
                      className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-md text-white shadow"
                      style={{ background: member.accentColor }}
                    >
                      {member.specialty}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-0.5 group-hover:text-[#15401E] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#6B7280] mb-2 leading-snug">{member.title}</p>
                    <p className="text-[11px] text-[#9CA3AF] line-clamp-2">{member.credentials}</p>

                    <div className="mt-3 pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: member.accentLight, color: member.accentColor }}
                      >
                        {member.specialty}
                      </span>
                      <span className="text-[11px] font-semibold text-[#15401E]">View Profile →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-12 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-[#111827] mb-3">Join Our Expert Faculty Team</h3>
            <p className="text-[#6B7280] mb-6 max-w-xl mx-auto">
              We're always looking for passionate educators and experienced clinicians to join our growing faculty.
            </p>
            <a href="mailto:info@medfellow.in" className="btn-primary px-8 py-3">
              Apply to Teach
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
