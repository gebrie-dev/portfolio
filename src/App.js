import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className={`text-pink-400 body-font ${isDarkMode ? "dark" : ""}`}>
      
        <title>gabby</title>
        <meta name="description" content="A brief description of your portfolio" />
    
      <Navbar toggleDarkMode={toggleDarkMode} />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default App;

