import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AppBar from './components/AppBar/AppBar';
import Education from './components/Education';
import Experience from './components/Experience';
import MainProjects from './components/MainProjects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Personalize from './components/Personalize';
import SimpleCv from './components/SimpleCv';
import { throttle } from 'lodash';
import { LanguageProvider } from './i18n/LanguageContext';

function isSimpleHash() {
  return window.location.hash.replace('#', '').toLowerCase() === 'simple';
}

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isSimple, setIsSimple] = useState(isSimpleHash);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = ['Languages', 'Home', 'About', 'Education', 'Personalize', 'Experience', 'MainProjects', 'Certifications', 'Skills', 'Portfolio', 'Contact'];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition + 50) {
          setActiveSection(section);
          break;
        }
      }
    }, 200);

    document.addEventListener('scroll', handleScroll, { passive: true });
    const onHashChange = () => setIsSimple(isSimpleHash());
    window.addEventListener('hashchange', onHashChange);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    if (isSimple) {
      window.scrollTo(0, 0);
      return;
    }
    const id = window.location.hash.replace('#', '');
    if (!id || id.toLowerCase() === 'simple') return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [isSimple]);

  return (
    <LanguageProvider>
      {isSimple ? (
        <SimpleCv />
      ) : (
      <div className="App">
        <AppBar activeSection={activeSection} />
        <main>
          <Section title="Languages" id="Languages">
            <Languages />
          </Section>

          <Section title="Home" id="Home">
            <Home />
          </Section>

          <Section title="About" id="About">
            <About />
          </Section>

          <Section title="Education" id="Education">
            <Education />
          </Section>

          <Section title="Personalize" id="Personalize" className="scroll-mt-16">
            <Personalize />
          </Section>

          <Section title="Experience" id="Experience" className="scroll-mt-16">
            <Experience />
          </Section>

          <Section title="Main Projects" id="MainProjects">
            <MainProjects />
          </Section>

          <Section title="Certifications" id="Certifications">
            <Certifications />
          </Section>

          <Section title="Skills" id="Skills">
            <Skills />
          </Section>

          <Section title="Portfolio" id="Portfolio">
            <Portfolio />
          </Section>

          <Section title="Contact" id="Contact" className="scroll-mt-16">
            <Contact />
          </Section>
        </main>
      </div>
      )}
    </LanguageProvider>
  );
}

export default App;
