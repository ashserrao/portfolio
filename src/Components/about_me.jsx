import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import profilePic from "../Layer 2.png";

// from-[#B97D10] to-[#FBCA03]
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-b from-[#FFFFFF] to-[#8cfcfb]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#000000]"
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
            {/* <img
              src={profilePic}
              alt="Developer"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            /> */}
            <img
              src="./assets/FB_IMG_15750078317836156.jpg"
              alt="profile pic"
              className="px-4"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-[#000000]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl font-medium flex flex-wrap">
              <span>Hi there, I'm Anush Serrao a&nbsp; </span>
              <span className="text-[#6A0C0B]">
                <Typewriter
                  options={{
                    strings: ["Software Developer.", "Web Designer."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
            <p className="text-lg mb-6">
              I bring four years of diverse and valuable industry experience at
              Examroom.AI, where I have held multiple roles across departments.
              For two years, I have worked as a Software Developer, honing my
              technical skills and contributing to innovative development
              projects. Prior to that, I spent a year as a Quality Analyst in
              Operations, ensuring product excellence and process efficiency.
              {/* </p>
            <p className="text-lg mb-6"> */}
              I also briefly served as a Customer Support Executive, which
              strengthened my problem-solving abilities and deepened my
              understanding of client needs. This multifaceted experience has
              equipped me with a well-rounded skill set, including strong
              communication and interpersonal skills, the ability to collaborate
              effectively within teams, and a keen eye for detail.
              {/* </p>
            <p className="text-lg"> */}
              I am highly organized, adept at multitasking, and consistently
              deliver high-quality work within tight deadlines. Passionate about
              software development and continuous learning, I actively seek new
              challenges that will allow me to further develop my expertise. I
              am eager to contribute to a dynamic and forward-thinking
              organization, and I am confident in my ability to make a
              meaningful and positive impact on any team I join.
            </p>
            <motion.div
              className="flex justify-center text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://in.linkedin.com/in/anush-serrao-31440a16a"
                target="_blank"
                className="w-fit flex flex-wrap items-center bg-[#6A0C0B] text-[#c2ccaa] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9c5450] transition-colors duration-300"
              >
                <span>Download CV&nbsp;</span>
                <span className="material-symbols-outlined">
                  arrow_circle_down
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
