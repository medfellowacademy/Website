import type { Metadata } from "next";

interface ProgramMetadataProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProgramMetadataProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "fellowship-in-endocrinology") {
    return {
      title: "Fellowship in Endocrinology Dubai Doctors 2026 | MedFellow",
      description:
        "MedFellow Endocrinology Fellowship helps Dubai doctors build expertise in diabetes and hormone disorders with flexible online training for DHA career growth."
    };
  }

  if (slug === "fellowship-in-nephrology") {
    return {
      title: "Nephrology Fellowship for Dubai Doctors | MedFellow",
      description:
        "Advance renal care skills with MedFellow Nephrology Fellowship in Dubai. Learn CKD, dialysis & kidney care. Apply now to boost DHA career growth."
    };
  }

  if (slug === "fellowship-in-gastroenterology") {
    return {
      title: "Fellowship in Gastroenterology Dubai | MedFellow",
      description:
        "MedFellow Gastroenterology Fellowship helps Dubai doctors gain GI and liver care expertise with flexible training. Enrol now for 2026 intake."
    };
  }

  if (slug === "fellowship-in-reproductive-medicine") {
    return {
      title: "Reproductive Medicine Fellowship Dubai | MedFellow",
      description:
        "Step into the IVF specialty with MedFellow. Gain fertility and reproductive care skills with flexible training. Start your Dubai career upgrade today."
    };
  }

  if (slug === "fellowship-in-neonatology") {
    return {
      title: "Fellowship in Neonatology Dubai 2026 | MedFellow",
      description:
        "MedFellow Neonatology Fellowship helps Dubai doctors gain NICU expertise, neonatal care skills, and flexible training. Enrol now for 2026 intake."
    };
  }

  if (slug === "fellowship-in-arthroscopy-and-arthroplasty") {
    return {
      title: "Arthroscopy & Arthroplasty Fellowship for Doctors Dubai",
      description:
        "Boost your orthopedic skills with arthroscopy and arthroplasty training in Dubai. Practical exposure and expert mentorship. Apply now."
    };
  }

  return {
    title: "Dubai Fellowship Programs | MedFellow",
    description: "Online fellowship programs for doctors in Dubai."
  };
}

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
