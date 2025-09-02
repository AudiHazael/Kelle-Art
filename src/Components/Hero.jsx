import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1.0,
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  }),
};

function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-[#394033]"
      id="Hero"
    >
      <motion.div
        className="max-w-7xl flex h-fit justify-center items-center mx-auto px-4 md:px-0 md:py-0 space-y-6 text-[#e6d8c3]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeInUp}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 m-2 px-6 py-16 shadow-xl md:shadow-none border border-white/10 rounded-md md:p-8 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Left Side */}
          <motion.div
            className="md:col-span-6 flex flex-col justify-center"
            custom={1}
            variants={fadeInUp}
          >
            <motion.h1
              className="text-2xl md:text-4xl font-bold pb-4 leading-snug"
              custom={1.2}
              variants={fadeInUp}
            >
              Art By Kelle
            </motion.h1>

            <motion.p
              className="text-base md:text-md lg:text-lg pb-6"
              custom={1.4}
              variants={fadeInUp}
            >
              Explore a world of original paintings, digital art, and
              commissioned works crafted with passion and authenticity. Each
              piece is more than just art—it’s an experience, a journey, and a
              reflection of life’s vibrant moments.
            </motion.p>

            {/* CTA Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              custom={1.6}
              variants={fadeInUp}
            >
              <a
                className="inline-block px-6 md:px-8 py-3 font-semibold text-[#e6d8c3] transition bg-[#735c40] rounded-md hover:text-[#402421] hover:bg-[#e6d8c3]"
                href="#commission"
              >
                Commission Artwork
              </a>
              <a
                href="#portfolio"
                className="inline-block px-6 md:px-8 py-3 font-semibold text-[#e6d8c3] transition border-2 border-[#735c40] rounded-md hover:bg-[#e6d8c3] hover:text-[#402421] hover:border-none"
              >
                Explore Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="md:col-span-6 flex flex-col justify-center"
            custom={2}
            variants={fadeInUp}
          >
            <img
              src="https://via.placeholder.com/400x400"
              alt="hero image"
              className="hidden lg:block"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Image */}
      {/* <motion.div
        className="flex flex-col justify-center items-center py-6 md:py-0"
        custom={2.2}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <img
          src="https://via.placeholder.com/400x400"
          alt="hero image"
          className="block lg:hidden"
          loading="lazy"
        />
      </motion.div> */}
    </div>
  );
}

export default Hero;
