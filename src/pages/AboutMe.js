import React, { useEffect } from 'react';
import './aboutme.css';
import Skills from '../skills/Skills';
import Academic from '../academics/Academic';
import Footer from '../footer/Footer';

const AboutMe = () => {
  useEffect(() => {
    document.title = "Aboout Me | Ayush Sharma";
  }, []);
  return (
    <>
    <div className="about-container">
      <div className="about-card">
      <img src={require('../assets/pfp.JPG')} alt="Your Name" className="about-photo" />        <h1 className="about-name">Ayush Sharma</h1>
      <p className='aka-leading'>aka <span className='aka'>ASTrix UI</span></p>
      <p className="about-description">
          I am a passionate developer with a strong background in web development. 
          I specialize in React, JavaScript, and modern web technologies.
        </p>
        <p className="about-description">
          In addition to coding, I am also skilled in video editing and content creation. 
          I run a YouTube channel with over 10k subscribers, where I share engaging and informative content.
        </p>
        {/* <div className="about-education">
          <h2>Education</h2>
          <ul>
            <li><strong>Bachelor's in Computer Science</strong> - XYZ University</li>
            <li><strong>Master's in Software Engineering</strong> - ABC Institute</li>
          </ul>
        </div> */}
        <Academic />
        <Skills />
        
      </div>
    </div>
        <Footer />
        </>
  );
};

export default AboutMe;
