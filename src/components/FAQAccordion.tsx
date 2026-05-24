"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my online giving secure?",
    answer: "Yes, absolutely. We use industry-standard 256-bit SSL encryption to protect your financial information. Your data is processed securely through compliant payment gateways and is never stored on our servers."
  },
  {
    question: "Can I set up recurring giving?",
    answer: "Yes! When you use our online portal, you have the option to set up automated weekly or monthly giving. This is a great way to prioritize your tithe and ensure you remain consistent even when you're traveling."
  },
  {
    question: "Can I designate my giving to a specific cause?",
    answer: "Yes. For Bank Transfers, please indicate the cause (e.g., 'Building Fund', 'Missions') in the reference section. For online giving, you can select specific funds from a dropdown menu before checking out."
  },
  {
    question: "How do I get my annual giving statement?",
    answer: "Annual giving statements for tax purposes are emailed out to all registered donors by January 31st of the following year. You can also request a copy anytime by emailing our finance office at finance@holytrinitynairobi.org."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className={`font-bold text-lg font-serif transition-colors ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                {faq.question}
              </span>
              <ChevronDown 
                className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
