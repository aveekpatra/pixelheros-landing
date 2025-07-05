"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight max-w-4xl mx-auto">
          Choose the{" "}
          <span className="italic font-light text-blue-600">plan</span> that
          <br />
          fits your{" "}
          <span className="italic font-light text-purple-600">business</span>
        </h2>

        {/* Simple Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsSubscription(true)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                isSubscription
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsSubscription(false)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-yellow-100 rounded-3xl p-8 relative">
            {/* Plan Badge */}
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Starter
            </div>

            {/* Description */}
            <p className="text-black text-base mb-8 leading-relaxed">
              Perfect for small businesses getting started online. Essential
              services to establish your digital presence.
            </p>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-black">
                  ${isSubscription ? "1200" : "8000"}
                </span>
                <span className="text-gray-600">
                  {isSubscription ? "/month" : "one-time"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors mb-8 w-full justify-center">
              Let&apos;s Collaborate
              <ArrowUpRight size={20} />
            </button>

            {/* Features */}
            <div className="space-y-3">
              <div className="text-black font-medium mb-4">Features</div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-600" />
                <span className="text-black text-sm">
                  {isSubscription
                    ? "Design Updates Every 2 Days"
                    : "Complete Brand Setup"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-600" />
                <span className="text-black text-sm">
                  {isSubscription
                    ? "Mid-level Designer"
                    : "Professional Website"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-600" />
                <span className="text-black text-sm">SEO optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-600" />
                <span className="text-black text-sm">
                  {isSubscription ? "Monthly analytics" : "Analytics setup"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-600" />
                <span className="text-black text-sm">
                  {isSubscription
                    ? "2x Calls Per Month"
                    : "Strategy consultation"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-600" />
                <span className="text-black text-sm">License free assets</span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 rounded-3xl p-8 relative text-white">
            {/* Plan Badge */}
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Pro
            </div>

            {/* Description */}
            <p className="text-white text-base mb-8 leading-relaxed">
              For growing businesses that need comprehensive digital marketing
              and ongoing support.
            </p>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">
                  ${isSubscription ? "2400" : "15000"}
                </span>
                <span className="text-blue-200">
                  {isSubscription ? "/month" : "one-time"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors mb-8 w-full justify-center">
              Let&apos;s Collaborate
              <ArrowUpRight size={20} />
            </button>

            {/* Features */}
            <div className="space-y-3">
              <div className="text-white font-medium mb-4">Features</div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-400" />
                <span className="text-white text-sm">
                  {isSubscription
                    ? "Design Updates Daily"
                    : "Premium Brand Package"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-400" />
                <span className="text-white text-sm">
                  {isSubscription
                    ? "Senior-level Designer"
                    : "Custom Development"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-400" />
                <span className="text-white text-sm">
                  {isSubscription ? "AI Advisory Framework" : "Advanced UI/UX"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-400" />
                <span className="text-white text-sm">
                  {isSubscription
                    ? "Full-service Creative Team"
                    : "Marketing Strategy"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-400" />
                <span className="text-white text-sm">
                  {isSubscription ? "4x Calls Per Month" : "Priority Support"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-green-400" />
                <span className="text-white text-sm">License free assets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            All plans include strategic consultation and discovery phase.
          </p>
        </div>
      </div>
    </section>
  );
}
