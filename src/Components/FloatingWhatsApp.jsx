import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp({
  phone = "2348025325811", // use digits only, include country code
  text = "Hello! I’d like to make an enquiry.",
}) {
  const number = String(phone).replace(/\D/g, "");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full shadow-lg
                 bg-[#25D366] p-2 hover:brightness-105 active:scale-95
                 transition-transform"
    >
      {/* WhatsApp SVG (no extra libs needed) */}
      <FaWhatsapp className="w-7 h-7 fill-white" />
    </a>
  );
}
