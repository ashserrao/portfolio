import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="#8cfcfb"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          <motion.path
            d="M0,50 Q25,0 50,50 T100,50"
            fill="none"
            stroke="#67C7EB"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-[#8cfcfb]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ashtro Dev
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting the future of web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="bg-[#6A0C0B] text-[#c2ccaa] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9c5450] transition-colors duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
