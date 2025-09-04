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
          
          {/* Portfolio Tech Stack Section */}
          <motion.div 
            className="portfolio-tech-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              className="portfolio-tech-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              This portfolio was built with
            </motion.h3>
            <motion.div 
              className="portfolio-tech-grid"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.6,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
                { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
              ].map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  className="portfolio-tech-item"
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 30,
                      scale: 0.8,
                      filter: "blur(4px)"
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="portfolio-tech-icon"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { 
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  />
                  <motion.span 
                    className="portfolio-tech-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    whileHover={{ 
                      opacity: 0.8,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>

    <Footer />
    </>
  );
};

export default AboutMe;
