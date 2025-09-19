// src/components/sections/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { BedDouble, Phone } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-dormitory.jpg" // Place this image in public/
          alt="Dormitory"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Welcome to <span className="text-yellow-300">DormFlow</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
        >
          Smart living made simple — book your room, manage facilities, and stay connected.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#rooms"
            className="flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
          >
            <BedDouble className="w-5 h-5 mr-2" />
            Explore Rooms
          </a>
          <a
            href="#contact"
            className="flex items-center px-6 py-3 bg-indigo-900 font-semibold rounded-xl shadow-lg hover:bg-indigo-800 transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
