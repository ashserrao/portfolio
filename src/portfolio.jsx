// "use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Importing from react-icons

// Importing section components
import Home from "./Components/home";
import About from "./Components/about_me";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Contact from "./Components/contact_me";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about me", "my skills", "my work", "let's talk"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const activeSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          return (
            scrollPosition >= top - windowHeight / 2 &&
            scrollPosition < top + height - windowHeight / 2
          );
        }
        return false;
      });
      if (activeSection) {
        setActiveSection(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#c2ccaa]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#6A0C0B] to-[#AA0505] backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#67C7EB]"
          >
            Ashtro Dev
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize ${
                  activeSection === section
                    ? "text-[#8cfcfb]"
                    : "text-[#c2ccaa]"
                } hover:text-[#67C7EB] transition-colors`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </motion.button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-40 bg-[#582726] bg-opacity-95 flex flex-col items-center justify-center space-y-6"
          >
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-2xl capitalize ${
                  activeSection === section
                    ? "text-[#8cfcfb]"
                    : "text-[#c2ccaa]"
                } hover:text-[#67C7EB] transition-colors`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about me">
          <About />
        </div>
        <div id="my skills">
          <Skills />
        </div>
        <div id="my work">
          <Projects />
        </div>
        <div id="let's talk">
          <Contact />
        </div>
      </main>

      <footer className="bg-[#000000] text-[#c2ccaa] py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Ashtro Dev. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a
              href="https://github.com/ashserrao" // Add GitHub link here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="linkedin.com" // Add LinkedIn link here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="facebook.com" // Add Facebook link here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="instagram.com" // Add Instagram link here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>

      <motion.div
        className="fixed bottom-8 right-8 bg-[#8cfcfb] text-[#582726] rounded-full p-2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection("home")}
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </motion.div>
    </div>
  );
};

export default Portfolio;
