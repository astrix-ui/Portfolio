import React, { useState } from 'react'
import './Skills.css'
import { motion, AnimatePresence } from 'framer-motion'

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const skillBoxVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.7,
            rotateY: 45,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    const hoverVariants = {
        hover: {
            scale: 1.15,
            y: -15,
            rotateY: 10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    const imageVariants = {
        hover: {
            rotate: [0, -5, 5, 0],
            scale: 1.1,
            transition: { 
                duration: 0.6,
                ease: "easeInOut"
            }
        },
    };

    const expandVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.6,
            y: 40,
            rotateY: 90,
            filter: "blur(8px)"
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            rotateY: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 20,
            rotateY: 45,
            filter: "blur(4px)",
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 25
            }
        }
    };

    const allSkills = [
        { src: require('../assets/react.png'), name: 'React' },
        { src: require('../assets/js.png'), name: 'JavaScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
        { src: require('../assets/node.png'), name: 'Node.js' },
        { src: require('../assets/mongo.png'), name: 'MongoDB' },
        { src: require('../assets/css.png'), name: 'CSS' },
        { src: require('../assets/html.png'), name: 'HTML' },
        { src: require('../assets/git.png'), name: 'Git' },
        // Additional skills (shown after "View More")
        { src: require('../assets/express.png'), name: 'Express' },
        { src: require('../assets/tailwind.png'), name: 'Tailwind' },
        { src: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg', name: 'Framer Motion' },
        { src: require('../assets/docker.png'), name: 'Docker' },
        { src: require('../assets/vercel.png'), name: 'Vercel' },
        { src: require('../assets/jwt.png'), name: 'JWT' },
        { src: require('../assets/python.png'), name: 'Python' },
        { src: require('../assets/java.png'), name: 'Java' },
        { src: require('../assets/c.png'), name: 'C' },
        { src: require('../assets/cpp.png'), name: 'C++' },
        { src: 'https://ui.shadcn.com/favicon.ico', name: 'ShadCN' },
    ];

    const initialSkillsCount = 8;
    const displayedSkills = showAll ? allSkills : allSkills.slice(0, initialSkillsCount);
    const hasMoreSkills = allSkills.length > initialSkillsCount;

    return (
        <>
        <motion.section 
            id='container'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.p 
                className='p-heading2'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Skills
            </motion.p>
            <motion.p 
                className='p-leading' 
                id='p-skills'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Here is an overview of the skills I have acquired, demonstrating my capabilities and expertise in various areas of web development.
            </motion.p>

            <motion.div 
                id='box-container'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <AnimatePresence mode="popLayout">
                    {displayedSkills.map((skill, index) => (
                        <motion.div 
                            key={skill.name}
                            className='box'
                            variants={index >= initialSkillsCount ? expandVariants : skillBoxVariants}
                            whileHover="hover"
                            custom={index}
                            style={{
                                perspective: "1000px",
                            }}
                            layout
                            initial={index >= initialSkillsCount ? "hidden" : { opacity: 0, scale: 0.8 }}
                            animate={index >= initialSkillsCount ? "visible" : { opacity: 1, scale: 1 }}
                            exit={index >= initialSkillsCount ? "exit" : { opacity: 0, scale: 0.8 }}
                            transition={{ 
                                layout: { duration: 0.6, ease: "easeInOut" },
                                delay: showAll 
                                    ? (index >= initialSkillsCount ? (index - initialSkillsCount) * 0.15 : 0)
                                    : (index >= initialSkillsCount ? (allSkills.length - 1 - index) * 0.1 : 0)
                            }}
                        >
                            <motion.img 
                                src={skill.src} 
                                className='skill-img'
                                alt={skill.name}
                                variants={imageVariants}
                                whileHover="hover"
                                initial={{ rotateX: 0 }}
                                animate={{ 
                                    rotateX: [0, 5, 0],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }
                                }}
                            />
                            <motion.div
                                className="skill-name"
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.08 + 0.3,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    color: "var(--text-color)",
                                    transition: { duration: 0.2 }
                                }}
                                viewport={{ once: true }}
                                style={{
                                    fontSize: '0.8em',
                                    marginTop: '8px',
                                    fontWeight: '500',
                                    color: 'inherit'
                                }}
                            >
                                {skill.name}
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {hasMoreSkills && (
                <motion.div 
                    className="view-more-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="view-more-btn"
                        onClick={() => setShowAll(!showAll)}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <motion.span
                            key={showAll ? 'less' : 'more'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {showAll ? 'View Less' : `View More (${allSkills.length - initialSkillsCount})`}
                        </motion.span>
                    </motion.button>
                </motion.div>
            )}

        </motion.section>
        </>
    )
}
export default Skills;