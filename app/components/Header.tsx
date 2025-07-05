"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999] px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100/50"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: "none",
        willChange: "auto",
      }}
      data-lenis-prevent
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PixelHeros Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-black">PixelHeros</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden sm:flex bg-black text-white px-4 sm:px-6 py-3 rounded-full font-medium items-center gap-2 hover:bg-gray-800 transition-colors text-sm sm:text-base">
          <span className="hidden md:inline">Let&apos;s Collaborate</span>
          <span className="md:hidden">Collaborate</span>
          <ArrowUpRight size={18} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-black" />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#work"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-gray-200">
              <button
                className="w-full bg-black text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let&apos;s Collaborate
                <ArrowUpRight size={18} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
