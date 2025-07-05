"use client";

import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <div className="bg-gray-50 rounded-3xl p-12 md:p-16 text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight max-w-3xl mx-auto">
            Ready to{" "}
            <span className="italic font-light text-green-600">grow</span> your
            business{" "}
            <span className="italic font-light text-blue-600">online?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help small and medium businesses establish a
            strong digital presence. Professional websites, effective SEO, and
            social media that brings results.
          </p>

          {/* Single CTA Button */}
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors mx-auto">
            Let&apos;s get started
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
