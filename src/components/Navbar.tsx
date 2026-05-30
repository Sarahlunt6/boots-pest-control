"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Ant Extermination", slug: "ant-extermination" },
  { title: "Cockroach Extermination", slug: "cockroach-extermination" },
  { title: "Spider Extermination", slug: "spider-extermination" },
  { title: "Rodent Extermination", slug: "rodent-extermination" },
  { title: "Hornet & Wasp Control", slug: "hornet-wasp-control" },
  { title: "Flea & Mite Treatment", slug: "flea-mite-treatment" },
  { title: "General Bug Control", slug: "general-bug-control" },
  { title: "Pest Inspection", slug: "pest-inspection" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#231f20] shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center min-h-0"
          >
            <Image
              src="/logo-new.png"
              alt="Boots Pest Control"
              width={200}
              height={60}
              className="h-14 w-auto lg:h-16"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8 h-full">
            {/* Services Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="#services"
                className="text-base font-medium transition-colors hover:text-[#50c148] min-h-0 flex items-center h-full text-white gap-1"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-[#231f20] rounded-xl shadow-xl border border-gray-700 py-2 z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2.5 text-sm text-white hover:bg-[#50c148]/10 hover:text-[#50c148] transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="#reviews"
              className="text-base font-medium transition-colors hover:text-[#50c148] min-h-0 flex items-center h-full text-white"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-base font-medium transition-colors hover:text-[#50c148] min-h-0 flex items-center h-full text-white"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:+14357737103"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-5 py-2 text-sm font-semibold text-white transition-all hover:border-[#50c148] hover:text-[#50c148]"
            >
              (435) 773-7103
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#50c148] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#42a23b] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#50c148]"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#50c148] text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#231f20] border-t border-gray-700"
          >
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-[#50c148] hover:bg-white/10 rounded-md"
                >
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={handleNavClick}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-[#50c148] hover:bg-white/10 rounded-md"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href="#reviews"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-white hover:text-[#50c148] hover:bg-white/10 rounded-md"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-white hover:text-[#50c148] hover:bg-white/10 rounded-md"
              >
                Contact
              </a>
              <div className="pt-3 border-t border-gray-700 space-y-3">
                <a
                  href="tel:+14357737103"
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-white hover:text-[#50c148]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  (435) 773-7103
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="block w-full text-center rounded-full bg-[#50c148] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#42a23b]"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
