// src/components/Contact.jsx
import React from 'react';
import './Contact.css'; // Import the CSS file

const contactInfo = {
  email: "bhalaji2003@gmail.com",
  phone: "9789559266",
  linkedinUrl: "https://linkedin.com/in/bhalaji-karunanithi",
  linkedinHandle: "bhalaji-karunanithi", // For display text
  githubUrl: "https://github.com/CKBhalaji",
  githubHandle: "CKBhalaji" // For display text
};

// Updated SVGs to ensure they use currentColor and have a consistent structure
const EmailIcon = () => <svg className="contact-icon-svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>;
const PhoneIcon = () => <svg className="contact-icon-svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
const LinkedInIcon = () => <svg className="contact-icon-svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11 6H5v7h3V9m-1.5-2.25A1.75 1.75 0 0 0 4.75 5A1.75 1.75 0 0 0 6.5 6.75A1.75 1.75 0 0 0 8.25 5A1.75 1.75 0 0 0 6.5 3.25M16.5 9H14v1.5c0 .83-.47 1.5-1.5 1.5S11 11.33 11 10.5V9h-3v7h3v-3.5c0-.83.47-1.5 1.5-1.5s1.5.67 1.5 1.5V16h3V9Z"/></svg>;
const GitHubIcon = () => <svg className="contact-icon-svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.68-.22.68-.49c0-.24-.01-.86-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.53 2.34 1.09 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95c0-1.09.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.564 9.564 0 0 1 12 6.84c.85.004 1.73.114 2.55.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.6 1.03 2.69c0 3.85-2.34 4.69-4.57 4.94c.36.31.68.92.68 1.85c0 1.34-.01 2.42-.01 2.75c0 .27.18.58.69.49A10.004 10.004 0 0 0 22 12A10 10 0 0 0 12 2Z"/></svg>;


const ContactLinkItem = ({ href, icon, text, ariaLabel }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    aria-label={ariaLabel}
    className="contact-item-link"
  >
    <span className="contact-icon">{icon}</span>
    <span>{text}</span> {/* Wrap text in span for potential specific styling */}
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-heading" style={{marginBottom: '1rem'}}><span>&lt;</span> Get In Touch <span>/&gt;</span></h2>
        <p className="section-subheading contact-intro-text">
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>

        <div className="contact-content-wrapper">
          <div className="contact-grid">
            <ContactLinkItem
                href={`mailto:${contactInfo.email}`}
                icon={<EmailIcon />}
                text={contactInfo.email}
                ariaLabel={`Email me at ${contactInfo.email}`}
            />
            <ContactLinkItem
                href={`tel:+91${contactInfo.phone}`}
                icon={<PhoneIcon />}
                text={`+91 ${contactInfo.phone}`}
                ariaLabel={`Call me at +91 ${contactInfo.phone}`}
            />
            <ContactLinkItem
                href={contactInfo.linkedinUrl}
                icon={<LinkedInIcon />}
                text={`LinkedIn: /${contactInfo.linkedinHandle}`}
                ariaLabel="View my LinkedIn Profile"
            />
            <ContactLinkItem
                href={contactInfo.githubUrl}
                icon={<GitHubIcon />}
                text={`GitHub: /${contactInfo.githubHandle}`}
                ariaLabel="View my GitHub Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
