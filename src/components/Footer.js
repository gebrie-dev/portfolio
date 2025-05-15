import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-12 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <img
                  src="/favicon.ico"
                  alt="Logo"
                  className="h-12 w-12 rounded-full mr-4 transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Gavi
              </h2>
            </div>
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Building amazing web experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/Gabi12boy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FontAwesomeIcon icon={faTelegram} className="text-xl" />
              </a>
              <a
                href="https://github.com/gebrie-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/20"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a
                href="gebrie-devhttps://github.com/gebrie-dev/gebrie-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a
                href="https://web.facebook.com/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/20"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a
                href="https://https://x.com/home.facebook.com/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/20"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technologies
            </h3>
            <ul className="space-y-2">
              {["MongoDB", "Tailwind CSS", "VS Code", "Node.js"].map((tech) => (
                <li key={tech}>
                  <a
                    href="#"
                    className={`transition-colors duration-300 ${
                      isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`w-5 h-5 mr-2 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <a
                  href="mailto:gabiwagnew@gmail.com"
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  gabiwagnew@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className={`w-5 h-5 mr-2 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <a
                  href="tel:+251914080045"
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  +251 914 080 045
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t mt-12 pt-8 text-center ${
            isDarkMode
              ? "border-gray-700 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <p>© 2024 Gabby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
