"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Ant Extermination",
    slug: "ant-extermination",
    description:
      "Eliminate ant colonies and prevent future infestations with our targeted treatments.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="2" />
        <ellipse cx="12" cy="12" rx="3" ry="4" />
        <ellipse cx="12" cy="19" rx="4" ry="3" />
        <path strokeLinecap="round" d="M9 12L5 9M15 12l4-3M9 12L6 15M15 12l3 3M8 6L5 4M16 6l3-2" />
      </svg>
    ),
  },
  {
    title: "Cockroach Extermination",
    slug: "cockroach-extermination",
    description:
      "Complete roach elimination using safe, effective methods that protect your family.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="8" rx="4" ry="3" />
        <ellipse cx="12" cy="16" rx="5" ry="5" />
        <path strokeLinecap="round" d="M7 16L3 18M17 16l4 2M7 16L4 14M17 16l3-2M8 8L5 6M16 8l3-2" />
        <circle cx="10" cy="7" r="0.5" fill="currentColor" />
        <circle cx="14" cy="7" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Spider Extermination",
    slug: "spider-extermination",
    description:
      "Remove dangerous and nuisance spiders from your home with our expert treatments.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="10" r="3" />
        <ellipse cx="12" cy="15" rx="4" ry="3" />
        <path strokeLinecap="round" d="M9 10L4 6M15 10l5-4M9 10L3 12M15 10l6 2M9 15L4 19M15 15l5 4M9 15L5 15M15 15l4 0" />
      </svg>
    ),
  },
  {
    title: "Rodent Extermination",
    slug: "rodent-extermination",
    description:
      "Comprehensive rodent control to eliminate mice and rats from your property.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="13" rx="7" ry="5" />
        <path strokeLinecap="round" d="M5 13c-1-2-1-5 1-6s4 0 4 0M19 13c1-2 1-5-1-6s-4 0-4 0" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
        <ellipse cx="12" cy="14" rx="1.5" ry="1" />
        <path strokeLinecap="round" d="M19 13c2 1 3 3 3 4M12 18v3" />
      </svg>
    ),
  },
  {
    title: "Hornet & Wasp Control",
    slug: "hornet-wasp-control",
    description:
      "Safe removal of stinging insect nests to protect your family and pets.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="7" rx="3" ry="2" />
        <ellipse cx="12" cy="11" rx="2" ry="2" />
        <ellipse cx="12" cy="16" rx="3" ry="4" />
        <path strokeLinecap="round" d="M9 7L6 5M15 7l3-2M9 11L5 11M15 11l4 0M12 20l0 2M10 20l-1 2M14 20l1 2" />
      </svg>
    ),
  },
  {
    title: "Flea & Mite Treatment",
    slug: "flea-mite-treatment",
    description:
      "Eliminate fleas and mites that affect your pets and home environment.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="14" rx="4" ry="6" />
        <circle cx="12" cy="6" r="3" />
        <path strokeLinecap="round" d="M8 14L4 12M16 14l4-2M8 16L5 18M16 16l3 2M9 6L6 4M15 6l3-2" />
      </svg>
    ),
  },
  {
    title: "General Bug Control",
    slug: "general-bug-control",
    description:
      "Broad-spectrum treatment for various insects invading your home.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="6" />
        <path strokeLinecap="round" d="M12 6V3M12 21v-3M6 12H3M21 12h-3M7.76 7.76L5.64 5.64M18.36 18.36l-2.12-2.12M7.76 16.24l-2.12 2.12M18.36 5.64l-2.12 2.12" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
        <path strokeLinecap="round" d="M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Pest Inspection",
    slug: "pest-inspection",
    description:
      "Thorough property inspection to identify potential pest problems before they start.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        <path strokeLinecap="round" d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
            Our Pest Control Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ants to rodents, we handle all types of pest problems with
            professional-grade solutions that keep your home safe.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-[#50c148] hover:shadow-lg hover:shadow-[#50c148]/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#50c148]/10 text-[#50c148] mb-4 group-hover:bg-[#50c148] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#231f20] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center mt-4 text-sm font-medium text-[#50c148] hover:text-[#42a23b] transition-colors"
              >
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
