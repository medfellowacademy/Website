import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import WhyMedFellow from "@/components/WhyMedFellow";
import FellowshipPrograms, { FeaturedProgram } from "@/components/FellowshipPrograms";
import TrainingFacilities from "@/components/TrainingFacilities";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import AccreditationSection from "@/components/AccreditationSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { getFaculty, getTestimonials, getFaqs, getPrograms, getSettings } from "@/lib/cms";
import { getProgramImage } from "@/lib/course-images";

export const dynamic = 'force-dynamic';

// (local images are resolved via getProgramImage from lib/course-images.ts)

const POPULAR_SLUGS = new Set([
  'fellowship-in-emergency-medicine',
  'fellowship-in-gynecology-obstetrics',
  'fellowship-in-gynecology-and-obstetrics',
  'fellowship-in-clinical-cardiology',
  'fellowship-in-gastroenterology',
  'fellowship-in-arthroscopy-sports-medicine',
  'fellowship-in-arthroscopy-and-sports-medicine',
]);

const NEW_SLUGS = new Set([
  'fellowship-in-cosmetic-and-aesthetic-medicine',
  'fellowship-in-endocrinology',
  'fellowship-in-reproductive-medicine',
]);

const AVATAR_COLORS = ['#e8f2ea', '#DCFCE7', '#FEF3C7', '#FCE7F3', '#EDE9FE', '#F3F4F6'];

function getInitials(name: string) {
  return name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

export default async function Home() {
  // Fetch all CMS data in parallel — each has its own fallback
  const [cmsFaculty, cmsTestimonials, cmsFaqs, cmsPrograms, cmsSettings] = await Promise.all([
    getFaculty().catch(() => []),
    getTestimonials().catch(() => []),
    getFaqs().catch(() => []),
    getPrograms().catch(() => []),
    getSettings().catch(() => ({} as Record<string, any>)),
  ]);

  // ── Faculty ──────────────────────────────────────────────────────────────────
  const facultyProps = cmsFaculty.filter(f => f.is_published).map(f => ({
    name: f.name,
    title: f.title,
    credentials: f.credentials,
    experience: f.experience,
    specialty: f.specialty,
    bio: f.bio,
    quote: f.quote,
    specialties: f.specialties ?? [],
    studentRating: f.student_rating ?? 4.8,
    fellowsTrained: f.fellows_trained ?? '',
    highlights: f.highlights ?? [],
    photo: f.photo_url ?? '',
    accentColor: f.accent_color ?? '#15401E',
    accentLight: f.accent_light ?? '#e8f2ea',
  }));

  // ── Testimonials ─────────────────────────────────────────────────────────────
  const testimonialProps = cmsTestimonials.filter(t => t.is_published).map((t, i) => ({
    name: t.author_name,
    role: t.author_title,
    hospital: t.program_name,
    text: t.content,
    rating: t.rating ?? 5,
    initials: getInitials(t.author_name),
    color: AVATAR_COLORS[i % AVATAR_COLORS.length],
  }));

  // ── FAQs ─────────────────────────────────────────────────────────────────────
  const faqProps = cmsFaqs.map(f => ({ q: f.question, a: f.answer }));

  // ── Featured Programs ────────────────────────────────────────────────────────
  const publishedPrograms = cmsPrograms.filter(p => p.is_published);
  const featuredProgramProps: FeaturedProgram[] = publishedPrograms.slice(0, 18).map(p => ({
    name: p.name,
    slug: p.slug,
    duration: p.duration,
    eligibility: p.eligibility,
    description: p.description,
    highlights: p.highlights ?? [],
    icon: p.icon || '🏥',
    image: getProgramImage(p.slug),
    onlinePrice: p.online_price ?? 150000,
    month11_1: p.month_11_1 ?? 180000,
    isPopular: POPULAR_SLUGS.has(p.slug),
    isNew: NEW_SLUGS.has(p.slug),
  }));

  // ── Hero settings ────────────────────────────────────────────────────────────
  const heroHeading = cmsSettings.hero_heading || undefined;
  const heroSubheading = cmsSettings.hero_subheading || undefined;
  const heroStats = (
    cmsSettings.stat_programs ||
    cmsSettings.stat_doctors ||
    cmsSettings.stat_hospitals ||
    cmsSettings.stat_rating
  ) ? [
    { value: cmsSettings.stat_programs || '60+', label: 'Programs' },
    { value: cmsSettings.stat_doctors || '500+', label: 'Doctors' },
    { value: cmsSettings.stat_hospitals || '20+', label: 'Hospitals' },
    { value: cmsSettings.stat_rating || '4.9/5', label: 'Rating' },
  ] : undefined;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero heading={heroHeading || 'MedFellow Academy Where Doctors Evolve'} subheading={heroSubheading} stats={heroStats} />
      <SocialProofTicker />
      <WhyMedFellow />
      <FellowshipPrograms programs={featuredProgramProps.length > 0 ? featuredProgramProps : undefined} />
      <TrainingFacilities />
      <Faculty members={facultyProps.length > 0 ? facultyProps : undefined} />
      <Testimonials testimonials={testimonialProps.length > 0 ? testimonialProps : undefined} />
      <AccreditationSection />
      <FAQ faqs={faqProps.length > 0 ? faqProps : undefined} />
      <Footer />
      <StickyApplyCTA />
    </div>
  );
}
