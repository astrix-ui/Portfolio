import React from 'react'
import "./HeroSection.css"
import { motion } from 'framer-motion';

const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

const HeroSection = () =>{
    return(
        <section id='hero-section-div'>
        <motion.div className='intro-text' initial="hidden"
        animate="visible"
        variants={textVariant}>

        <motion.p variants={textVariant} className='p-heading'>
            Ayush Sharma
        </motion.p>
        {/* <p className='p-heading p-heading-2'>
            Portfolio
        </p> */}
        <motion.p variants={textVariant} className='p-leading'>
        I thrive on turning ideas into reality through clean code and modern design, ensuring seamless performance across devices.
        </motion.p>

        <motion.a  href='/projects' id='github-btn' variants={textVariant}
          whileHover={{ scale: 1.05 }}>
            <p id='btn-text'>
                View Projects
            </p> 
            {/* <p id='arrow'>
            &rarr;
            </p> */}
            </motion.a>
        
        </motion.div>
        <a 
  href="/AyushSharma-Resume-August2025-84.pdf" 
  download="AyushSharma-Resume-August2025-84.pdf" 
  className="resume-btn"
>
  Download Resume
</a>

        </section>
    )
}

export default HeroSection;