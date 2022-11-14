import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="heading">
        <h2>About Me</h2>
      </div>
      <div className="content"> 
        <div className="about-text">
          <p>
            Hi there! My name is Kelley Fraser. In 2020 I completed a masters degree in geology from the University of Calgary, Canada. Prior to my masters I completed a bachelors degree in quantitative geoscience with minors in mathematics and physics from Appalachian State University of western North Carolina. Despite my immense love for earth science, throughout my time during both degrees I never felt fully passionate about any of the courses or independent research I had the opportunity to complete. That is until I took a MATLAB based data analysis course designed for earth scientists. This was my first exposure to coding outside of a few brief HTML/CSS lessons in high school computer classes and I was immediately hooked to say the least.
          </p>
          <p>
             From then on I found any opportunity I could to automate my data analysis and research processes. It wasn't until halfway through my masters degree that I realized rather than searching for the few opportunites to code small apps or automate processes I could instead switch gears and pursue coding as a career. After completing my masters degree I moved back to the US and began my self taught journey to become a software developer. Since my path towards software development has been less than direct I acknowledge that I don't have as much coding experience as candidates with computer science degrees; however, with a background in the natural sciences I have a great drive to learn and improve and have a natural ability for problem solving.
          </p>
          <p>
            In my studies I have focused on front-end development, but I would like to continue my studies to eventually move on to full-stack development in the future. I am currently based in Northhamptonshire, UK and am looking for remote opportunies based in the Midlands and Southern England. Please continue browsing my portfolio and don't hesitate to contact me if you would like to learn more about my skills and what I could offer your team or company. Finally, in case you were wondering I can indeed identify that rock for you!  
          </p>
        </div>
        <img className="portrait-img" src="images/portrait.jpg"></img>
      </div>
    </section>
  )
}

export default AboutSection;