import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export default function About() {
  return (
    <div className="bg-[#f5f5f0]" id="About">
      <section className="max-w-7xl mx-auto px-8 py-16 space-y-6 text-[#59554d]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:border md:border-white/10 rounded-md md:p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Image Section */}
          <motion.div
            className="md:col-span-6 flex flex-col justify-center"
            variants={fadeInUp}
          >
            <motion.img
              src="https://via.placeholder.com/400x400"
              alt="Isaac Ekele"
              className="rounded-md"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div className="md:col-span-6 md:p-4" variants={fadeInUp}>
            <h3 className="text-md font-medium mb-2">Hello!</h3>
            <h2 className="text-md md:text-xl font-bold">
              My name is Isaac Ekele
            </h2>

            <p className="text-sm md:text-md font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quis vero iusto magnam aliquid illo! Id, perspiciatis
              alias vero corrupti molestias ullam quidem, sed eum numquam velit
              sit, voluptates tenetur.
            </p>

            {/* Social Links */}
            <motion.div className="flex space-x-4 my-4" variants={fadeInUp}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="h-5 w-5" style={{ color: "#1877F2" }} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="h-5 w-5" style={{ color: "#E4405F" }} />
              </a>

              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaXTwitter className="h-5 w-5" style={{ color: "#000000" }} />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn
                  className="h-5 w-5"
                  style={{ color: "#0A66C2" }}
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
