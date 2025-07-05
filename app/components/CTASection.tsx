"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          {/* Main Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: "-150px" }}
          >
            Ready to{" "}
            <span className="italic font-light text-green-600">grow</span> your
            business{" "}
            <span className="italic font-light text-blue-600">online?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, margin: "-150px" }}
          >
            We&apos;re here to help small and medium businesses establish a
            strong digital presence. Professional websites, effective SEO, and
            social media that brings results.
          </motion.p>

          {/* Single CTA Button */}
          <motion.button
            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true, margin: "-150px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
          >
            Let&apos;s get started
            <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
