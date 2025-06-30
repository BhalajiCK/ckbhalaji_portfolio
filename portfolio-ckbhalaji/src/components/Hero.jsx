// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  // Function to handle smooth scroll for hero buttons
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          C.K. BHALAJI {/* Updated to match resume name format */}
        </h1>
        <p className="hero-tagline">
          Full-Stack Developer | Software Engineer
        </p>
        <p className="hero-description">
          A B.E. Computer Science graduate passionate about software development and web technologies. Skilled in full-stack development, debugging, and problem-solving.
        </p>
        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
