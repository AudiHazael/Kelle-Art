import React, { useState } from "react";

function OrderPopup({
  triggerText = "Order Now",
  title = "Commission an Artwork",
  description = "Fill out the form below to place your order or request a custom commission.",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="py-3 font-semibold rounded-lg transition"
      >
        {triggerText}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#f5f5f0] m-6 text-[#59554d] md:shadow-2xl w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-[#b18e63] hover:text-gray-800"
            >
              ✖
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-[#59554d] mb-2">{title}</h2>
            <p className="text-[#59554d] mb-6">{description}</p>

            {/* Form */}
            <form
              action="https://formsubmit.co/"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Type of Artwork
                </label>
                <select
                  name="artwork-type"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                  required
                >
                  <option value="">Select artwork type</option>
                  <option value="pencil">Pencil Portrait</option>
                  <option value="charcoal">Charcoal Drawing</option>
                  <option value="custom">Custom Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Size
                </label>
                <input
                  type="text"
                  name="size"
                  placeholder="e.g., A3, A4, 16x20 inches"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Reference Image (For custom art and commisions)
                </label>
                <input
                  type="file"
                  name="reference-image"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Additional Details
                </label>
                <textarea
                  rows="3"
                  name="details"
                  placeholder="Any specific instructions..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#735c40] text-white font-semibold rounded-md hover:bg-[#402421] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPopup;
