// src/components/Skills.jsx
import React from 'react';
import './Skills.css'; // Import the CSS file

const skillsCategorized = [
    {
        categoryTitle: "Programming Languages",
        skills: ["Java", "C", "Python"]
    },
    {
        categoryTitle: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
        categoryTitle: "Backend Development",
        skills: ["MySQL", "FastAPI", "PostgreSQL", "SQLAlchemy"]
    },
    {
        categoryTitle: "Tools & Platforms",
        skills: ["Git", "GitHub", "VS Code", "Postman"]
    }
];

const certificationsData = [
    "NPTEL: Privacy and Security in Online Social Media",
    "Coursera: Google UX Designer Professional Certificate",
    "NPTEL: Cloud Computing"
];

const SkillCategoryCard = ({ title, skills }) => (
  <div className="skill-card">
    <h3 className="skill-card-title">{title}</h3>
    <ul className="skill-list">
      {skills.map(skill => (
        <li key={skill} className="skill-item">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-heading" style={{marginBottom: '1rem'}}><span>&lt;</span> Technical Skills <span>/&gt;</span></h2>
        <p className="section-subheading" style={{marginBottom: '3rem'}}>A showcase of my technical proficiencies and certifications.</p>

        <div className="skills-grid">
          {skillsCategorized.map(category => (
            <SkillCategoryCard
              key={category.categoryTitle}
              title={category.categoryTitle}
              skills={category.skills}
            />
          ))}
        </div>

        <div className="certifications-heading-container">
            <h3 className="certifications-heading">Certifications</h3>
        </div>
        <div className="certifications-list-container">
            <ul className="certifications-list">
                {certificationsData.map(cert => (
                    <li key={cert} className="certification-item">{cert}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
