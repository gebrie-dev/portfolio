import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub, faFacebook, faInstagram, faLinkedin, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="relative bg-purple-900 text-black py-8  overflow-hidden">
      <svg
        className="absolute top-0 left-0 right-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#4b5c80" />
            <stop offset="100%" stopColor="#f1f5f909" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto flex flex-wrap justify-between items-center relative z-10">
        <div className="w-full px-6 mb-6">
        <img src="/favicon.ico" alt="Logo" className="h-12 w-12 rounded-full" />
          <h2 className="sm:text-3xl text-3xl font-medium title-font text-black-rose mb-12 text-center">
            <span className="bg-gradient-to-r from-black to-rose-500 bg-clip-text text-transparent">Follow Me </span>
          </h2>
          <div className="flex justify-center space-x-4 mt-4"><a href="https://t.me/Gabi12boy" target="_blank" rel="noopener noreferrer" title="Telegram: @Gabi12boy" className="w-32 h-24 lg:w-40 lg:h-30 flex flex-col items-center justify-center rounded-lg bg-blue-400 hover:bg-blue-500 border-2 border-white transition duration-300 ease-in-out transform hover:scale-110">
              <FontAwesomeIcon icon={faTelegram} className="text-white text-3xl lg:text-4xl mb-2" />
              <div>Gabi</div>
              <div>@Gabi12boy</div>
            </a><a href="#" target="_blank" rel="noopener noreferrer" title="Facebook: YourUsername" className="w-32 h-24 lg:w-40 lg:h-30 flex flex-col items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 border-2 border-white transition duration-300 ease-in-out transform hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl lg:text-4xl mb-2" />
              <div>Gabi</div>
            </a><a href="https://www.instagram.com/gebrie10?igsh=MWRxcXhkdXFqNDIzOA==" target="_blank" rel="noopener noreferrer" title="Instagram: @gebrie10" className="w-32 h-24 lg:w-40 lg:h-30 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:bg-pink-600 border-2 border-white transition duration-300 ease-in-out transform hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl lg:text-4xl mb-2" />
              <div>Gabi</div>
              <div>@gebrie10</div>
            </a><a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn: YourUsername" className="w-32 h-24 lg:w-40 lg:h-30 flex flex-col items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-800 border-2 border-white transition duration-300 ease-in-out transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl lg:text-4xl mb-2" />
              <div>Gabi</div>
            </a><a href="#" target="_blank" rel="noopener noreferrer" title="WhatsApp: YourPhoneNumber" className="w-32 h-24 lg:w-40 lg:h-30 flex flex-col items-center justify-center rounded-lg bg-green-400 hover:bg-green-500 border-2 border-white transition duration-300 ease-in-out transform hover:scale-110">
              <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl lg:text-4xl mb-2" />
              <div>Gabi</div>
              <div>0914080045</div>
            </a><a href="#" target="_blank" rel="noopener noreferrer" title="Twitter: YourUsername" className="w-32 h-24 lg:w-40 lg:h-30 flex flex-col items-center justify-center rounded-lg bg-blue-400 hover:bg-blue-500 border-2 border-white transition duration-300 ease-in-out transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl lg:text-4xl mb-2" />
              <div>Gabi</div>
            </a>
          </div>

        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          {/* Products */}
          <div className="text-center text-white md:text-left">
            <h2 className="text-xl font-semibold mb-4">Technolgies</h2>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><a href="#" className="hover:text-blue-500">mongodb</a>
              </li>
              <li><a href="#" className="hover:text-blue-500">Tailwind css</a>
              </li>
              <li><a href="#" className="hover:text-blue-500">VS Code</a>
              </li>
              <li><a href="#" className="hover:text-blue-500">node</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white mb-4">Links</h2>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><svg class="h-6 w-6 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M14.5 9a3.5 4 0 1 0 0 6" /></svg><a href="#" className="hover:text-red-200">Copyright 2024</a>
              </li>
              <li><a href="#" className="hover:text-red-200">Privacy Policy</a>
              </li>
              <li><a href="#contact" className="hover:text-red-200">Sitemap</a>
              </li>
              <li><a href="https://github.com/gebrie-dev" target="blank" className
                ="hover:text-red-200">
                <FontAwesomeIcon icon={faGithub} />GitHub</a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl text-white font-semibold mb-10">Contact Information</h2>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><a href="mailto:gabiwagnew@gmail.com" className="hover:text-blue-500"><FontAwesomeIcon icon={faEnvelope} /> gabiwagnew@gmail.com</a>
              </li>
              <li><a href="#" className="hover:text-blue-500"><FontAwesomeIcon icon={faPhone} /> +251914080045</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

