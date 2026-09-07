import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getVerifiedStudent, type CmsStudent } from "@/lib/cms";
import { ShieldCheck, Search, BadgeCheck, XCircle, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ enrollment?: string }>;
}): Promise<Metadata> {
  const { enrollment } = await searchParams;
  return {
    title: "Verify a Fellow | MedFellow Academy",
    description:
      "Confirm the enrollment and certification status of a MedFellow Academy fellow using their enrollment or registration number.",
    robots: enrollment ? { index: false, follow: true } : { index: true, follow: true },
    alternates: { canonical: "https://www.medfellowacademy.com/verify" },
  };
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="px-5 py-3.5 border-b border-[#F1F1F1] last:border-0">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">{label}</dt>
      <dd className="text-[0.9375rem] text-[#111827] mt-0.5">{value}</dd>
    </div>
  );
}

function ResultCard({ student }: { student: CmsStudent }) {
  const certified = /certified|completed/i.test(student.status);
  const verifiedOn = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(21,64,30,0.25)]">
      {/* Verified ribbon */}
      <div className="flex items-center justify-between gap-3 px-5 sm:px-7 py-4 bg-[#15401E] text-white">
        <div className="flex items-center gap-2.5 min-w-0">
          <BadgeCheck className="w-5 h-5 shrink-0" />
          <p className="font-semibold text-[0.9375rem] truncate">Verified — registered with MedFellow Academy</p>
        </div>
        <p className="text-[0.75rem] text-white/70 shrink-0 hidden sm:block">Checked {verifiedOn}</p>
      </div>

      {/* Faint monogram watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-10 -bottom-12 w-64 opacity-[0.04]"
      />

      <div className="relative p-5 sm:p-7">
        {/* Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-6 mb-6 border-b border-[#F1F1F1]">
          <div className="relative shrink-0">
            {student.photo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={student.photo_url}
                alt={student.full_name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-[#e8f2ea]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#15401E] to-[#2da84e] text-white flex items-center justify-center text-3xl font-bold ring-4 ring-[#e8f2ea]">
                {student.full_name.slice(0, 1)}
              </div>
            )}
            <span className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
              <BadgeCheck className="w-5 h-5 text-[#2da84e]" />
            </span>
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl sm:text-[1.75rem] font-bold text-[#15401E] leading-tight">{student.full_name}</h2>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="inline-flex items-center font-mono text-[0.8125rem] bg-[#F3F4F6] text-[#374151] px-2.5 py-1 rounded-md">
                {student.enrollment_no}
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.75rem] font-bold ${
                  certified ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {student.status}
              </span>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <dl className="grid sm:grid-cols-2 gap-x-6 rounded-xl border border-[#F1F1F1] overflow-hidden">
          <DetailRow label="Program" value={student.program} />
          <DetailRow label="Batch" value={student.batch} />
          <DetailRow label="Duration" value={[student.start_date, student.end_date].filter(Boolean).join(" – ")} />
          <DetailRow label="Mode" value={student.mode} />
          <DetailRow label="Certificate No." value={student.certificate_no} />
          <DetailRow label="Grade / Result" value={student.grade} />
          <DetailRow label="Certificate Issued" value={student.issued_on} />
        </dl>

        {student.remarks && (
          <div className="mt-5 bg-[#F7FAF8] border border-[#e8f2ea] rounded-xl px-5 py-4">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#15401E] mb-1">Remarks</p>
            <p className="text-[0.9375rem] text-[#374151]">{student.remarks}</p>
          </div>
        )}

        <p className="text-[0.8125rem] text-[#9CA3AF] mt-6 leading-relaxed">
          This confirms the above individual&apos;s enrollment record with MedFellow Academy. Records are maintained
          by the MedFellow Academy academic office. For any discrepancy, contact{" "}
          <a href="/contact" className="text-[#15401E] font-semibold hover:underline">the academy</a>.
        </p>
      </div>
    </div>
  );
}

function NotFoundCard({ query }: { query: string }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-lg p-7 text-center">
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
        <XCircle className="w-7 h-7 text-red-400" />
      </div>
      <p className="font-bold text-[#111827] text-lg">No verified record found</p>
      <p className="text-[0.9375rem] text-[#6B7280] mt-2 max-w-md mx-auto">
        We couldn&apos;t find an active record for{" "}
        <span className="font-mono text-[#374151]">&ldquo;{query}&rdquo;</span>. Double-check the enrollment or
        registration number and try again.
      </p>
      <a
        href="/verify"
        className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 border border-[#D1D5DB] text-[#15401E] rounded-xl text-sm font-semibold hover:border-[#15401E] transition-colors"
      >
        Try another number
      </a>
      <p className="text-[0.8125rem] text-[#9CA3AF] mt-4">
        Still stuck? <a href="/contact" className="text-[#15401E] font-semibold hover:underline">Contact MedFellow Academy</a>.
      </p>
    </div>
  );
}

const STEPS = [
  { n: "1", title: "Enter the number", text: "Type the fellow's enrollment or registration number." },
  { n: "2", title: "We check our records", text: "The number is matched against the MedFellow Academy register." },
  { n: "3", title: "See the official status", text: "Program, batch, and certification status are shown instantly." },
];

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ enrollment?: string }>;
}) {
  const { enrollment } = await searchParams;
  const query = (enrollment ?? "").trim();
  const student = query ? await getVerifiedStudent(query).catch(() => null) : null;

  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <Navbar />

      {/* Hero band */}
      <section className="relative overflow-hidden bg-[#15401E]">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: "radial-gradient(120% 120% at 100% 0%, #1c5628 0%, #15401E 55%, #0f2e15 100%)" }}
        />
        {/* Big logo watermark, bleeding off the right edge */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 -top-20 w-[560px] max-w-[75vw] opacity-[0.07] brightness-0 invert"
        />

        <div className="relative container-custom max-w-3xl py-16 md:py-20 text-center">
          <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> Credential Verification
          </span>
          <h1 className="text-3xl md:text-[2.75rem] font-heading font-bold text-white mt-5 leading-[1.15]">
            Verify a MedFellow Fellow
          </h1>
          <p className="text-[0.95rem] md:text-base text-white/75 mt-3 max-w-xl mx-auto">
            Enter a fellow&apos;s enrollment or registration number to confirm their program, batch, and
            certification status.
          </p>
        </div>
      </section>

      {/* Search card — overlaps the hero */}
      <section className="relative container-custom max-w-2xl -mt-10 md:-mt-12 z-10">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(21,64,30,0.25)] p-6 md:p-7">
          <label htmlFor="enrollment" className="block text-[0.8125rem] font-semibold text-[#374151] mb-2">
            Enrollment / Registration number
          </label>
          <form method="get" className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="enrollment"
                type="text"
                name="enrollment"
                defaultValue={query}
                required
                autoComplete="off"
                placeholder="e.g. MFA-2026-01234"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D1D5DB] bg-white text-[0.95rem] font-mono tracking-wide focus:outline-none focus:ring-2 focus:ring-[#15401E]/15 focus:border-[#15401E]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#15401E] text-white rounded-xl font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors shrink-0"
            >
              Verify <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[0.8125rem] text-[#9CA3AF] mt-2.5">
            The number is printed on the fellow&apos;s offer letter and certificate.
          </p>
        </div>
      </section>

      {/* Result */}
      {query && (
        <section className="container-custom max-w-2xl mt-6">
          {student ? <ResultCard student={student} /> : <NotFoundCard query={query} />}
        </section>
      )}

      {/* How it works */}
      <section className="container-custom max-w-3xl py-14 md:py-16">
        <h2 className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#15401E]">
          How verification works
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-white rounded-xl border border-[#F1F1F1] p-5">
              <span className="w-8 h-8 rounded-full bg-[#e8f2ea] text-[#15401E] font-bold text-sm flex items-center justify-center">
                {s.n}
              </span>
              <h3 className="text-[0.9375rem] font-bold text-[#111827] mt-3">{s.title}</h3>
              <p className="text-[0.8125rem] text-[#6B7280] leading-relaxed mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
