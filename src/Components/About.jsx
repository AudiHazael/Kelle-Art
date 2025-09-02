import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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
    <div className="bg-[#f5f5f0] space-y-12" id="About">
      {/* --- First Section --- */}
      <section className="max-w-7xl mx-auto px-8 pt-16 space-y-6 text-[#59554d]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:border md:border-white/10 rounded-md md:p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Image */}
          <motion.div
            className="md:col-span-6 lg:col-span-4 flex justify-center"
            variants={fadeInUp}
          >
            <motion.img
              src="/IMG_1818.png"
              alt="Isaac Ekele"
              className="rounded-md md:h-98 md:w-98"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="md:col-span-6 lg:col-span-8 lg:p-4"
            variants={fadeInUp}
          >
            <h2 className="text-lg md:text-xl font-bold">I am Isaac Ekele</h2>

            <p className="text-sm lg:text-md font-normal mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quis vero iusto magnam aliquid illo! Id, perspiciatis
              alias vero corrupti molestias ullam quidem, sed eum numquam velit
              sit, voluptates tenetur. <br />
              <br />
              Qui non laboriosam debitis aut impedit animi assumenda in quidem
              maiores recusandae repellat rerum consectetur eligendi, commodi
              dolorum. Commodi quisquam modi quo dicta odio reprehenderit ex!
              Labore accusantium sequi molestias placeat omnis voluptates,
              recusandae minima dignissimos necessitatibus, repudiandae fugiat
              porro natus quaerat!
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

      {/* --- Second Section --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 text-[#59554d] justify-center items-center">
        <motion.div
          className="md:border md:border-white/10 rounded-md md:p-8 sm:space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Floated video first so text wraps correctly */}
          <motion.video
            src="/IMG_3884.MOV"
            controls
            loop
            muted
            className="md:float-left mr-6 w-full sm:mb-4 md:mb-0 rounded-md shadow-lg md:w-80 lg:w-96 h-auto object-contain"
            loading="lazy"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />

          <motion.h2
            className="text-lg md:text-xl font-bold sm:mt-8 md:mt-0 "
            variants={fadeInUp}
          >
            What I Do
          </motion.h2>

          <motion.p
            className="text-sm lg:text-md font-normal leading-relaxed"
            variants={fadeInUp}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            facere ipsam tempora fugit, distinctio nostrum exercitationem
            obcaecati reprehenderit tempore sed doloribus ea blanditiis deleniti
            dolore? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Provident, dicta. Deleniti saepe eveniet quo natus? <br />
            <br />
            Qui non laboriosam debitis aut impedit animi assumenda in quidem
            maiores recusandae repellat rerum consectetur eligendi, commodi
            dolorum. Commodi quisquam modi quo dicta odio reprehenderit ex!
            Labore accusantium sequi molestias placeat omnis voluptates,
            recusandae minima dignissimos.
          </motion.p>

          {/* Clear float for following content */}
          <div className="clear-both"></div>
        </motion.div>
      </section>
    </div>
  );
}
