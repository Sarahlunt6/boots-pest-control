"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const pestTypes = [
  "Ants",
  "Cockroaches",
  "Spiders",
  "Rodents",
  "Hornets/Wasps",
  "Fleas/Mites",
  "Other",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pestType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Redirect to Google Form with pre-filled data
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform?usp=pp_url&entry.YOUR_NAME_FIELD=${encodeURIComponent(formData.name)}&entry.YOUR_EMAIL_FIELD=${encodeURIComponent(formData.email)}&entry.YOUR_PHONE_FIELD=${encodeURIComponent(formData.phone)}`;

    // For now, just show success and redirect to the form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfWiFx6brRo6eADTSwHZW_MBrzyhutg5FX1FmidVKYdfVTqvg/viewform",
        "_blank"
      );
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#50c148]/10 text-[#50c148] mb-6">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#231f20] mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;ve opened the quote request form in a new tab. Please
              complete it and we&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[#50c148] font-medium hover:text-[#42a23b] transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 sm:py-28 bg-white" aria-label="Request a quote">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form and we&apos;ll get back to you within 24 hours
              with a free, no-obligation quote for your pest control needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#50c148]/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-[#50c148]"
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
                <div>
                  <h3 className="font-semibold text-[#231f20]">Call Us</h3>
                  <a
                    href="tel:+14357737103"
                    className="text-gray-600 hover:text-[#50c148] transition-colors"
                  >
                    (435) 773-7103
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#50c148]/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-[#50c148]"
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
                <div>
                  <h3 className="font-semibold text-[#231f20]">Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 8 AM - 9 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#50c148]/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-[#50c148]"
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
                <div>
                  <h3 className="font-semibold text-[#231f20]">Service Area</h3>
                  <p className="text-gray-600">St. George & Southern Utah</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-6 sm:p-8"
            id="contact"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#231f20] mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#50c148] focus:ring-2 focus:ring-[#50c148]/20 outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#231f20] mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#50c148] focus:ring-2 focus:ring-[#50c148]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#231f20] mb-1.5"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#50c148] focus:ring-2 focus:ring-[#50c148]/20 outline-none transition-all"
                    placeholder="(435) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-[#231f20] mb-1.5"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#50c148] focus:ring-2 focus:ring-[#50c148]/20 outline-none transition-all"
                  placeholder="123 Main St, St. George, UT"
                />
              </div>

              <div>
                <label
                  htmlFor="pestType"
                  className="block text-sm font-medium text-[#231f20] mb-1.5"
                >
                  Type of Pest Problem
                </label>
                <select
                  id="pestType"
                  name="pestType"
                  value={formData.pestType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#50c148] focus:ring-2 focus:ring-[#50c148]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a pest type</option>
                  {pestTypes.map((pest) => (
                    <option key={pest} value={pest}>
                      {pest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#231f20] mb-1.5"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#50c148] focus:ring-2 focus:ring-[#50c148]/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about your pest problem..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-full bg-[#50c148] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#50c148]/25 transition-all hover:bg-[#42a23b] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Request Free Quote"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted about your
                pest control needs.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
