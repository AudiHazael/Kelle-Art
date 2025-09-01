import React from "react";
import Nav from "../Components/Nav";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import FloatingWhatsapp from "../Components/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";

function ContactPage() {
  return (
    <div>
      <Nav />
      <section className="contact-hero bg-[#f5f5f0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-[#59554d] ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-[#59554d]">
              Have questions, ideas, or just want to connect? Reach out to us
              using the details below or send us a message directly.
            </p>
          </motion.div>
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
