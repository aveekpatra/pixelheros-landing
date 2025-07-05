"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-semibold text-black">
              PixelHeros
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-8 text-center">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              About us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Work
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors font-medium"
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

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2025 PixelHeros Digital Agency. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
