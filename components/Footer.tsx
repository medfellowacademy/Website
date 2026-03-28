 import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-primary via-primary-dark to-primary text-white">
      <div className="container-custom py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.png"
                  alt="Med Fellow Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold">
                MedFellow Academy
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering practicing doctors with advanced fellowship programs 
              for clinical excellence and professional advancement.
            </p>
            <div className="flex gap-4">
  <a 
    href="https://www.facebook.com/people/MedFellow-Academy/61576370840302/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://www.linkedin.com/in/medfellow-academy-4628823b8/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
  >
    <FaLinkedinIn />
  </a>

  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
  >
    <FaTwitter />
  </a>

  <a 
    href="https://www.instagram.com/medfellow_academy/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
  >
    <FaInstagram />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
               <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Programs</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/apply" className="text-gray-300 hover:text-accent transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📧</span>
                <span>info@medfellow.in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📞</span>
                <span>+91 9985044993</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📍</span>
                <span>23-5-449, Second Floor, Nagul Chinta, Lal Darwaza, Shahalibanda, Charminar, Hyderabad- 500065, Telangana,
India</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">🕒</span>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} MedFellow Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">Terms of Service</a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
