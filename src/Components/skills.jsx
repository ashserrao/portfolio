import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "GraphQL", level: 70 },
  { name: "CSS/Sass", level: 85 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-[#c2ccaa]">{name}</span>
      <span className="text-sm font-medium text-[#c2ccaa]">{level}%</span>
    </div>
    <div className="w-full bg-[#9c5450] rounded-full h-2.5">
      <motion.div
        className="bg-[#67C7EB] h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#AA0505] to-[#6A0C0B]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#8cfcfb]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <SkillBar name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
