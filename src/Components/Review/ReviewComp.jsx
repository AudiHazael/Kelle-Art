import React from "react";
import reviews from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
  const total = reviews.length;
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / total;

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Artist Kelle",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: total,
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: r.author,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
      },
      reviewBody: r.body,
    })),
  };

  return (
    <section className="bg-[#f5f5f0] py-8 px-4 lg:px-16">
      <h2 className="text-2xl font-bold mb-6">What Clients Say</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white/90 rounded-lg shadow-md p-6 flex flex-col h-48">
              <p className="text-yellow-500 text-lg mb-2">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </p>
              <p className="text-[#394033] flex-grow">“{r.body}”</p>
              <span className="mt-4 text-sm text-[#394033]">– {r.author}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
