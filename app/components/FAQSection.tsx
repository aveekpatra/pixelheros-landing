"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight">
          Common{" "}
          <span className="italic font-light text-orange-600">questions</span>{" "}
          from
          <br />
          small{" "}
          <span className="italic font-light text-blue-600">
            business owners
          </span>
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-black pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={24} className="text-black" />
                  ) : (
                    <Plus size={24} className="text-black" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
