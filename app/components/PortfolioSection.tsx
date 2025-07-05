"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function PortfolioSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-black text-center mb-16 leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Recent projects that{" "}
          <span className="italic font-light text-orange-600">show</span>
          <br />
          our{" "}
          <span className="italic font-light text-purple-600">
            capabilities
          </span>
        </motion.h2>

        {/* Portfolio Grid */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              name: "Abu Restaurant",
              logo: "🥙",
              description: "Authentic Middle Eastern restaurant in Prague",
              services: ["Website Design", "Online Booking"],
              result: "+85% Table Bookings",
              url: "https://aveekpatra.github.io/Abu-restaurant/",
            },
            {
              name: "U Blanických Rytířů",
              logo: "🍷",
              description:
                "Modern metro restaurant with fine dining experience",
              services: ["Website Development", "Brand Identity"],
              result: "+120% Reservations",
              url: "https://modern-metro-restaurant.vercel.app/",
            },
            {
              name: "Richard Ryan Photography",
              logo: "📸",
              description:
                "Professional photographer specializing in portraits and events",
              services: ["Portfolio Website", "Gallery System"],
              result: "+200% Client Inquiries",
              url: "https://richard-ryan-rose.vercel.app/",
            },
            {
              name: "Barber Ochre",
              logo: "✂️",
              description: "Premium barber shop and hair salon services",
              services: ["Website Design", "Appointment System"],
              result: "+150% Online Bookings",
              url: "https://barber-ochre-tau.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.01 }}
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* Logo */}
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                    {project.logo}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result & Link */}
                <div className="text-right flex flex-col items-end gap-4">
                  <div>
                    <div className="text-3xl font-bold text-black mb-1">
                      {project.result}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Growth achieved
                    </div>
                  </div>

                  {/* Visit Link */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: "transform" }}
                  >
                    <ExternalLink size={18} />
                    Visit Site
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
