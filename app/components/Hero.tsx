"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  // Animated text options
  const animatedTexts = [
    "drive growth",
    "bring customers",
    "build trust",
    "increase sales",
    "boost engagement",
    "create impact",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animatedTexts.length);
      }, 500); // Delay before starting to type the next word
    }, 3000); // Total time for each word

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  // Motion variants for better animation control
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Typing animation variants
  const typingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const typingLetterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Split text into letters for typing animation
  const currentText = animatedTexts[currentIndex];
  const letters = currentText.split("");

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white relative overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-blue-200/25 to-purple-200/15 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
          className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-bl from-pink-200/20 to-orange-200/15 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/2 left-1/6 transform -translate-y-1/2 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-tr from-green-200/20 to-teal-200/15 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
          className="absolute top-1/2 right-1/6 transform -translate-y-1/2 w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tl from-yellow-200/25 to-amber-200/15 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-64 sm:h-[400px] bg-gradient-to-r from-violet-200/10 to-indigo-200/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-t from-rose-200/15 to-pink-200/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black leading-[0.95] tracking-tight"
            variants={textVariants}
          >
            <motion.span className="block mb-2 sm:mb-4" variants={textVariants}>
              We build online brands
            </motion.span>
            <motion.span className="block mb-2 sm:mb-4" variants={textVariants}>
              that{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    variants={typingContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="italic font-light text-blue-600 absolute left-0 top-0 whitespace-nowrap"
                  >
                    {letters.map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={typingLetterVariants}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                    {/* Blinking cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block ml-1 text-blue-600"
                    >
                      |
                    </motion.span>
                  </motion.span>
                </AnimatePresence>
                {/* Invisible placeholder to maintain layout */}
                <span className="invisible italic font-light">
                  {animatedTexts.reduce((a, b) =>
                    a.length > b.length ? a : b
                  )}
                </span>
              </span>
            </motion.span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div className="mb-8 sm:mb-12" variants={textVariants}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            We&apos;re a new digital agency focused on helping small and medium
            businesses establish strong online presence. Professional websites,
            SEO, and social media that deliver real results.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          variants={textVariants}
        >
          {/* Get Started Button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            Get Started
            <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
          </motion.a>

          {/* User Avatars and Rating */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Customer ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.3 + i * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400 sm:w-4 sm:h-4"
                    />
                  </motion.div>
                ))}
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="text-xs sm:text-sm font-medium text-gray-600 mt-1 text-center sm:text-left"
              >
                Rated 5 stars by clients
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
