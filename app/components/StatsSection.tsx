"use client";

import { Lightbulb, Palette, Network } from "lucide-react";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 pb-16 sm:pb-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-4 sm:mb-6 leading-tight w-full px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Where{" "}
          <span className="italic font-light text-blue-600">fresh ideas</span>{" "}
          meet proven methods to create{" "}
          <span className="italic font-light text-purple-600">real impact</span>{" "}
          with
        </motion.h2>

        {/* Value Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: Palette,
              text: "Creativity",
              bg: "bg-purple-100",
              textColor: "text-purple-600",
            },
            {
              icon: Lightbulb,
              text: "Innovation",
              bg: "bg-blue-100",
              textColor: "text-blue-600",
            },
            {
              icon: Network,
              text: "Strategy",
              bg: "bg-orange-100",
              textColor: "text-orange-600",
            },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              className={`flex items-center gap-2 ${item.bg} ${item.textColor} px-3 sm:px-5 py-2 sm:py-2.5 rounded-full`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="font-medium italic text-xs sm:text-sm">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              number: "+12",
              label: "Projects Delivered",
              prefix: "+",
              suffix: "",
            },
            {
              number: "150%",
              label: "Average Traffic Growth",
              prefix: "",
              suffix: "%",
            },
            {
              number: "<24",
              label: "Hour Response Time",
              prefix: "<",
              suffix: "",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 leading-none"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {stat.prefix && (
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-top">
                    {stat.prefix}
                  </span>
                )}
                {stat.number.replace(/[+<%]/g, "")}
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-top">
                    {stat.suffix}
                  </span>
                )}
              </motion.div>
              <p className="text-gray-500 font-medium text-sm sm:text-base px-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
