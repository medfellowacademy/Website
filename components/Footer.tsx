'use client';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, type Variants } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-linear-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 md:mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <Link href="/" className="inline-block mb-5 group">
              <motion.div 
                className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Med Fellow Academy Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                />
              </motion.div>
            </Link>
            <p className="text-gray-200 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Empowering practicing doctors with advanced fellowship programs 
              for clinical excellence and professional advancement.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[
                { 
                  href: "https://www.facebook.com/people/MedFellow-Academy/61576370840302/", 
                  icon: <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />,
                  label: "Facebook",
                  color: "hover:bg-blue-500"
                },
                { 
                  href: "https://www.linkedin.com/in/medfellow-academy-4628823b8/", 
                  icon: <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />,
                  label: "LinkedIn",
                  color: "hover:bg-blue-600"
                },
                { 
                  href: "https://www.instagram.com/medfellow_academy/", 
                  icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                  label: "Instagram",
                  color: "hover:bg-pink-600"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-sm ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/20`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold mb-5 text-lg sm:text-xl text-accent">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
                { href: "/apply", label: "Apply Now" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-200 hover:text-accent hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 text-sm sm:text-base group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-2"
            variants={itemVariants}
          >
            <h4 className="font-heading font-bold mb-5 text-lg sm:text-xl text-accent">Contact Us</h4>
            <ul className="space-y-4 text-gray-200">
              {[
                { icon: "📧", text: "info@medfellow.in", href: "mailto:info@medfellow.in" },
                { icon: "📞", text: "+91 4045674378", href: "tel:+914045674378" },
                { icon: "📍", text: "3-6-622 Flat No - 307, Mahavir house, Basheer bagh, Hyderabad, 500029" },
                { icon: "🕒", text: "Mon-Fri: 10AM - 7PM" }
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-accent text-xl mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-accent transition-colors text-sm sm:text-base">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm sm:text-base leading-relaxed">{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-6 sm:pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-200 text-xs sm:text-sm">
              © {currentYear} MedFellow Academy. All rights reserved.
            </p>
            <motion.p 
              className="text-gray-300 text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Made with <span className="text-red-400">❤️</span> for Medical Excellence
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
