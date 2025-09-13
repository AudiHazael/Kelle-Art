import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Commission from "../Components/Commision";
import ServComp from "../Components/ServComp";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import OrderPopup from "../Components/Form-Order";
import Shop from "../Components/Shop";
import ReviewComp from "../Components/Review/ReviewComp";

function ServicePage() {
  return (
    <div className="relative">
      <Nav />
      {/* Hero Section */}
      <section className="about-hero bg-[#f5f5f0] pt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-[#59554d]">
          <h1 className="text-4xl font-extrabold">Commission an Art</h1>
          <p className="text-base lg:text-md font-normal mt-2 leading-relaxed">
            We offer a wide range of services to cater to your artistic needs.
          </p>
        </div>
      </section>

      {/* Service Card */}
      <ServComp />

      {/* Review Section */}
      <ReviewComp />

      {/* Commission Component */}
      <Commission />

      <Shop />

      <Footer />
    </div>
  );
}

export default ServicePage;
