import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

// Component imports
import Home from "./Components/home";
import About from "./Components/about_me";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Contact from "./Components/contact_me";
import ComingSoon from "./Components/coming_soon";

const Portfolio = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "home", label: "home", url: "/home" },
    { name: "about-me", label: "about me", url: "/about-me" },
    { name: "skills", label: "my skills", url: "/skills" },
    { name: "projects", label: "my work", url: "/projects" },
    { name: "contact", label: "let's talk", url: "/contact" },
    { name: "dev-res", label: "Dev Resources", url: "/dev-res" },
  ];

  // Sync active section with current path
  useEffect(() => {
    const current = sections.find((s) => location.pathname.includes(s.name));
    if (current) {
      setActiveSection(current.name);
    }
  }, [location.pathname]);

  return (
    <div className="bg-[#000000] min-h-screen text-[#c2ccaa]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#6A0C0B] backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#FFFFFF]"
          >
            <NavLink to={"/home"}>Ashtro Dev</NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <NavLink key={section.name} to={section.url}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize font-semibold ${
                    activeSection === section.name
                      ? "text-[#8cfcfb]"
                      : "text-[#c2ccaa]"
                  } hover:text-[#67C7EB] transition-colors`}
                >
                  {section.label}
                </motion.button>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-40 bg-[#582726] bg-opacity-95 flex flex-col items-center justify-center space-y-6"
          >
            {sections.map((section) => (
              <NavLink
                key={section.name}
                to={section.url}
                onClick={() => {
                  setActiveSection(section.name);
                  setMenuOpen(false);
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-2xl font-bold capitalize ${
                    activeSection === section.name
                      ? "text-[#8cfcfb]"
                      : "text-[#c2ccaa]"
                  } hover:text-[#67C7EB] transition-colors`}
                >
                  {section.label}
                </motion.button>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Routes */}
      <main className="pt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dev-res" element={<ComingSoon />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#c2ccaa]">
        <div className="container flex flex-wrap justify-center items-center mx-auto px-6 text-center sm:py-2 md:pt-2 lg:pt-2">
          <div className="mt-1">
            &copy; 2024 Ashtro Dev. All rights reserved.
          </div>
          <div className="flex justify-center space-x-6 sm:mt-2 md:mt-2 md:ml-2 lg:mt-2 lg:ml-2">
            <motion.a
              href="https://github.com/ashserrao"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#67C7EB] transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
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
    </div>
  );
};

export default Portfolio;
