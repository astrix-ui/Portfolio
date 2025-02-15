import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGit, FaGithub, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Ayush Sharma.</p>
        
        {/* <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul> */}
        
        <div className="footer-icons">
          <a href="https://github.com/astrix-ui" className="icon" target='_blank'><FaGithub /></a>
          <a href="https://x.com/ui_trix" className="icon" target='_blank'><FaTwitter /></a>
          <a href="https://www.instagram.com/clumsymind7878/" className="icon" target='_blank'><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/ayush-sharma-a0351b270/" className="icon" target='_blank'><FaLinkedin /></a>
          <a href="https://www.youtube.com/astrixui" className="icon" target='_blank'><FaYoutube /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;