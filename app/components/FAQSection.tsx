"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly will my business appear on Google?",
      answer:
        "Most of our clients see their business ranking on Google's first page within 2-3 months for local searches. We start with Google My Business optimization and local SEO, which typically shows results within 4-6 weeks. Your website will be live within 2 weeks of starting the project.",
    },
    {
      question:
        "Do you work with restaurants, salons, and hotels specifically?",
      answer:
        "Yes! We specialize in local Prague businesses including restaurants, cafés, beauty salons, hotels, and other service-based businesses. We understand the unique challenges of attracting local customers and have proven strategies for each industry type.",
    },
    {
      question:
        "What's the difference between monthly subscription and one-time payment?",
      answer:
        "Monthly subscription includes ongoing support, regular updates, fresh content, and continuous optimization. One-time payment covers the initial setup and 6-12 months of basic support. Most successful businesses choose monthly for consistent growth and staying ahead of competitors.",
    },
    {
      question: "Can you help with social media for my business?",
      answer:
        "Absolutely! Our Premium plan includes complete social media management for Instagram, Facebook, and Google reviews. We create engaging content, manage your posts, respond to customers, and help build your online reputation to attract more local customers.",
    },
    {
      question: "How do you measure success for local businesses?",
      answer:
        "We track key metrics that matter to your business: Google ranking positions, website visitors from Prague, phone calls and inquiries, online bookings/orders, and overall revenue increase. You'll receive monthly reports showing your progress and ROI.",
    },
    {
      question: "Do you provide services in Czech language?",
      answer:
        "Yes! Our team is fluent in both Czech and English. We create content in Czech for your local audience and can communicate with you in your preferred language. We understand the Prague market and local customer behavior.",
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
          Common questions from
          <br />
          Prague <span className="italic font-light">business owners</span>
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
