"use client";

import {
  Smartphone,
  Palette,
  Layers,
  Eye,
  Code,
  Users,
  Brush,
  Globe,
} from "lucide-react";

export default function PortfolioSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight max-w-4xl mx-auto">
          How we helped Prague businesses
          <br />
          boost their <span className="italic font-light">online success</span>
        </h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Café Prague */}
          <div className="group cursor-pointer">
            <div className="bg-amber-100 rounded-3xl p-8 mb-6 overflow-hidden relative h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white rounded-3xl p-6 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="w-48 h-80 bg-amber-800 rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute top-4 left-4 right-4 text-center">
                      <div className="text-2xl font-bold mb-2">☕</div>
                      <div className="text-sm">Café Prague</div>
                    </div>
                    <div className="text-lg font-bold mt-16">+150%</div>
                    <div className="text-sm">Online Orders</div>
                    <div className="absolute bottom-4 right-4 bg-green-400 text-black px-2 py-1 rounded-lg text-xs font-semibold">
                      #1 on Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Café Prague
              </h3>
              <div className="flex gap-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Globe size={14} />
                  Website & Online Ordering
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Eye size={14} />
                  Local SEO
                </span>
              </div>
            </div>
          </div>

          {/* Bella Salon */}
          <div className="group cursor-pointer">
            <div className="bg-pink-200 rounded-3xl p-8 mb-6 overflow-hidden relative h-80">
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">✂️</div>
                  <div className="text-4xl font-bold text-white mb-4">
                    Bella Salon
                  </div>
                  <div className="w-32 h-32 bg-white rounded-full mx-auto opacity-20"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Bella Salon
              </h3>
              <div className="flex gap-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Brush size={14} />
                  Brand & Website
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Users size={14} />
                  Social Media
                </span>
              </div>
            </div>
          </div>

          {/* Hotel Golden Well */}
          <div className="group cursor-pointer">
            <div className="bg-blue-100 rounded-3xl p-8 mb-6 overflow-hidden relative h-80">
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white rounded-2xl p-6 shadow-2xl w-80 h-64">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm">
                        🏨
                      </div>
                      <span className="font-semibold">Hotel Golden Well</span>
                    </div>
                    <div className="text-lg font-bold">★★★★★</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-200 rounded-lg p-3 h-16 flex items-center justify-center text-sm font-semibold">
                      Bookings
                    </div>
                    <div className="bg-green-200 rounded-lg p-3 h-16 flex items-center justify-center text-sm font-semibold">
                      Reviews
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    +200% Online Bookings
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Hotel Golden Well
              </h3>
              <div className="flex gap-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Globe size={14} />
                  Booking Website
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Eye size={14} />
                  Tourism SEO
                </span>
              </div>
            </div>
          </div>

          {/* Bistro U Fleku */}
          <div className="group cursor-pointer">
            <div className="bg-red-100 rounded-3xl p-8 mb-6 overflow-hidden relative h-80">
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white rounded-2xl p-4 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <div className="w-64 h-48 bg-red-600 rounded-xl flex items-center justify-center text-white relative overflow-hidden">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🍺</div>
                      <div className="text-2xl font-bold">Bistro U Fleku</div>
                      <div className="text-sm mt-2">
                        Traditional Czech Cuisine
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Bistro U Fleku
              </h3>
              <div className="flex gap-3">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Globe size={14} />
                  Restaurant Website
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Users size={14} />
                  Social Media
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
