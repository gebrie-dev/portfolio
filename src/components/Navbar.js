import React, { useState, useEffect } from "react";
import { DownloadIcon, SearchIcon, LightningBoltIcon, UserIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import SignInForm from "./SignInForm"; // Import your sign-in form component
import ImageGallery from 'react-image-gallery';
import ResumePdf from "../assets/resume.png";

const Navbar = () => {
  const [isResumeViewOpen, setIsResumeViewOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleResumeViewToggle = () => {
    setIsResumeViewOpen((prevState) => !prevState);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSignInToggle = () => {
    setIsSignInOpen((prevState) => !prevState);
  };

  const downloadResume = ResumePdf;
  const resumeImage = {
    thumbnail: downloadResume,
    description: 'Resume',
  };

  return (
    <header className="bg-gradient-to-r from-pink-900 to-indigo-600 fixed w-full z-10 py-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className={`relative inline-flex items-center border-0 focus:outline-none hover:bg-gray-600 rounded-full p-2 ${activeSection === "about" ? "text-white" : "text-gray-300"} cursor-pointer`}
          onClick={() => handleSetActiveSection("about")}
        >
        <img src="/favicon.ico" alt="Logo" className="h-12 w-12 rounded-full" />
        </Link>
        <span className="mx-2 h-6 md:h-16 text-gray-400 dark:text-pink-600 border-l border-gray-400 dark:border-gray-600 pl-2 ml-2"></span>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className={`relative ml-4 text-pink-300 cursor-pointer ${activeSection === "projects" ? "text-white" : "hover:text-white"} transition duration-300`}
          onClick={() => handleSetActiveSection("projects")}
        >
          Projects
          {activeSection === "projects" && (<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500" style={{ bottom: "-7px" }}></span>
          )}
        </Link>

        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className={`relative ml-4 text-pink-300 cursor-pointer ${activeSection === "skills" ? "text-white" : "hover:text-white"} transition duration-300`}
          onClick={() => handleSetActiveSection("skills")}
        >
          Skills
          {activeSection === "skills" && (<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-t-md" style={{ bottom: "-7px" }}></span>
          )}
        </Link>

        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          duration={500}
          className={`relative ml-4 text-pink-300 cursor-pointer ${activeSection === "testimonials" ? "text-white" : "hover:text-white"} transition duration-300`}
          onClick={() => handleSetActiveSection("testimonials")}
        >
          Feedback
          {activeSection === "testimonials" && (<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-t-md" style={{ bottom: "-7px" }}></span>
          )}
        </Link>

        <div className="flex items-center ml-auto space-x-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={`inline-flex items-center border-b-4 border-transparent hover:border-blue-500 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4 md:mt-0 cursor-pointer ${activeSection === "contact" ? "text-white" : "text-gray-300"}`}
            aria-label="Hire Me"
          >
            Hire Me
            <LightningBoltIcon className="w-6 h-6 ml-2" />
          </Link>
          {/* Sign-in Icon */}
          <button onClick={handleSignInToggle} className="flex items-center text-red-400 hover:text-white focus:outline-none ml-auto bg-transparent">
            <svg class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg><span className="text-base font-medium">Sign In</span>
          </button>

          {/* Sign-in Form Overlay */}
          {isSignInOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <SignInForm />
                <button onClick={handleSignInToggle} className="mt-4 text-red-400  focus:outline-none">Close</button>
              </div>
            </div>
          )}
          <button
            onClick={handleResumeViewToggle}
            className="inline-flex items-center bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4 md:mt-0"
          >
            CV
            <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="7" cy="7" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </button>

          

          <div className="flex items-center ml-4 relative">
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-transparent border-b border-white focus:outline-none text-white"
              />
            ) : null}
            <SearchIcon
              className="w-6 h-6 mr-2 text-white cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search input visibility
            />
          </div>

          {isResumeViewOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
              <div className="bg-white p-4 max-w-2xl max-h-screen overflow-y-auto">
                <button
                  onClick={handleResumeViewToggle}
                  className="text-red-400  focus:outline-none mt-4"
                >
                  <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                </button>
                <ImageGallery items={[resumeImage]} />

                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = downloadResume;
                    link.download = 'resume.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4"
                >
                  <DownloadIcon className="w-5 h-5 mr-1" />
                  Download
                </button>

              </div>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
