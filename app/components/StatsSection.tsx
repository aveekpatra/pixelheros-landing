"use client";

import { Lightbulb, Palette, Network } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 leading-tight w-full">
          Where{" "}
          <span className="italic font-light text-blue-600">fresh ideas</span>{" "}
          meet proven methods to create{" "}
          <span className="italic font-light text-purple-600">real impact</span>{" "}
          with
        </h2>

        {/* Value Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2.5 rounded-full">
            <Palette size={18} />
            <span className="font-medium italic text-sm">Creativity</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2.5 rounded-full">
            <Lightbulb size={18} />
            <span className="font-medium italic text-sm">Innovation</span>
          </div>
          <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2.5 rounded-full">
            <Network size={18} />
            <span className="font-medium italic text-sm">Strategy</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
          {/* Projects Completed */}
          <div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-2 leading-none">
              <span className="text-4xl md:text-5xl align-top">+</span>12
            </div>
            <p className="text-gray-500 font-medium text-base">
              Projects Delivered
            </p>
          </div>

          {/* Average Results */}
          <div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-2 leading-none">
              150<span className="text-4xl md:text-5xl align-top">%</span>
            </div>
            <p className="text-gray-500 font-medium text-base">
              Average Traffic Growth
            </p>
          </div>

          {/* Response Time */}
          <div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-2 leading-none">
              <span className="text-4xl md:text-5xl align-top">&lt;</span>24
            </div>
            <p className="text-gray-500 font-medium text-base">
              Hour Response Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
