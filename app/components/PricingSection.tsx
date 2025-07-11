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
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
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
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
              {isSubscription
                ? "Essential digital presence with professional website, SEO optimization, and business tools."
                : "Complete business launch package with website, SEO, booking system, and Google optimization."}
            </p>

            {/* Pricing */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                  ${isSubscription ? "120" : "800"}
                </span>
                <span className="text-gray-600 text-sm sm:text-base">
                  {isSubscription ? "/month" : "one-time"}
                </span>
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                {isSubscription
                  ? "2,999 CZK/month • Cancel anytime"
                  : "20,000 CZK • One-time payment"}
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
                What&apos;s Included
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription
                    ? "Professional website design & development"
                    : "Complete website build & launch"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription
                    ? "SEO optimization & monthly updates"
                    : "Complete SEO setup & optimization"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  Online reservation/booking system
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  Google Analytics & performance tracking
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  Google Maps & local business optimization
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-600 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-black text-xs sm:text-sm">
                  {isSubscription
                    ? "Monthly performance reports & support"
                    : "Training & handover documentation"}
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
            <p className="text-blue-200 text-xs sm:text-sm mb-4 sm:mb-6">
              {isSubscription
                ? "Complete digital marketing solution with social media management, advanced analytics, and priority support."
                : "Full-service digital transformation with website, social media setup, and comprehensive marketing strategy."}
            </p>

            {/* Pricing */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  ${isSubscription ? "250" : "1600"}
                </span>
                <span className="text-blue-200 text-sm sm:text-base">
                  {isSubscription ? "/month" : "one-time"}
                </span>
              </div>
              <div className="text-blue-200 text-xs sm:text-sm">
                {isSubscription
                  ? "6,199 CZK/month • Cancel anytime"
                  : "39,900 CZK • One-time payment"}
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
                Everything in Starter, plus:
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Instagram content creation & management"
                    : "Complete Instagram setup & content strategy"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "TikTok reels & short-form video content"
                    : "TikTok account setup & viral content strategy"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  Facebook & LinkedIn business optimization
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Weekly social media analytics & insights"
                    : "Social media advertising setup & training"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Priority support & bi-weekly strategy calls"
                    : "Advanced e-commerce integration"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check
                  size={14}
                  className="text-green-400 sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span className="text-white text-xs sm:text-sm">
                  {isSubscription
                    ? "Custom graphics & brand assets creation"
                    : "Complete brand identity package"}
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
