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
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Ant body - head, thorax, abdomen */}
        <circle cx="12" cy="4.5" r="2" />
        <ellipse cx="12" cy="9" rx="1.5" ry="2" />
        <ellipse cx="12" cy="14.5" rx="2.5" ry="3.5" />
        {/* Antennae */}
        <path d="M10.5 3.5L8 1M13.5 3.5L16 1" />
        {/* Legs */}
        <path d="M10.5 8L7 6M13.5 8L17 6M10.5 10L7 12M13.5 10L17 12M10 14L6 16M14 14L18 16" />
      </svg>
    ),
  },
  {
    title: "Cockroach Extermination",
    slug: "cockroach-extermination",
    description:
      "Complete roach elimination using safe, effective methods that protect your family.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Cockroach body */}
        <ellipse cx="12" cy="12" rx="4" ry="7" />
        {/* Head */}
        <ellipse cx="12" cy="4" rx="2" ry="1.5" />
        {/* Antennae */}
        <path d="M10.5 3L8 0.5M13.5 3L16 0.5" />
        {/* Legs */}
        <path d="M8.5 8L4 6M15.5 8L20 6M8 12L3 12M16 12L21 12M8.5 16L4 18M15.5 16L20 18" />
        {/* Wing line */}
        <path d="M12 6v10" />
      </svg>
    ),
  },
  {
    title: "Spider Extermination",
    slug: "spider-extermination",
    description:
      "Remove dangerous and nuisance spiders from your home with our expert treatments.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Spider body */}
        <circle cx="12" cy="10" r="3" />
        <ellipse cx="12" cy="15" rx="2" ry="2.5" />
        {/* 8 legs */}
        <path d="M9.5 9L5 4M14.5 9L19 4" />
        <path d="M9 10.5L3 9M15 10.5L21 9" />
        <path d="M9 12L4 15M15 12L20 15" />
        <path d="M10 14.5L6 20M14 14.5L18 20" />
        {/* Eyes */}
        <circle cx="10.5" cy="9" r="0.5" fill="currentColor" />
        <circle cx="13.5" cy="9" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Rodent Extermination",
    slug: "rodent-extermination",
    description:
      "Comprehensive rodent control to eliminate mice and rats from your property.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Mouse body */}
        <ellipse cx="10" cy="14" rx="6" ry="4" />
        {/* Head */}
        <circle cx="5" cy="12" r="3" />
        {/* Ears */}
        <circle cx="3.5" cy="9" r="1.5" />
        <circle cx="6.5" cy="9" r="1.5" />
        {/* Eye */}
        <circle cx="4" cy="11.5" r="0.5" fill="currentColor" />
        {/* Nose */}
        <circle cx="2.5" cy="12.5" r="0.5" fill="currentColor" />
        {/* Whiskers */}
        <path d="M2 13L0 14M2 12.5L0 12M2 12L0 10" />
        {/* Tail */}
        <path d="M16 14Q20 14 21 10Q22 6 20 5" />
      </svg>
    ),
  },
  {
    title: "Hornet & Wasp Control",
    slug: "hornet-wasp-control",
    description:
      "Safe removal of stinging insect nests to protect your family and pets.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Wasp head */}
        <circle cx="12" cy="4" r="2" />
        {/* Thorax */}
        <ellipse cx="12" cy="8" rx="2" ry="2" />
        {/* Abdomen with stripes */}
        <ellipse cx="12" cy="14" rx="3" ry="5" />
        <path d="M9 12.5h6M9 14.5h6M9 16.5h6" />
        {/* Wings */}
        <path d="M10 7Q6 5 5 8M14 7Q18 5 19 8" />
        {/* Stinger */}
        <path d="M12 19v2.5" />
        {/* Antennae */}
        <path d="M10.5 2.5L9 1M13.5 2.5L15 1" />
      </svg>
    ),
  },
  {
    title: "Flea & Mite Treatment",
    slug: "flea-mite-treatment",
    description:
      "Eliminate fleas and mites that affect your pets and home environment.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Flea body - oval shape */}
        <ellipse cx="12" cy="13" rx="4" ry="6" />
        {/* Head */}
        <circle cx="12" cy="5.5" r="2" />
        {/* Jumping legs */}
        <path d="M8 11L4 8M16 11L20 8" />
        <path d="M8 15L3 17Q2 20 5 21" />
        <path d="M16 15L21 17Q22 20 19 21" />
        {/* Small front legs */}
        <path d="M10 7L8 6M14 7L16 6" />
      </svg>
    ),
  },
  {
    title: "General Bug Control",
    slug: "general-bug-control",
    description:
      "Broad-spectrum treatment for various insects invading your home.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield shape */}
        <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4z" />
        {/* Bug crossed out inside shield */}
        <circle cx="12" cy="11" r="2.5" />
        <path d="M10 9L8 7M14 9L16 7M9.5 11H7M14.5 11H17M10 13L8 15M14 13L16 15" />
        {/* Cross out line */}
        <path d="M8 8l8 8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Pest Inspection",
    slug: "pest-inspection",
    description:
      "Thorough property inspection to identify potential pest problems before they start.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Magnifying glass */}
        <circle cx="10" cy="10" r="6" />
        <path d="M14.5 14.5L20 20" strokeWidth="2" />
        {/* Bug inside magnifying glass */}
        <ellipse cx="10" cy="10" rx="2" ry="3" />
        <path d="M8 9L6 8M12 9L14 8M8 11L6 12M12 11L14 12" />
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
