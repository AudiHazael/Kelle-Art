import React from "react";
import { motion } from "framer-motion"; // ✅ import motion
import Form from "./Form";

function Contact() {
  return (
    <section id="Contact" className="bg-[#f9fafb] py-16 text-[#59554d]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-[#59554d] text-sm md:text-md">
              Have questions, ideas, or just want to connect? Reach out to us
              using the details below or send us a message directly.
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <Form />
      </div>
    </section>
  );
}

export default Contact;
