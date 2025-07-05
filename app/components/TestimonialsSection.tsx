"use client";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight max-w-4xl mx-auto">
          What Prague business owners
          <br />
          are saying <span className="italic font-light">about us</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Testimonial - Large */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-4 left-4 text-gray-400 text-sm">
                Success stories
              </div>

              {/* Customer Image */}
              <div className="flex items-center justify-center mb-8 mt-12">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                      ☕
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="text-white text-center mb-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  "PixelHeros transformed our small café into Prague's most
                  popular coffee destination.
                  <br />
                  Our online orders increased by 150% in just 3 months!"
                </p>
                <div className="text-gray-300">
                  <p className="font-semibold">Martin Novák</p>
                  <p className="text-sm">Owner of Café Prague, Vinohrady</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-10">
                <div className="w-32 h-64 bg-gradient-to-b from-white to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-green-200 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <div className="text-gray-600 text-sm mb-4">Average results</div>
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">
              +40%
            </div>
            <p className="text-black text-lg font-medium">
              "revenue increase within
              <br />
              first 6 months."
            </p>
          </div>
        </div>

        {/* Bottom Testimonials Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Left Testimonial */}
          <div className="bg-black rounded-3xl p-8">
            <div className="text-gray-400 text-sm mb-6">Success stories</div>
            <div className="text-white mb-8">
              <p className="text-xl font-medium leading-relaxed mb-6">
                "Finally, our salon appears first on Google! New customers find
                us every day through our beautiful website."
              </p>
              <div className="text-gray-300">
                <p className="font-semibold">Anna Svoboda</p>
                <p className="text-sm">Owner of Bella Salon, Old Town</p>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="bg-gradient-to-br from-pink-200 to-purple-400 rounded-2xl h-32 mb-6 flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                ✂️
              </div>
              <div className="w-16 h-16 bg-purple-400 rounded-full -ml-8 flex items-center justify-center text-white text-xl">
                💄
              </div>
              <div className="w-12 h-12 bg-pink-400 rounded-full -ml-6 flex items-center justify-center text-white text-lg">
                💅
              </div>
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="text-gray-500 text-sm mb-6">Success stories</div>
            <div className="text-black mb-8">
              <p className="text-xl font-medium leading-relaxed mb-6">
                "Our hotel bookings doubled after PixelHeros redesigned our
                website and optimized our Google presence. Best investment we've
                made!"
              </p>
              <div className="text-gray-600">
                <p className="font-semibold text-black">Pavel Černý</p>
                <p className="text-sm">
                  Manager at Hotel Golden Well, Lesser Town
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
