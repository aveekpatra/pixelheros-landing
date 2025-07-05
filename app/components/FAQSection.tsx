"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly will my business appear on Google?",
      answer:
        "Most of our clients see improved Google rankings within 2-3 months for local searches. We start with Google My Business optimization and local SEO, which typically shows results within 4-6 weeks. Your website will be live within 2 weeks of starting the project.",
    },
    {
      question: "Do you work with restaurants, salons, and small businesses?",
      answer:
        "Yes! We work with various small and medium businesses including restaurants, cafés, beauty salons, fitness studios, and other service-based businesses. We understand the unique challenges of attracting local customers and have proven strategies for different industry types.",
    },
    {
      question:
        "What's the difference between monthly subscription and one-time payment?",
      answer:
        "Monthly subscription includes ongoing support, regular updates, fresh content, and continuous optimization. One-time payment covers the initial setup and 3-6 months of basic support. Most successful businesses choose monthly for consistent growth and staying competitive.",
    },
    {
      question: "Can you help with social media for my business?",
      answer:
        "Absolutely! Our Pro plan includes social media management for Instagram, Facebook, and Google reviews. We create engaging content, manage your posts, respond to customers, and help build your online reputation to attract more local customers.",
    },
    {
      question: "How do you measure success for small businesses?",
      answer:
        "We track key metrics that matter to your business: Google ranking positions, website visitors, phone calls and inquiries, online bookings/orders, and overall revenue increase. You'll receive monthly reports showing your progress and return on investment.",
    },
    {
      question: "Are you a new agency? Can I trust you with my business?",
      answer:
        "Yes, we're a new agency, but we're built on proven strategies and best practices. We focus on transparency, clear communication, and delivering measurable results. We offer competitive pricing and work closely with each client to ensure their success.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-12 sm:mb-16 leading-tight px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          Common{" "}
          <span className="italic font-light text-orange-600">questions</span>{" "}
          from
          <br />
          small{" "}
          <span className="italic font-light text-blue-600">
            business owners
          </span>
        </motion.h2>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 + index * 0.03 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-black pr-3 sm:pr-4 leading-snug">
                  {faq.question}
                </span>
                <motion.div
                  className="flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <Minus size={20} className="text-black sm:w-6 sm:h-6" />
                  ) : (
                    <Plus size={20} className="text-black sm:w-6 sm:h-6" />
                  )}
                </motion.div>
              </button>

              {/* Accordion Content with AnimatePresence */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-1 sm:pt-2">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
