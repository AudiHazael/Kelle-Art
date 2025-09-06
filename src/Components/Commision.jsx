import React from "react";
import CommItem from "./CommItem";

const faqs = [
  {
    question: "Prizes",
    answer:
      "Commissioned portraits are available from €900 and up. To maintain the quality and time each piece requires, inquiries below this amount cannot be considered.",
  },
  {
    question: "Sizes",
    answer:
      "Select the size that fits your space and vision: A3 (29.7 x 42 cm), A2 (42 x 59.4 cm), A1 (59.4 x 84.1 cm), A0 (84.1 x 118.9 cm). For custom size, note that in the form.",
  },
  {
    question: "Delivery",
    answer:
      "Your portrait ships securely with DHL Express worldwide:\n\n USA & Canada: 2–4 days\n       UK: 1–2 days\n       Europe: 1–3 days\n       Rest of world: 2–7 days\n       Tracked & insured\n      Signature required\n      Includes a Certificate of Authenticity & aftercare guide\n\n      Note: Artworks ship rolled in a tube to ensure they arrive in perfect condition.",
  },
  {
    question: "Payment",
    answer:
      "Once I confirm your order: \n A deposit is required to start your commission (50% of total amount)\n\n      Secure payment options: Card, Bank Transfer, iDEAL, Bancontact, Apple Pay.",
  },
  {
    question: "Framing",
    answer:
      "Framing isn’t included. Professional framing is always recommended to preserve your portrait for years to come.",
  },
  {
    question: "Creation Timeline",
    answer:
      "Creation time depends on the size and photo complexity—typically 15+ days. Large portraits take minimum 30+ days.",
  },
  {
    question: "Photo Requirements",
    answer:
      "A clear, high-quality photo is required to create your portrait.\n\n    Head & shoulder portraits\n\n    Pet portraits\n\n    Memorial and composite drawings\n\n    Want to combine photos or change the background? I’ll create a custom mock-up so you can visualise the final piece before we begin.",
  },
];

export default function Commission() {
  return (
    <div id="FAQ" className="bg-[#f5f5f0]">
      <section className="mx-auto px-4 pb-12 space-y-12 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  backdrop-blur-md  md:border md:border-white/10 rounded-md md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="md:col-span-6 space-y-4 md:p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold px-4 mb-8 text-[#59554d]">
              Commission Guide
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <CommItem key={index} {...faq} />
              ))}
            </div>
          </div>
          <div className="md:col-span-6 bg-white/10 rounded-md flex justify-center items-center">
            <ul className="list-disc list-inside p-6 space-y-3 text-[#59554d] text-base lg:text-md font-normal mt-2 leading-relaxed">
              <li>
                Created with the highest quality materials, designed to last a
                lifetime.
              </li>
              <li>
                Professional and personal experience with clear updates from
                start to finish.
              </li>
              <li>Certificate of Authenticity included.</li>
              <li>Worldwide shipping available.</li>
              <li>✓ 100% satisfaction guaranteed.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
