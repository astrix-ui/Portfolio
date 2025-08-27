import React, { useEffect } from 'react';
import './contactme.css';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

const ContactMe = () => {
  useEffect(() => {
    document.title = "Contact Me | Ayush Sharma";
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

  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const formGroupVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 }
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ flex: 1 }}
      >
        <motion.div 
          className="contact-box"
          variants={boxVariants}
          whileHover={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Feel free to reach out by filling the form below.
          </motion.p>

          <motion.form 
            action="https://formsubmit.co/ayushsharma1016@gmail.com" 
            method="POST"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Disable CAPTCHA and redirect after submission */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://portfolio-kohl-rho-12.vercel.app/thankyou" />

            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Name
              </motion.label>
              <motion.input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Your Name" 
                required
                variants={inputVariants}
                whileFocus="focus"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Email
              </motion.label>
              <motion.input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="Your Email" 
                required
                variants={inputVariants}
                whileFocus="focus"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Message
              </motion.label>
              <motion.textarea 
                name="message"
                className="form-control" 
                placeholder="Your Message" 
                rows="4" 
                required
                variants={inputVariants}
                whileFocus="focus"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              />
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactMe;
