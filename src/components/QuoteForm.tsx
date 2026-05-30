"use client";

import { motion } from "framer-motion";

export default function QuoteForm() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white" aria-label="Contact us">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to take back your home from pests? Contact us today for a free,
            no-obligation quote for your pest control needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#50c148] px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-[#50c148]/25 transition-all hover:bg-[#42a23b] hover:shadow-xl hover:shadow-[#50c148]/30 hover:scale-105"
          >
            Request Your Free Quote
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#50c148]/10 flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-[#50c148]"
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
            </div>
            <h3 className="font-semibold text-[#231f20] mb-1">Call Us</h3>
            <a
              href="tel:+14357737103"
              className="text-gray-600 hover:text-[#50c148] transition-colors"
            >
              (435) 773-7103
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#50c148]/10 flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-[#50c148]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#231f20] mb-1">Hours</h3>
            <p className="text-gray-600">Mon - Sat: 8 AM - 9 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#50c148]/10 flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-[#50c148]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#231f20] mb-1">Service Area</h3>
            <p className="text-gray-600">St. George & Southern Utah</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
