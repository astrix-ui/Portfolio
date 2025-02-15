import React, {useEffect} from 'react'
import './Academic.css'
import { motion } from 'framer-motion';

const boxVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

const Academic = () =>{

    useEffect(() => {
        const boxes = document.querySelectorAll('.box');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('show');
              }
            });
          },
          { threshold: 0.2 }
        );
        boxes.forEach((box) => observer.observe(box));
      }, []);

    return(
        <>
        <section id='container'>
            <p className='p-heading2'>
                Academic
            </p>
            <p className='p-leading' id='p-academic'>
            Discover my academic performance, including detailed records of my marks and qualifications, reflecting my dedication to academic excellence and continuous improvement.
            </p>

            <div id='box-container'>
                <motion.div className='box' variants={boxVariant}>
                    <p className='marks-detail'>95.6%</p>
                    <p className='box-heading'>X Grade</p>
                    <p className='box-detail'>CBSE</p>
                </motion.div>

                <div className='box'>
                    <p className='marks-detail'>93%</p>
                    <p className='box-heading'>XII Grade</p>
                    <p className='box-detail'>CBSE</p>
                </div>

                <div className='box'>
                    <p className='marks-detail'>8.67</p>
                    <p className='box-heading'>University CGPA</p>
                    <p className='box-detail'>SRMIST Delhi-NCR</p>
                </div>
            </div>

        </section>
        </>
    )
}
export default Academic;