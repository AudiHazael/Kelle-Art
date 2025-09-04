import React from "react";
import { motion } from "framer-motion";

const images = [
  "/IMG_1818.png",
  "/IMG_1474.png",
  "/IMG_2076.JPG",
  "/IMG_1474.png",
  "/IMG_2088.png",
  "/couple.png",
  "/IMG_3957.JPG",
  "/IMG_3959.JPG",
  "/IMG_3960.JPG",
  "/IMG_3961.JPG",
  "/IMG_3962.JPG",
  "/IMG_3963.JPG",
];

function Arts() {
  return (
    <section
      id="gallery-two"
      className="bg-[#fdfcf9] py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-4 py-6"
        >
          <h2 className="text-3xl font-bold text-[#59554d]">Our Gallery</h2>
          <p className="text-[#59554d] text-base md:text-md">
            Explore the highlight of our journey and see how we are shaping the
            future of technology, one step at a time.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg shadow-md group ${
                (i + 1) % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Artwork ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm sm:text-base md:text-lg font-medium">
                  Artwork {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Arts;
