import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import OrderPopup from "./Form-Order";

const products = [
  {
    title: "Single Portrait",
    price: "₦30,000",
    image: "/IMG_1809.png",
    description: "A detailed pencil or charcoal portrait of one person.",
  },
  {
    title: "Couple Portrait",
    price: "₦50,000",
    image: "/couple.png",
    description: "Celebrate love with a hand-drawn portrait of two people.",
  },
  {
    title: "Abstract Drawing",
    price: "₦80,000",
    image: "/abstract.jpg",
    description: "A timeless family keepsake, perfect for your living room.",
    accredit:
      '<a href="https://www.freepik.com/free-ai-image/abstract-dadaism-concept_383251065.htm">Image by freepik</a>',
  },
  {
    title: "Custom Art",
    price: "Contact for Price",
    image: "/IMG_2920.PNG",
    description: "Unique commissions tailored to your vision and story.",
  },
];

export default function Shop() {
  return (
    <section
      className="mx-auto bg-[#f5f5f0] text-[#59554d] py-16 px-6 lg:px-8"
      id="Shop"
    >
      <motion.div
        className="max-w-7xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-2xl font-bold">Shop Artwork</h2>
        <p className="text-base md:text-lg py-4">
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
            viewport={{ amount: 0.5 }} // 👈 will replay every time you scroll away & back
            className="bg-white w-full h-[380px] shadow-md rounded-md overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              content={item.accredit}
              className="h-64 w-full object-cover rounded-t-md"
              loading="lazy"
            />
            <div className="p-4 text-left flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-md font-semibold text-[#59554d]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#59554d] mt-2">
                  {item.description}
                </p>
                <p className="text-md font-bold text-[#59554d] mt-2">
                  {item.price}
                </p>
              </div>

              {/* Order button */}
              <div className="mt-3 flex items-center gap-2 text-sm text-[#b18e63] font-medium">
                <OrderPopup
                  triggerText={
                    <span className="flex items-center space-x-2 cursor-pointer transition-all text-[#b18e63] hover:text-[#735c40]">
                      <span>Place Your Order</span>
                      <ArrowLongRightIcon className="h-5 w-5" />
                    </span>
                  }
                  title={`Order: ${item.title}`}
                  description={`Complete the form below to order the "${item.title}".`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
