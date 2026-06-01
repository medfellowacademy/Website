import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms and Conditions | MedFellow Academy",
  description:
    "Read the MedFellow Academy terms and conditions covering eligibility, enrollment, payments, certification, conduct, liability, and jurisdiction.",
};

const sections = [
  {
    title: "1. Introduction",
    content: [
      "These Terms and Conditions (\"Terms\") constitute a legally binding agreement between MedFellow Academy (\"MedFellow\", \"we\", \"our\", or \"us\") and any user (\"you\", \"your\", or \"User\") accessing or using our website, programs, services, or platform.",
      "By accessing or enrolling in any of our courses or services, you agree to comply with and be bound by these Terms. If you do not agree, you must not use our services.",
    ],
  },
  {
    title: "2. Scope of Services",
    content: [
      "MedFellow Academy is an educational platform that provides:",
    ],
    bullets: [
      "Fellowship programs and certification courses",
      "Online and offline medical training programs",
      "Academic mentorship and skill enhancement modules",
      "Hospital-based training collaborations",
      "MedFellow does not provide medical advice, diagnosis, or treatment. All programs are purely educational in nature.",
    ],
  },
  {
    title: "3. Eligibility",
    content: [
      "By using our services, you confirm that:",
    ],
    bullets: [
      "You are a qualified healthcare professional or student, including MBBS, BAMS, BHMS, equivalent, or another relevant background",
      "You have provided accurate and complete registration details",
    ],
  },
  {
    title: "4. Enrollment and Account Responsibility",
    content: [
      "To access certain services, you may need to create an account.",
      "You agree to:",
    ],
    bullets: [
      "Maintain confidentiality of your login credentials",
      "Be responsible for all activities under your account",
      "Notify us immediately in case of unauthorized access",
    ],
  },
  {
    title: "5. Program Structure and Certification",
    bullets: [
      "Course structure, duration, curriculum, and assessments are defined by MedFellow",
      "Certification will be awarded upon successful completion of course requirements",
      "Certifications are academic recognitions and not equivalent to government-recognized degrees unless explicitly stated",
    ],
  },
  {
    title: "6. Fees, Payments and Refund Policy",
    bullets: [
      "All course fees must be paid as per the selected plan at the time of enrollment",
      "MedFellow offers a 7-day refund policy from the date of enrollment. Users may request a refund within this period, subject to the applicable terms and conditions of the specific program",
      "After the 7-day period, fees once paid are non-refundable, unless explicitly stated otherwise for a particular program",
      "Refund requests, if applicable, must be submitted through official communication channels provided by MedFellow",
      "MedFellow reserves the right to revise pricing, payment structures, or applicable policies at any time without prior notice",
    ],
  },
  {
    title: "7. User Conduct and Restrictions",
    content: [
      "You agree not to:",
    ],
    bullets: [
      "Misrepresent your qualifications or identity",
      "Share course materials without authorization",
      "Attempt to hack, disrupt, or misuse the platform",
      "Upload harmful, illegal, or inappropriate content",
      "Violation may lead to suspension or termination of access",
    ],
  },
  {
    title: "8. Intellectual Property Rights",
    content: [
      "All content on the platform including course materials, videos, presentations, curriculum, logos, and branding is the exclusive property of MedFellow Academy.",
      "You are granted a limited, non-transferable license for personal learning use only.",
    ],
  },
  {
    title: "9. Third-Party Associations",
    content: [
      "MedFellow may collaborate with hospitals, training centers, and accreditation bodies.",
      "However, MedFellow is not responsible for services provided by third-party partners, including clinical exposure or hospital training quality.",
    ],
  },
  {
    title: "10. Disclaimer",
    bullets: [
      "Programs are provided on an \"as-is\" basis",
      "MedFellow does not guarantee job placement, promotions, or income enhancement",
      "Clinical outcomes and skill application depend on the individual learner",
    ],
  },
  {
    title: "11. Limitation of Liability",
    content: [
      "MedFellow shall not be liable for:",
    ],
    bullets: [
      "Any indirect or consequential damages",
      "Loss of data, career opportunities, or earnings",
      "Any decisions made based on course content",
    ],
  },
  {
    title: "12. Indemnification",
    content: [
      "You agree to indemnify and hold MedFellow harmless from any claims, damages, or legal disputes arising from:",
    ],
    bullets: [
      "Your misuse of the platform",
      "Violation of these Terms",
      "Misrepresentation of credentials",
    ],
  },
  {
    title: "13. Privacy and Data Protection",
    content: [
      "Your personal data is collected and processed as per our Privacy Policy.",
      "By using our services, you consent to such data usage for:",
    ],
    bullets: [
      "Course delivery",
      "Communication",
      "Platform improvement",
    ],
  },
  {
    title: "14. Termination",
    content: [
      "MedFellow reserves the right to:",
    ],
    bullets: [
      "Suspend or terminate your access without prior notice",
      "Restrict access in case of violation of Terms",
      "You may discontinue use at any time",
    ],
  },
  {
    title: "15. Modifications to Terms",
    content: [
      "We may update these Terms periodically. Continued use of the platform after updates constitutes acceptance of revised Terms.",
    ],
  },
  {
    title: "16. Governing Law and Jurisdiction",
    content: [
      "These Terms shall be governed by the laws of India.",
      "All disputes shall be subject to the jurisdiction of courts in Hyderabad, Telangana.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-[#15401E] py-12 text-white md:py-20">
        <div className="container-custom">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-heading font-bold md:text-5xl">
            Terms and Conditions
          </h1>
          <p className="max-w-3xl text-base text-white/90 md:text-xl">
            These terms govern access to MedFellow Academy programs, website,
            services, and platform usage.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:p-10">
            {sections.map((section) => (
              <section key={section.title} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-2xl font-heading font-bold text-primary">
                  {section.title}
                </h2>

                {section.content?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-4 text-base leading-8 text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="space-y-2 text-base leading-7 text-text-secondary">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="border-t border-primary/10 pt-8">
              <h2 className="mb-4 text-2xl font-heading font-bold text-primary">
                17. Contact Information
              </h2>
              <p className="mb-4 text-base leading-8 text-text-secondary">
                For any queries or legal concerns, please contact MedFellow
                Academy.
              </p>
              <div className="space-y-2 text-base text-text-secondary">
                <p>MedFellow Academy</p>
                <p>Email: support@medfellowacademy.com</p>
                <p>Website: www.medfellowacademy.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}