import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from './common/tabBar';
import FootBar from './footBar';


const ExperienceSection = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="experience" className="experience">
        <div className="heading">
          <h2>Experience</h2>
        </div>
        <TabBar />
        <div className="experience-content">
          <Outlet />
        </div>
      </section>
      <FootBar />
    </>
  )
}

export default ExperienceSection;