import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useState, useEffect } from "react";
import Home from './pages/home';
import Projects from './pages/projects';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/Contactme';
import ThankYou from './thankyou';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingElements from './components/FloatingElements';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Animated Route wrapper component
const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function App() {
  // Load theme from localStorage or default to dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Apply theme globally whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <FloatingElements />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/Projects" element={<AnimatedRoute><Projects /></AnimatedRoute>} />
          <Route path="/AboutMe" element={<AnimatedRoute><AboutMe /></AnimatedRoute>} />
          <Route path="/ContactMe" element={<AnimatedRoute><ContactMe /></AnimatedRoute>} />
          <Route path="/thankyou" element={<AnimatedRoute><ThankYou /></AnimatedRoute>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
