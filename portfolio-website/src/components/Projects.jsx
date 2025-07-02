import React from 'react';
import ProjectCard from './ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

// AGENT_NOTE: User should update this sample project data with their actual projects.
// Ensure imageUrl, githubUrl, liveDemoUrl are personalized.
// Using 4 projects as a good number for typical layouts. Max 6 as per prompt.
const sampleProjectsData = [
  {
    id: 1,
    title: "AI Powered Chatbot",
    description: "A conversational AI chatbot built with React and a custom NLP backend. Features real-time responses and intent recognition. (Sample text)",
    imageUrl: "https://placehold.co/600x400/1e3a8a/f0f0f0?text=Project+Alpha&font=raleway",
    tags: ["React", "Node.js", "AI/NLP", "WebSockets"],
    githubUrl: "#",
    liveDemoUrl: "#",
  },
  {
    id: 2,
    title: "Interactive Data Visualization",
    description: "A web platform for visualizing complex datasets using D3.js and Three.js, offering dynamic filtering and 3D views. (Sample text)",
    imageUrl: "https://placehold.co/600x400/7c3aed/f0f0f0?text=Project+Beta&font=raleway",
    tags: ["D3.js", "Three.js", "Data Science", "Frontend"],
    githubUrl: "#",
    liveDemoUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with features like product management, user authentication, and Stripe integration. (Sample text)",
    imageUrl: "https://placehold.co/600x400/f472b6/111827?text=Project+Gamma&font=raleway",
    tags: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    githubUrl: "#",
    liveDemoUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website (This One!)",
    description: "This very website! A showcase of my skills and projects, built with React, Three.js, and Tailwind CSS, focusing on modern UI/UX and animations.",
    imageUrl: "https://placehold.co/600x400/2dd4bf/111827?text=This+Portfolio&font=raleway",
    tags: ["React", "Three.js", "Tailwind CSS", "Vite"],
    githubUrl: "#", // AGENT_COMMENT: Link to this repo eventually
    liveDemoUrl: "#", // AGENT_COMMENT: Link to live site eventually
  },
];

// Component to wrap each card with its own scroll animation logic
const AnimatedProjectCard = ({ project, index }) => {
  // Initialize with a higher threshold so cards animate a bit later as they scroll into view
  const [cardRef, isCardVisible] = useScrollAnimation({ threshold: 0.15 }, true);
  const animationDelay = `${index * 0.1}s`; // Stagger delay for cards

  return (
    <div ref={cardRef} className="h-full"> {/* Ensure wrapper takes full height for card */}
      <ProjectCard project={project} isVisible={isCardVisible} animationDelay={animationDelay} />
    </div>
  );
};

const Projects = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 }, true);

  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-primary-purple to-dark-gray text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16" style={{ perspective: '1500px' }}> {/* Perspective for 3D card tilts */}
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ease-out
                      ${isTitleVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Recent Work
          </h2>
          <div className="w-24 h-1.5 bg-accent-teal mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            {/* AGENT_COMMENT: Sample text, please personalize. */}
            Here are a few projects I've worked on recently. Curious about the tech or process? Feel free to ask!
          </p>
        </div>

        {sampleProjectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-10">
            {/* Changed lg/xl to 2 columns for 4 items to look better. If 3 or 6 items, lg:grid-cols-3 is fine */}
            {sampleProjectsData.map((project, index) => (
              <AnimatedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">
            Exciting new projects are currently in development. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
