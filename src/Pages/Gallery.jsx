import React from "react";
import Nav from "../Components/Nav";
import Arts from "../Components/Art";
import Footer from "../Components/Footer";
import FloatingWhatsapp from "../Components/FloatingWhatsApp";

function Gallery() {
  return (
    <div>
      <Nav />
      <Arts />
      <Footer />
      <FloatingWhatsapp
        phone="234 811 2378877"
        text="Hi! I'd love to order a pencil/charcoal portrait."
      />
    </div>
  );
}

export default Gallery;
