"use client";

import { ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white relative overflow-hidden">
      {/* Blurred Background Elements - Centered around hero text */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Center Left */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/25 to-purple-200/15 rounded-full blur-3xl"></div>

        {/* Top Center Right */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-pink-200/20 to-orange-200/15 rounded-full blur-3xl"></div>

        {/* Center Left */}
        <div className="absolute top-1/2 left-1/6 transform -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-green-200/20 to-teal-200/15 rounded-full blur-3xl"></div>

        {/* Center Right */}
        <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2 w-88 h-88 bg-gradient-to-tl from-yellow-200/25 to-amber-200/15 rounded-full blur-3xl"></div>

        {/* Behind the text - very subtle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-200/10 to-indigo-200/10 rounded-full blur-3xl"></div>

        {/* Bottom Center */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-t from-rose-200/15 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight">
          Grow your local business
          <br />
          with <span className="italic font-light">digital excellence</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We help Prague restaurants, salons, hotels and local businesses
          dominate their market with professional websites,
          <br />
          powerful SEO, and engaging social media that brings customers through
          your door
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* Get Started Button */}
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors text-lg">
            Start Growing Today
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
                Trusted by 50+ Prague businesses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
