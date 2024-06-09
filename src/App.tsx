import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from './components/Section'; // Asegúrate de importar el componente
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AppBar from './components/AppBar/AppBar';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Resume', 'Skills', 'Portfolio', 'Contact'];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App overflow-hidden">
      <AppBar activeSection={activeSection} />
      <main>
        <Section title="Home" id="Home" className="text-white bg-black">
          <Home />
        </Section>
        <Section title="About" id="About" className="text-white bg-black">
          <About />
        </Section>
        <Section title="Resume" id="Resume" className="text-white bg-black">
          <Resume />
        </Section>
        <Section title="Skills" id="Skills" className="text-white bg-black">
          <Skills />
        </Section>
        <Section title="Portfolio" id="Portfolio" className="text-white bg-black">
          <Portfolio />
        </Section>
        <Section title="Contact" id="Contact" className="text-white bg-black">
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;
