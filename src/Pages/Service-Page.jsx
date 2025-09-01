import React from "react";
import Nav from "../Components/Nav";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

function ServicePage() {
  return (
    <div>
      <Nav />
      <section className="about-hero bg-[#f5f5f0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-[#59554d] ">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
          <p className="text-base md:text-lg py-4">
            We offer a wide range of services to cater to your artistic needs.
          </p>
        </div>
      </section>
      <Services />
      <Footer />
    </div>
  );
}

export default ServicePage;
