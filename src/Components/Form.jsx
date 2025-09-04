import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  }),
};

function Form() {
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setShowPopup(true);
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="bg-[#f9fafb] py-2 text-[#59554d]">
      <div className="container mx-auto lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center-safe">
          {/* Left Column - Cards */}
          <div className="space-y-4">
            {/* Email */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="flex items-start gap-4 bg-white shadow-md rounded-md p-6 hover:shadow-lg transition"
            >
              <EnvelopeIcon className="md:w-8 h-6 md:h-8 w-6 text-[#735c40] shrink-0" />
              <div>
                <h3 className="font-semibold text-md md:text-lg">Email Us</h3>
                <p className="text-gray-600">youremail@gmail.com</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="flex items-start gap-4 bg-white shadow-md rounded-md p-6 hover:shadow-lg transition"
            >
              <PhoneIcon className="md:w-8 h-6 md:h-8 w-6 text-[#735c40] shrink-0" />
              <div>
                <h3 className="font-semibold text-md md:text-lg">Call Us</h3>
                <p className="text-sm md:text-md text-gray-600">
                  +234 811 237 8877
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={cardVariants}
              className="bg-white shadow-md rounded-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-4 flex items-start gap-4">
                <MapPinIcon className="md:w-8 h-6 md:h-8 w-6 text-[#735c40] shrink-0" />
                <div>
                  <h3 className="font-semibold text-md md:text-lg">Visit Us</h3>
                  <p className="text-sm md:text-md text-gray-600">
                    Suite 12, Nepa Plaza PW Kubwa, Abuja,
                    <br className="hidden md:block" /> Nigeria, 9000110
                  </p>
                </div>
              </div>
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
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 12,
              delay: 0.5,
            }}
            className="bg-white shadow-md rounded-md px-3 py-8 md:p-8"
          >
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/a28d1a59533dbecc818930a6bcab01b3"
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
                  <option value="partnership">Learn Art</option>
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

              {/* Hidden Fields for FormSubmit */}
              <input type="hidden" name="_blacklist" value="spam, ads" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_cc" value="hazaelau@gmail.com" />
              <input type="hidden" name="_bcc" value="hazaelau@gmail.com" />
              <input type="hidden" name="_replyto" value="%email%" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Hello 👋, thank you for contacting us! We’ve received your message and will reply shortly."
              />

              {/* Error message */}
              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className={`inline-block px-6 md:px-8 py-3 font-semibold text-white rounded-md transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#735c40] hover:text-[#402421] hover:bg-[#e6d8c3]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Success Popup */}
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-11/12 max-w-md mx-auto text-center">
                  <h3 className="text-lg font-semibold mb-4">Thank You!</h3>
                  <p className="text-sm text-gray-600">
                    Your message has been sent successfully.
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-4 inline-block px-4 py-2 bg-[#735c40] text-white rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Form;
