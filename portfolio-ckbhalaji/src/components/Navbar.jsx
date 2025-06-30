// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu, useful for link clicks
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor jump
    setActiveLink(sectionId);
    closeMobileMenu();

    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Calculate offset considering the navbar height
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70; // Fallback height
      const sectionTop = sectionElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      setIsScrolled(window.scrollY > 50);

      // Active link highlighting
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let currentSection = ''; // Default to no active section
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // Section is active if its top is within a range from the top of the viewport (adjusted for navbar)
          // and it's not entirely below the viewport.
          if (rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight + 50) {
            currentSection = sectionId;
            break;
          }
        }
      }
      // If no section is perfectly in view (e.g., at the very bottom of the page),
      // try to keep the last known active section or default to home if at top.
      if (currentSection) {
        setActiveLink(currentSection);
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) { // Near bottom
        setActiveLink('contact'); // Default to contact if near bottom and no other section active
      } else if (window.scrollY < 200) { // Near top
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // TODO: User needs to place their resume in the `public` folder
  // and update this path, or use an absolute URL.
  const resumeUrl = "/C_K_BHALAJI_Resume.pdf"; // Example: public/C_K_BHALAJI_Resume.pdf

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavLinkClick(e, 'home')}>
          CK<span>Bhalaji</span>.
        </a>

        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-menu-list"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="nav-menu-list" className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li className="nav-item" key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a
              href={resumeUrl}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu} // Close menu if open
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
