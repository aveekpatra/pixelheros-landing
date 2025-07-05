"use client";

import {
  ArrowUpRight,
  Palette,
  Code,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight">
          Essential services to{" "}
          <span className="italic font-light text-green-600">grow</span>
          <br />
          your{" "}
          <span className="italic font-light text-blue-600">
            business online
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {/* Brand Strategy */}
          <div className="bg-blue-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Zap size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Brand</h3>
            <p className="text-black">Strategy</p>
          </div>

          {/* Web Development */}
          <div className="bg-green-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Code size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Web</h3>
            <p className="text-black">Development</p>
          </div>

          {/* Digital Marketing */}
          <div className="bg-pink-100 p-8 rounded-3xl">
            <div className="mb-6">
              <TrendingUp size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Digital</h3>
            <p className="text-black">Marketing</p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-orange-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Palette size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">UI/UX</h3>
            <p className="text-black">Design</p>
          </div>

          {/* Growth Analytics */}
          <div className="bg-purple-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Users size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Growth</h3>
            <p className="text-black">Analytics</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Ready to grow your business online?
            </h3>
            <p className="text-2xl md:text-3xl font-semibold">
              Let&apos;s build something great together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Start Your Project
              <ArrowUpRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
              View Our Work
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
