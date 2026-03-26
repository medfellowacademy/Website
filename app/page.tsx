import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMedFellow from "@/components/WhyMedFellow";
import TrainingFacilities from "@/components/TrainingFacilities";
import Faculty from "@/components/Faculty";
import Certification from "@/components/Certification";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyMedFellow />
      <TrainingFacilities />
      <Faculty />
      <Testimonials />
      <Certification />
      <Footer />
    </div>
  );
}
