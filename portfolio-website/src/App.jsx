import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-gray min-h-screen flex flex-col"> {/* Added flex flex-col */}
      <main className="flex-grow"> {/* Added flex-grow to main */}
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
