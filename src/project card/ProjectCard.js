import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className='proj-card'>
      <img src={imgSrc} className='project-img' alt={title} />
      <div className='proj-detail-wrapper'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={link} target='_blank' className='view-proj-btn'>View Project</a>
    </div>
  );
};

export default ProjectCard;
