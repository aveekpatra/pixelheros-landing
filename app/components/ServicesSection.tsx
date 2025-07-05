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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
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
              className={`${service.bg} p-8 rounded-3xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="mb-6"
                whileHover={{
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <service.icon size={32} className="text-black" />
              </motion.div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-black">{service.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-white mb-6 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Ready to grow your business online?
            </h3>
            <p className="text-2xl md:text-3xl font-semibold">
              Let&apos;s build something great together!
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.button
              className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              View Our Work
              <ArrowUpRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
