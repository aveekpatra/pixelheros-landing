"use client";

import {
  ArrowUpRight,
  Utensils,
  Wine,
  Camera,
  Scissors,
  Globe,
  Search,
  Calendar,
  BarChart3,
  MapPin,
  Palette,
  ShoppingCart,
} from "lucide-react";
import { motion } from "motion/react";

export default function PortfolioSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight max-w-4xl mx-auto px-4 sm:px-0 mb-6 sm:mb-8">
            Recent projects that{" "}
            <span className="italic font-light text-orange-600">showcase</span>
            <br />
            our{" "}
            <span className="italic font-light text-purple-600">
              capabilities
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real results for real businesses. See how we&apos;ve helped local
            companies establish their digital presence and drive growth.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, margin: "-150px" }}
        >
          {[
            {
              name: "Abu Restaurant",
              icon: Utensils,
              category: "Restaurant & Hospitality",
              description:
                "Authentic Middle Eastern restaurant in Prague seeking to increase table bookings and local visibility.",
              services: [
                { name: "Website Design", icon: Globe },
                { name: "Online Booking", icon: Calendar },
                { name: "Local SEO", icon: MapPin },
              ],
              result: "+85%",
              resultLabel: "Table Bookings",
              url: "https://aveekpatra.github.io/Abu-restaurant/",
              bgColor: "bg-amber-50",
              accentColor: "text-amber-600",
              iconColor: "text-amber-600",
            },
            {
              name: "U Blanických Rytířů",
              icon: Wine,
              category: "Fine Dining",
              description:
                "Modern metro restaurant with fine dining experience looking to attract discerning customers.",
              services: [
                { name: "Website Development", icon: Globe },
                { name: "Brand Identity", icon: Palette },
                { name: "Digital Marketing", icon: BarChart3 },
              ],
              result: "+120%",
              resultLabel: "Reservations",
              url: "https://modern-metro-restaurant.vercel.app/",
              bgColor: "bg-purple-50",
              accentColor: "text-purple-600",
              iconColor: "text-purple-600",
            },
            {
              name: "Richard Ryan Photography",
              icon: Camera,
              category: "Creative Services",
              description:
                "Professional photographer specializing in portraits and events, needing a stunning portfolio showcase.",
              services: [
                { name: "Portfolio Website", icon: Globe },
                { name: "Gallery System", icon: Camera },
                { name: "SEO Optimization", icon: Search },
              ],
              result: "+200%",
              resultLabel: "Client Inquiries",
              url: "https://richard-ryan-rose.vercel.app/",
              bgColor: "bg-blue-50",
              accentColor: "text-blue-600",
              iconColor: "text-blue-600",
            },
            {
              name: "Barber Ochre",
              icon: Scissors,
              category: "Beauty & Wellness",
              description:
                "Premium barber shop and hair salon services requiring modern booking system and local presence.",
              services: [
                { name: "Website Design", icon: Globe },
                { name: "Appointment System", icon: Calendar },
                { name: "Google My Business", icon: MapPin },
              ],
              result: "+150%",
              resultLabel: "Online Bookings",
              url: "https://barber-ochre-tau.vercel.app/",
              bgColor: "bg-green-50",
              accentColor: "text-green-600",
              iconColor: "text-green-600",
            },
          ].map((project, index) => (
            <motion.div
              key={project.name}
              className={`${project.bgColor} rounded-3xl p-8 sm:p-10 relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-black/10"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-black/5"></div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                      <project.icon size={28} className={project.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-1">
                        {project.name}
                      </h3>
                      <p
                        className={`text-sm font-medium ${project.accentColor}`}
                      >
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold text-black mb-1">
                      {project.result}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      {project.resultLabel}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  {project.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white/80 text-gray-800 px-4 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm border border-white/50 flex items-center gap-2"
                    >
                      <service.icon size={14} className="text-gray-600" />
                      <span>{service.name}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to see similar results for your business?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
