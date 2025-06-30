// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; // Import the CSS file

const projectsData = [
  {
    title: "Lorry Link – Logistics Web Application",
    techStack: ["React (Vite)", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    description: "Built a full-stack logistics platform with role-based dashboards for Admin, Driver, and Goods Owner. Designed a React Vite frontend with theme switching, protected routing, and responsive UI. Developed RESTful APIs using FastAPI and PostgreSQL for authentication, bidding, load and dispute management.",
    liveLink: "#", // TODO: User to update this link
    repoLink: "https://github.com/CKBhalaji/LorryLink" // TODO: User to verify/update this link
  },
  {
    title: "Job Portal Web Application",
    techStack: ["ReactJS", "HTML", "CSS", "JavaScript"],
    description: "Developed a responsive frontend for a job portal enabling user registration, job search, and online application submission. Integrated recruiter features including job posting, dynamic job listing updates, and reusable UI components. Implemented client-side routing and form validation for improved UX and navigation flow.",
    liveLink: "#", // TODO: User to update this link
    repoLink: "https://github.com/CKBhalaji/JobPortal" // TODO: User to verify/update this link
  },
  {
    title: "Real-Time Traffic Sign Detection (YOLOv8)",
    techStack: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Colab"],
    description: "Built and trained a custom deep learning model using YOLOv8 for real-time traffic sign detection and classification. Enhanced road safety by accurately recognizing regulatory and warning signs in live video feeds. Optimized performance through dataset preprocessing, label balancing, and OpenCV integration.",
    publicationLink: "10.1109/ICISC60378.2024.10860011",
    repoLink: "https://github.com/CKBhalaji/TrafficSignDetection-YOLOv8" // TODO: User to verify/update this link
  }
  // Add more projects here as needed
];

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-box-arrow-up-right link-icon" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-card-inner-content">
      <h3 className="project-title">{project.title}</h3>
      <div className="project-tech-stack">
        {project.techStack.map(tech => (
          <span key={tech} className="project-tech-item">
            {tech}
          </span>
        ))}
      </div>
      <p className="project-description">{project.description}</p>
    </div>
    <div className="project-links">
        {project.liveLink && project.liveLink !== "#" &&
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Live Demo <LinkIcon />
          </a>}
        {project.repoLink && project.repoLink !== "#" &&
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View Code <LinkIcon />
          </a>}
        {project.publicationLink &&
          <a href={`https://doi.org/${project.publicationLink}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Publication <LinkIcon />
          </a>}
      </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-heading" style={{marginBottom: '1rem'}}><span>&lt;</span> My Projects <span>/&gt;</span></h2>
        <p className="section-subheading" style={{marginBottom: '3rem'}}>A selection of projects I've developed and contributed to.</p>
        <div className="projects-grid">
          {projectsData.map((project, index) => ( // Added index for animation delay if needed
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
