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
      <section className="max-w-7xl mx-auto pt-16 space-y-6 text-[#59554d]">
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
            <p className="text-sm lg:text-md font-normal leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              facere ipsam tempora fugit, distinctio nostrum exercitationem
              obcaecati reprehenderit tempore sed doloribus ea blanditiis
              deleniti dolore? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Provident, dicta. Deleniti saepe eveniet quo
              natus? <br />
              <br />
              Qui non laboriosam debitis aut impedit animi assumenda in quidem
              maiores recusandae repellat rerum consectetur eligendi, commodi
              dolorum. Commodi quisquam modi quo dicta odio reprehenderit ex!
              Labore accusantium sequi molestias placeat omnis voluptates,
              recusandae minima dignissimos.
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
