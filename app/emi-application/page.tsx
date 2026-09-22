import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmiApplicationForm from "./_form";
import { getPrograms } from "@/lib/cms";
import { FileEdit, Search, MailCheck, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Apply for an EMI Plan | MedFellow Academy",
  description: "Apply for an EMI (installment) plan to pay your MedFellow Academy fellowship course fee in monthly installments.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/emi-application" },
};

const STEPS = [
  { icon: FileEdit, title: "You apply", text: "Share your details, program and course fee — takes about two minutes." },
  { icon: Search, title: "We review", text: "Our team looks at every application individually — no automated rejections." },
  { icon: MailCheck, title: "You hear back", text: "An email and SMS with the outcome — and your exact EMI plan if approved." },
];

export default async function EmiApplicationPage() {
  const programs = await getPrograms().catch(() => []);
  const programOptions = [...new Set(programs.filter((p) => p.is_published).map((p) => p.name))].sort();

  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#15401E]">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 90% 70% at 50% -20%, #24672f 0%, #17431f 55%, #0f2e15 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="relative container-custom">
          <div className="max-w-2xl mx-auto py-14 md:py-16 text-center">
            <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" /> Fee Installment Plan
            </span>
            <h1 className="text-3xl md:text-[2.5rem] font-heading font-bold text-white mt-5 leading-[1.15]">
              Apply for an EMI Plan
            </h1>
            <p className="text-[0.95rem] md:text-base text-white/75 mt-3 max-w-lg mx-auto">
              Split your fellowship course fee into manageable monthly installments. Tell us a bit about
              yourself — our team reviews every application individually and replies by email and SMS.
            </p>
          </div>
        </div>
      </section>

      {/* Floating form card */}
      <section className="relative z-10 container-custom">
        <div className="max-w-2xl mx-auto -mt-8 md:-mt-10">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(21,64,30,0.25)] p-6 md:p-8">
            <EmiApplicationForm programOptions={programOptions} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-custom">
        <div className="max-w-2xl mx-auto pt-10 pb-16">
          <h2 className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#15401E]">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mt-5">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-xl border border-[#F1F1F1] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#e8f2ea] text-[#15401E] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[0.75rem] font-bold text-[#9CA3AF]">Step {i + 1}</span>
                  </div>
                  <h3 className="text-[0.9375rem] font-bold text-[#111827]">{s.title}</h3>
                  <p className="text-[0.8125rem] text-[#6B7280] leading-relaxed mt-1">{s.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[0.8125rem] text-[#9CA3AF] mt-6">
            Submitting an application does not guarantee approval — every request is reviewed individually.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
