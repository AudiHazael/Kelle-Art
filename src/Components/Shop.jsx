import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import OrderPopupTwo from "./FormOrderTwo";

const products = [
  {
    title: "Breaking Loose",
    price: "$4500",
    image: "/Breaking Loose.png",
    description: "",
  },
  {
    title: "Purple",
    price: "$3000",
    image: "/Purple.png",
    description: "",
  },
  {
    title: "Ganja Mama",
    price: "$3000",
    image: "/Ganja-Mama.png",
    description: "",
    accredit: "",
  },
  {
    title: "Joker",
    price: "$2000",
    image: "/Joker.png",
    description: "",
    accredit: "",
  },
];

export default function Shop() {
  return (
    <section className="mx-auto bg-[#f5f5f0] text-[#59554d] py-16 px-6 lg:px-24">
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
            viewport={{ amount: 0.5 }} // 👈 will replay every time you scroll away & back
            className="bg-white shadow-md backdrop-blur w-full h-fit rounded-md overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              content={item.accredit}
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
                    {item.price}
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
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
