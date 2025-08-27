import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import both light and dark versions of hamburger and close icons
import HamburgerDark from "../assets/hamburger_dark.png";
import HamburgerLight from "../assets/hamburger_light.png";
import CloseDark from "../assets/close_dark.png";
import CloseLight from "../assets/close_light.png";
import Logo from "../assets/watermark.png";

const Navbar = ({ toggleTheme, theme }) => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setMobileMenuVisible((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuVisible(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuVisible && 
          !event.target.closest('.nav-items-mobile') && 
          !event.target.closest('.mobile-menu-toggle')) {
        setMobileMenuVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuVisible]);

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2 
        id="logo"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img src={Logo} id="logo-img" alt="Logo" />
      </motion.h2>

      <nav className="nav-elements">
        <div className="nav-items">
          <motion.a href="/" variants={navItemVariants} whileHover="hover">Home</motion.a>
          <motion.a href="/Projects" variants={navItemVariants} whileHover="hover">Projects</motion.a>
          <motion.a href="/AboutMe" variants={navItemVariants} whileHover="hover">About Me</motion.a>
          <motion.a href="/ContactMe" variants={navItemVariants} whileHover="hover">Contact Me</motion.a>
        </div>

        <motion.div 
          className={`nav-items-mobile ${isMobileMenuVisible ? 'visible' : ''}`}
          variants={mobileMenuVariants}
          initial="hidden"
          animate={isMobileMenuVisible ? "visible" : "hidden"}
        >
          <motion.button 
            variants={menuItemVariants} 
            onClick={() => handleNavigation('/')}
            className="mobile-nav-link"
          >
            Home
          </motion.button>
          <motion.button 
            variants={menuItemVariants} 
            onClick={() => handleNavigation('/Projects')}
            className="mobile-nav-link"
          >
            Projects
          </motion.button>
          <motion.button 
            variants={menuItemVariants} 
            onClick={() => handleNavigation('/AboutMe')}
            className="mobile-nav-link"
          >
            About Me
          </motion.button>
          <motion.button 
            variants={menuItemVariants} 
            onClick={() => handleNavigation('/ContactMe')}
            className="mobile-nav-link"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </nav>

      <div className="navbar-right">
        {/* Theme toggle button */}
        <motion.button 
          onClick={toggleTheme} 
          className="theme-btn"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaSun size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaMoon size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="mobile-menu-toggle"
          onClick={handleToggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <div className="menu-icon">
            <AnimatePresence mode="wait">
              {isMobileMenuVisible ? (
                <motion.img
                  key="close"
                  src={theme === "dark" ? CloseDark : CloseLight}
                  alt="Close Menu"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.img
                  key="hamburger"
                  src={theme === "dark" ? HamburgerDark : HamburgerLight}
                  alt="Open Menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
