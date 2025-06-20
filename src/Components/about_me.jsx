import React from "react";
import { motion } from "framer-motion";
import profilePic from "../Layer 2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#B97D10] to-[#FBCA03]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#6A0C0B]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={profilePic}
              alt="Developer"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-[#000000]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg mb-6">
              I'm Anush and I'm a Software Developer. I can work very hard and
              am very motivated, and I have a passion for software development.
              I've worked in operations for Examroom.ai's Quality Assurance
              department for two years, and I have a track record of delivering
              exceptional results and going above and beyond expectations.
            </p>
            <p className="text-lg mb-6">
              I possess excellent communication and interpersonal skills, and
              have a proven ability to work effectively as part of a team. I am
              highly organized and have a talent for multitasking, which has
              allowed me to consistently meet tight deadlines and deliver
              high-quality work.
            </p>
            <p className="text-lg">
              I am always seeking new challenges and opportunities to further
              develop my skills, and I am eager to bring my expertise and
              passion to a dynamic and growing organization. I am confident that
              I would be an asset to any team, and I look forward to the
              opportunity to make a positive impact in a new role.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
