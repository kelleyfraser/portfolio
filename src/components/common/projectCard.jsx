import React from "react";

const ProjectCard = ({ title, about, languages, image, url }) => {
  return (
    <a href={url} rel="noopener roreferrer" target="_blank" className="project-card">
      <div className="card-front">
        <div className="project-header">
          <h3>{title}</h3>
          <div className="project-languages">
            {languages.map(language => (
              <img key={language} src={language}></img>
            ))}
          </div>
        </div>
        <img src={image}></img>
      </div>

      <div className="card-back">
        <p className="project-details">{about}</p>
      </div>
    </a>
  )
}

export default ProjectCard;