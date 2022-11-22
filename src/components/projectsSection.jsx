import React, { useEffect } from 'react'
import ProjectCard from './common/projectCard';
import FootBar from './footBar';

const projects = [
  {
    title: "To Do List App",
    languages: ["/images/javascript.png", "/images/react.png", "/images/html.png", "/images/sass.png"],
    about: "To-do list application utilising custom hooks to add, toggle done, and delete to-do items. Click to view a demo.",
    image: "/images/toDoListScreenshot.png",
    url: "https://kelleyfraser.github.io/to-do-list-app/"
  },
  {
    title: "Weight Conversion Calculator",
    languages: ["/images/javascript.png", "/images/react.png", "/images/html.png", "/images/sass.png"],
    about: "Weight conversion calculator with form component to enter starting value and unit. Calculates and displays other weight units to the user. Click to view a demo.",
    image: "/images/weightConverterScreenshot.png",
    url: "https://kelleyfraser.github.io/weight-converter-app/"
  },
  {
    title: "Word Counter App",
    languages: ["/images/javascript.png", "/images/react.png", "/images/html.png", "/images/sass.png"],
    about: "Word counter application that accepts text via a form component and displays total words, characters, and vowels to the user. Click to view a demo.",
    image: "/images/wordCounterScreenshot.png",
    url: "https://kelleyfraser.github.io/word-counter-app/"
  },
  {
    title: "Typing Speed Test Game",
    languages: ["/images/javascript.png", "/images/react.png", "/images/html.png", "/images/sass.png"],
    about: "Typing speed test game that has 15 pre-defined paragraphs for users to type. The game has real-time input validation and a built in 1 minute timer. After the timer runs out the users words per minute and accuracy score is displayed. Click to view a demo.",
    image: "/images/typingSpeedTestScreenshot.png",
    url: "https://kelleyfraser.github.io/typing-speed-app/"
  }
]

const ProjectsSection = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="projects" className="projects">
        <div><h2>Projects</h2></div>
        <div className="projects-container">
          {projects.map(project => (
            <ProjectCard key={project.title} title={project.title} about={project.about} languages={project.languages} image={project.image} url={project.url} />
          ))}
        </div>
      </section>
      <FootBar />
    </>
  )
}

export default ProjectsSection;