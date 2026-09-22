import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmiApplicationForm from "./_form";

export const metadata: Metadata = {
  title: "Apply for an EMI Plan | MedFellow Academy",
  description: "Apply for an EMI (installment) plan to pay your MedFellow Academy fellowship course fee in monthly installments.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/emi-application" },
};

export default function EmiApplicationPage() {
  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <Navbar />

      <section className="bg-[#15401E] py-14 md:py-16">
        <div className="container-custom max-w-2xl text-center">
          <span className="inline-flex items-center text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            Fee Installment Plan
          </span>
          <h1 className="text-3xl md:text-[2.5rem] font-heading font-bold text-white mt-5 leading-[1.15]">
            Apply for an EMI Plan
          </h1>
          <p className="text-[0.95rem] md:text-base text-white/75 mt-3 max-w-lg mx-auto">
            Tell us a bit about yourself and your course. Our team reviews every application individually and
            will get back to you by email and SMS.
          </p>
        </div>
      </section>

      <section className="container-custom max-w-2xl -mt-8 md:-mt-10 relative z-10 pb-16">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(21,64,30,0.25)] p-6 md:p-8">
          <EmiApplicationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
