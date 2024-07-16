import "@mantine/core/styles.css";
import { MantineProvider, Title, Container } from '@mantine/core';
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Header from "./components/Header";
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [visibleSection, setVisibleSection] = useState('AboutMe');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['AboutMe', 'Experience', 'Projects', 'Contact'];
      let currentSection = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = section;
        }
      });

      setVisibleSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <div id="content">
        <div className="section-container">
          <div className={`section ${visibleSection === 'AboutMe' ? 'visible' : ''}`} id="AboutMe">
            <Container>
              <Title m={40}>About Me</Title>
              <AboutMe />
            </Container>
          </div>
          <div className={`section ${visibleSection === 'Experience' ? 'visible' : ''}`} id="Experience">
            <Container>
              <Title m={40}>Experience</Title>
              <Experience />
            </Container>
          </div>
          <div className={`section ${visibleSection === 'Projects' ? 'visible' : ''}`} id="Projects">
            <Container>
              <Title m={40}>Projects</Title>
              <Projects />
            </Container>
          </div>
          <div>
            <Container>
              <Title m={40}>Contact Info</Title>
              <Contact />
            </Container>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
