import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Added FaEnvelope

// Placeholder map image URL
const placeholderMapImage = "https://placehold.co/800x400/f3f4f6/1e3a8a?text=Sample+Location+Map&font=raleway";
// AGENT_NOTE: User should replace 'placeholderMapImage' with an actual map image or an embedded map solution.

const socialLinks = [
  // AGENT_NOTE: User should replace '#' with their actual profile URLs.
  { name: "GitHub", icon: <FaGithub size="1.7em" />, url: "#", color: "hover:text-gray-800", brandColorClass: "text-gray-600" },
  { name: "LinkedIn", icon: <FaLinkedin size="1.7em" />, url: "#", color: "hover:text-blue-600", brandColorClass: "text-blue-500" },
  { name: "Twitter / X", icon: <FaTwitter size="1.7em" />, url: "#", color: "hover:text-sky-500", brandColorClass: "text-sky-400" },
  { name: "Email", icon: <FaEnvelope size="1.7em" />, url: "mailto:youremail@example.com", color: "hover:text-red-500", brandColorClass: "text-red-400" }, // AGENT_NOTE: Replace with actual email
];

const Contact = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const [formRef, isFormVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const [infoRef, isInfoVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({ success: false, message: '' });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus({ success: false, message: "Please fill in all fields." });
      return;
    }
    setIsSubmitting(true);
    setSubmissionStatus({ success: false, message: '' }); // Clear previous messages

    // AGENT_NOTE: Implement actual form submission logic here.
    // Example: using a timeout to simulate API call
    try {
      // Replace with your actual form submission (e.g., fetch to an API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form data submitted:", formData);
      setSubmissionStatus({ success: true, message: "Message sent successfully! I'll be in touch soon." });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus({ success: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus({ success: false, message: '' }), 5000); // Clear status message after 5s
    }
  };

  const inputFocusClasses = "focus:ring-2 focus:ring-accent-teal focus:border-accent-teal";
  const inputBaseClasses = `w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300
                           text-dark-gray placeholder-gray-400 focus:outline-none
                           transition-all duration-200 ease-in-out shadow-sm hover:border-gray-400 ${inputFocusClasses}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-light-gray text-dark-gray overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out
                      ${isTitleVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-deep-blue">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-accent-pink mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            {/* AGENT_COMMENT: Sample text, please personalize. */}
            I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-12 items-start">
          {/* Column 1: Contact Form (takes 3 parts on lg) */}
          <div
            ref={formRef}
            className={`lg:col-span-3 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200
                        transition-all duration-700 ease-out
                        ${isFormVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <h3 className="text-2xl font-semibold text-primary-deep-blue mb-6">Send Me A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="e.g., Ada Lovelace" className={inputBaseClasses} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="ada.lovelace@example.com" className={inputBaseClasses} required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Hello Jules, I'd like to discuss..." className={`${inputBaseClasses} min-h-[120px]`} required></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-accent-pink hover:bg-opacity-80 text-white font-semibold py-3.5 px-6 rounded-lg
                             text-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none
                             focus:ring-4 focus:ring-accent-pink focus:ring-opacity-50 shadow-md hover:shadow-lg
                             disabled:opacity-70 disabled:cursor-not-allowed`}
                  data-interactive="true"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submissionStatus.message && (
                <p className={`text-center text-sm font-medium mt-3 ${submissionStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </div>

          {/* Column 2: Social Links & Map (takes 2 parts on lg) */}
          <div
            ref={infoRef}
            className={`lg:col-span-2 space-y-10 transition-all duration-700 ease-out
                        ${isInfoVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: '0.25s' }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary-deep-blue mb-5">Connect & Follow</h3>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`${link.brandColorClass} ${link.color} transition-transform duration-300 transform hover:scale-110 flex items-center space-x-2 group`}
                    data-interactive="true"
                  >
                    {link.icon}
                    <span className="text-sm font-medium text-gray-600 group-hover:underline">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-deep-blue mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2.5 text-accent-teal" size="1.3em" /> Location
              </h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {/* AGENT_COMMENT: Sample text, please personalize. */}
                Currently based in a vibrant tech city, but I collaborate with teams and clients globally.
                Let's connect regardless of where you are!
              </p>
              <div className="rounded-lg shadow-xl overflow-hidden border-2 border-accent-teal group">
                <img
                  src={placeholderMapImage}
                  alt="Sample Location Map"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
               <p className="text-xs text-gray-500 mt-2 text-center">
                {/* AGENT_COMMENT: Image above is a placeholder. */}
                (Conceptual map representation)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
