import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getFaqs } from "@/lib/cms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | MedFellow Academy",
  description: "Find answers to common questions about MedFellow fellowship programs — eligibility, fees, duration, certificates, EMI options, placement support, and more.",
  keywords: "MedFellow FAQ, fellowship questions, medical fellowship eligibility, fellowship fees, fellowship duration, ACTD accreditation",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/faq" },
  openGraph: {
    title: "Frequently Asked Questions | MedFellow Academy",
    description: "Find answers to common questions about MedFellow fellowship programs — eligibility, fees, duration, certificates, EMI options, and placement support.",
    type: "website",
    url: "https://www.medfellowacademy.com/faq",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | MedFellow Academy",
    description: "Find answers to common questions about MedFellow fellowship programs.",
  },
};

export default async function FAQPage() {
  const cmsFaqs = await getFaqs().catch(() => []);
  const faqProps = cmsFaqs.map((f) => ({ q: f.question, a: f.answer }));

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <FAQ faqs={faqProps.length > 0 ? faqProps : undefined} />
      </div>
      <Footer />
    </div>
  );
}
