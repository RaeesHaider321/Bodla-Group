import React from 'react';
import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-meta">
          <span>{project.date}</span>
          <span>{project.category}</span>
        </div>
        <Link to={`/projects/${project.id}`} className="view-project-btn">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;