"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PixelHeros Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl sm:text-2xl font-semibold text-black">
              PixelHeros
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-center">
            <a
              href="#home"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              Work
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Let&apos;s Collaborate</span>
            <span className="sm:hidden">Collaborate</span>
            <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-100">
          {/* Copyright */}
          <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2025 PixelHeros Digital Agency. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
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
