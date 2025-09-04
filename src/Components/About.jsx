import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

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
      <section className="max-w-7xl mx-auto px-6 pt-16 space-y-6 text-[#59554d]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:border md:border-white/10 rounded-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Image */}
          <motion.div
            className="md:col-span-6 lg:col-span-4 flex justify-cente w-full"
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

            <p className="text-base lg:text-md font-normal mt-2 leading-relaxed">
              Artist Kelle (Isaac Ekele) is a Nigerian pencil and digital artist
              whose hyper-realistic portraits have captured the attention of
              clients around the world. <br /> Based in Abuja, Nigeria, Kelle
              has been refining his craft for more than 15 years, specializing
              in detailed graphite drawings and memorial artworks that preserve
              cherished memories in timeless form. <br /> His portfolio includes
              everything from intimate family portraits to large-scale collages
              and commemorative works, often blending emotional storytelling
              with technical mastery.
            </p>

            {/* Social Links */}
            <motion.div className="flex space-x-4 my-4" variants={fadeInUp}>
              <a
                href="https://www.facebook.com/share/1GqLJSYEur/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="h-5 w-5" style={{ color: "#1877F2" }} />
              </a>
              <a
                href="https://www.instagram.com/artist_kelle?igsh=MWwzNDhxd3VweWVicw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="h-5 w-5" style={{ color: "#E4405F" }} />
              </a>
              <a
                href="https://www.tiktok.com/@theartistkelle?_t=ZN-8zQgMfEQpK2&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok className="h-5 w-5" style={{ color: "#000000" }} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Second Section --- */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-[#59554d]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:border md:border-white/10 rounded-md md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Text Column */}
          <motion.div
            className="md:col-span-6 flex flex-col justify-center"
            variants={fadeInUp}
          >
            <h2 className="text-lg md:text-xl font-bold mb-4">What I Do</h2>
            <p className="text-base lg:text-md font-normal leading-relaxed">
              Kelle’s work is defined by his meticulous attention to detail,
              precision shading, and ability to capture likeness with depth and
              emotion. His pieces are often more than drawings, they are
              legacies. Many clients commission him for memorial portraits of
              lost loved ones, generational family pieces, or milestone
              celebrations. Whether through a single subject or multi-layered
              composition, Kelle’s portraits embody love, remembrance, and
              heritage.
              <br />
              <br />
              Though rooted in Nigeria, Kelle’s art has traveled far. His
              clientele spans across the United States, the UK, and beyond. He
              ships worldwide, with each piece carefully packaged to ensure safe
              delivery.
            </p>
          </motion.div>
          {/* Video Column */}
          <motion.div
            className="md:col-span-6 flex justify-center items-center"
            variants={fadeInUp}
          >
            <motion.video
              src="/IMG_3884.MOV"
              controls
              loop
              muted
              className="w-full h-auto rounded-md shadow-lg object-contain"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
