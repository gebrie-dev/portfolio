import React, { useState } from "react";
import {
  DownloadIcon,
  SearchIcon,
  LightningBoltIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/solid";
import { Link } from "react-scroll";
import SignInForm from "./SignInForm";
import ImageGallery from "react-image-gallery";
import ResumePdf from "../assets/resume.png";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isResumeViewOpen, setIsResumeViewOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const resumeImage = {
    original: ResumePdf,
    thumbnail: ResumePdf,
    description: "Resume",
  };

  return (
    <header
      className={`fixed w-full z-50 py-3 shadow-lg transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        {/* Logo */}
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setActiveSection("about")}
        >
          <img
            src="/favicon.ico"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-bold text-xl">Gabby</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          {["projects", "skills", "testimonials", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              className={`relative cursor-pointer transition duration-300 ${
                activeSection === section
                  ? isDarkMode
                    ? "text-white"
                    : "text-gray-900"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span
                  className={`absolute -bottom-2 left-0 w-full h-1 rounded-md ${
                    isDarkMode ? "bg-blue-500" : "bg-blue-600"
                  }`}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode
                ? "text-yellow-400 hover:bg-gray-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>

          {/* Hire Me Button */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
              isDarkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            onClick={() => setActiveSection("contact")}
          >
            Hire Me
            <LightningBoltIcon className="ml-2 w-5 h-5" />
          </Link>

          {/* CV Viewer */}
          <button
            onClick={() => setIsResumeViewOpen((prev) => !prev)}
            className={`flex items-center px-3 py-2 rounded transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            CV
            <DownloadIcon className="ml-2 w-5 h-5" />
          </button>

          {/* Search Bar */}
          <div className="relative">
            {isSearchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`absolute right-8 px-2 py-1 w-32 rounded-md focus:outline-none transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
                placeholder="Search..."
              />
            )}
            <SearchIcon
              className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setIsSearchOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div
            className={`p-4 max-w-3xl w-full max-h-screen overflow-y-auto rounded-md shadow-xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <button
              onClick={() => setIsResumeViewOpen(false)}
              className="text-red-500 float-right hover:text-red-600 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
            <ImageGallery items={[resumeImage]} />

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = ResumePdf;
                link.download = "resume.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className={`mt-4 flex items-center px-4 py-2 rounded transition-colors duration-300 ${
                isDarkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
