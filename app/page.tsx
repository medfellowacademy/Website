import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrainingFacilities from "@/components/TrainingFacilities";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import Certification from "@/components/Certification";
import LeadMagnetBanner from "@/components/LeadMagnetBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrainingFacilities />
      <Faculty />
      <Testimonials />
      <Certification />
      <LeadMagnetBanner />
      <FAQ />
      <Footer />
    </div>
  );
}
