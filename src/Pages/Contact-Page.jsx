import React from "react";
import Nav from "../Components/Nav";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import FloatingWhatsapp from "../Components/FloatingWhatsApp";

function ContactPage() {
  return (
    <div>
      <Nav />
      <section className="contact-hero bg-[#f5f5f0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-[#59554d] ">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-base md:text-lg py-4">
            Have a question, commission request, or just want to say hello? I’d
            love to hear from you. <br className="hidden md:block" /> Fill out
            the form below or reach out through my social links, and I’ll get
            back to you as soon as possible.
          </p>
        </div>
      </section>
      <Form />
      <Footer />
      <FloatingWhatsapp
        phone="2348025325811"
        text="Hi! I'd love to order a pencil/charcoal portrait."
      />
    </div>
  );
}

export default ContactPage;
