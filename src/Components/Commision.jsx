import React from "react";
import CommItem from "./CommItem";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import OrderPopup from "../Components/Form-Order";
const faqs = [
  {
    question: "Prizes",
    answer:
      "Commissioned portraits are available from $300 and up. To maintain the quality and time each piece requires, inquiries below this amount cannot be considered.",
  },
  {
    question: "Sizes",
    answer: [
      "A3 (29.7 x 42 cm)",
      "A2 (42 x 59.4 cm)",
      "A1 (59.4 x 84.1 cm)",
      "A0 (84.1 x 118.9 cm)",
      "For custom size, note that in the form.",
    ],
  },
  {
    question: "Delivery",
    answer: [
      "Your portrait ships securely with DHL Express worldwide within 5–7 working days",
      "Tracked & insured",
      "Signature required",
      "Includes a Certificate of Authenticity & aftercare guide",
      "Note: Artworks ship rolled in a tube to ensure they arrive in perfect condition.",
    ],
  },
  {
    question: "Payment",
    answer: [
      "Once I confirm your order: a deposit is required to start your commission (50% of total amount).",
      "Secure payment options: Worldremit, Western Union, MoneyGram, Card Payment, Bank Transfer.",
    ],
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
    answer: [
      "A clear, high-quality photo is required to create your portrait.",
      "Head & shoulder portraits",
      "Pet portraits",
      "Memorial and composite drawings",
      "Want to combine photos or change the background? I’ll create a custom mock-up so you can visualise the final piece before we begin.",
    ],
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
          <div className="md:col-span-6 px-4 bg-white/10 rounded-md flex flex-col justify-center items-start">
            <ul className="list-disc list-outside p-6 space-y-3 text-[#59554d] text-base lg:text-md font-normal mt-2 leading-relaxed">
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
            <div className="inline-block px-6 sm:px-8   text-[#e6d8c3] bg-[#735c40] rounded-md hover:text-[#402421] hover:bg-[#e6d8c3] transition mt-6 items-center gap-2 text-sm  font-medium">
              <OrderPopup
                triggerText={
                  <span className="flex items-center space-x-2 cursor-pointer transition-all text-lg hover:text-[#735c40]">
                    <span>Place an Order</span>
                    <ArrowLongRightIcon className="h-5 w-5" />
                  </span>
                }
                title="Commission Request"
                description="Fill out the form below to commission your custom artwork."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
