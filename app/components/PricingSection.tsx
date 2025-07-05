"use client";

import { ArrowUpRight, Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight max-w-4xl mx-auto">
          Choose the perfect plan
          <br />
          for your <span className="italic font-light">business growth</span>
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Essential Plan */}
          <div className="bg-blue-50 rounded-3xl p-8 relative border-2 border-blue-200">
            {/* Plan Badge */}
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Essential
            </div>

            {/* Description */}
            <p className="text-black text-lg mb-8 leading-relaxed">
              Perfect for restaurants, cafés, and small businesses wanting to
              establish strong online presence
            </p>

            {/* Pricing Options */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 mb-4 border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">
                    Monthly Subscription
                  </span>
                  <span className="text-2xl font-bold text-blue-600">€299</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Ongoing support & updates included
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">
                    One-time Payment
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    €2,499
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Complete setup + 6 months support
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors mb-8 w-full justify-center">
              Get Started
              <ArrowUpRight size={20} />
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="text-black font-semibold mb-4">
                What's Included:
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">
                  Professional Website (5 pages)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Local SEO Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Google My Business Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Mobile Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Basic Analytics Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Monthly Performance Reports</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 relative border-2 border-purple-200">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
              Most Popular
            </div>

            {/* Plan Badge */}
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 mt-4">
              Premium
            </div>

            {/* Description */}
            <p className="text-black text-lg mb-8 leading-relaxed">
              Ideal for salons, hotels, and growing businesses wanting complete
              digital dominance
            </p>

            {/* Pricing Options */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 mb-4 border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">
                    Monthly Subscription
                  </span>
                  <span className="text-2xl font-bold text-purple-600">
                    €499
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Full-service digital marketing
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">
                    One-time Payment
                  </span>
                  <span className="text-2xl font-bold text-purple-600">
                    €4,499
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Complete setup + 12 months support
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity mb-8 w-full justify-center">
              Start Premium
              <ArrowUpRight size={20} />
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="text-black font-semibold mb-4">
                Everything in Essential, plus:
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Advanced Website (10+ pages)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Social Media Management</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">
                  Content Creation (posts, photos)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Advanced SEO & Link Building</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Online Booking System</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-600" />
                <span className="text-black">Priority Support & Updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">
            All plans include free consultation and setup. No hidden fees.
          </p>
          <p className="text-gray-500">
            Based in Prague • Serving businesses across Czech Republic
          </p>
        </div>
      </div>
    </section>
  );
}
