import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | MedFellow Academy",
  description:
    "Read the MedFellow Academy privacy policy covering data collection, usage, sharing, retention, security, and your rights.",
};

const sections = [
  {
    title: "1. Introduction",
    content: [
      "MedFellow Academy (\"MedFellow,\" \"we,\" \"us,\" or \"our\") is committed to protecting the privacy and security of all users, including doctors, healthcare professionals, and partners.",
      "This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you access our website, enroll in our programs, or interact with our services (collectively referred to as the \"Platform\" and \"Services\").",
      "By using our Platform or Services, you agree to the terms of this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We may collect the following categories of information:",
    ],
    items: [
      {
        heading: "a. Personal Information",
        points: [
          "Full name, email address, phone number",
          "Professional details, including qualification, specialization, experience, and workplace",
          "Address and location details",
        ],
      },
      {
        heading: "b. Academic and Professional Data",
        points: [
          "Educational background",
          "Course enrollment details",
          "Training progress and performance",
        ],
      },
      {
        heading: "c. Payment Information",
        points: [
          "Transaction details, invoices, and payment records",
          "Sensitive financial data is processed through secure third-party payment gateways",
        ],
      },
      {
        heading: "d. Technical Information",
        points: [
          "IP address, device type, and browser details",
          "Usage behavior on the Platform",
        ],
      },
      {
        heading: "e. Optional or Sensitive Data",
        points: [
          "Documents, certifications, or health-related data, only when required for training, compliance, or hospital access",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We use your information strictly for legitimate business and academic purposes, including:",
    ],
    bullets: [
      "Delivering fellowship programs and training services",
      "Managing enrollments and certifications",
      "Providing academic support and mentorship",
      "Processing payments and maintaining records",
      "Improving user experience and platform functionality",
      "Communicating updates, offers, and important notifications",
    ],
  },
  {
    title: "4. Information Sharing and Disclosure",
    content: [
      "We do not sell your personal data.",
      "We may share your information only in the following cases:",
    ],
    bullets: [
      "With hospital partners for clinical training coordination",
      "With service providers such as payment gateways, learning platforms, and IT systems",
      "When required by law or regulatory authorities",
      "Within our organization for operational purposes",
      "All third parties are required to maintain confidentiality and data security",
    ],
  },
  {
    title: "5. Data Storage and Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or loss.",
      "While we strive for high security standards, no digital platform can guarantee complete security.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your information only as long as necessary for:",
    ],
    bullets: [
      "Academic records and certification validation",
      "Legal and regulatory compliance",
      "Business and operational requirements",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "You have the right to:",
    ],
    bullets: [
      "Access your personal data",
      "Request correction or updates",
      "Request deletion, subject to legal requirements",
      "Opt out of marketing communications",
      "Requests can be made by contacting us through official communication channels",
    ],
  },
  {
    title: "8. Cookies and Tracking Technologies",
    content: [
      "We may use cookies and similar technologies to:",
    ],
    bullets: [
      "Enhance user experience",
      "Analyze platform performance",
      "Personalize content",
      "You can modify your browser settings to control cookie usage",
    ],
  },
  {
    title: "9. Third-Party Links",
    content: [
      "Our Platform may contain links to third-party websites.",
      "We are not responsible for their privacy practices, and users are encouraged to review their policies.",
    ],
  },
  {
    title: "10. Policy Updates",
    content: [
      "We may update this Privacy Policy periodically.",
      "Changes will be reflected on this page, and continued use of the Platform constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-[#15401E] py-12 text-white md:py-20">
        <div className="container-custom">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-heading font-bold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-3xl text-base text-white/90 md:text-xl">
            This policy explains how MedFellow Academy collects, uses, stores,
            and protects personal information across the website and academic
            services.
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

                {section.items?.map((item) => (
                  <div key={item.heading} className="mb-5 last:mb-0">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      {item.heading}
                    </h3>
                    <ul className="space-y-2 text-base leading-7 text-text-secondary">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                11. Contact Us
              </h2>
              <p className="mb-4 text-base leading-8 text-text-secondary">
                For any queries or concerns regarding this Privacy Policy,
                please contact MedFellow Academy through our official channels.
              </p>
              <div className="space-y-2 text-base text-text-secondary">
                <p>Email: info@medfellow.in</p>
                <p>Phone: +91 9985044993</p>
                <p>
                  Address: 23-5-449, Second Floor, Nagul Chinta, Hyderabad-
                  500065, Telangana, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}