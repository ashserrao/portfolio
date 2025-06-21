import React from "react";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

const skills = [
  { img: "./assets/ng-logo.svg", name: "Angular", level: 75 },
  { img: "./assets/react-logo.svg", name: "React", level: 75 },
  { img: "./assets/crx-logo.svg", name: "chrome Extension", level: 75 },
  { img: "./assets/js-logo.svg", name: "Javascript", level: 75 },
  { img: "./assets/ts-logo.svg", name: "Typescript", level: 50 },
  { img: "./assets/sql-logo.svg", name: "SQL", level: 50 },
  { img: "./assets/py-logo.svg", name: "Python", level: 50 },
  { img: "./assets/dj-logo.svg", name: "Django-py", level: 50 },
  { img: "./assets/node-logo.svg", name: "NodeJS", level: 50 },
  { img: "./assets/java-logo.svg", name: "Java", level: 25 },
  { img: "./assets/gh-logo.svg", name: "Github", level: 50 },
  { img: "./assets/ps-logo.svg", name: "Photoshop", level: 50 },
];

const SkillMeter = ({ img, name, level }) => {
  const radius = 45;
  const strokeWidth = 8;
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;
  const percent = Math.min(Math.max(level, 0), 100);
  const strokeDashoffset = circumference * (1 - percent / 100);
  const size = (radius + strokeWidth) * 2;

  return (
    <div className="bg-[#000000] rounded-full relative w-[90px] h-[90px] flex items-center justify-center">
      <svg width={size} height={size} className="absolute transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#8cfcfb"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset="0"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#6A0C0B"
          strokeWidth={strokeWidth + 1}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {img && (
        <img src={img} alt={name} className="w-12 h-12 object-contain z-10" />
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#FFE6E6]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#6A0C0B]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-items-center text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <SkillMeter
                img={skill.img}
                name={skill.name}
                level={skill.level}
              />
              <p className="mt-2 text-base font-semibold text-black">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
