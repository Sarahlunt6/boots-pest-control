"use client";

import { motion } from "framer-motion";

const areas = [
  "St. George",
  "Washington",
  "Hurricane",
  "Ivins",
  "Santa Clara",
  "La Verkin",
  "Leeds",
  "Toquerville",
  "Central",
  "Pine Valley",
  "New Harmony",
  "Enterprise",
  "Beaver",
];

export default function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 bg-[#231f20]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Serving Southern Utah
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Boots Pest Control proudly serves St. George and the surrounding
              communities in Southern Utah. If you&apos;re dealing with pests
              anywhere in our service area, we&apos;re here to help.
            </p>

            <div className="flex justify-center lg:justify-start mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4">
                {areas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <svg
                      className="h-5 w-5 text-[#50c148] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Not sure if we service your area? Give us a call and we&apos;ll
              let you know!
            </p>

            <a
              href="tel:+14357737103"
              className="inline-flex items-center gap-2 text-[#50c148] font-semibold hover:text-[#42a23b] transition-colors"
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
              (435) 773-7103
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102644.70754285642!2d-113.62867367462964!3d37.09604649693886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca44d0984367af%3A0x2ff651feff69b5ca!2sSt.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map - St. George, Utah"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
