import React, { useState } from "react";
import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ toggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    toggleDarkMode();
  };

  const handleSocialMediaToggle = () => {
    setIsSocialMediaOpen((prevState) => !prevState);
  };

  return (
    <header className={`bg-gradient-to-r from-pink-900 to-indigo-600 fixed w-full z-10`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="inline-flex items-center bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4 md:mt-0"
        >
          Home
        </Link>
        <span className="mx-2 h-6 md:h-16 text-gray-400 dark:text-gray-600 border-l border-gray-400 dark:border-gray-600 pl-2 ml-2"></span>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-4 hover:text-white"
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-4 hover:text-white"
        >
          Skills
        </Link>
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-4 hover:text-white"
        >
          Feedback
        </Link>
        <div className="flex items-center ml-auto">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-flex items-center bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4 md:mt-0 ml-2"
            aria-label="Hire Me"
          >
            Hire Me
            <ArrowRightIcon className="w-5 h-5 ml-1" />
          </Link>
          <button
            className="inline-flex items-center bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4 md:mt-0 ml-2 relative"
            aria-label="Contact Me"
            onMouseEnter={handleSocialMediaToggle} // Add onMouseEnter event
            onMouseLeave={handleSocialMediaToggle} // Add onMouseLeave event
          >
            Contact Me
            {isSocialMediaOpen && (
              <div className="absolute left-0 mt-60 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <a href="https://t.me/Gabi12boy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                  <span>Telegram</span>
                </a>
                <a href="#your-facebook-link" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/gebrie10?igsh=MWRxcXhkdXFqNDIzOA==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <span>Instagram</span>
                </a>
                <a href="#your-linkedin-link" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <span>LinkedIn</span>
                </a>
              </div>
            )}
          </button>
          <button
            onClick={handleDarkModeToggle}
            className="text-red-400 hover:text-white focus:outline-none ml-2"
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <SunIcon className="w-8 h-8" /> : <MoonIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
