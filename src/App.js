import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer.js";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const downloadResume = "../assets/resume.png";
  return (
    <main className={`text-pink-400 body-font ${isDarkMode ? "dark" : ""}`}>
      <title>gabby</title>
      <meta name="description" content="developer portfolio" />
      <Navbar toggleDarkMode={toggleDarkMode} downloadResume={downloadResume} />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      
    </main>
  );
};

export default App;
