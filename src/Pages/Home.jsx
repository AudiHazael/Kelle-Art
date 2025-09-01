import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Shop from "../Components/Shop";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import FloatingWhatsapp from "../Components/FloatingWhatsApp";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Shop />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsapp
        phone="2348025325811"
        text="Hi! I'd love to order a pencil/charcoal portrait."
      />
    </div>
  );
}

export default Home;
