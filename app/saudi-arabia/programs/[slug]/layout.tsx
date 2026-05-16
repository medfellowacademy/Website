import type { Metadata } from "next";

interface ProgramMetadataProps {
  params: Promise<{
    slug: string;
  }>;
}

const programMetadata: Record<string, { title: string; description: string }> = {
  "fellowship-in-pediatrics": {
    title: "Pediatrics Fellowship in Saudi Arabia | SCFHS-Aligned Online Training | MedFellow",
    description: "12-month online pediatrics fellowship for doctors in Saudi Arabia. SCFHS-aligned curriculum, flexible learning, and consultant pathway. Enroll now."
  },
  "fellowship-in-endocrinology": {
    title: "Endocrinology Fellowship in Saudi Arabia | Diabetes & Metabolic Care | MedFellow",
    description: "Master diabetes management and endocrine disorders. SCFHS-aligned online fellowship for doctors in Saudi Arabia with hands-on clinical training."
  },
  "fellowship-in-nephrology": {
    title: "Nephrology Fellowship in Saudi Arabia | CKD Management & Dialysis | MedFellow",
    description: "Specialize in kidney disease and dialysis care. SCFHS-aligned online fellowship for doctors in Saudi Arabia with comprehensive protocols."
  },
  "fellowship-in-gastroenterology": {
    title: "Gastroenterology Fellowship in Saudi Arabia | GI & Endoscopy | MedFellow",
    description: "Master GI care and endoscopy basics. SCFHS-aligned online fellowship for doctors in Saudi Arabia with hands-on clinical exposure."
  },
  "fellowship-in-reproductive-medicine": {
    title: "Reproductive Medicine Fellowship in Saudi Arabia | IVF & Fertility | MedFellow",
    description: "Develop IVF and fertility expertise. SCFHS-aligned online fellowship for doctors in Saudi Arabia in the expanding reproductive health sector."
  },
  "fellowship-in-neonatology": {
    title: "Neonatology Fellowship in Saudi Arabia | NICU Care & Newborn Management | MedFellow",
    description: "Advance NICU skills and neonatal care. SCFHS-aligned online fellowship for doctors in Saudi Arabia with optional clinical rotation."
  },
  "fellowship-in-arthroscopy-and-arthroplasty": {
    title: "Arthroscopy & Arthroplasty Fellowship in Saudi Arabia | Joint Surgery | MedFellow",
    description: "Master arthroscopy and joint replacement. SCFHS-aligned online fellowship for orthopedic doctors in Saudi Arabia with hands-on training."
  }
};

export async function generateMetadata({ params }: ProgramMetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const meta = programMetadata[slug] || {
    title: "Fellowship Program in Saudi Arabia | MedFellow",
    description: "Advance your medical career with our specialized fellowship programs in Saudi Arabia."
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: `fellowship, ${slug.replace("-", " ")}, Saudi Arabia, SCFHS, online learning, medical training`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.medfellowacademy.com/saudi-arabia/programs/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `https://www.medfellowacademy.com/saudi-arabia/programs/${slug}`,
      images: [
        {
          url: "https://www.medfellowacademy.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "MedFellow Fellowship"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description
    },
  };
}

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
