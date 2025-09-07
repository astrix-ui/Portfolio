import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectDetail.css';
import Footer from '../footer/Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [selectedImage]);

  // Project data - this would typically come from a database or API
  const projectsData = {
  'alumni-portal': {
    id: 'alumni-portal',
    title: 'SRM Alumni Portal',
    banner: require('../assets/Alumni.png'),
    description: 'A comprehensive alumni networking platform that connects SRM students and alumni through messaging, filtering, and event management, fostering mentorship and career guidance.',
    fullDescription: [
      'The SRM Alumni Portal bridges the gap between students and alumni, creating a vibrant ecosystem of mentorship and networking.',
      'Users can search and filter alumni by graduation year, industry, or expertise to find the right connections.',
      'Secure messaging enables real-time conversations between students and alumni, supporting guidance and collaboration.',
      'An event management system allows organizing webinars, meetups, and alumni networking sessions.',
      'Push notifications ensure users are always updated about messages, events, and opportunities.'
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    screenshots: [
      require('../project-ss/srm-alumni/1.png'),
      require('../project-ss/srm-alumni/2.png'),
      require('../project-ss/srm-alumni/3.png'),
      require('../project-ss/srm-alumni/4.png'),
      require('../project-ss/srm-alumni/5.png'),
      require('../project-ss/srm-alumni/6.png'),
      require('../project-ss/srm-alumni/7.png'),
      require('../project-ss/srm-alumni/8.png'),
      require('../project-ss/srm-alumni/9.png'),
    ],
    githubLink: "https://github.com/astrix-ui/SRM-ALUMNI-PORTAL-FINAL",
    liveLink: 'https://alumni-srmup.in/admin/index.php',
    detailsLink: null,
    features: [
      'User Authentication & Profiles',
      'Advanced Search & Filtering',
      'Real-time Messaging System',
      'Event Management',
      'Notification System',
      'Admin Dashboard'
    ]
  },

  'forum-hub': {
    id: 'forum-hub',
    title: 'Forum Hub',
    banner: require('../assets/forumhub.png'),
    description: 'A full-stack discussion forum where users can create posts, like, follow, message, and manage profiles. Built with PHP and MySQL on the backend and a clean, responsive front end.',
    fullDescription: [
      'Forum Hub is a complete social discussion platform designed for creating online communities.',
      'It allows users to register and log in, create and interact with posts, follow others, and like content.',
      'A direct messaging system facilitates private conversations between users.',
      'The backend is powered by PHP and MySQL, handling authentication, post storage, and user management.',
      'Its responsive interface ensures smooth accessibility on both desktop and mobile devices.'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    screenshots: [
      require('../project-ss/forumhub/1.png'),
      require('../project-ss/forumhub/2.png'),
      require('../project-ss/forumhub/3.png'),
      require('../project-ss/forumhub/4.png'),
      require('../project-ss/forumhub/5.png'),
      require('../project-ss/forumhub/6.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/ForumHub.com.github.io',
    liveLink: "https://astrix-ui.github.io/ForumHub.com.github.io/",
    features: [
      'User Authentication & Profiles',
      'Discussion Threads',
      'Likes & Follows',
      'Direct Messaging',
      'Search Functionality',
      'Mobile Responsive Design'
    ]
  },

  'momento': {
    id: 'momento',
    title: 'Momento',
    banner: require('../assets/momento.png'),
    description: 'A social media platform for sharing memorable moments with features like real-time chat, photo sharing, and a privacy-first design.',
    fullDescription: [
      'Momento is a social media application focused on meaningful sharing rather than noise.',
      'It enables users to upload photos, add filters, and share with friends and family.',
      'A real-time chat system allows instant conversations between users.',
      'Privacy-focused controls let users decide who can view their content.',
      'Its clean and minimal UI highlights shared moments without distractions.'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WebSockets', 'AJAX'],
    screenshots: [
      require('../project-ss/momento/1.png'),
      require('../project-ss/momento/2.png'),
      require('../project-ss/momento/3.png'),
      require('../project-ss/momento/4.png'),
      require('../project-ss/momento/5.png'),
      require('../project-ss/momento/6.png'),
      require('../project-ss/momento/7.png'),
      require('../project-ss/momento/8.png'),
      require('../project-ss/momento/9.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/Mavericks-Site',
    liveLink: null,
    features: [
      'Photo Sharing',
      'Real-time Messaging',
      'User Profiles',
      'Privacy Controls',
      'Content Filters',
      'Mobile Friendly'
    ]
  },

  'ecommerce': {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    banner: require('../assets/ecommerce.png'),
    description: 'A modern e-commerce template featuring product catalogs, shopping cart, and checkout with a clean, responsive UI.',
    fullDescription: [
      'This project is a full-featured e-commerce frontend built to showcase online retail experiences.',
      'It includes a catalog system with product listings and detail pages.',
      'A shopping cart and checkout flow provide the foundation of online purchasing.',
      'Responsive design ensures smooth usage on mobile, tablet, and desktop.',
      'The template is optimized for speed, usability, and scalability.'
    ],
    techStack: ['HTML','CSS3', 'JavaScript', 'Bootstrap'],
    screenshots: [
      require('../project-ss/ecommerce/1.png'),
      require('../project-ss/ecommerce/2.png'),
      require('../project-ss/ecommerce/3.png'),
      require('../project-ss/ecommerce/4.png'),
      require('../project-ss/ecommerce/5.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/Ecommerce-Website.github.io',
    liveLink: "https://astrix-ui.github.io/Ecommerce-Website.github.io/",
    features: [
      'Product Catalog',
      'Shopping Cart',
      'User Authentication',
      'Responsive Design',
      'Search Functionality',
      'Product Filters'
    ]
  },

  'astrixui-movies': {
    id: 'astrixui-movies',
    title: 'AstrixUI Movies',
    banner: require('../assets/astrixui-movies.png'),
    description: 'A movie discovery platform with API integration, advanced filters, and personalized recommendations.',
    fullDescription: [
      'AstrixUI Movies connects to external APIs to provide rich, up-to-date movie information.',
      'Users can search and filter movies by genre, rating, release year, and more.',
      'Each movie page includes trailers, reviews, cast details, and recommendations.',
      'A responsive design ensures smooth experiences across mobile and desktop.',
      'The recommendation system helps users discover related or trending movies.'
    ],
    techStack: ['React.js', 'CSS3', 'TMDB API', 'Axios', 'React Router'],
    screenshots: [
      require('../project-ss/astrixui movies/1.png'),
      require('../project-ss/astrixui movies/2.png'),
      require('../project-ss/astrixui movies/3.png'),
      require('../project-ss/astrixui movies/4.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/astrixui-movies',
    liveLink: "https://astrixui-movies.vercel.app/",
    features: [
      'Movie Search',
      'Advanced Filters',
      'Movie Details',
      'API Integration',
      'Responsive Design',
      'Recommendations'
    ]
  },

  'airport-management': {
    id: 'airport-management',
    title: 'Airport Management System',
    banner: require('../assets/aai.png'),
    description: 'A web-based management system for airports built with the MERN stack. It streamlines operations by managing flights, passengers, staff, and real-time updates through an intuitive dashboard.',
    fullDescription: [
      'The Airport Management System is designed to digitize and optimize airport operations.',
      'It provides secure login and role-based access for admins, staff, and passengers.',
      'Users can view and manage flight schedules, passenger records, and staff details.',
      'Real-time updates keep administrators informed about flight statuses and operational changes.',
      'Built with the MERN stack, it ensures a responsive, scalable, and user-friendly experience.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    screenshots: [
      require('../assets/aai.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/Airport-Management-System',
    liveLink: null,
    features: [
      'Role-based Authentication',
      'Flight Management',
      'Passenger Records',
      'Staff Management',
      'Real-time Updates',
      'Admin Dashboard'
    ]
  },
  'job-tracker': {
  id: 'job-tracker',
  title: 'Job Tracker',
  banner: require('../assets/job-tracker.png'),
  description: 'A full-stack job tracking application built with the MERN stack. It helps users manage job applications, track progress, and stay organized with authentication, filtering, and real-time updates.',
  fullDescription: [
    'Job Tracker is a productivity-focused application designed to simplify the job search and application process.',
    'Users can register and log in securely with JWT-based authentication and bcryptjs for password encryption.',
    'The system allows creating, editing, and deleting job applications with details such as position, company, status, and location.',
    'Advanced filtering and search options enable users to quickly find and organize their applications.',
    'Built with React, Context API, and React Router on the frontend and Node.js, Express, and MongoDB on the backend, it ensures a smooth and scalable experience.'
  ],
  techStack: [
    'React', 
    'Node.js', 
    'Express', 
    'MongoDB', 
    'Tailwind CSS', 
    'JWT', 
    'Mongoose', 
    'React Router', 
    'Context API', 
    'Axios', 
    'bcryptjs', 
    'CORS'
  ],
  screenshots: [
    require('../project-ss/job-tracker/1.png'),
    require('../project-ss/job-tracker/2.png'),
    require('../project-ss/job-tracker/3.png'),
    require('../project-ss/job-tracker/4.png'),
    require('../project-ss/job-tracker/5.png'),
    require('../project-ss/job-tracker/6.png'),
    require('../project-ss/job-tracker/7.png'),
    require('../project-ss/job-tracker/8.png'),
    require('../project-ss/job-tracker/9.png'),
    require('../project-ss/job-tracker/10.png'),
    require('../project-ss/job-tracker/11.png'),
    require('../project-ss/job-tracker/12.png'),
  ],
  githubLink:  "https://github.com/astrix-ui/job-tracker", // add if public
  liveLink: "https://job-tracker-qqs1.onrender.com/",   // add if deployed
  features: [
    'User Authentication & Authorization',
    'Create, Edit & Delete Job Applications',
    'Job Status Tracking',
    'Search & Filtering',
    'Responsive Dashboard',
    'Secure API Integration'
  ]
}
,

  'novitos': {
    id: 'novitos',
    title: 'Novitos Notes',
    banner: require('../assets/novitos-main.jpg'),
    description: 'A cloud-synced note-taking app with categories, search, collaboration, and export options.',
    fullDescription: [
      'Novitos is a productivity-focused note-taking application.',
      'It features rich text editing, categorization, and powerful search tools.',
      'Cloud sync keeps notes available across multiple devices.',
      'Users can collaborate by sharing notes and co-editing with others.',
      'Export functionality and advanced organization with tags and folders are also supported.'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS3'],
    screenshots: [
      require('../project-ss/novitos/1.png'),
      require('../project-ss/novitos/2.png'),
      require('../project-ss/novitos/3.png'),
      require('../project-ss/novitos/4.png'),
      require('../project-ss/novitos/5.png'),
      require('../project-ss/novitos/6.png'),
      require('../project-ss/novitos/7.png'),
      require('../project-ss/novitos/8.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/Novitos-NotesWebsite.github.io',
    liveLink: "https://astrix-ui.github.io/Novitos-NotesWebsite.github.io/",
    features: [
      'Rich Text Editor',
      'Note Categories',
      'Search Functionality',
      'Cloud Sync',
      'Collaboration',
      'Export Options'
    ]
  },

  'password-manager': {
    id: 'password-manager',
    title: 'PassOp - Password Manager',
    banner: require('../assets/passop.png'),
    description: 'A secure password manager built with React and MongoDB that helps users store, manage, and generate strong passwords with local encryption.',
    fullDescription: [
      'PassOp is a comprehensive password management solution designed to keep your digital life secure.',
      'It features client-side encryption to ensure your passwords are protected even from the service provider.',
      'The application includes a built-in password generator that creates strong, unique passwords for each account.',
      'Users can organize passwords by categories, search through their vault, and access their data across devices.',
      'With a clean, intuitive interface, managing passwords becomes effortless while maintaining the highest security standards.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Crypto-JS', 'JWT'],
    screenshots: [
      require('../assets/passop.png'),
    ],
    githubLink: 'https://github.com/astrix-ui/PassOp-Password-Manager',
    liveLink: null,
    features: [
      'Secure Password Storage',
      'Password Generator',
      'Client-side Encryption',
      'Category Organization',
      'Search Functionality',
      'Cross-device Sync',
      'Auto-fill Integration',
      'Security Dashboard'
    ]
  },
  'typescript-note-app': {
  id: 'typescript-note-app',
  title: 'TypeScript Note App',
  banner: require('../project-ss/typescript-notes/1.png'),
  description: 'A modern, responsive note-taking application built with React, TypeScript, and Bootstrap. It allows users to create, edit, organize, and search notes with a tagging system, all stored locally in the browser.',
  fullDescription: [
    'TypeScript Note App is a lightweight yet powerful note-taking tool designed for productivity and organization.',
    'Users can create and edit notes with markdown support, making it easy to format content while writing.',
    'The built-in tagging system allows flexible organization—tags can be created, edited, or deleted at any time.',
    'With search and multi-tag filtering, finding specific notes becomes effortless.',
    'All notes and tags are stored in the browser’s local storage, ensuring offline access without the need for a backend.',
    'The app provides a clean, intuitive, and responsive interface, optimized for both desktop and mobile devices.'
  ],
  techStack: [
    'React 19.1.1',
    'TypeScript 5.8.3',
    'React Router DOM 6.16.0',
    'Bootstrap 5.3.8',
    'React Bootstrap 2.10.10',
    'React Select 5.10.2',
    'UUID 12.0.0',
    'React Markdown 10.1.0',
    'Vite 7.1.2',
    'ESLint',
    'CSS Modules'
  ],
  screenshots: [
    require('../project-ss/typescript-notes/1.png'),
    require('../project-ss/typescript-notes/2.png'),
    require('../project-ss/typescript-notes/3.png'),
    require('../project-ss/typescript-notes/4.png'),
    require('../project-ss/typescript-notes/5.png'),

  ],
  githubLink: 'https://github.com/astrix-ui/notes-app-typescript/',
  liveLink: null,
  features: [
    'Create & Edit Notes with Markdown Support',
    'Tag Management (Create, Edit, Delete)',
    'Search & Multi-Tag Filtering',
    'Local Storage Persistence',
    'Responsive Design for Desktop & Mobile',
    'Bulk Tag Editing',
    'User-Friendly Navigation',
    'Future-Ready with Markdown Rendering Integration'
  ]
}

};


  const project = projectsData[projectId];

  useEffect(() => {
    if (!project) {
      navigate('/Projects');
    } else {
      document.title = `${project.title} | Ayush Sharma`;
    }
  }, [project, navigate, projectId]);

  if (!project) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      className="project-detail"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Project Title Section */}
      <motion.section 
        className="project-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="project-title-clean"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {project.title}
        </motion.h1>
      </motion.section>

      {/* Content Section */}
      <motion.div className="project-content" variants={containerVariants}>
        
        {/* Description */}
        <motion.section className="project-section" variants={itemVariants}>
          <h2>About This Project</h2>
          <p className="project-description">{project.description}</p>
          
          {project.fullDescription.map((paragraph, index) => (
            <motion.p 
              key={index}
              className="project-paragraph"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.section>

        {/* Features */}
        <motion.section className="project-section" variants={itemVariants}>
          <h2>Key Features</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <span className="feature-bullet">▸</span>
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section className="project-section" variants={itemVariants}>
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <motion.span 
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Screenshots */}
        <motion.section className="project-section" variants={itemVariants}>
          <h2>Screenshots</h2>
          <div className="screenshots-grid">
            {project.screenshots.map((screenshot, index) => (
              <motion.div 
                key={index}
                className="screenshot-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(screenshot)}
              >
                <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Action Buttons */}
        <motion.section className="project-actions" variants={itemVariants}>
          {project.githubLink && (
            <motion.a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn github-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
View Project
            </motion.a>
          )}
          
          {project.liveLink && (
            <motion.a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn live-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
Live Demo
            </motion.a>
          )}
          
          {project.detailsLink && (
            <motion.a 
              href={project.detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn details-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
View Details
            </motion.a>
          )}
        </motion.section>

        {/* Back Button */}
        <motion.div 
          className="back-button-container"
          variants={itemVariants}
        >
          <motion.button 
            onClick={() => navigate('/Projects')}
            className="back-btn"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Expanded view" />
              <button 
                className="close-modal"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;