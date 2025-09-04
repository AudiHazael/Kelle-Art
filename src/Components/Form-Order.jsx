import React, { useState } from "react";

function OrderPopup({
  triggerText = "Order Now",
  title = "Commission an Artwork",
  description = "Fill out the form below to place your order or request a custom commission.",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setIsOpen(false); // close the form modal
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
        <div className="fixed inset-0 bg-black/75 backdrop-blur-[2px] flex items-center justify-center z-50">
          <div className="bg-[#f5f5f0] m-6 text-[#59554d] md:shadow-2xl w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
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
              onSubmit={handleSubmit}
              action="https://formsubmit.co/a28d1a59533dbecc818930a6bcab01b3"
              method="POST"
              className="space-y-4"
            >
              {/* Name */}
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

              {/* Email */}
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

              {/* Type of Artwork */}
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

              {/* Style of Artwork */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Style of Artwork
                </label>
                <select
                  name="artwork-style"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                  required
                >
                  <option value="">Select artwork style</option>
                  <option value="Black & White">Black & White</option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Colored Pastel">Colored Pastel</option>
                </select>
              </div>

              {/* Preferred Size */}
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

              {/* Reference Image */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Reference Image
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                />
              </div>

              {/* Deadline */}
              <label
                htmlFor="deadline"
                className="block text-sm font-medium mb-1"
              >
                Deadline
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-[#735c40] focus:outline-none"
                />
              </div>

              {/* Additional Details */}
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

              {/* Hidden Fields */}
              <input type="hidden" name="_blacklist" value="spam, ads" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_cc" value="hazaelau@gmail.com" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Hello 👋, thank you for your order! We’ve received it and will get back to you shortly."
              />

              {/* Error Message */}
              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 font-semibold rounded-md transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#735c40] text-white hover:bg-[#402421]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Thank You!</h3>
            <p className="text-sm text-gray-600">
              Your order has been submitted successfully.
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
    </div>
  );
}

export default OrderPopup;
