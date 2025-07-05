"use client";

import {
  ArrowUpRight,
  Globe,
  Search,
  Instagram,
  MapPin,
  Smartphone,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight">
          Everything your business needs
          <br />
          to succeed <span className="italic font-light">online</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {/* Professional Website */}
          <div className="bg-blue-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Globe size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Professional</h3>
            <p className="text-black">Website</p>
          </div>

          {/* Local SEO */}
          <div className="bg-green-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Search size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Local</h3>
            <p className="text-black">SEO</p>
          </div>

          {/* Social Media */}
          <div className="bg-pink-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Instagram size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Social</h3>
            <p className="text-black">Media</p>
          </div>

          {/* Google My Business */}
          <div className="bg-orange-100 p-8 rounded-3xl">
            <div className="mb-6">
              <MapPin size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Google</h3>
            <p className="text-black">My Business</p>
          </div>

          {/* Mobile Optimization */}
          <div className="bg-purple-100 p-8 rounded-3xl">
            <div className="mb-6">
              <Smartphone size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Mobile</h3>
            <p className="text-black">Optimization</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Ready to dominate your local market?
            </h3>
            <p className="text-2xl md:text-3xl font-semibold">
              Let's grow your business together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Get Free Consultation
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
