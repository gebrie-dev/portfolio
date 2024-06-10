import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 bg-gradient-to-br from-rose-600 to-indigo-600 bg-clip-text text-transparent">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Using the technologies and languages mentioned below, here are some of the projects I have built. If you want to get the source code from GitHub{" "}
            <FontAwesomeIcon icon={faGithub} className="inline-block w-6 h-6 mb-1 text-green-400" />, click on each project section!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 card-container">
          
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-full p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex relative">
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition duration-500 ease-in-out transform hover:scale-105 rounded-lg"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="absolute bottom-4 left-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-500"
                    >
                      <ExternalLinkIcon className="w-6 h-6" />
                    </a>
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
