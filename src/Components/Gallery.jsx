import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  { src: "/IMG_1818.png", alt: "Image 1" },
  { src: "/IMG_1474.png", alt: "Image 2" },
  { src: "/IMG_2076.JPG", alt: "Image 3" },
  { src: "/IMG_1474.png", alt: "Image 4" },
  { src: "/IMG_2088.png", alt: "Image 5" },
  { src: "/couple.png", alt: "Image 6" },
  { src: "/IMG_3957.JPG", alt: "Image " },
  { src: "/IMG_3959.JPG", alt: "Image " },
  { src: "/IMG_3960.JPG", alt: "Image " },
  { src: "/IMG_3961.JPG", alt: "Image " },
  { src: "/IMG_3962.JPG", alt: "Image " },
  { src: "IMG_3963.JPG", alt: "Image " },
  // { src: "/", alt: "Image " },
  // { src: "/", alt: "Image " },
  // { src: "/", alt: "Image " },
];

export default function Gallery() {
  return (
    <div className="bg-white" id="Gallery">
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left column (text) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-[#59554d]">Our Gallery</h2>
            <p className="text-[#59554d] text-sm md:text-md">
              Explore the highlight of our journey and see how we are shaping
              the future of technology, one step at a time.
            </p>

            <img
              src="IMG_3963.JPG"
              alt="Image 6"
              className="w-full h-[38em] bg-cover bg-center rounded-md"
            />
          </motion.div>

          {/* Right column (swiper card) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative w-full rounded-md overflow-hidden shadow-lg"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={800}
              pagination={{ clickable: true }}
              className="h-full swiper-in-card"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-[45em] bg-cover bg-center"
                    style={{ backgroundImage: `url(${img.src})` }}
                    role="img"
                    aria-label={img.alt}
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
