"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Boots Pest Control is a step above other companies. They treat all around the sides of the house and also the eaves of the roof where lots of pests hide. They also sprayed the perimeter of our yard to keep bugs away from the neighboring farm. I was especially impressed that they swept all of the cobwebs off our windows and outside walls. Ben was very thorough and explained the services he performed. I would highly recommend Boots Pest Control!!",
    author: "Julie P.",
    location: "St. George, UT",
    rating: 5,
  },
  {
    text: "Great service and very thorough treatment. Highly recommend Boots Pest Control!",
    author: "Ben P.",
    location: "Beaver, UT",
    rating: 5,
  },
  {
    text: "We've had an amazing experience with Boots Pest Control! Their technician, Ben, was professional, friendly, and very thorough when treating both our home and yard. We were dealing with bugs around the outside of the house and in the lawn area, and after their service we noticed a major improvement. They took the time to explain their treatment process. Highly recommend Boots Pest Control for anyone needing reliable home and yard pest control services!",
    author: "Sarah L.",
    location: "Enterprise, UT",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-5xl font-bold text-[#231f20]">5.0</span>
            <div className="flex flex-col items-start">
              <StarRating rating={5} />
              <span className="text-sm text-gray-600 mt-1">
                Based on 3 Google Reviews
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#231f20] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what St. George homeowners
            are saying about Boots Pest Control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#50c148]/20 flex items-center justify-center">
                  <span className="text-[#50c148] font-semibold text-sm">
                    {review.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#231f20]">
                    {review.author}
                  </p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.google.com/search?sca_esv=f983faa59103653d&rlz=1C5MACD_enUS1128US1128&sxsrf=ANbL-n78JcNl7CjivoJPBeEF7HNOvJYRGA:1780180280626&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWFkigoiTjggX-w6ztzYzdADrQ8xQ2kTc3O5Tv3V4AcXVJBoPU_OfZ5Uo_KIkhD79oeCddu3VXMchl9MzfgW_mBZFOyNYeva69TfrAUQZwKA6nPFfg%3D%3D&q=Boots+Pest+Control+Reviews&sa=X&ved=2ahUKEwiT8IyqiOKUAxXQLEQIHe7JN4AQ0bkNegQIJxAF&biw=1127&bih=711&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#50c148] font-medium hover:text-[#42a23b] transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            View all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
