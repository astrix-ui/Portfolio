import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  // Create floating elements with different animations
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay,
      },
    }),
  };

  return (
    <div className="floating-elements-container">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="floating-element"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          variants={floatingVariants}
          animate="animate"
          custom={element}
        />
      ))}
    </div>
  );
};

export default FloatingElements;