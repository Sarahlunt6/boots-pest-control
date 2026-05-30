"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import Footer from "@/components/Footer";

const services: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  signs: string[];
  process: string[];
  icon: React.ReactNode;
}> = {
  "ant-extermination": {
    title: "Ant Extermination",
    description: "Eliminate ant colonies and prevent future infestations with our targeted treatments.",
    longDescription: "Ants are one of the most common household pests in Southern Utah. Our professional ant extermination services target the entire colony, not just the ants you see. We use safe, effective treatments that eliminate ants at the source and create a protective barrier around your home to prevent future infestations.",
    signs: [
      "Trails of ants in your kitchen or bathroom",
      "Small piles of dirt or sand near walls",
      "Hollow-sounding wood (carpenter ants)",
      "Winged ants appearing indoors",
      "Rustling sounds in walls"
    ],
    process: [
      "Thorough inspection to identify ant species and locate colonies",
      "Targeted treatment of colony locations and entry points",
      "Application of protective barrier around your home's perimeter",
      "Follow-up visit to ensure complete elimination",
      "Prevention recommendations to keep ants away"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="2" />
        <ellipse cx="12" cy="12" rx="3" ry="4" />
        <ellipse cx="12" cy="19" rx="4" ry="3" />
        <path strokeLinecap="round" d="M9 12L5 9M15 12l4-3M9 12L6 15M15 12l3 3M8 6L5 4M16 6l3-2" />
      </svg>
    ),
  },
  "cockroach-extermination": {
    title: "Cockroach Extermination",
    description: "Complete roach elimination using safe, effective methods that protect your family.",
    longDescription: "Cockroaches are resilient pests that can spread disease and trigger allergies. Our comprehensive cockroach extermination service eliminates all life stages of roaches, from eggs to adults. We use professional-grade treatments that are safe for your family and pets while being highly effective against these persistent pests.",
    signs: [
      "Seeing roaches during the day (indicates severe infestation)",
      "Droppings that look like coffee grounds or pepper",
      "Musty or oily odor in infested areas",
      "Egg cases (oothecae) in hidden areas",
      "Shed skins near hiding spots"
    ],
    process: [
      "Complete inspection of your home to assess infestation level",
      "Identification of roach species and harborage areas",
      "Application of targeted baits and treatments",
      "Treatment of cracks, crevices, and entry points",
      "Follow-up treatments to eliminate remaining populations"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="8" rx="4" ry="3" />
        <ellipse cx="12" cy="16" rx="5" ry="5" />
        <path strokeLinecap="round" d="M7 16L3 18M17 16l4 2M7 16L4 14M17 16l3-2M8 8L5 6M16 8l3-2" />
        <circle cx="10" cy="7" r="0.5" fill="currentColor" />
        <circle cx="14" cy="7" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  "spider-extermination": {
    title: "Spider Extermination",
    description: "Remove dangerous and nuisance spiders from your home with our expert treatments.",
    longDescription: "Southern Utah is home to several spider species, including potentially dangerous ones like black widows and brown recluses. Our spider extermination service safely removes existing spiders and their webs while creating barriers to prevent new spiders from entering your home. We focus on both interior and exterior treatments for complete protection.",
    signs: [
      "Visible spider webs in corners and ceilings",
      "Spider sightings, especially at night",
      "Egg sacs in hidden areas",
      "Small insects around windows (spider food source)",
      "Bites appearing on family members"
    ],
    process: [
      "Inspection to identify spider species and nesting areas",
      "Removal of existing webs and egg sacs",
      "Treatment of common hiding spots and entry points",
      "Exterior perimeter treatment to prevent new spiders",
      "Recommendations for reducing spider-attracting conditions"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="10" r="3" />
        <ellipse cx="12" cy="15" rx="4" ry="3" />
        <path strokeLinecap="round" d="M9 10L4 6M15 10l5-4M9 10L3 12M15 10l6 2M9 15L4 19M15 15l5 4M9 15L5 15M15 15l4 0" />
      </svg>
    ),
  },
  "rodent-extermination": {
    title: "Rodent Extermination",
    description: "Comprehensive rodent control to eliminate mice and rats from your property.",
    longDescription: "Rodents pose serious health risks and can cause significant property damage. Our rodent extermination service includes complete elimination of existing populations and exclusion work to prevent future infestations. We use humane and effective methods to remove mice and rats while sealing entry points to keep them out permanently.",
    signs: [
      "Droppings in cabinets, drawers, or along walls",
      "Gnaw marks on food packaging or structures",
      "Scratching or scurrying sounds at night",
      "Nests made of shredded materials",
      "Greasy rub marks along walls and baseboards"
    ],
    process: [
      "Comprehensive inspection to identify entry points and activity",
      "Strategic placement of traps and bait stations",
      "Sealing of entry points to prevent re-entry",
      "Removal of trapped rodents and sanitation",
      "Ongoing monitoring and prevention services"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="13" rx="7" ry="5" />
        <path strokeLinecap="round" d="M5 13c-1-2-1-5 1-6s4 0 4 0M19 13c1-2 1-5-1-6s-4 0-4 0" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
        <ellipse cx="12" cy="14" rx="1.5" ry="1" />
        <path strokeLinecap="round" d="M19 13c2 1 3 3 3 4M12 18v3" />
      </svg>
    ),
  },
  "hornet-wasp-control": {
    title: "Hornet & Wasp Control",
    description: "Safe removal of stinging insect nests to protect your family and pets.",
    longDescription: "Hornets and wasps can be aggressive, especially when their nests are disturbed. Our professional stinging insect control service safely removes nests from your property, eliminating the threat to your family and pets. We handle all types of stinging insects including paper wasps, yellow jackets, hornets, and mud daubers.",
    signs: [
      "Visible nests under eaves, in trees, or underground",
      "Increased wasp activity around your home",
      "Wasps entering and exiting a specific location",
      "Buzzing sounds coming from walls or attic",
      "Aggressive insects near outdoor eating areas"
    ],
    process: [
      "Safe identification of stinging insect species",
      "Location of all nests on your property",
      "Professional removal of nests using protective equipment",
      "Treatment to prevent nest rebuilding",
      "Recommendations for preventing future nests"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="7" rx="3" ry="2" />
        <ellipse cx="12" cy="11" rx="2" ry="2" />
        <ellipse cx="12" cy="16" rx="3" ry="4" />
        <path strokeLinecap="round" d="M9 7L6 5M15 7l3-2M9 11L5 11M15 11l4 0M12 20l0 2M10 20l-1 2M14 20l1 2" />
      </svg>
    ),
  },
  "flea-mite-treatment": {
    title: "Flea & Mite Treatment",
    description: "Eliminate fleas and mites that affect your pets and home environment.",
    longDescription: "Fleas and mites can quickly infest your home, causing discomfort for both your family and pets. Our comprehensive treatment eliminates all life stages of these pests, from eggs to adults. We treat both indoor and outdoor areas to ensure complete elimination and provide guidance on preventing re-infestation.",
    signs: [
      "Pets scratching excessively",
      "Small bites on ankles and lower legs",
      "Tiny jumping insects on pets or furniture",
      "Pet hair loss or skin irritation",
      "Small dark specks (flea dirt) on pet bedding"
    ],
    process: [
      "Assessment of infestation level throughout your home",
      "Treatment of all carpets, furniture, and pet areas",
      "Outdoor treatment of yards and pet areas",
      "Application of growth regulators to prevent eggs from hatching",
      "Coordination with your veterinarian for pet treatment"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="14" rx="4" ry="6" />
        <circle cx="12" cy="6" r="3" />
        <path strokeLinecap="round" d="M8 14L4 12M16 14l4-2M8 16L5 18M16 16l3 2M9 6L6 4M15 6l3-2" />
      </svg>
    ),
  },
  "general-bug-control": {
    title: "General Bug Control",
    description: "Broad-spectrum treatment for various insects invading your home.",
    longDescription: "From earwigs to beetles, silverfish to centipedes, our general bug control service handles a wide variety of household pests. We create a protective barrier around your home and treat problem areas inside to eliminate current infestations and prevent new ones. This service is perfect for ongoing pest prevention.",
    signs: [
      "Multiple types of insects appearing in your home",
      "Insects near windows, doors, or in basements",
      "Bugs in stored food or pantry areas",
      "Seasonal increases in pest activity",
      "Insects in moist areas like bathrooms"
    ],
    process: [
      "Complete home inspection to identify all pest issues",
      "Treatment of interior problem areas and hiding spots",
      "Exterior perimeter treatment to create a barrier",
      "Treatment of common entry points around doors and windows",
      "Quarterly maintenance available for ongoing protection"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="6" />
        <path strokeLinecap="round" d="M12 6V3M12 21v-3M6 12H3M21 12h-3M7.76 7.76L5.64 5.64M18.36 18.36l-2.12-2.12M7.76 16.24l-2.12 2.12M18.36 5.64l-2.12 2.12" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
        <path strokeLinecap="round" d="M9 14h6" />
      </svg>
    ),
  },
  "pest-inspection": {
    title: "Pest Inspection",
    description: "Thorough property inspection to identify potential pest problems before they start.",
    longDescription: "Prevention is the best pest control. Our comprehensive pest inspection service identifies potential pest problems before they become infestations. We examine your entire property, inside and out, looking for signs of pest activity, entry points, and conditions that attract pests. You'll receive a detailed report with recommendations for keeping your home pest-free.",
    signs: [
      "Buying or selling a home",
      "Moving into a new property",
      "Haven't had an inspection in over a year",
      "Noticing occasional pest sightings",
      "Want to prevent future pest problems"
    ],
    process: [
      "Complete interior inspection including attic and crawl spaces",
      "Exterior inspection of foundation, landscaping, and structures",
      "Identification of current pest activity and evidence",
      "Assessment of conditions that attract pests",
      "Detailed report with recommendations and prevention plan"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        <path strokeLinecap="round" d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#231f20] shadow-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center min-h-0">
              <Image
                src="/logo-new.png"
                alt="Boots Pest Control"
                width={200}
                height={60}
                className="h-14 w-auto lg:h-16"
                priority
              />
            </Link>
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link href="/#services" className="text-base font-medium text-white hover:text-[#50c148] transition-colors">
                Services
              </Link>
              <Link href="/#reviews" className="text-base font-medium text-white hover:text-[#50c148] transition-colors">
                Reviews
              </Link>
              <Link href="/#contact" className="text-base font-medium text-white hover:text-[#50c148] transition-colors">
                Contact
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:gap-4">
              <a
                href="tel:+14357737103"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-5 py-2 text-sm font-semibold text-white transition-all hover:border-[#50c148] hover:text-[#50c148]"
              >
                (435) 773-7103
              </a>
              <a
                href="https://clienthub.getjobber.com/client_hubs/bc87bfe8-af39-4a9d-909b-d9e843d714d9/public/work_request/new?source=social_media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#50c148] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#42a23b] hover:shadow-md"
              >
                Free Quote
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="bg-[#231f20] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 text-center lg:text-left"
              >
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 text-[#50c148] hover:text-[#42a23b] mb-6 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back to Services
                </Link>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  {service.longDescription}
                </p>
                <a
                  href="https://clienthub.getjobber.com/client_hubs/bc87bfe8-af39-4a9d-909b-d9e843d714d9/public/work_request/new?source=social_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#50c148] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#50c148]/25 transition-all hover:bg-[#42a23b] hover:shadow-xl hover:scale-105"
                >
                  Get a Free Quote
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center w-40 h-40 rounded-full bg-[#50c148]/10 text-[#50c148]"
              >
                {service.icon}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Signs Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
                Signs You Need {service.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Look out for these common indicators that you may have a problem.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.signs.map((sign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[#50c148] hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#50c148]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#50c148]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{sign}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
                Our {service.title} Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here&apos;s how we tackle your pest problem effectively.
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#50c148] flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-gray-700">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#231f20]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Rid of Your Pest Problem?
              </h2>
              <p className="text-lg text-gray-300 mb-10">
                Contact Boots Pest Control today for a free quote. We&apos;ll help you take back your home.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://clienthub.getjobber.com/client_hubs/bc87bfe8-af39-4a9d-909b-d9e843d714d9/public/work_request/new?source=social_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#50c148] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#50c148]/25 transition-all hover:bg-[#42a23b] hover:shadow-xl hover:scale-105"
                >
                  Get Your Free Quote
                </a>
                <a
                  href="tel:+14357737103"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call (435) 773-7103
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
