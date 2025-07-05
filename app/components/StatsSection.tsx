"use client";

import { Lightbulb, Palette, Network } from "lucide-react";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 leading-tight w-full"
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
          className="flex flex-wrap justify-center gap-3 mb-16"
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
              className={`flex items-center gap-2 ${item.bg} ${item.textColor} px-5 py-2.5 rounded-full`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon size={18} />
              <span className="font-medium italic text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto"
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
                className="text-6xl md:text-7xl font-bold text-black mb-2 leading-none"
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
                  <span className="text-4xl md:text-5xl align-top">
                    {stat.prefix}
                  </span>
                )}
                {stat.number.replace(/[+<%]/g, "")}
                {stat.suffix && (
                  <span className="text-4xl md:text-5xl align-top">
                    {stat.suffix}
                  </span>
                )}
              </motion.div>
              <p className="text-gray-500 font-medium text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
