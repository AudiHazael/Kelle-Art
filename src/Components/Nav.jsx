import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="w-full sticky top-0 z-50 bg-[#394033] backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold flex md:justify-evenly items-center">
            <a href="/" className="flex items-center justify-between">
              <img
                src="/logo-one.png"
                alt="logo"
                className="h-10 object-contain"
              />
              <img
                src="/logo-four.png"
                alt="logo"
                className="h-10 object-contain"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-[#e6d8c3]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-[#e6d8c3] cursor-pointer" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-[#e6d8c3] cursor-pointer" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-[#e6d8c3] font-medium">
              {["Home", "About", "Services", "Shop", "Gallery", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : item === "Gallery"
                          ? "#Gallery"
                          : item === "Contact"
                          ? "/Contact-Page"
                          : `/${item.toLowerCase()}`
                      }
                      className="hover:text-[#735c40] border-[#e6d8c3]"
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75 }}
              className="md:hidden bg-inherit shadow-xl rounded-md p-4"
            >
              <ul className="flex flex-col space-y-4 text-[#e6d8c3] font-medium">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Shop",
                  "Gallery",
                  "Contact-Page",
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : item === "Gallery"
                          ? "#Gallery"
                          : item === "Contact"
                          ? "Contact-Page"
                          : `/${item.toLowerCase()}`
                      }
                      className="hover:text-[#735c40] border-[#e6d8c3]"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Nav;
