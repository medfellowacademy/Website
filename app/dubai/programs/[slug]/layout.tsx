import type { Metadata } from "next";

interface ProgramMetadataProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProgramMetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const slugMeta: Record<string, { title: string; description: string }> = {
    "fellowship-in-pediatrics": {
      title: "Pediatrics Fellowship for Dubai Doctors 2026 | MedFellow",
      description: "Join MedFellow Pediatrics Fellowship for Dubai doctors. Gain child care expertise, flexible online training, and boost DHA career opportunities in 2026.",
    },
    "fellowship-in-endocrinology": {
      title: "Fellowship in Endocrinology Dubai Doctors 2026 | MedFellow",
      description: "MedFellow Endocrinology Fellowship helps Dubai doctors build expertise in diabetes and hormone disorders with flexible online training for DHA career growth.",
    },
    "fellowship-in-nephrology": {
      title: "Nephrology Fellowship for Dubai Doctors | MedFellow",
      description: "Advance renal care skills with MedFellow Nephrology Fellowship in Dubai. Learn CKD, dialysis & kidney care. Apply now to boost DHA career growth.",
    },
    "fellowship-in-gastroenterology": {
      title: "Fellowship in Gastroenterology Dubai | MedFellow",
      description: "MedFellow Gastroenterology Fellowship helps Dubai doctors gain GI and liver care expertise with flexible training. Enrol now for 2026 intake.",
    },
    "fellowship-in-reproductive-medicine": {
      title: "Reproductive Medicine Fellowship Dubai | MedFellow",
      description: "Step into the IVF specialty with MedFellow. Gain fertility and reproductive care skills with flexible training. Start your Dubai career upgrade today.",
    },
    "fellowship-in-neonatology": {
      title: "Fellowship in Neonatology Dubai 2026 | MedFellow",
      description: "MedFellow Neonatology Fellowship helps Dubai doctors gain NICU expertise, neonatal care skills, and flexible training. Enrol now for 2026 intake.",
    },
    "fellowship-in-arthroscopy-and-arthroplasty": {
      title: "Arthroscopy & Arthroplasty Fellowship for Doctors Dubai",
      description: "Boost your orthopedic skills with arthroscopy and arthroplasty training in Dubai. Practical exposure and expert mentorship. Apply now.",
    },
  };

  const meta = slugMeta[slug] || {
    title: "Dubai Fellowship Programs | MedFellow",
    description: "Online fellowship programs for doctors in Dubai.",
  };

  return {
    title: meta.title,
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: { canonical: `https://www.medfellowacademy.com/dubai/programs/${slug}` },
  };
}

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
