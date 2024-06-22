import { useState } from "react";
import { cn } from "../utils";
import { type FAQ as FAQType } from "../types";

interface FAQProps {
  faq: FAQType[];
}

const FAQ = ({ faq }: FAQProps) => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  { "w-6 h-6 transition-transform transform duration-300 shrink-0 ease-in-out": true },
                  { "-rotate-180": active === index }
                )}
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={cn(
                { "transition-all duration-300 ease-in-out": true },
                { "max-h-0 overflow-hidden text-gray-500": true },
                { "max-h-96 overflow-auto": active === index }
              )}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
