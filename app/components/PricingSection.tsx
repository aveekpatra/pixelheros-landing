"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function PricingSection() {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-12 sm:mb-16 leading-tight max-w-4xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Choose the{" "}
          <span className="italic font-light text-blue-600">plan</span> that
          <br />
          fits your{" "}
          <span className="italic font-light text-purple-600">business</span>
        </motion.h2>

        {/* Simple Toggle */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-gray-100 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsSubscription(true)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm transition-all ${
                isSubscription
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsSubscription(false)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm transition-all ${
                !isSubscription
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              One-time
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-yellow-100 rounded-3xl p-6 sm:p-8 relative">
            {/* Plan Badge */}
            <div className="inline-block bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Starter
            </div>

            {/* Description */}
            <p className="text-black text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Perfect for small businesses getting started online. Essential
              services to establish your digital presence.
            </p>

            {/* Pricing */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                  ${isSubscription ? "1200" : "8000"}
                </span>
                <span className="text-gray-600 text-sm sm:text-base">
                  {isSubscription ? "/month" : "one-time"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mb-6 sm:mb-8 w-full text-sm sm:text-base">
              Let&apos;s Collaborate
              <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Features */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-black font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Features
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription
                    ? "Design Updates Every 2 Days"
                    : "Complete Brand Setup"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription
                    ? "Mid-level Designer"
                    : "Professional Website"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  SEO optimization
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription ? "Monthly analytics" : "Analytics setup"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription
                    ? "2x Calls Per Month"
                    : "Strategy consultation"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  License free assets
                </span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 rounded-3xl p-6 sm:p-8 relative text-white">
            {/* Plan Badge */}
            <div className="inline-block bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Pro
            </div>

            {/* Description */}
            <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              For growing businesses that need comprehensive digital marketing
              and ongoing support.
            </p>

            {/* Pricing */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  ${isSubscription ? "2400" : "15000"}
                </span>
                <span className="text-blue-200 text-sm sm:text-base">
                  {isSubscription ? "/month" : "one-time"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mb-6 sm:mb-8 w-full text-sm sm:text-base">
              Let&apos;s Collaborate
              <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Features */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Features
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Design Updates Daily"
                    : "Premium Brand Package"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Senior-level Designer"
                    : "Custom Development"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription ? "AI Advisory Framework" : "Advanced UI/UX"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Full-service Creative Team"
                    : "Marketing Strategy"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription ? "4x Calls Per Month" : "Priority Support"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  License free assets
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Footer */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
            All plans include strategic consultation and discovery phase.
          </p>
        </div>
      </div>
    </section>
  );
}
