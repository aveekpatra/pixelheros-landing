"use client";

import { Lightbulb, MapPin, TrendingUp } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 leading-tight max-w-5xl mx-auto">
          Helping Prague businesses thrive online with proven
          <br />
          digital strategies that deliver real results
        </h2>

        {/* Value Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full">
            <MapPin size={20} />
            <span className="font-medium italic">Local Expertise</span>
          </div>
          <div className="flex items-center gap-2 bg-green-100 text-green-600 px-6 py-3 rounded-full">
            <TrendingUp size={20} />
            <span className="font-medium italic">Proven Results</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-100 text-purple-600 px-6 py-3 rounded-full">
            <Lightbulb size={20} />
            <span className="font-medium italic">Smart Solutions</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center max-w-5xl mx-auto">
          {/* Local Businesses Served */}
          <div>
            <div className="text-7xl md:text-8xl font-bold text-black mb-3 leading-none">
              <span className="text-5xl md:text-6xl align-top">+</span>50
            </div>
            <p className="text-gray-500 font-medium text-lg">
              Prague Businesses Served
            </p>
          </div>

          {/* Average Revenue Increase */}
          <div>
            <div className="text-7xl md:text-8xl font-bold text-black mb-3 leading-none">
              <span className="text-5xl md:text-6xl align-top">+</span>40
              <span className="text-5xl md:text-6xl">%</span>
            </div>
            <p className="text-gray-500 font-medium text-lg">
              Average Revenue Increase
            </p>
          </div>

          {/* Google Ranking Improvements */}
          <div>
            <div className="text-7xl md:text-8xl font-bold text-black mb-3 leading-none">
              <span className="text-5xl md:text-6xl align-top">#</span>1
            </div>
            <p className="text-gray-500 font-medium text-lg">
              Google Ranking Achieved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
