import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X (Twitter)

function About() {
  return (
    <div className="bg-[#f5f5f0]" id="About">
      <section
        className="max-w-7xl mx-auto px-8 py-16 space-y-6 text-[#59554d]"
        data-aos="fade-up"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:border md:border-white/10 rounded-md md:p-8"
          data-aos="zoom-in"
        >
          {/* Image Section */}
          <div
            className="md:col-span-6 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <img
              src="https://via.placeholder.com/400x400"
              alt="Isaac Ekele"
              className="rounded-md"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="md:col-span-6 md:p-4" data-aos="fade-left">
            <h3 className="text-md font-medium mb-2">Hello!</h3>
            <h2 className="text-xl font-bold">My Name Isaac Ekele</h2>

            <p className="text-md font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur quis vero iusto magnam aliquid illo! Id, perspiciatis
              alias vero corrupti molestias ullam quidem, sed eum numquam velit
              sit, voluptates tenetur.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 my-4" data-aos="fade-up">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="h-6 w-6" style={{ color: "#1877F2" }} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="h-6 w-6" style={{ color: "#E4405F" }} />
              </a>

              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaXTwitter className="h-6 w-6" style={{ color: "#000000" }} />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn
                  className="h-6 w-6"
                  style={{ color: "#0A66C2" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
