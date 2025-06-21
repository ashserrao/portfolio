import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#8cfcfb] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#000000]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="w-full">
          {/* TIMELINE CIRCLES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ol className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-0">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <li
                    key={idx}
                    className="flex items-center w-full sm:hidden md:flex lg:flex text-[#6A0C0B] after:content-[''] after:flex-1 after:h-1 after:border-b after:border-[#6A0C0B] after:border-4 after:inline-block last:after:border-gray-100 dark:last:after:border-gray-700"
                  >
                    <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#6A0C0B] rounded-full shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                      >
                        <path
                          stroke="#6A0C0B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M120-80q-33 0-56.5-23.5T40-160v-440h80v440h680v80H120Zm160-160q-33 0-56.5-23.5T200-320v-440h200v-80q0-33 23.5-56.5T480-920h160q33 0 56.5 23.5T720-840v80h200v440q0 33-23.5 56.5T840-240H280Zm0-80h560v-360H280v360Zm200-440h160v-80H480v80ZM280-320v-360 360Z"
                        />
                      </svg>
                    </span>
                  </li>
                ))}
            </ol>
          </motion.div>

          {/* EXPERIENCE TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ol className="flex flex-col sm:flex-col  md:flex-row md:flex-row items-center justify-between mt-8 gap-8 mx-10">
              <li className="flex flex-col items-center text-center px-4">
                <span className="text-base sm:text-lg font-bold text-black">
                  Examroom.AI
                </span>
                <span className="text-sm sm:text-base text-gray-900">
                  Customer Support Executive
                </span>
                <span className="text-sm sm:text-base text-gray-900">
                  Jun 2021 - Nov 2021
                </span>
              </li>
              <li className="flex flex-col items-center text-center px-4">
                <span className="text-base sm:text-lg font-bold text-black">
                  Examroom.AI
                </span>
                <span className="text-sm sm:text-base text-gray-900">
                  Quality-Analyst Operations
                </span>
                <span className="text-sm sm:text-base text-gray-900">
                  Nov 2021 - Dec 2023
                </span>
              </li>
              <li className="flex flex-col items-center text-center px-4">
                <span className="text-base sm:text-lg font-bold text-black">
                  Examroom.AI
                </span>
                <span className="text-sm sm:text-base text-gray-900">
                  Associate Software Developer
                </span>
                <span className="text-sm sm:text-base text-gray-900">
                  Jan 2024 - Present
                </span>
              </li>
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
