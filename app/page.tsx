import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMedFellow from "@/components/WhyMedFellow";
import FellowshipPrograms from "@/components/FellowshipPrograms";
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
      <FellowshipPrograms />
      <Faculty />
      <Certification />
      <Testimonials />
      <Footer />
    </div>
  );
}
