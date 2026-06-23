import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import WhyMedFellow from "@/components/WhyMedFellow";
import FellowshipPrograms, { FeaturedProgram } from "@/components/FellowshipPrograms";
import TrainingFacilities from "@/components/TrainingFacilities";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import AccreditationSection from "@/components/AccreditationSection";
import Footer from "@/components/Footer";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { getFaculty, getTestimonials, getPrograms, getSettings } from "@/lib/cms";
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
  const [cmsFaculty, cmsTestimonials, cmsPrograms, cmsSettings] = await Promise.all([
    getFaculty().catch(() => []),
    getTestimonials().catch(() => []),
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

  const s = cmsSettings; // shorthand

  // ── Hero ────────────────────────────────────────────────────────────────────
  const heroStats = (s.stat_specialties || s.stat_doctors || s.stat_hospitals || s.stat_placement) ? [
    { value: String(s.stat_specialties  || '60+'),  label: 'Specialties' },
    { value: String(s.stat_doctors      || '500+'), label: 'Doctors trained' },
    { value: String(s.stat_hospitals    || '20+'),  label: 'Hospital partners' },
    { value: String(s.stat_placement    || '98%'),  label: 'Placement rate' },
  ] : undefined;

  // ── Ticker ───────────────────────────────────────────────────────────────────
  const tickerItems = s.ticker_items
    ? String(s.ticker_items).split('\n').map((t: string) => t.trim()).filter(Boolean)
    : undefined;

  // ── Why MedFellow ────────────────────────────────────────────────────────────
  const whyPoints = [1, 2, 3, 4].reduce((acc, i) => {
    const title = s[`why_point_${i}_title`];
    const desc  = s[`why_point_${i}_desc`];
    if (title && desc) acc.push({ title: String(title), desc: String(desc) });
    return acc;
  }, [] as { title: string; desc: string }[]);

  const whyStats = (s.stat_income || s.stat_doctors) ? [
    { value: String(s.stat_income    || '156%'), label: 'Average income increase', sub: String(s.stat_income_sub    || 'Reported within 18 months') },
    { value: String(s.stat_doctors   || '500+'), label: 'Doctors trained',          sub: String(s.stat_doctors_sub   || 'Across 12 specialties') },
    { value: String(s.stat_placement || '98%'),  label: 'Placement success',        sub: String(s.stat_placement_sub || 'Within 6 months of completion') },
    { value: String(s.stat_specialties || '60+'), label: 'Fellowship programs',     sub: 'Online, hybrid and offline' },
    { value: String(s.stat_hospitals || '20+'),  label: 'Hospital partners',        sub: 'Super speciality hospitals' },
    { value: String(s.stat_rating_display || '4.9'), label: 'Average rating',       sub: String(s.stat_reviews_text || 'From 340 verified reviews') },
  ] : undefined;

  // ── Training Facilities ──────────────────────────────────────────────────────
  const trainingTabs = [1, 2, 3].reduce((acc, i) => {
    const label       = s[`training_tab_${i}_label`];
    const headline    = s[`training_tab_${i}_headline`];
    const description = s[`training_tab_${i}_description`];
    const tag         = s[`training_tab_${i}_tag`];
    const pointsRaw   = s[`training_tab_${i}_points`];
    const IMAGES      = ['/Hospital Training.jpeg', '/Digital Learning.jpeg', '/Expert Mentorship.jpg'];
    if (label && headline) {
      acc.push({
        label: String(label),
        headline: String(headline),
        description: String(description || ''),
        image: IMAGES[i - 1],
        points: pointsRaw ? String(pointsRaw).split('\n').map((p: string) => p.trim()).filter(Boolean) : [],
        tag: String(tag || ''),
      });
    }
    return acc;
  }, [] as { label: string; headline: string; description: string; image: string; points: string[]; tag: string }[]);

  // ── Accreditation ────────────────────────────────────────────────────────────
  const accrTrustPoints = [1, 2, 3, 4].reduce((acc, i) => {
    const title = s[`accr_point_${i}_title`];
    const desc  = s[`accr_point_${i}_desc`];
    if (title && desc) acc.push({ title: String(title), desc: String(desc) });
    return acc;
  }, [] as { title: string; desc: string }[]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        heading={s.hero_heading ? String(s.hero_heading) : undefined}
        subheading={s.hero_subheading ? String(s.hero_subheading) : undefined}
        ratingText={s.hero_rating_text ? String(s.hero_rating_text) : undefined}
        enrollText={s.apply_batch_text ? String(s.apply_batch_text) : undefined}
        stats={heroStats}
      />
      <SocialProofTicker items={tickerItems} />
      <WhyMedFellow
        heading={s.why_heading ? String(s.why_heading) : undefined}
        subtitle={s.why_subtitle ? String(s.why_subtitle) : undefined}
        whyPoints={whyPoints.length > 0 ? whyPoints : undefined}
        stats={whyStats}
      />
      <FellowshipPrograms programs={featuredProgramProps.length > 0 ? featuredProgramProps : undefined} />
      <TrainingFacilities
        heading={s.training_heading ? String(s.training_heading) : undefined}
        subtitle={s.training_subtitle ? String(s.training_subtitle) : undefined}
        tabs={trainingTabs.length > 0 ? trainingTabs : undefined}
      />
      <Faculty members={facultyProps.length > 0 ? facultyProps : undefined} />
      <Testimonials testimonials={testimonialProps.length > 0 ? testimonialProps : undefined} />
      <AccreditationSection
        heading={s.accreditation_heading ? String(s.accreditation_heading) : undefined}
        body={s.accreditation_body ? String(s.accreditation_body) : undefined}
        ctaText={s.accreditation_cta_text ? String(s.accreditation_cta_text) : undefined}
        badgeCaption={s.accreditation_badge_caption ? String(s.accreditation_badge_caption) : undefined}
        trustPoints={accrTrustPoints.length > 0 ? accrTrustPoints : undefined}
      />
      <Footer />
      <StickyApplyCTA />
    </div>
  );
}
