import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFaculty } from '@/lib/cms';
import { FACULTY_DATA, toFacultySlug, cmsToFacultyMember, type FacultyMember } from '@/lib/faculty-data';
import { ArrowLeft, Star, Users, Award } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getAllFaculty(): Promise<FacultyMember[]> {
  try {
    const cmsData = await getFaculty();
    const published = cmsData.filter(f => f.is_published);
    if (published.length > 0) {
      return published.map(cmsToFacultyMember);
    }
  } catch {}
  return FACULTY_DATA;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const all = await getAllFaculty();
  const member = all.find(m => toFacultySlug(m.name) === slug);
  if (!member) return { title: 'Faculty | MedFellow Academy' };
  return {
    title: `${member.name} | Faculty | MedFellow Academy`,
    description: member.bio,
  };
}

export default async function FacultyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const all = await getAllFaculty();
  const member = all.find(m => toFacultySlug(m.name) === slug);

  if (!member) notFound();

  const others = all.filter(m => toFacultySlug(m.name) !== slug);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <div className="container-custom py-8 max-w-5xl mx-auto">

        {/* Back */}
        <Link
          href="/faculty"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B7280] hover:text-[#15401E] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Faculty
        </Link>

        {/* Main profile card */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm mb-8">
          <div className="grid md:grid-cols-[320px_1fr]">

            {/* Photo column */}
            <div
              className="relative min-h-[320px] md:min-h-[480px]"
              style={{ background: member.accentLight }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Specialty badge */}
              <span
                className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white shadow"
                style={{ background: member.accentColor }}
              >
                {member.specialty}
              </span>
            </div>

            {/* Details column */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-1">{member.name}</h1>
                <p className="text-base font-semibold mb-1" style={{ color: member.accentColor }}>{member.title}</p>
                <p className="text-sm text-[#6B7280] mb-5">{member.credentials}</p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                    <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="text-sm font-bold text-[#111827]">{member.studentRating}</span>
                    <span className="text-xs text-[#6B7280]">Rating</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                    <Users className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-sm font-bold text-[#111827]">{member.fellowsTrained}</span>
                    <span className="text-xs text-[#6B7280]">Fellows</span>
                  </div>
                  {member.experience && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                      <Award className="w-4 h-4 text-[#6B7280]" />
                      <span className="text-sm font-medium text-[#374151]">{member.experience}</span>
                    </div>
                  )}
                </div>

                {/* Bio */}
                {member.bio && (
                  <div className="mb-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-2">About</h3>
                    <p className="text-sm text-[#374151] leading-relaxed">{member.bio}</p>
                  </div>
                )}

                {/* Specialties */}
                {member.specialties && member.specialties.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((s, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: member.accentLight, color: member.accentColor }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {member.highlights && member.highlights.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-2">Highlights</h3>
                    <ul className="space-y-1.5">
                      {member.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#374151]">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: member.accentColor }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Quote */}
              {member.quote && (
                <blockquote
                  className="mt-4 px-4 py-3 rounded-xl border-l-4 italic text-sm text-[#374151]"
                  style={{ borderColor: member.accentColor, background: member.accentLight }}
                >
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
              )}
            </div>
          </div>
        </div>

        {/* Other faculty */}
        {others.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-[#111827] mb-4">Other Faculty Members</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {others.map((m, i) => (
                <Link
                  key={i}
                  href={`/faculty/${toFacultySlug(m.name)}`}
                  className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#C6DFC9] hover:shadow-md transition-all"
                >
                  <div className="relative w-full bg-[#F9FAFB]" style={{ aspectRatio: '3/4' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-[#111827] leading-tight group-hover:text-[#15401E] transition-colors">{m.name}</h3>
                    <p className="text-[0.7rem] text-[#6B7280] mt-0.5">{m.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 bg-[#15401E] rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Ready to Learn from {member.name.split(' ')[0]} {member.name.split(' ')[1]}?</h3>
          <p className="text-white/70 text-sm mb-5">Apply now and get matched with a faculty mentor on Day 1.</p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#15401E] rounded-xl text-sm font-bold hover:bg-[#F9FAFB] transition-colors"
          >
            Apply Now
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
}
