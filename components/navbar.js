"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "projects", "skills", "tools"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Rashid Khan</h3>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              {["about", "education", "projects", "skills", "tools"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => scrollToSection(e, section)}
                    className={`capitalize text-sm font-medium relative group ${
                      activeSection === section
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    } transition-colors duration-300`}
                  >
                    {section}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                        activeSection === section
                          ? "bg-blue-500 scale-x-100"
                          : "bg-white scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </a>
                )
              )}
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
}
