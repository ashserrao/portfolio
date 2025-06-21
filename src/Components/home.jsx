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
      <div className="flex flex-wrap container justify-center text-center items-center mx-auto px-6 relative z-10">
        {/* <div className="hidden mb-[-9%] md:block md:w-1/2 lg:w-1/2">
          <img
            src="./assets/sample potrait.png"
            alt="Sample Portrait"
            className="object-cover w-8/12 mx-auto"
          />
        </div> */}
        <div className="sm:w-full md:w-1/2 lg:w-1/2">
          <img
            className="sm:-ml-2 md:-ml-4 lg:-ml-4"
            src="./assets/logo no bg.png"
          />
          <motion.h1
            className="text-center text-5xl md:text-7xl font-bold mb-6 text-[#FFFFFF]"
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
            Based in India
          </motion.p>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://in.linkedin.com/in/anush-serrao-31440a16a"
              target="_blank"
              className="bg-[#6A0C0B] text-[#c2ccaa] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9c5450] transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
