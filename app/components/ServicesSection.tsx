"use client";

import {
  ArrowUpRight,
  Palette,
  Code,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-12 sm:mb-16 leading-tight px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          Essential services to{" "}
          <span className="italic font-light text-green-600">grow</span>
          <br />
          your{" "}
          <span className="italic font-light text-blue-600">
            business online
          </span>
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, margin: "-150px" }}
        >
          {[
            {
              icon: Zap,
              title: "Brand",
              subtitle: "Strategy",
              bg: "bg-blue-100",
            },
            {
              icon: Code,
              title: "Web",
              subtitle: "Development",
              bg: "bg-green-100",
            },
            {
              icon: TrendingUp,
              title: "Digital",
              subtitle: "Marketing",
              bg: "bg-pink-100",
            },
            {
              icon: Palette,
              title: "UI/UX",
              subtitle: "Design",
              bg: "bg-orange-100",
            },
            {
              icon: Users,
              title: "Growth",
              subtitle: "Analytics",
              bg: "bg-purple-100",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className={`${service.bg} p-6 sm:p-8 rounded-3xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              viewport={{ once: true, margin: "-150px" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="mb-4 sm:mb-6"
                whileHover={{
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <service.icon size={28} className="text-black sm:w-8 sm:h-8" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-black text-sm sm:text-base">
                {service.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-black rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <motion.div
            className="text-white text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              Ready to grow your business online?
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Let&apos;s build something great together!
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <motion.a
              href="#contact"
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              Start Your Project
              <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a
              href="#work"
              className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              View Our Work
              <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
