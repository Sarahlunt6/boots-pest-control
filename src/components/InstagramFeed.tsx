"use client";

import { motion } from "framer-motion";
import BeholdWidget from "@behold/react";

// Paste the feed ID from Behold (app.behold.so → your feed → Embed Code).
// Layout, post count and styling are set in the Behold dashboard.
const BEHOLD_FEED_ID = "y2kldfeMg3Xyke7jaFXU";

const INSTAGRAM_URL = "https://www.instagram.com/bootspest/";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real jobs, real results around Southern Utah. Follow{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              @bootspest
            </a>{" "}
            for tips and behind-the-scenes looks at our work.
          </p>
        </motion.div>

        {BEHOLD_FEED_ID && (
          // Reserve space so the page doesn't jump while the client-only widget loads
          <div className="min-h-[240px] sm:min-h-[400px] lg:min-h-[600px]">
            <BeholdWidget feedId={BEHOLD_FEED_ID} />
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#50c148] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#50c148]/25 transition-all hover:bg-[#42a23b] hover:shadow-xl hover:scale-105"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @bootspest
          </a>
        </div>
      </div>
    </section>
  );
}
