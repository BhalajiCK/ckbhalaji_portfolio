import React from 'react';
import TimelineItem from './TimelineItem';
import useScrollAnimation from '../hooks/useScrollAnimation';

// AGENT_NOTE: User should update this sample education data.
const educationData = [
  {
    id: 1,
    institution: "University of Advanced Technology",
    degree: "M.S. in Artificial Intelligence",
    duration: "2020 - 2022",
    description: "Focused on machine learning, neural networks, and NLP. Thesis on generative adversarial networks for creative content generation. (Sample text)",
    logoUrl: "https://placehold.co/100x100/1e3a8a/f0f0f0?text=UoAT&font=raleway",
    accentColor: "bg-primary-deep-blue", // Tailwind class for the dot
  },
  {
    id: 2,
    institution: "State College of Engineering",
    degree: "B.S. in Computer Science",
    duration: "2016 - 2020",
    description: "Graduated with honors. Key coursework in data structures, algorithms, and software engineering principles. Led the university coding club. (Sample text)",
    logoUrl: "https://placehold.co/100x100/7c3aed/f0f0f0?text=SCE&font=raleway",
    accentColor: "bg-primary-purple",
  },
  {
    id: 3,
    institution: "Online Coding Academy",
    degree: "Advanced Web Development Bootcamp",
    duration: "2015",
    description: "Intensive program covering full-stack web development, including modern JavaScript frameworks and backend technologies. (Sample text)",
    logoUrl: "https://placehold.co/100x100/f472b6/111827?text=OCA&font=raleway",
    accentColor: "bg-accent-pink",
  }
];

const Education = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="education" className="py-20 md:py-28 bg-light-gray text-dark-gray overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ease-out
                      ${isTitleVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-deep-blue">
            My Education
          </h2>
          <div className="w-24 h-1.5 bg-accent-pink mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            {/* AGENT_COMMENT: Sample text, please personalize. */}
            A timeline of my academic and key learning milestones that shaped my expertise.
          </p>
        </div>

        {educationData.length > 0 ? (
          <div className="relative max-w-full md:max-w-3xl mx-auto md:py-4"> {/* py-4 for desktop to give space for first/last dot */}
            {/* Desktop central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
            {/* Mobile left line */}
            <div className="absolute left-4 sm:left-[1.125rem] top-0 bottom-0 w-0.5 bg-gray-300 block md:hidden" aria-hidden="true"></div>

            <div className="space-y-0"> {/* space-y-0 because mb is on TimelineItem */}
              {educationData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">Education details coming soon.</p>
        )}
      </div>
    </section>
  );
};

export default Education;
