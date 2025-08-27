import React from 'react'
import "./HeroSection.css"
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8,
            ease: "easeOut"
        } 
    },
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
    },
    tap: {
        scale: 0.95,
    },
};

const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const HeroSection = () => {
    return(
        <motion.section 
            id='hero-section-div'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className='intro-text' 
                variants={containerVariants}
            >
                <motion.p 
                    variants={textVariant} 
                    className='p-heading'
                    whileHover={{ 
                        scale: 1.02,
                        color: "var(--primary-color)",
                        transition: { duration: 0.2 }
                    }}
                >
                    Ayush Sharma
                </motion.p>

                <motion.p 
                    variants={textVariant} 
                    className='p-leading'
                    animate={floatingAnimation}
                >
                    I thrive on turning ideas into reality through clean code and modern design, ensuring seamless performance across devices.
                </motion.p>

                <motion.a  
                    href='/projects' 
                    id='github-btn' 
                    variants={textVariant}
                    whileHover="hover"
                    whileTap="tap"
                    custom={buttonVariants}
                >
                    <motion.p 
                        id='btn-text'
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        View Projects
                    </motion.p> 
                </motion.a>
            </motion.div>

            <motion.a 
                href="/AyushSharma-Resume-28Aug2025.pdf" 
                download="AyushSharma-Resume-28Aug2025.pdf" 
                className="resume-btn"
                variants={textVariant}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    y: [0, -5, 0],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }
                }}
            >
                Download Resume
            </motion.a>
        </motion.section>
    )
}

export default HeroSection;