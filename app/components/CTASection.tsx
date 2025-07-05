"use client";

import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* CTA Card */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 md:p-20 text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight max-w-4xl mx-auto">
            Ready to dominate Prague's{" "}
            <span className="italic font-light">digital marketplace?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 50+ successful Prague businesses that trust us to grow their
            online presence.
            <br />
            Get your free consultation today and discover how we can 2x your
            revenue in 6 months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors text-lg">
              Get Free Consultation
              <ArrowUpRight size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:border-gray-400 transition-colors text-lg">
              Call +420 123 456 789
              <ArrowUpRight size={20} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4">
              ⚡ Quick setup in 2 weeks • 📍 Based in Prague • 🇨🇿 Czech &
              English support
            </p>
            <p className="text-gray-600 font-medium">
              "Average client sees +40% revenue increase within 6 months"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
