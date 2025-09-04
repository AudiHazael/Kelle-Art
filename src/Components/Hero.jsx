import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.9,
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  }),
};

function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-fit py-24 flex items-center justify-center bg-[url('/lovely-art-studio-compositio.jpg')] bg-cover bg-center px-4 text-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full mx-auto py-12 flex flex-col items-center text-[#e6d8c3] space-y-6 border border-white/10 p-6 rounded-md bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          custom={1}
          variants={fadeInUp}
        >
          Art By Kelle
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          custom={1.2}
          variants={fadeInUp}
        >
          Explore a world of original paintings, digital art, and commissioned
          works crafted with passion and authenticity. Each piece is more than
          just art—it’s an experience, a journey, and a reflection of life’s
          vibrant moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-4"
          custom={1.4}
          variants={fadeInUp}
        >
          <a
            href="#commission"
            className="inline-block px-6 sm:px-8 py-3 font-semibold text-[#e6d8c3] bg-[#735c40] rounded-md hover:text-[#402421] hover:bg-[#e6d8c3] transition"
          >
            Commission Artwork
          </a>
          <a
            href="#portfolio"
            className="inline-block px-6 sm:px-8 py-3 font-semibold text-[#e6d8c3] border-2 border-[#735c40] rounded-md hover:bg-[#e6d8c3] hover:text-[#402421] transition"
          >
            Explore Portfolio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
