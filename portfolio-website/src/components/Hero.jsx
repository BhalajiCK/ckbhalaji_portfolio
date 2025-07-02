import React from 'react';
import RotatingShapeCanvas from './RotatingShapeCanvas';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden
                 bg-gradient-to-br from-primary-deep-blue via-primary-purple to-accent-pink text-white p-4"
    >
      {/* The 3D animation canvas is positioned absolutely by its own styles */}
      <RotatingShapeCanvas />

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Using Tailwind's 'animate-fade-in' which should be configured in tailwind.config.js */}
        {/* Inline styles for animation-delay and fill-mode are used for simplicity here. */}
        {/* These could be converted to Tailwind utility classes if animation delay utilities are configured. */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-3 sm:mb-4 animate-fade-in"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)', animationDelay: '0.1s', animationFillMode: 'backwards' }}>
          Jules Verne
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 animate-fade-in"
           style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          AI Software Engineer & Visionary
        </p>
        <p className="text-md sm:text-lg md:text-xl max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 text-gray-200 animate-fade-in"
           style={{ animationDelay: '0.7s', animationFillMode: 'backwards' }}>
          Crafting intelligent solutions and exploring the frontiers of technology.
          Passionate about building impactful AI-driven applications. (This is sample text).
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
             style={{ animationDelay: '1.0s', animationFillMode: 'backwards' }}>
          <button
            className="bg-accent-teal hover:bg-opacity-80 text-primary-deep-blue font-semibold py-3 px-6 sm:px-8 rounded-lg text-lg
                       transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none
                       focus:ring-4 focus:ring-accent-teal focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            data-interactive="true" // For custom cursor hover effect
          >
            View My Work
          </button>
          <a
            href="#contact" // Assuming a contact section with id="contact" for smooth scroll
            className="bg-transparent hover:bg-accent-pink border-2 border-accent-pink text-accent-pink hover:text-white font-semibold py-3 px-6 sm:px-8 rounded-lg text-lg
                       transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none
                       focus:ring-4 focus:ring-accent-pink focus:ring-opacity-50 shadow-lg hover:shadow-xl flex items-center justify-center"
            data-interactive="true" // For custom cursor hover effect
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
