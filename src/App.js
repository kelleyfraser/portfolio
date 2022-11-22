import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactForm from './components/contactForm';
import ExperienceSection from './components/experienceSection';
import HomeSection from './components/homeSection';
import NavBar from './components/navBar';
import ProjectsSection from './components/projectsSection';
import EducationBlock from './components/blocks/educationBlock';
import WorkBlock from './components/blocks/workBlock';
import CoursesBlock from './components/blocks/coursesBlock';
import NotFound from './components/notFound';
import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route index element={<HomeSection />} />
        <Route path="/" element={<HomeSection />} />
        <Route path="/experience" element={<ExperienceSection />}>
          <Route index element={<EducationBlock />} />
          <Route path="education" element={<EducationBlock />} />
          <Route path="work" element={<WorkBlock />} />
          <Route path="courses" element={<CoursesBlock />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
