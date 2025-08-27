import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import './footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.footer 
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="footer-container"
        variants={containerVariants}
      >
        <motion.p 
          className="footer-text"
          variants={textVariants}
        >
          &copy; {new Date().getFullYear()} Ayush Sharma.
        </motion.p>
        
        <motion.div 
          className="footer-icons"
          variants={containerVariants}
        >
          <motion.a 
            href="https://github.com/astrix-ui" 
            className="icon" 
            target='_blank'
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          
          <motion.a 
            href="https://x.com/ui_trix" 
            className="icon" 
            target='_blank'
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
          
          <motion.a 
            href="https://www.instagram.com/clumsymind7878/" 
            className="icon" 
            target='_blank'
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/ayush-sharma-a0351b270/" 
            className="icon" 
            target='_blank'
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          
          <motion.a 
            href="https://www.youtube.com/astrixui" 
            className="icon" 
            target='_blank'
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;