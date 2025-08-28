import React from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ imgSrc, title, description, link, projectId }) => {
  const navigate = useNavigate();

  // Create project ID from title if not provided
  const getProjectId = () => {
    if (projectId) return projectId;
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const handleViewProject = (e) => {
    e.preventDefault();
    navigate(`/project/${getProjectId()}`);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "var(--primary-color)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div 
      className='proj-card'
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div className="project-img-container">
        <motion.img 
          src={imgSrc} 
          className='project-img' 
          alt={title}
          variants={imageVariants}
          whileHover="hover"
        />
      </motion.div>
      
      <motion.div 
        className='proj-detail-wrapper'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
      
      <motion.button 
        onClick={handleViewProject}
        className='view-proj-btn'
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        View Details
      </motion.button>
    </motion.div>
  );
};

export default ProjectCard;
