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
      <section id="skills" className="skills">
        <div className="heading"><h2>Skills</h2></div>
        <div>
          <div>
            <h3>Programming Languages</h3>
            <img className="skillsIcon" src="/images/html.png"></img>
            <img className="skillsIcon" src="/images/css.png"></img>
            <img className="skillsIcon" src="/images/javascript.png"></img>
            <img className="skillsIcon" src="/images/matlab.png"></img>
            <img className="skillsIcon" src="/images/sql.png"></img>
            <img className="skillsIcon" src="/images/python.png"></img>
            <img className="skillsIcon" src="/images/java.png"></img>
            <img className="skillsIcon" src="/images/c.png"></img>
          </div>
          <div>
            <h3>Libraries &amp; Frameworks</h3>
            <img className="skillsIcon" src="/images/react.png"></img>
            <img className="skillsIcon" src="/images/sass.png"></img>
            <img className="skillsIcon" src="/images/bootstrap.png"></img>
            <img className="skillsIcon" src="/images/jquery.png"></img>
          </div>
          <div>
            <h3>Tools &amp; Platforms</h3>
            <img className="skillsIcon" src="/images/git.png"></img>
            <img className="skillsIcon" src="/images/mySQL.png"></img>
            <img className="skillsIcon" src="/images/mongoDB.png"></img>
            <img className="skillsIcon" src="/images/github.png"></img>
          </div>
        </div>
      </section>
      <FootBar />
    </>
  )
}

export default ExperienceSection;