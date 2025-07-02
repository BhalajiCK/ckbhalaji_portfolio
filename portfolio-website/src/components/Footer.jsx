import React from 'react';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa'; // Using FaReact as a placeholder logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // AGENT_NOTE: User should customize these links and their URLs.
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // AGENT_NOTE: User should replace '#' with their actual profile URLs.
  const socialIcons = [
    { name: "GitHub", IconComponent: FaGithub, url: "#", ariaLabel: "GitHub Profile" },
    { name: "LinkedIn", IconComponent: FaLinkedin, url: "#", ariaLabel: "LinkedIn Profile" },
    // Add more social icons if desired, e.g., Twitter, Dribbble
  ];

  return (
    <footer className="bg-dark-gray text-gray-400 pt-12 pb-8 border-t-2 border-accent-pink print:hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1: Logo and Copyright */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <a href="#hero" className="inline-block mb-3 group" aria-label="Back to top of page">
              {/* AGENT_NOTE: User should replace this with their actual logo (SVG or img tag). */}
              <FaReact size="2.8em" className="text-accent-teal group-hover:text-accent-pink transition-colors duration-300" />
            </a>
            <p className="text-sm">
              &copy; {currentYear} <span className="font-semibold text-gray-200">Jules Verne</span>.
              {/* AGENT_NOTE: User should replace "Jules Verne" with their name. */}
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h5 className="font-semibold text-gray-200 mb-3.5 text-md uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-accent-teal transition-colors duration-200 text-sm"
                    data-interactive="true"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect / Social Links */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h5 className="font-semibold text-gray-200 mb-3.5 text-md uppercase tracking-wider">Connect</h5>
            <div className="flex justify-center sm:justify-start space-x-5">
              {socialIcons.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-400 hover:text-accent-teal transition-colors duration-300 transform hover:scale-110"
                  data-interactive="true"
                >
                  <social.IconComponent size="1.6em" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Credits / Source Link */}
          <div className="lg:col-span-1 text-center sm:text-left">
             <h5 className="font-semibold text-gray-200 mb-3.5 text-md uppercase tracking-wider">Credits</h5>
             <p className="text-sm">
                Built with React, Tailwind CSS, and Three.js.
                <br />
                <a
                  href="#" // AGENT_NOTE: User should replace with actual repo link.
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-teal underline"
                  data-interactive="true"
                >
                  View Source on GitHub
                </a>
              </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-xs">
          <p>
            {/* AGENT_COMMENT: Optional: Add a small, thoughtful quote or a last call to action here. */}
            This portfolio is a representation of skills and projects. All placeholder content should be replaced by the user.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
