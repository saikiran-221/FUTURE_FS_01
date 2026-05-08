import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, title, subtitle, summary, techStack, github, demo, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  const stopProp = (e) => e.stopPropagation();

  const projectNum = String((index ?? 0) + 1).padStart(2, '0');

  return (
    <div
      className="project-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-text">
            <p className="project-number">Project {projectNum}</p>
            <h3 className="project-title">{title}</h3>
            {subtitle && <p className="project-subtitle-card">{subtitle}</p>}
          </div>
        </div>

        <p className="project-summary">{summary}</p>

        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="card-divider" />

      <div className="project-links">
        <Link to={`/projects/${id}`} className="btn-details" onClick={stopProp}>
          View Details <span className="btn-details-arrow">→</span>
        </Link>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn-github" onClick={stopProp}>
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-demo" onClick={stopProp}>
          Live Demo ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
