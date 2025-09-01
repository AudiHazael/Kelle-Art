import React from "react";
import Nav from "../Components/Nav";
import Shop from "../Components/Shop";
import Footer from "../Components/Footer";

function ShopPage() {
  return (
    <div>
      <Nav />
      {/* <section className="about-hero bg-[#f5f5f0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-[#59554d] ">
          <h1 className="text-4xl font-extrabold">Shop</h1>
          <p className="text-base md:text-lg py-4">
            Explore our collection of unique artworks and find the perfect piece
            for your space.
          </p>
        </div>
      </section> */}
      <Shop />
      <Footer />
    </div>
  );
}

export default ShopPage;
