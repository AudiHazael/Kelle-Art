import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import About from "../Components/About";

function AboutPage() {
  return (
    <div>
      <Nav />
      <section className="about-hero bg-[#f5f5f0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-[#59554d] ">
          <h1 className="text-4xl font-extrabold">About Us</h1>
          {/* <p className="text-base md:text-lg py-4">
            Welcome to our art studio! We specialize in creating stunning
            portraits and illustrations that capture the essence of our
            subjects. Our team of talented artists is dedicated to bringing your
            vision to life, whether it's a cherished family portrait or a unique
            piece of art for your home.
          </p> */}
        </div>
      </section>
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
