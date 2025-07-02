import React from 'react';
import { FaReact, FaJsSquare, FaNodeJs, FaPython, FaPalette, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiThreedotjs, SiVite } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Adjusted path

// Placeholder image URL - User should replace this
const placeholderProfileImage = "https://placehold.co/400x400/7c3aed/f3f4f6?text=J.V.&font=raleway";
// AGENT_NOTE: Remind user to replace 'placeholderProfileImage' with their actual profile image URL.

const skills = [
  { name: "React", icon: <FaReact size="1.2em" className="mr-2" />, color: "text-sky-500", bgColor: "bg-sky-500" },
  { name: "JavaScript (ES6+)", icon: <FaJsSquare size="1.2em" className="mr-2" />, color: "text-yellow-400", bgColor: "bg-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 size="1.2em" className="mr-2" />, color: "text-orange-500", bgColor: "bg-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size="1.2em" className="mr-2" />, color: "text-blue-600", bgColor: "bg-blue-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size="1.2em" className="mr-2" />, color: "text-teal-400", bgColor: "bg-teal-400" },
  { name: "Three.js / R3F", icon: <SiThreedotjs size="1.2em" className="mr-2" />, color: "text-purple-500", bgColor: "bg-purple-500" },
  { name: "Node.js", icon: <FaNodeJs size="1.2em" className="mr-2" />, color: "text-green-500", bgColor: "bg-green-500" },
  { name: "Vite", icon: <SiVite size="1.2em" className="mr-2" />, color: "text-purple-400", bgColor: "bg-purple-400" },
  { name: "Python", icon: <FaPython size="1.2em" className="mr-2" />, color: "text-blue-400", bgColor: "bg-blue-400" },
  { name: "UI/UX Design", icon: <FaPalette size="1.2em" className="mr-2" />, color: "text-pink-500", bgColor: "bg-pink-500" },
  // Add more skills as needed
];

const About = () => {
  const [imgRef, isImgVisible] = useScrollAnimation({ threshold: 0.2 });
  const [textRef, isTextVisible] = useScrollAnimation({ threshold: 0.2 });
  // For individual skill animation, we can apply the hook to the parent `div.flex-wrap`
  // or rely on the parent textRef animation to make them appear, then use CSS stagger.
  // The existing inline style animationDelay on skills will work once the parent is visible and animated.

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-dark-gray overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title - can also have its own scroll animation if desired */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-deep-blue">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-accent-pink mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
          {/* Column 1: Image */}
          <div
            ref={imgRef}
            className={`md:col-span-2 w-full max-w-sm mx-auto md:mx-0 transition-all duration-1000 ease-out
                        ${isImgVisible ? 'opacity-100 translate-x-0 animate-fade-in' : 'opacity-0 -translate-x-10'}`}
            style={{ animationDelay: '0.2s' }} // CSS animation delay
          >
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-accent-pink to-accent-teal rounded-lg blur-md
                             opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt
                             ${isImgVisible ? 'opacity-50' : 'opacity-0'}`}></div>
              <img
                src={placeholderProfileImage}
                alt="Jules Verne - Profile Placeholder"
                className="relative rounded-lg shadow-xl object-cover w-full h-auto
                           border-4 border-transparent group-hover:border-accent-soft-yellow transition-all duration-300"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              {/* AGENT_COMMENT: Image above is a placeholder. Replace with your actual profile picture. */}
              (Replace with your profile picture)
            </p>
          </div>

          {/* Column 2: Text content (Bio & Skills) */}
          <div
            ref={textRef}
            className={`md:col-span-3 transition-all duration-1000 ease-out
                        ${isTextVisible ? 'opacity-100 translate-x-0 animate-fade-in' : 'opacity-0 translate-x-10'}`}
            style={{ animationDelay: '0.4s' }} // CSS animation delay
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-deep-blue mb-5">
              My Journey & Philosophy
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Hello! I'm <span className="font-semibold text-accent-pink">Jules Verne</span> (this is a sample name), an AI Software Engineer driven by a passion for crafting intelligent,
              user-centric applications. My exploration into technology began with a simple curiosity about how things work,
              which quickly evolved into a deep-seated desire to build and innovate.
              {/* AGENT_COMMENT: The bio text above and below is sample content. Please replace it with your personal bio. */}
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed text-base md:text-lg">
              I specialize in developing full-stack solutions with a keen eye for detail and performance.
              I believe that the best technology is that which feels intuitive and seamlessly integrates into our lives.
              My goal is to not just write code, but to create meaningful experiences.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-primary-deep-blue mb-6">Core Competencies</h3>
            <div className={`flex flex-wrap gap-3 ${isTextVisible ? 'animate-fade-in' : 'opacity-0'}`}
                 style={{ animationDelay: isTextVisible ? '0.6s' : '0s' }}> {/* Delay skills container slightly more */}
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center ${skill.bgColor} bg-opacity-10 ${skill.color} border ${skill.color} border-opacity-30
                              py-2.5 px-5 rounded-lg text-sm font-medium group
                              transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                              ${isTextVisible ? 'animate-fade-in' : 'opacity-0'}`} // Individual fade for skills
                  data-interactive="true"
                  // Stagger animation for each skill badge after the parent container starts animating
                  style={{ animationDelay: isTextVisible ? `${0.7 + index * 0.1}s` : '0s', animationFillMode: 'backwards' }}
                >
                  {React.cloneElement(skill.icon, { className: `${skill.icon.props.className || ''} group-hover:scale-110 transition-transform duration-300` })}
                  <span className="ml-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```
I've refined the styling for skill badges, added more specific icons, adjusted column spans for a 2/5 and 3/5 layout on medium screens, and added a subtle animated gradient border effect on the profile image hover. I also added `AGENT_NOTE` and `AGENT_COMMENT` to remind the user about placeholders. The skill badges now have a slightly more distinct style and a staggered animation delay (though this relies on the `animate-fade-in` class being generally available for now).

The "fade-in on scroll" part is crucial. The current `animate-fade-in` class will trigger on load. To make it on scroll, we'd need JavaScript, typically using the Intersection Observer API. I'll create a simple custom hook for this, `useScrollAnimation.js`, and then apply it in `About.jsx`.

**`portfolio-website/src/hooks/useScrollAnimation.js`:**
```javascript
import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (options) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optional: stop observing after first animation
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current && observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

export default useScrollAnimation;
```
Now, create this hook.
