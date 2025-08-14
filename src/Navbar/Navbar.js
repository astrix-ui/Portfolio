import React, { useState } from "react";
import "./Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";

// Import both light and dark versions of hamburger and close icons
import HamburgerDark from "../assets/hamburger_dark.png";
import HamburgerLight from "../assets/hamburger_light.png";
import CloseDark from "../assets/close_dark.png";
import CloseLight from "../assets/close_light.png";
import Logo from "../assets/watermark.png";

const Navbar = ({ toggleTheme, theme }) => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setMobileMenuVisible((prev) => !prev);
  };

  const getMobileClass = () => {
    return isMobileMenuVisible
      ? "nav-items-mobile visible"
      : "nav-items-mobile";
  };

  return (
    <header className="header">
      <h2 id="logo">
        <img src={Logo} id="logo-img" alt="Logo" />
      </h2>

      <nav className="nav-elements">
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="/Projects">Projects</a>
          <a href="/AboutMe">About Me</a>
          <a href="/ContactMe">Contact Me</a>
        </div>

        <div className={getMobileClass()}>
          <a href="/">Home</a>
          <a href="/Projects">Projects</a>
          <a href="/AboutMe">About Me</a>
          <a href="/ContactMe">Contact Me</a>
        </div>
      </nav>

      {/* Hamburger / Close button */}
      <a href="/" id="toggle-img" onClick={handleToggleMenu}>
        {isMobileMenuVisible ? (
          <img
            src={theme === "dark" ? CloseDark : CloseLight}
            id="close-img"
            alt="Close Menu"
          />
        ) : (
          <img
            src={theme === "dark" ? HamburgerDark : HamburgerLight}
            id="hamburger-img"
            alt="Menu"
          />
        )}
      </a>

      {/* Theme toggle button */}
      <button onClick={toggleTheme} className="theme-btn">
        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </header>
  );
};

export default Navbar;
