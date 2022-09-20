import React, { useRef, useState, useEffect } from 'react';
import AboutSection from './components/aboutSection';
import ContactForm from './components/contactForm';
import ExperienceSection from './components/experienceSection';
import HeroSection from './components/heroSection';
import NavBar from './components/navBar';
import ProjectsSection from './components/projectsSection';
import SkillsSection from './components/skillsSection';
import './App.scss';

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  
  return {
    height,
    offsetTop,
    offsetBottom
  };
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const navBarRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "home", ref: homeRef },
    { section: "about", ref: aboutRef },
    { section: "experience", ref: experienceRef },
    { section: "skills", ref: skillsRef },
    { section: "projects", ref: projectsRef },
    { section: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: navBarHeight } = getDimensions(navBarRef.current);
      const scrollPosition = window.scrollY + navBarHeight + 80;

      const selected = sectionRefs.find(({ref}) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);  

  return (
    <div className="app">
      <NavBar currentLink={visibleSection} ref={navBarRef} />
      <HeroSection ref={homeRef} />
      <AboutSection ref={aboutRef} />
      <ExperienceSection ref={experienceRef} />
      <SkillsSection ref={skillsRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactForm ref={contactRef} />
    </div>
  );
}

export default App;
