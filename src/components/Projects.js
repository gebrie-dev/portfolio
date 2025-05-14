import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { projects } from "../data";

export default function Projects({ isDarkMode }) {
  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon
            className={`mx-auto inline-block w-10 mb-4 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Apps I've Built
          </h1>
          <p
            className={`lg:w-2/3 mx-auto leading-relaxed text-base ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Using the technologies and languages mentioned below, here are some
            of the projects I have built. If you want to get the source code
            from GitHub{" "}
            <FontAwesomeIcon
              icon={faGithub}
              className="inline-block w-6 h-6 mb-1 text-green-400"
            />
            , click on each project section!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                  src={project.image}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? "bg-gray-900/90" : "bg-gray-900/80"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2
                      className={`text-sm font-medium mb-1 ${
                        isDarkMode ? "text-blue-400" : "text-blue-500"
                      }`}
                    >
                      {project.subtitle}
                    </h2>
                    <h1 className="text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-200"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        View Project
                        <ExternalLinkIcon className="ml-2 w-4 h-4" />
                      </a>
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-gray-300" : "text-gray-200"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
