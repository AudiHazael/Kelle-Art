import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

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

function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-gray-950 text-[#e6d8c3] rounded pb-4 pt-10">
        <nav>
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-1 m-o p-0">
              <img
                src="/logo-three.png"
                alt="logo"
                className="h-24 object-contain"
              />
            </a>
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Shop</a>
        </nav>
        <nav>
          {/* Social Links - Dark Background Style */}
          <motion.div className="flex space-x-4" variants={fadeInUp}>
            <a
              href="https://www.facebook.com/share/1GqLJSYEur/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2]/20 transition-all duration-300"
            >
              <FaFacebookF className="h-5 w-5 text-[#1877F2] hover:scale-110 transition-transform duration-300" />
            </a>

            <a
              href="https://www.instagram.com/artist_kelle?igsh=MWwzNDhxd3VweWVicw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#E4405F]/20 transition-all duration-300"
            >
              <FaInstagram className="h-5 w-5 text-[#E4405F] hover:scale-110 transition-transform duration-300" />
            </a>

            <a
              href="https://www.tiktok.com/@theartistkelle?_t=ZN-8zQgMfEQpK2&_r=1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <FaTiktok className="h-5 w-5 text-white hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by Art
            by Kelle
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
