import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the HealthRhythms study?",
    answer: "The study duration details would be provided here.",
  },
  {
    question: "What can I expect from the study?",
    answer: "Study expectations and procedures would be outlined here.",
  },
  {
    question: "Why should I participate?",
    answer: "Benefits and reasons for participation would be explained here.",
  },
  {
    question: "What do I need to participate in the study?",
    answer: "Required items and qualifications would be listed here.",
  },
  {
    question: "What can I expect when I participate?",
    answer: "Detailed participation process would be described here.",
  },
  {
    question: "Are there risks involved in participating in this study?",
    answer: "Risk assessment and safety information would be provided here.",
  },
  {
    question: "When will I see the results of my participation?",
    answer: "Timeline for results and feedback would be explained here.",
  },
  {
    question: "How secure is my data while participating in this study?",
    answer: "Data security and privacy measures would be detailed here.",
  },
  {
    question: "Is there any compensation for participating in the study?",
    answer: "Compensation details and structure would be outlined here.",
  },
  {
    question: "What information will be tracked by the app?",
    answer: "Data collection and tracking information would be provided here.",
  },
];

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-red-900 mb-12">
          FAQs
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <span className="font-semibold text-red-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-red-500 transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="p-6 bg-white border border-gray-200 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
