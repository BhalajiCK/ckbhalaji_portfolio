// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file

// SVGs defined for footer context. Ensure fill="currentColor" and consistent sizing.
const LinkedInIcon = () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11 6H5v7h3V9m-1.5-2.25A1.75 1.75 0 0 0 4.75 5A1.75 1.75 0 0 0 6.5 6.75A1.75 1.75 0 0 0 8.25 5A1.75 1.75 0 0 0 6.5 3.25M16.5 9H14v1.5c0 .83-.47 1.5-1.5 1.5S11 11.33 11 10.5V9h-3v7h3v-3.5c0-.83.47-1.5 1.5-1.5s1.5.67 1.5 1.5V16h3V9Z"/></svg>;
const GitHubIcon = () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.68-.22.68-.49c0-.24-.01-.86-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.53 2.34 1.09 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95c0-1.09.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.564 9.564 0 0 1 12 6.84c.85.004 1.73.114 2.55.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.6 1.03 2.69c0 3.85-2.34 4.69-4.57 4.94c.36.31.68.92.68 1.85c0 1.34-.01 2.42-.01 2.75c0 .27.18.58.69.49A10.004 10.004 0 0 0 22 12A10 10 0 0 0 12 2Z"/></svg>;
const EmailIcon = () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>;


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yourName = "C.K. Bhalaji";

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-social-media-links">
          <a href="https://linkedin.com/in/bhalaji-karunanithi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="footer-social-icon-link">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/CKBhalaji" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="footer-social-icon-link">
            <GitHubIcon />
          </a>
          <a href="mailto:bhalaji2003@gmail.com" aria-label={`Email ${yourName}`} className="footer-social-icon-link">
            <EmailIcon />
          </a>
        </div>
        <p className="footer-text-copyright">
          &copy; {currentYear} {yourName}. All Rights Reserved.
        </p>
        <p className="footer-text-attribution">
          Portfolio built with React & Vite. Design inspired by
          <a href="https://chiragchrg.netlify.app/" target="_blank" rel="noopener noreferrer"> ChiragChrg</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
