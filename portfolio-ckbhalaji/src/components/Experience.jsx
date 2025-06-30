// src/components/Experience.jsx
import React from 'react';
import './Experience.css'; // Import the CSS file

const experienceDetails = [ // Changed to array to allow for future expansion easily
  {
    role: "MERN Stack Development Intern",
    company: "Reccsar Private Limited",
    duration: "July 2023",
    responsibilities: [
      "Gained practical experience in MERN stack development, focusing on responsive front-end layout using Flexbox and component-based design.",
      "Collaborated in a team to develop a Basic Expense Tracker web application, implementing core functionality using MongoDB, Express.js, React, and Node.js.",
      "Applied debugging and testing practices to ensure application responsiveness across different devices.",
      "Built a personal portfolio website showcasing internship learnings and clean UI design principles using HTML, CSS, and hosted it via GitHub Pages."
    ]
  }
  // If more experiences are added, they would be new objects in this array.
];

const ExperienceItemCard = ({ experience }) => (
  <div className="experience-card">
    <h3 className="role-title">{experience.role}</h3>
    <p className="company-name">{experience.company}</p>
    <p className="duration">{experience.duration}</p>
    <ul className="experience-responsibilities">
      {experience.responsibilities.map((item, index) => (
        <li key={index} className="responsibility-item">{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  // If there's no experience data, we can choose to render nothing or a placeholder.
  // For semantic correctness and navigation, the section should exist if it's in the nav.
  // It can be visually empty or have a "No experience yet" message.
  if (experienceDetails.length === 0) {
    return (
      <section id="experience" className="experience-section" style={{ minHeight: 'auto', padding: '2rem 0' }}> {/* Minimal section if empty */}
        <div className="container">
           <h2 className="section-heading" style={{marginBottom: '1rem'}}><span>&lt;</span> Internship Experience <span>/&gt;</span></h2>
           <p className="section-subheading" style={{marginBottom: '1rem'}}>No professional experience listed at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-heading" style={{marginBottom: '1rem'}}><span>&lt;</span> Internship Experience <span>/&gt;</span></h2>
        <p className="section-subheading" style={{marginBottom: '3rem'}}>My professional work and learning journey.</p>
        <div className="experience-content-wrapper">
          {experienceDetails.map((exp, index) => (
            // Pass index for potential animation staggering if CSS is set up for it
            <ExperienceItemCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
