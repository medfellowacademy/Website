import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                Med Fellow Academy
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering practicing doctors with advanced fellowship programs 
              for clinical excellence and professional advancement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">@</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Programs</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/faculty" className="text-gray-300 hover:text-accent transition-colors">Faculty</Link></li>
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
                <span>info@medfellowacademy.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📍</span>
                <span>Mumbai, India</span>
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
              © {currentYear} Med Fellow Academy. All rights reserved.
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
