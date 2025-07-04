"use client";

import { Lightbulb, Palette, Target } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12 leading-tight max-w-5xl mx-auto">
          Crafting exceptional, well experienced & technology driven
          <br />
          strategies to drive impactful results with
        </h2>

        {/* Value Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-purple-100 text-purple-600 px-6 py-3 rounded-full">
            <Palette size={20} />
            <span className="font-medium italic">Creativity</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full">
            <Lightbulb size={20} />
            <span className="font-medium italic">Innovation</span>
          </div>
          <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full">
            <Target size={20} />
            <span className="font-medium italic">Strategy</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Projects Completed */}
          <div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-2">
              <span className="text-4xl md:text-5xl">+</span>40
            </div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>

          {/* Years of Experience */}
          <div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-2">
              <span className="text-4xl md:text-5xl">+</span>15
            </div>
            <p className="text-gray-600 font-medium">Years Of Experience</p>
          </div>

          {/* Design Awards */}
          <div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-2">
              <span className="text-4xl md:text-5xl">+</span>12
            </div>
            <p className="text-gray-600 font-medium">Design Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
