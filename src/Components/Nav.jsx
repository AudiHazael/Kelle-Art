import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/10 bg-[#3940339f] backdrop-blur-md  shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center">
            <a href="/" className="flex items-baseline space-x-1">
              <img src="/Logo.png" alt="logo" className="h-10 object-contain" />
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
              <li>
                <Link
                  to="/home"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href="#Gallery"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  to="/Contact-Page"
                  className="hover:text-[#735c40] border-[#735c40]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <a href="https://forms.gle/y4PirGzyE33UEAVD6" target="_blank">
              <button className="inline-block px-8 py-3 font-semibold text-white transition bg-[#F97316] rounded-md hover:brightness-110 cursor-pointer">
                Apply Now
              </button>
            </a>
          </div> */}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-inherit shadow-xl rounded-md p-4">
            <ul className="flex flex-col space-y-4 text-[#e6d8c3]  font-medium">
              <li>
                <Link
                  to="#Hero"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href="#Gallery"
                  className="hover:text-[#735c40] border-[#e6d8c3]"
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#735c40] border-[#735c40]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
