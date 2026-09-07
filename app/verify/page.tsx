import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getVerifiedStudent, type CmsStudent } from "@/lib/cms";
import { CheckCircle2, XCircle, Search } from "lucide-react";

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
    // don't let result pages (with a query in them) get indexed
    robots: enrollment ? { index: false, follow: true } : { index: true, follow: true },
    alternates: { canonical: "https://www.medfellowacademy.com/verify" },
  };
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-[0.8125rem] font-semibold text-text-secondary sm:w-48 shrink-0 uppercase tracking-wide">{label}</span>
      <span className="text-[0.9375rem] text-[#111827]">{value}</span>
    </div>
  );
}

function ResultCard({ student }: { student: CmsStudent }) {
  const certified = /certified|completed/i.test(student.status);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-[#15401E] text-white">
        <CheckCircle2 className="w-6 h-6 shrink-0" />
        <div>
          <p className="font-bold text-[0.95rem]">Record verified</p>
          <p className="text-[0.8125rem] text-white/80">This fellow is registered with MedFellow Academy.</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-5 pb-5 mb-2 border-b border-gray-100">
          {student.photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={student.photo_url} alt={student.full_name} className="w-24 h-24 rounded-xl object-cover border border-gray-200 shrink-0" />
          ) : (
            <div className="w-24 h-24 rounded-xl bg-linear-to-br from-primary to-secondary text-white flex items-center justify-center text-3xl font-bold shrink-0">
              {student.full_name.slice(0, 1)}
            </div>
          )}
          <div className="min-w-0">
            <h2 className="text-2xl font-heading font-bold text-primary">{student.full_name}</h2>
            <p className="font-mono text-sm text-text-secondary mt-1">{student.enrollment_no}</p>
            <span
              className={`inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-bold ${
                certified ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
              }`}
            >
              {student.status}
            </span>
          </div>
        </div>

        <div>
          <Row label="Program" value={student.program} />
          <Row label="Batch" value={student.batch} />
          <Row label="Duration" value={[student.start_date, student.end_date].filter(Boolean).join(" – ")} />
          <Row label="Mode" value={student.mode} />
          <Row label="Certificate No." value={student.certificate_no} />
          <Row label="Grade / Result" value={student.grade} />
          <Row label="Certificate Issued" value={student.issued_on} />
          <Row label="Remarks" value={student.remarks} />
        </div>
      </div>
    </div>
  );
}

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ enrollment?: string }>;
}) {
  const { enrollment } = await searchParams;
  const query = (enrollment ?? "").trim();
  const student = query ? await getVerifiedStudent(query).catch(() => null) : null;

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden section-padding bg-[#F7FAF8]">
        {/* Big logo watermark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,760px)] opacity-[0.05]"
        />

        <div className="relative container-custom max-w-2xl">
          <div className="text-center mb-8">
            <span className="section-label">Credential Verification</span>
            <h1 className="section-title mt-2 mb-3 !text-3xl md:!text-4xl">Verify a MedFellow Fellow</h1>
            <p className="text-[0.95rem] text-text-secondary">
              Enter a fellow&apos;s enrollment or registration number to confirm their program, batch, and
              certification status.
            </p>
          </div>

          <form method="get" className="flex flex-col sm:flex-row gap-3 mb-10">
            <input
              type="text"
              name="enrollment"
              defaultValue={query}
              required
              placeholder="e.g. MFA-2026-01234"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] font-mono"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#15401E] text-white rounded-xl font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              <Search className="w-4 h-4" /> Verify
            </button>
          </form>

          {query && student && <ResultCard student={student} />}

          {query && !student && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center">
              <XCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <p className="font-bold text-[#111827]">No verified record found</p>
              <p className="text-sm text-text-secondary mt-1">
                We couldn&apos;t find an active record for <span className="font-mono">&ldquo;{query}&rdquo;</span>.
                Check the number and try again, or contact{" "}
                <a href="/contact" className="text-primary font-semibold hover:underline">MedFellow Academy</a>.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
