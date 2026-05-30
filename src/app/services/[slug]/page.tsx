"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/Navbar";
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
      "Prevention recommendations to keep ants away",
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "Detailed report with recommendations and prevention plan",
      "100% Satisfaction Guarantee - we'll respray for free if you're not satisfied"
    ],
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Magnifying glass */}
        <circle cx="10" cy="10" r="6" />
        <path d="M14.5 14.5L20 20" strokeWidth="2" />
        {/* Bug inside magnifying glass */}
        <ellipse cx="10" cy="10" rx="2" ry="3" />
        <path d="M8 9L6 8M12 9L14 8M8 11L6 12M12 11L14 12" />
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
      <Navbar forceDark />

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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform?usp=header"
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform?usp=header"
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
