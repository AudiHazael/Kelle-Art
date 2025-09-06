import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CommItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer border border-gray-100 rounded-sm p-5 shadow-sm bg-[#f5f5f0]hover:shadow-lg transition duration-300"
    >
      <div className="flex items-center justify-between h-2">
        <h3 className=" font-medium text-[#59554d]">{question}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <p className="mt-3 text-sm text-left text-[#59554d] leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
