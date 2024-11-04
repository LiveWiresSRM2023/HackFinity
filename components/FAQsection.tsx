import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure of each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  // Define the FAQ data array
  const faqData: FAQItem[] = [
    {
      question: "What is the purpose of this website?",
      answer:
        "Our website provides solutions for online conference management, with features like registration, speaker management, and more.",
    },
    {
      question: "How do I register?",
      answer:
        "Click on 'Get Started' on the home page. A pop-up will guide you through registration or login.",
    },
    {
      question: "Can I use my email to log in?",
      answer:
        "Yes, you can use your email for login authentication to access the dashboard.",
    },
    {
      question: "What features are available for attendees?",
      answer:
        "Attendees can register, view sessions, receive reminders, and access virtual lounges.",
    },
  ];

  // expandedIndex can either be a number (for an open question) or null (no question is open)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle the FAQ item by its index
  const toggleFAQ = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="text-white p-8 rounded-lg w-full max-w-3xl mx-auto"
      style={{ backgroundColor: "#04071d", border: "1px solid #433a61" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-center mb-6"
      >
        Frequently Asked Questions
      </motion.h2>

      {faqData.map((item, index) => (
        <motion.div
          key={index}
          onClick={() => toggleFAQ(index)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer border border-gray-700 rounded-lg p-4 mb-4 transition-all duration-300"
        >
          <motion.h3 layout className="text-lg font-medium">
            {item.question}
          </motion.h3>

          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-400 mt-2 overflow-hidden"
              >
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQSection;
