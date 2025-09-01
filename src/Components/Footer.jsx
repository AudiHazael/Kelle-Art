import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-gray-950 text-[#e6d8c3] rounded p-10">
        <nav>
          <div className="text-2xl font-bold flex items-center">
            <a href="/" className="flex items-baseline space-x-1">
              <img src="/Logo.png" alt="logo" className="h-10 object-contain" />
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
          <div className="flex space-x-4 my-4">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="h-6 w-6" style={{ color: "#1877F2" }} />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="h-6 w-6" style={{ color: "#E4405F" }} />
            </a>

            {/* X */}
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <FaXTwitter className="h-6 w-6" style={{ color: "#e6d8c3" }} />
            </a>

            {/* LinkedIn (optional, since you imported it) */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="h-6 w-6" style={{ color: "#0A66C2" }} />
            </a>
          </div>
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
