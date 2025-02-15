import React, { useEffect } from 'react';
import './contactme.css';
import Footer from '../footer/Footer';

const ContactMe = () => {
    useEffect(() => {
        document.title = "Contact Me | Ayush Sharma";
      }, []);
  return (
    <>
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>Feel free to reach out by filling the form below.</p>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Your Name" 
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Your Email" 
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              className="form-control" 
              placeholder="Your Message" 
              rows="4"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default ContactMe;