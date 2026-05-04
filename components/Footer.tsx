'use client';
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ background: '#1B4F72' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-2 sm:mb-3">
              <span className="text-base sm:text-lg font-medium">MedFellow</span>
              <span style={{ color: '#AED6F1' }} className="ml-1">Academy</span>
            </Link>
            <p className="text-xs mb-4 opacity-90" style={{ lineHeight: 1.6 }}>
              Empowering doctors with advanced fellowship programs for clinical excellence.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.facebook.com/people/MedFellow-Academy/61576370840302/", icon: <FaFacebookF className="w-3 h-3" />, label: "Facebook" },
                { href: "https://www.linkedin.com/in/medfellow-academy-4628823b8/", icon: <FaLinkedinIn className="w-3 h-3" />, label: "LinkedIn" },
                { href: "https://www.instagram.com/medfellow_academy/", icon: <FaInstagram className="w-3 h-3" />, label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs opacity-90">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:opacity-70 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm">Legal</h4>
            <ul className="space-y-2 text-xs opacity-90">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:opacity-70 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm">Contact Us</h4>
            <ul className="space-y-2 text-xs opacity-90">
              <li>
                <a href="mailto:info@medfellow.in" className="hover:opacity-70 transition-opacity">
                  info@medfellow.in
                </a>
              </li>
              <li>
                <a href="tel:+914045674378" className="hover:opacity-70 transition-opacity">
                  +91 4045674378
                </a>
              </li>
              <li>
                <a href="tel:+919985044993" className="hover:opacity-70 transition-opacity">
                  +91 9985044993
                </a>
              </li>
              <li className="leading-relaxed">
                3-6-622 Flat No - 307, Mahavir house, Basheer bagh, Hyderabad, 500029
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t text-center text-xs opacity-80" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p>© {currentYear} MedFellow Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
