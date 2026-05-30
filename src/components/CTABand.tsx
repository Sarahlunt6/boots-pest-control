"use client";

import { motion } from "framer-motion";

export default function CTABand() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#231f20] via-[#2d2a2b] to-[#1a1718]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#50c148]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#50c148]/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Be Pest-Free?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don&apos;t let pests take over your home. Contact Boots Pest Control
            today for a free quote and take back your space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#50c148] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#50c148]/25 transition-all hover:bg-[#42a23b] hover:shadow-xl hover:shadow-[#50c148]/30 hover:scale-105"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+14357737103"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call (435) 773-7103
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Available Monday - Saturday, 8 AM - 9 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
