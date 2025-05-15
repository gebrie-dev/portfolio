import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with MERN stack, featuring real-time inventory management and secure payment processing.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      category: "fullstack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      category: "frontend",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
      category: "frontend",
      featured: true,
    },
    {
      id: 4,
      title: "REST API Service",
      description:
        "A scalable REST API service with authentication, rate limiting, and comprehensive documentation.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.com",
      category: "backend",
      featured: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <CodeIcon
            className={`mx-auto inline-block w-10 mb-4 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto mb-8`}
          >
            Here are some of my recent projects that showcase my skills and
            experience. Each project is carefully crafted with attention to
            detail and best practices.
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 line-clamp-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } transition-colors duration-300`}
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-5 h-5 mr-2"
                      />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                      }`}
                    >
                      Live Demo
                      <ExternalLinkIcon className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
