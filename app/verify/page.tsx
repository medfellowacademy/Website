import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getVerifiedStudent, type CmsStudent } from "@/lib/cms";
import { ShieldCheck, Search, BadgeCheck, XCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

const SITE_URL = "https://www.medfellowacademy.com";

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
    alternates: { canonical: `${SITE_URL}/verify` },
  };
}

/* ─────────────────────────────  shared bits  ───────────────────────────── */

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="px-5 py-3.5 border-b border-[#F1F1F1] sm:odd:border-r">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">{label}</dt>
      <dd className="text-[0.9375rem] text-[#111827] mt-0.5">{value}</dd>
    </div>
  );
}

function AccreditationBanner() {
  return (
    <div className="flex items-start gap-4 bg-[#F7FAF8] border border-[#e8f2ea] rounded-xl px-5 py-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/accreditations/ACTD.png"
        alt="ACTD — American Council of Training and Development"
        className="h-12 w-12 rounded-lg bg-white p-1 border border-[#e8f2ea] shrink-0"
      />
      <p className="text-[0.8125rem] text-[#374151] leading-relaxed">
        MedFellow Academy fellowship programs are internationally accredited by the{" "}
        <strong className="text-[#15401E]">American Council of Training and Development (ACTD)</strong> and the
        resulting certificates are recognised across 40+ countries.
      </p>
    </div>
  );
}

/* ─────────────────────────  found → credential page  ───────────────────── */

function CredentialCard({ student }: { student: CmsStudent }) {
  const certified = /certified|completed/i.test(student.status);
  const verifiedOn = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const duration = [student.start_date, student.end_date].filter(Boolean).join(" – ");

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_24px_60px_-24px_rgba(21,64,30,0.30)]">
      {/* Brand + accreditation bar */}
      <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-4 border-b border-[#F1F1F1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="MedFellow Academy" className="h-7 w-auto" />
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/accreditations/ACTD.png"
            alt="ACTD Accredited"
            className="h-7 w-7 rounded bg-white border border-[#F1F1F1]"
          />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#6B7280] hidden sm:inline">
            ACTD Accredited
          </span>
        </div>
      </div>

      {/* Verified ribbon */}
      <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-3.5 bg-[#15401E] text-white">
        <div className="flex items-center gap-2.5 min-w-0">
          <BadgeCheck className="w-5 h-5 shrink-0" />
          <p className="font-semibold text-[0.9375rem] truncate">Verified credential</p>
        </div>
        <p className="text-[0.75rem] text-white/70 shrink-0 hidden sm:block">Verified on {verifiedOn}</p>
      </div>

      {/* Faint monogram watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-16 -bottom-16 w-80 opacity-[0.04]"
      />

      <div className="relative p-6 sm:p-8">
        {/* Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="relative shrink-0 mx-auto sm:mx-0">
            {student.photo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={student.photo_url}
                alt={student.full_name}
                className="w-28 h-28 rounded-full object-cover ring-4 ring-[#e8f2ea]"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-linear-to-br from-[#15401E] to-[#2da84e] text-white flex items-center justify-center text-4xl font-bold ring-4 ring-[#e8f2ea]">
                {student.full_name.slice(0, 1)}
              </div>
            )}
            <span className="absolute -right-1 -bottom-1 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md">
              <BadgeCheck className="w-5 h-5 text-[#2da84e]" />
            </span>
          </div>

          <div className="min-w-0 text-center sm:text-left">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF]">
              This confirms that
            </p>
            <h1 className="text-2xl sm:text-[1.875rem] font-bold text-[#15401E] leading-tight mt-1">
              {student.full_name}
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2.5">
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

        {/* Program statement */}
        {student.program && (
          <p className="mt-6 text-[0.9375rem] text-[#374151] leading-relaxed">
            is registered in the <strong className="text-[#15401E]">{student.program}</strong> program at MedFellow
            Academy{student.batch ? `, ${student.batch} batch` : ""}
            {duration ? ` (${duration})` : ""}.
          </p>
        )}

        {/* Details grid */}
        <dl className="mt-6 grid sm:grid-cols-2 rounded-xl border border-[#F1F1F1] overflow-hidden [&>div:last-child]:border-b-0 sm:[&>div:nth-last-child(2)]:border-b-0">
          <DetailRow label="Program" value={student.program} />
          <DetailRow label="Batch" value={student.batch} />
          <DetailRow label="Duration" value={duration} />
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

        <div className="mt-6">
          <AccreditationBanner />
        </div>

        <p className="text-[0.75rem] text-[#9CA3AF] mt-5 leading-relaxed">
          This is an official record maintained by the MedFellow Academy academic office. For any discrepancy,
          contact <a href="mailto:info@medfellow.in" className="text-[#15401E] font-semibold hover:underline">info@medfellow.in</a>.
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────  not found → retry state  ─────────────────────── */

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

/* ──────────────────────────────  page  ─────────────────────────────────── */

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ enrollment?: string }>;
}) {
  const { enrollment } = await searchParams;
  const query = (enrollment ?? "").trim();
  const student = query ? await getVerifiedStudent(query).catch(() => null) : null;

  /* ── Found: dedicated credential page, nothing else ── */
  if (student) {
    return (
      <div className="min-h-screen bg-[#EEF3EF]">
        <Navbar />
        <main className="container-custom max-w-3xl py-10 md:py-14">
          <a
            href="/verify"
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#15401E] hover:underline mb-5"
          >
            <ArrowLeft className="w-4 h-4" /> Verify another credential
          </a>
          <CredentialCard student={student} />
        </main>
        <Footer />
      </div>
    );
  }

  /* ── Landing / not found ── */
  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <Navbar />

      {/* Hero band */}
      <section className="relative overflow-hidden bg-[#15401E]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% -20%, #24672f 0%, #17431f 55%, #0f2e15 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <ShieldCheck
          strokeWidth={1}
          className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-72 h-72 text-white/[0.04]"
        />

        <div className="relative container-custom max-w-2xl py-14 md:py-[4.5rem] text-center">
          <span className="inline-flex items-center bg-white rounded-xl px-4 py-2.5 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="MedFellow Academy" className="h-7 w-auto" />
          </span>

          <h1 className="text-3xl md:text-[2.5rem] font-heading font-bold text-white mt-6 leading-[1.15]">
            Verify a MedFellow Fellow
          </h1>
          <p className="text-[0.95rem] md:text-base text-white/75 mt-3 max-w-lg mx-auto">
            Enter a fellow&apos;s enrollment or registration number to confirm their program, batch, and
            certification status.
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 text-white/70 text-[0.8125rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/accreditations/ACTD.png"
              alt="ACTD"
              className="h-8 w-8 rounded-md bg-white p-0.5"
            />
            <span>Accredited by ACTD · Certificates recognised in 40+ countries</span>
          </div>
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

      {/* Not found */}
      {query && (
        <section className="container-custom max-w-2xl mt-6">
          <NotFoundCard query={query} />
        </section>
      )}

      {/* How it works — only on the clean landing */}
      {!query && (
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
      )}

      {/* Accreditation strip */}
      <section className="bg-[#15401E]">
        <div className="container-custom max-w-4xl py-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/accreditations/ACTD.png"
            alt="ACTD — American Council of Training and Development"
            className="h-16 w-16 rounded-lg bg-white p-1.5 shrink-0"
          />
          <div>
            <p className="text-white font-semibold">Internationally accredited by ACTD</p>
            <p className="text-white/60 text-[0.875rem] mt-1 max-w-xl">
              Every MedFellow Academy fellowship certificate is issued under the American Council of Training and
              Development and recognised across 40+ countries.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
