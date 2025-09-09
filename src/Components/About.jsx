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
    <div className="bg-[#f5f5f0] space-y-12">
      {/* --- First Section --- */}
      <section className="px-6 md:px-12 lg:px-20 py-16 text-[#59554d]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:border md:border-white/10 rounded-md"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Image */}
            <motion.div
              className="md:col-span-6 lg:col-span-4 flex justify-center w-full"
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
                Known professionally as{" "}
                <span className="font-semibold">Artist Kelle</span>, I am a
                Nigerian pencil and digital artist whose hyper-realistic
                portraits have reached clients worldwide. <br /> Based in Abuja,
                Nigeria, I have been refining my craft for over 15 years,
                specializing in detailed graphite drawings and memorial artworks
                that preserve cherished memories in timeless form. <br />
                My portfolio ranges from intimate family portraits to
                large-scale collages and commemorative pieces—each one blending
                emotional storytelling with technical mastery.
              </p>

              {/* Social Links */}
              <motion.div className="flex space-x-4 my-4" variants={fadeInUp}>
                <a
                  href="https://www.facebook.com/share/1GqLJSYEur/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] transition-all duration-300 group"
                >
                  <FaFacebookF className="h-5 w-5 text-[#1877F2] group-hover:text-white transition-all duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/artist_kelle?igsh=MWwzNDhxd3VweWVicw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F] transition-all duration-300 group"
                >
                  <FaInstagram className="h-5 w-5 text-[#E4405F] group-hover:text-white transition-all duration-300" />
                </a>

                <a
                  href="https://www.tiktok.com/@theartistkelle?_t=ZN-8zQgMfEQpK2&_r=1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black transition-all duration-300 group"
                >
                  <FaTiktok className="h-5 w-5 text-black group-hover:text-white transition-all duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Second Section --- */}
      <section className="px-6 md:px-12 lg:px-20 pb-16 text-[#59554d]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:border md:border-white/10 rounded-md md:p-8"
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
                My work is defined by meticulous attention to detail, precision
                shading, and the ability to capture likeness with depth and
                emotion. Each portrait is more than a drawing—it is a legacy.
                Clients often commission me for memorial portraits of loved
                ones, generational family pieces, or milestone celebrations.
                Whether through a single subject or a multi-layered composition,
                my art embodies love, remembrance, and heritage.
                <br />
                <br />
                Though rooted in Nigeria, my work has reached clients across the
                United States, the UK, and beyond. I ship worldwide, with every
                piece carefully packaged to ensure it arrives safely and ready
                to be cherished for years to come.
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
        </div>
      </section>
    </div>
  );
}
