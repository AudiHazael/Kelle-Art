import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CommItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer border border-gray-100 rounded-sm p-5 shadow-sm bg-[#f5f5f0] hover:shadow-lg transition duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[#59554d]">{question}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Animated Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        {Array.isArray(answer) ? (
          <ul className="list-disc list-outside space-y-1 marker:text-[#735c40] text-sm text-[#59554d] leading-relaxed">
            {answer.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm whitespace-pre-line text-left text-[#59554d] leading-relaxed">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}
