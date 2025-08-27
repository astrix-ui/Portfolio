import React, { useEffect } from 'react';
import './aboutme.css';
import Skills from '../skills/Skills';
import Academic from '../academics/Academic';
import Footer from '../footer/Footer';
import ExperienceTimeline from '../experience/ExpereienceTimeline';
import { motion } from 'framer-motion';

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Ayush Sharma";
  }, []);

  // Animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <>
    <motion.div 
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="about-card"
        variants={cardVariants}
      >
        <motion.img 
          src={require('../assets/pfp.JPG')} 
          alt="Ayush Sharma" 
          className="about-photo"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        />
        
        <motion.h1 
          className="about-name"
          variants={textVariants}
          whileHover={{ 
            scale: 1.05,
            color: "var(--primary-color)",
            transition: { duration: 0.2 }
          }}
        >
          Ayush Sharma
        </motion.h1>
        
        <motion.p 
          className='aka-leading'
          variants={textVariants}
        >
          aka <motion.span 
            className='aka'
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            ASTrix UI
          </motion.span>
        </motion.p>
        
        <motion.p 
          className="about-description"
          variants={textVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I am a passionate developer with a strong background in web development. 
          I specialize in React, JavaScript, and modern web technologies.
        </motion.p>
        
        <motion.p 
          className="about-description"
          variants={textVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          In addition to coding, I am also skilled in video editing and content creation. 
          I run a YouTube channel with over 10k subscribers, where I share engaging and informative content.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginTop: '40px' }}
        >
          <Academic />
          
          <motion.div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
            <motion.a 
              href="/AyushSharma-Resume-28Aug2025.pdf" 
              download="AyushSharma-Resume-28Aug2025.pdf" 
              className="resume-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
          
          <Skills />
          <ExperienceTimeline />
        </motion.div>
      </motion.div>
    </motion.div>

    <Footer />
    </>
  );
};

export default AboutMe;
