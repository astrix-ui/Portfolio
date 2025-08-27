import React from 'react'
import './Academic.css'
import { motion } from 'framer-motion';

const Academic = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const enhancedBoxVariant = {
        hidden: { 
            opacity: 0, 
            scale: 0.8,
            y: 50,
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut",
            },
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

    const academicData = [
        { marks: '95.6%', grade: 'X Grade', detail: 'CBSE' },
        { marks: '90%', grade: 'XII Grade', detail: 'CBSE' },
        { marks: '8.63', grade: 'University CGPA', detail: 'SRMIST Delhi-NCR' },
    ];

    return(
        <>
        <motion.section 
            id='container'
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
                Academic
            </motion.p>
            <motion.p 
                className='p-leading' 
                id='p-academic'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Discover my academic performance, including detailed records of my marks and qualifications, reflecting my dedication to academic excellence and continuous improvement.
            </motion.p>

            <motion.div 
                id='box-container'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {academicData.map((item, index) => (
                    <motion.div 
                        key={index}
                        className='box' 
                        variants={enhancedBoxVariant}
                        whileHover={{ 
                            scale: 1.05,
                            y: -10,
                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.p 
                            className='marks-detail'
                            variants={textVariants}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item.marks}
                        </motion.p>
                        <motion.p 
                            className='box-heading'
                            variants={textVariants}
                        >
                            {item.grade}
                        </motion.p>
                        <motion.p 
                            className='box-detail'
                            variants={textVariants}
                        >
                            {item.detail}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>

        </motion.section>
        </>
    )
}
export default Academic;