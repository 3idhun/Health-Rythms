import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the HealthRhythms study?",
    answer:
      "The study is expected to last for a period of 12 weeks. This includes a one-week onboarding process, 10 weeks of active participation, and a one-week follow-up period.",
  },
  {
    question: "What can I expect from the study?",
    answer:
      "You will be asked to use the HealthRhythms app daily to track various mental and physical health metrics. This includes completing short surveys and interacting with app features. You will also have weekly check-ins with the study team.",
  },
  {
    question: "Why should I participate?",
    answer:
      "By participating, you contribute to a better understanding of how daily habits and rhythms impact mental health. Your data will help researchers develop more effective and personalized mental health support for the future. Additionally, you will gain insights into your own health and wellness.",
  },
  {
    question: "What do I need to participate in the study?",
    answer:
      "You must be at least 18 years old and have a compatible smartphone (iOS or Android) that you use daily. You will also need to have a stable internet connection for data synchronization.",
  },
  {
    question: "What can I expect when I participate?",
    answer:
      "Your participation will involve daily app use, which typically takes 5-10 minutes. You will receive notifications and reminders to complete tasks. The study team will be available to answer any questions and provide technical support throughout your participation.",
  },
  {
    question: "Are there risks involved in participating in this study?",
    answer:
      "There are no significant physical risks associated with this study. The main risks are related to data privacy, which we address with robust security measures, and the time commitment required. All participants have the right to withdraw from the study at any time without penalty.",
  },
  {
    question: "When will I see the results of my participation?",
    answer:
      "Individual data will be used to generate personalized feedback, which will be accessible to you within the app. Aggregate study results will be published in a peer-reviewed journal upon completion of the study, and participants will receive a summary of the findings.",
  },
  {
    question: "How secure is my data while participating in this study?",
    answer:
      "Your privacy is our top priority. All data is encrypted both in transit and at rest. Your personal identifying information is de-identified and stored separately from your research data. Access is strictly limited to authorized research staff.",
  },
  {
    question: "Is there any compensation for participating in the study?",
    answer:
      "Yes, you will be compensated for your time and effort. Participants who complete the full 12-week study will receive a monetary reward, typically as a gift card or direct payment. Details will be provided in the consent form before you enroll.",
  },
  {
    question: "What information will be tracked by the app?",
    answer:
      "The app will track your device's sensor data, such as screen time, app usage, sleep patterns (from motion), and location data (at a general level for activity tracking, not for exact location). It will also collect your self-reported survey responses.",
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
