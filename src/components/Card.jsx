import React from 'react';

function Card({ project, onImageClick }) {
  return (
    <div className="project-card">
      <img src={project.src} alt={project.title} className="project-image" onClick={() => onImageClick(project.popoutSrc)} />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.projectSite} target="_blank" rel="noreferrer" className="project-link">{project.projectTag}</a>
    </div>
  );
}

export default Card;