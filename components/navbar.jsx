import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Rashid Khan</h3>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white relative group transition-colors duration-300"
              >
                <span className="relative">
                  About Me
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white relative group transition-colors duration-300"
              >
                <span className="relative">
                  Education
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white relative group transition-colors duration-300"
              >
                <span className="relative">
                  Projects
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white relative group transition-colors duration-300"
              >
                <span className="relative">
                  Skills
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white relative group transition-colors duration-300"
              >
                <span className="relative">
                  Tools
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/Khanr7433"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rashid-khan-820628266"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
