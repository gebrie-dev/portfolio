import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer.js";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import BlogEditor from "./components/admin/BlogEditor";
import Login from "./components/Login";
import LoadingSpinner from "./components/LoadingSpinner";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // Update document class for global styles
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const downloadResume = "../assets/resume.png";

  if (isLoading) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`min-h-screen transition-colors duration-300 ${
            isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <title>Gabby - Professional Portfolio</title>
          <meta
            name="description"
            content="Professional developer portfolio showcasing projects, skills, and experience"
          />
          <meta
            name="keywords"
            content="developer, portfolio, web development, software engineer"
          />
          <meta property="og:title" content="Gabby - Professional Portfolio" />
          <meta
            property="og:description"
            content="Professional developer portfolio showcasing projects, skills, and experience"
          />
          <meta property="og:type" content="website" />

          <Navbar
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            downloadResume={downloadResume}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About isDarkMode={isDarkMode} />
                  <Skills isDarkMode={isDarkMode} />
                  <Projects isDarkMode={isDarkMode} />
                  <Blog isDarkMode={isDarkMode} />
                  <Contact isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
            <Route
              path="/blog/:slug"
              element={<BlogPost isDarkMode={isDarkMode} />}
            />
            <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
            <Route
              path="/blog/new"
              element={
                <ProtectedRoute>
                  <BlogEditor isDarkMode={isDarkMode} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog/edit/:slug"
              element={
                <ProtectedRoute>
                  <BlogEditor isDarkMode={isDarkMode} isEdit={true} />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer isDarkMode={isDarkMode} />

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-colors duration-300 ${
              isDarkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </motion.main>
      </AnimatePresence>
    </Router>
  );
};

export default App;
