import React from "react";
import { motion } from "framer-motion";
import testImg from "../test_2.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, GraphQL, and Stripe integration.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task management application with real-time updates and collaborative features.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AI-powered Chatbot",
    description:
      "An intelligent chatbot leveraging natural language processing for customer support automation.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#B97D10] to-[#FBCA03]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#6A0C0B]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#6A0C0B] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={testImg}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8cfcfb]">
                  {project.title}
                </h3>
                <p className="text-[#c2ccaa]">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
