import React from "react";
import { motion } from "framer-motion";
import testImg from "../test_2.jpg";

const projects = [
  {
    title: "Python web crawler",
    description:
      "This repository contains a Scrapy project that demonstrates the use of python_web_crawl to scrape book details from the website Books to Scrape.",
    image: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://github.com/ashserrao/python_web_crawl",
  },
  {
    title: "ashtro-exten-sr",
    description: "A google extension project to record screen.",
    image: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://github.com/ashserrao/ashtro-exten-sr",
  },
  {
    title: "E-banking Project",
    description:
      "Ebankingapp is a Spring Boot backend for an e-banking app, offering secure services like user registration, login, and role management, and integrates seamlessly with a React.js frontend for a full-stack solution.",
    image: "/placeholder.svg?height=300&width=400",
    projectUrl: "http://github.com/ashserrao/Ebankingapp",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#f38d8b]"
    >
      <div className="container mx-auto px-6 min-h-[70vh]">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#000000]"
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
              className="bg-[#6A0C0B] rounded-lg overflow-hidden shadow-lg border"
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
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-[#c2ccaa]">
                  {project.description}{" "}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    className="text-[#8cfcfb] underline"
                  >
                    view code
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="w-full flex justify-end py-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            className="text-[#6A0C0B] font-bold underline"
            target="_blank"
            href="https://github.com/ashserrao?tab=repositories"
          >
            View all projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
