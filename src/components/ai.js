import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What industries can benefit from your AI solutions?",
      answer: "Our AI solutions are applicable across various industries, including healthcare, finance, retail, and manufacturing."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information."
    },
    {
      question: "Can your AI solutions be customized to fit specific business needs?",
      answer: "Automate repetitive tasks and free up valuable time for strategic initiatives."
    },
    {
      question: "Do you provide ongoing support and maintenance for your AI solutions?",
      answer: "Absolutely, we offer comprehensive support and maintenance services to ensure the smooth operation of our AI solutions."
    },
    {
      question: "How can I get started with your AI solutions?",
      answer: "Simply reach out to our team to schedule a consultation and explore how our AI solutions can benefit your business."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently asked questions
        </h2>
        <p className="text-lg text-gray-600">
          Advice and answers from our team.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`px-6 overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;