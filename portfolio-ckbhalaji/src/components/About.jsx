// src/components/About.jsx
import React from 'react';
import './About.css'; // Import the CSS file

const educationData = [
  {
    degree: "B.E. – Computer Science and Engineering",
    institution: "Velammal College of Engineering & Technology, Madurai",
    year: "Expected 2025",
    detailLabel: "CGPA:",
    detailValue: "8.26"
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Point Calimere International School",
    year: "2021",
    detailLabel: "Mark:",
    detailValue: "89%"
  },
  {
    degree: "SSLC (Secondary School)",
    institution: "Point Calimere International School",
    year: "2019",
    detailLabel: "Mark:",
    detailValue: "79.6%"
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Heading and Subheading are part of global styles / App.jsx structure if defined there, or can be here */}
        <h2 className="section-heading" style={{marginBottom: '1rem'}}><span>&lt;</span> About Me <span>/&gt;</span></h2>
        <p className="section-subheading" style={{marginBottom: '2.5rem'}}>My journey, passion, and educational background.</p>

        <div className="about-content-wrapper">
          <p className="about-summary">
            A B.E. Computer Science graduate (expected 2025) passionate about software development and web technologies.
            Skilled in full-stack development, debugging, and problem-solving.
            Experienced with the SDLC and collaborative team environments.
            Eager to apply technical skills in Java, ReactJS, and SQL to contribute to impactful projects and continuous learning.
          </p>

          <div className="education-heading-container">
            <h3 className="education-heading">Education</h3>
          </div>

          <div className="education-list">
            {educationData.map((edu, index) => (
              <div className="education-item" key={index}>
                <h4 className="degree-title">{edu.degree}</h4>
                <p className="institution">{edu.institution} | {edu.year}</p>
                <p className="details">
                    <span>{edu.detailLabel}</span> {edu.detailValue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
