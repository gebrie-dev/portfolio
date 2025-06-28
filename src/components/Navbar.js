import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", number: "01" },
    { id: "about", label: "About", number: "02" },
    { id: "skills", label: "Skills", number: "03" },
    { id: "projects", label: "Projects", number: "04" },
    { id: "contact", label: "Contact", number: "05" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-900/80 backdrop-blur-lg"
            : "bg-white/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="/favicon.ico"
                alt="Logo"
                className="h-12 w-12 rounded-full transition-transform duration-300 hover:scale-110"
              />
              
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActiveSection(link.id)}
                className={`relative group cursor-pointer ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="flex items-center">
                  <span
                    className={`text-sm font-mono mr-2 ${
                      activeSection === link.id
                        ? "text-blue-500"
                        : isDarkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {link.number}
                  </span>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                        : ""
                    }`}
                  >
                    {link.label}
                  </span>
                </span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-600/20"
            >
               Resume
            </a>

            <a
              href="https://github.com/gebrie-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-800 hover:text-black text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XIcon
                  className={`w-6 h-6 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              ) : (
                <MenuIcon
                  className={`w-6 h-6 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveSection(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center py-2 cursor-pointer ${
                      activeSection === link.id
                        ? isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                        : isDarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`text-sm font-mono mr-2 ${
                        activeSection === link.id
                          ? "text-blue-500"
                          : isDarkMode
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {link.number}
                    </span>
                    {link.label}
                  </Link>
                ))}
                {/* Resume Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-600/20 text-center"
                >
                  Resume
                </a>
                {/* Social Links */}
                <div className="flex justify-center mt-2 space-x-4">
                  <a
                    href="https://www.linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-2xl"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/gebrie-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black text-2xl"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
