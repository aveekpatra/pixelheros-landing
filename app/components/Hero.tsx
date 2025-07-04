"use client";

import { ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight">
          Building bold brands
          <br />
          with <span className="italic font-light">thoughtful design</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          At Awake, we help small startups tackle the world's biggest challenges
          with tailored solutions,
          <br />
          guiding you from strategy to success in a competitive market
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* Get Started Button */}
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors text-lg">
            Get Started
            <ArrowUpRight size={20} />
          </button>

          {/* User Avatars and Rating */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Trusted by 1000+ clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
