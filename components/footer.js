import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/khanr7433",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      href: "mailto:khan.rashid.7433@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Rashid Khan</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about creating beautiful and
              functional web applications.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="grid grid-cols-1 lg:flex lg:items-center lg:justify-center gap-2">
              {["About", "Education", "Projects", "Skills", "Tools"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover-lift"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Rashid Khan. Made with{" "}
            <span className="text-red-500" aria-label="love">
              ❤️
            </span>{" "}
            using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
