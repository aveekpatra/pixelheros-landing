"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-12 sm:mb-16 leading-tight max-w-4xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          What our{" "}
          <span className="italic font-light text-blue-600">clients</span>
          <br />
          are saying{" "}
          <span className="italic font-light text-green-600">about us</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Testimonial - Large */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-black rounded-3xl p-6 sm:p-8 h-full relative overflow-hidden">
              <div className="absolute top-4 left-4 text-gray-400 text-xs sm:text-sm">
                Client success
              </div>

              {/* Business Image */}
              <div className="flex items-center justify-center mb-6 sm:mb-8 mt-8 sm:mt-12">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop"
                    alt="Modern office workspace"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="text-white text-center mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-4 sm:mb-6">
                  &quot;PixelHeros helped us establish a strong online presence.
                  <br className="hidden sm:block" />
                  Our online orders increased by 85% and we&apos;re fully booked
                  most weekends!&quot;
                </p>
                <div className="text-gray-300">
                  <p className="font-semibold text-sm sm:text-base">
                    Martin Novák
                  </p>
                  <p className="text-xs sm:text-sm">Owner of Bistro Praha</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 opacity-10">
                <div className="w-24 sm:w-32 h-48 sm:h-64 bg-gradient-to-b from-white to-transparent rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="bg-green-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            style={{ willChange: "transform" }}
          >
            <div className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Average results
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-3 sm:mb-4">
              +150%
            </div>
            <p className="text-black text-base sm:text-lg font-medium">
              &quot;increase in website traffic
              <br />
              within 6 months.&quot;
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Testimonials Row */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Testimonial - Biotech with Background */}
          <div className="rounded-3xl h-80 sm:h-96 relative overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop')",
              }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">
                Client success
              </div>

              <div className="text-white">
                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-4 sm:mb-6">
                  &quot;Our fitness studio needed a professional website and
                  online booking system. PixelHeros delivered exactly what we
                  needed and our membership has grown significantly.&quot;
                </p>
                <div className="text-gray-200">
                  <p className="font-semibold text-sm sm:text-base">
                    Jana Svobodová
                  </p>
                  <p className="text-xs sm:text-sm">Owner of FitCore Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Testimonial - EdTech with Background */}
          <div className="rounded-3xl h-80 sm:h-96 relative overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop')",
              }}
            ></div>

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-white/85"></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                Client success
              </div>

              <div className="text-black">
                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-4 sm:mb-6">
                  &quot;PixelHeros created a beautiful website for our beauty
                  salon and helped us rank higher on Google. Our online bookings
                  increased by 120% and we&apos;re getting more local
                  customers.&quot;
                </p>
                <div className="text-gray-700">
                  <p className="font-semibold text-black text-sm sm:text-base">
                    Petra Krásná
                  </p>
                  <p className="text-xs sm:text-sm">Owner of Bella Salon</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
