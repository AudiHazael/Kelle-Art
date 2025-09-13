import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import OrderPopupTwo from "./FormOrderTwo";

const products = [
  {
    title: "Breaking Loose",
    price: "4500",
    currency: "USD",
    image: "/Breaking Loose.png",
    description:
      "A striking charcoal masterpiece full of energy and raw emotion.",
  },
  {
    title: "Purple",
    price: "3000",
    currency: "USD",
    image: "/Purple.png",
    description: "A deep-toned artwork that explores mystery and creativity.",
  },
  {
    title: "Ganja Mama",
    price: "3000",
    currency: "USD",
    image: "/Ganja-Mama.png",
    description: "A bold piece celebrating free spirit and culture.",
  },
  {
    title: "Joker",
    price: "2000",
    currency: "USD",
    image: "/Joker.png",
    description: "An expressive artwork capturing duality and emotion.",
  },
];

export default function Shop() {
  // 🔹 Build JSON-LD once for all products
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": products.map((item) => ({
      "@type": "Product",
      name: item.title,
      image: [
        typeof window !== "undefined"
          ? window.location.origin + item.image
          : item.image,
      ],
      description: item.description,
      brand: {
        "@type": "Brand",
        name: "Artist Kelle",
      },
      offers: {
        "@type": "Offer",
        url:
          typeof window !== "undefined"
            ? window.location.href
            : "https://www.artistkelle.com/shop",
        priceCurrency: item.currency,
        price: item.price,
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <section className="mx-auto bg-[#f5f5f0] text-[#59554d] py-16 px-4 lg:px-24">
      <motion.div
        className="max-w-7xl mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-2xl font-bold">Artwork</h2>
        <p className="text-md md:text-lg py-4">
          Explore our collection of unique artworks and find the perfect piece
          for your space.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ amount: 0.5 }}
            className="bg-white shadow-md backdrop-blur w-full h-[500px] rounded-md overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[400px] w-full object-cover rounded-t-md"
              loading="lazy"
            />
            <div className="p-4 text-left flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-[#59554d]">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-[#59554d]">
                    ${item.price}
                  </p>
                </div>
                <p className="text-sm text-[#59554d] mt-2">
                  {item.description}
                </p>
              </div>

              {/* Order button */}
              <div className="mt-2 flex items-center gap-2 text-sm text-[#b18e63] font-medium">
                <OrderPopupTwo
                  triggerText={
                    <span className="flex items-center space-x-2 cursor-pointer transition-all text-[#b18e63] hover:text-[#735c40]">
                      <span className="text-md">Place Your Order</span>
                      <ArrowLongRightIcon className="h-5 w-5" />
                    </span>
                  }
                  title={`Order: ${item.title}`}
                  description={`Complete the form below to order the "${item.title}".`}
                  productTitle={item.title}
                  productPrice={item.price}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Inject one JSON-LD script for all products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </section>
  );
}
