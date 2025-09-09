import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import OrderPopup from "./Form-Order";

function ServComp() {
  return (
    <div>
      <section className="mx-auto bg-[#f5f5f0] px-4 py-16 space-y-12 sm:px-6 lg:px-16">
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-4 backdrop-blur-md md:border md:border-white/10 rounded-md md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <div className="md:col-span-6 space-y-4 md:p-4 flex flex-col justify-center">
            <img
              src="/IMG_1458.JPG"
              alt="services"
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Text + Button */}
          <div className="md:col-span-6 bg-white/10 rounded-md flex flex-col justify-center items-start p-6">
            <h3 className="text-lg md:text-xl font-medium text-[#394033]">
              Whether it’s a loved one, a pet, a memorial, or a gift — I’m here
              to create a portrait that captures the soul of your subject in a
              beautiful, realistic charcoal artwork.
            </h3>

            <div className="mt-6 flex items-center gap-2 text-lg text-[#b18e63] font-medium">
              <OrderPopup
                triggerText={
                  <span className="flex items-center space-x-2 cursor-pointer transition-all hover:text-[#735c40]">
                    <span>Place an Order</span>
                    <ArrowLongRightIcon className="h-5 w-5" />
                  </span>
                }
                title="Commission Request"
                description="Fill out the form below to commission your custom artwork."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServComp;
