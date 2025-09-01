import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section id="Contact" className="bg-[#f9fafb] py-16 text-[#59554d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[#59554d]">
            Have questions, ideas, or just want to connect? Reach out to us
            using the details below or send us a message directly.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
