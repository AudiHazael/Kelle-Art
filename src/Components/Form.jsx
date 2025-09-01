import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Form() {
  return (
    <section id="Contact" className="bg-[#f9fafb] py-16 text-[#59554d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column - Cards */}
          <div className="space-y-4">
            {/* Card 1 - Email */}
            <div className="flex items-start gap-4 bg-white shadow-md rounded-md p-6 hover:shadow-lg transition">
              <EnvelopeIcon className="w-8 h-8 text-[#735c40] shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-600">i4dtng@gmail.com</p>
              </div>
            </div>

            {/* Card 2 - Phone */}
            <div className="flex items-start gap-4 bg-white shadow-md rounded-md p-6 hover:shadow-lg transition">
              <PhoneIcon className="w-8 h-8 text-[#735c40] shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-600">+234 802 532 5811</p>
              </div>
            </div>

            {/* Card 3 - Address with Map */}
            <div className="bg-white shadow-md rounded-md hover:shadow-lg transition overflow-hidden">
              <div className="p-6 flex items-start gap-4">
                <MapPinIcon className="w-8 h-8 text-[#735c40] shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-gray-600">
                    Suite 12, Nepa Plaza PW Kubwa, Abuja,{" "}
                    <br className="hidden md:block" /> Nigeria, 9000110
                  </p>
                </div>
              </div>
              {/* Google Map Embed */}
              <div className="w-full h-48">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.0798798719393!2d7.331945074999736!3d9.147258387126666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd97df5a166cf%3A0x3b60b1f8dd0ab36a!2sNepa%20Plaza!5e0!3m2!1sen!2sng!4v1756591652837!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white shadow-md rounded-md p-4 md:p-8">
            <form
              action="https://formsubmit.co/YOUR_EMAIL_HERE"
              method="POST"
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="commission">Commission an Artwork</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write your message here..."
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                ></textarea>
              </div>

              {/* Hidden Fields */}
              <input type="hidden" name="_blacklist" value="spam, ads" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Hello, Thank you for reaching out to i4DT! 🎉 We’ve received your message and will get back to you as soon as possible."
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-block px-6 md:px-8 py-3 font-semibold text-white transition bg-[#735c40] rounded-md hover:text-[#402421] hover:bg-[#e6d8c3]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
