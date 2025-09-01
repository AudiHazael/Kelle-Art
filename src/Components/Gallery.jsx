import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const images = [
  { src: "/img2.jpg", alt: "Image 2" },
  { src: "/img3.jpg", alt: "Image 3" },
  { src: "/img4.jpg", alt: "Image 4" },
  { src: "/img5.jpg", alt: "Image 5" },
  { src: "/img6.jpg", alt: "Image 6" },
  { src: "/img7.jpg", alt: "Image 7" },
  { src: "/img8.jpg", alt: "Image 8" },
  { src: "/img9.jpg", alt: "Image 9" },
  { src: "/img10.jpg", alt: "Image 10" },
];

export default function Gallery() {
  return (
    <div className="bg-white" id="Gallery">
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column (your content) */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#59554d]">Our Gallery</h2>
            <p className="text-[#59554d]">
              Explore the highlight of our journey and see how we are shaping
              the future of technology, one step at a time.
            </p>
          </div>

          {/* Right column (card with swiper inside) */}
          <div className="relative w-full h-80 rounded-md overflow-hidden shadow-lg">
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
                    className="w-full h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img.src})` }}
                    role="img"
                    aria-label={img.alt}
                  />
                  <div className="absolute inset-0 bg-black/25 flex iems-center justify-center"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
