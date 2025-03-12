"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.8,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

// Dot positions
const DOT_POSITIONS = [
  { size: 4, left: 20, top: 30 },
  { size: 3, left: 45, top: 60 },
  { size: 5, left: 70, top: 25 },
  { size: 3, left: 85, top: 40 },
  { size: 4, left: 15, top: 75 },
  { size: 3, left: 60, top: 85 },
  { size: 5, left: 30, top: 15 },
  { size: 4, left: 90, top: 55 },
  { size: 3, left: 40, top: 95 },
  { size: 5, left: 75, top: 35 },
  // Additional dots for more coverage:
  { size: 4, left: 8, top: 20 },
  { size: 3, left: 95, top: 15 },
  { size: 5, left: 25, top: 45 },
  { size: 4, left: 55, top: 10 },
  { size: 3, left: 82, top: 70 },
  { size: 5, left: 12, top: 88 },
  { size: 4, left: 35, top: 82 },
  { size: 3, left: 68, top: 92 },
  { size: 5, left: 88, top: 8 },
  { size: 4, left: 48, top: 78 },
  { size: 3, left: 92, top: 45 },
  { size: 5, left: 18, top: 65 },
  { size: 4, left: 58, top: 38 },
  { size: 3, left: 78, top: 18 },
  { size: 5, left: 5, top: 52 },
  { size: 4, left: 42, top: 5 },
  { size: 3, left: 65, top: 72 },
  { size: 5, left: 95, top: 82 },
  { size: 4, left: 28, top: 32 },
  { size: 3, left: 52, top: 95 },
  { size: 5, left: 85, top: 28 },
  { size: 4, left: 15, top: 42 },
  { size: 3, left: 72, top: 58 },
  { size: 5, left: 38, top: 68 },
  { size: 4, left: 62, top: 22 },
  { size: 3, left: 98, top: 62 },
  { size: 5, left: 22, top: 78 },
  { size: 4, left: 82, top: 92 },
  { size: 3, left: 45, top: 25 },
  { size: 5, left: 92, top: 35 },
].map((dot) => ({
  ...dot,
  left: `${dot.left}%`,
  top: `${dot.top}%`,
}));

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="
        relative min-h-screen 
        bg-gradient-to-br from-[#F76902] to-[#F97D33] 
        text-white px-4 md:px-6 
        flex items-center justify-center 
        text-center overflow-hidden
      "
    >
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blurred circles */}
        <div className="absolute w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-orange-300/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse" />
        <div className="absolute w-[250px] md:w-[700px] h-[250px] md:h-[700px] bg-orange-500/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-700" />
        <div className="absolute w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-orange-200/20 rounded-full blur-2xl top-1/2 left-1/2 animate-pulse delay-500" />

        {/* Floating circles (desktop only) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i + 3} h-${i + 3} bg-orange-300/40 rounded-full hidden md:block`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating dots */}
        {isMounted && (
          <div className="absolute inset-0">
            {DOT_POSITIONS.slice(0, isMobile ? 25 : DOT_POSITIONS.length).map((dot, i) => (
              <motion.div
                key={i}
                className="absolute bg-orange-50 rounded-full"
                style={{
                  width: dot.size * (isMobile ? 0.7 : 1),
                  height: dot.size * (isMobile ? 0.7 : 1),
                  left: dot.left,
                  top: dot.top,
                }}
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.3, 1],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1
          variants={fadeInUp}
          className="text-7xl md:text-8xl font-extrabold mb-6 leading-tight"
        >
          SG Elections 2025
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-4 text-white/90"
        >
          Begad & Mariia
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-4xl italic text-white/80 mb-8"
        >
          &quotFor Students, By Students&quot
        </motion.p>

        {/* Call to Action */}
        <motion.div
          variants={scaleUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="#plan"
            className="bg-white text-[#F76902] px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-transform duration-300"
          >
            Read Our Plan
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
