"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ready to{" "}
            <span className="italic font-light text-green-600">grow</span> your
            business{" "}
            <span className="italic font-light text-blue-600">online?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            We&apos;re here to help small and medium businesses establish a
            strong digital presence. Professional websites, effective SEO, and
            social media that brings results.
          </motion.p>

          {/* Single CTA Button */}
          <motion.button
            className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
          >
            Let&apos;s get started
            <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
