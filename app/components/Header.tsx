"use client";

import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-semibold text-black">PixelHeros</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            About us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Work
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Awards
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
          Let&apos;s Collaborate
          <ArrowUpRight size={18} />
        </button>
      </div>
    </header>
  );
}
