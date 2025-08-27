import React from "react";
import "./ExperienceTimeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from 'framer-motion';

function ExperienceTimeline() {
  const experiences = [
    {
      title: "Generative AI Intern",
      company: "National Informatics Centre Services Inc.",
      date: "June 2025 – July 2025",
      description: [
        "Designed and implemented the frontend of an AI-powered chatbot for the Pragyaan website, improving user engagement.",
        "Integrated the frontend with a FastAPI-based AI backend, enabling seamless real-time interactions.",
        "Collaborated with backend developers to optimize API calls and reduce response latency.",
        "Tested and debugged the chatbot across multiple devices and browsers to ensure consistent performance.",
        "Contributed to documentation and deployment processes for the chatbot system."
      ],
      icon: "🤖",
    },
    {
      title: "Full Stack Intern",
      company: "Airports Authority of India (AAI)",
      date: "December 2024 – January 2025",
      description: [
        "Developed an Airport Management System to streamline operations such as scheduling, tracking, and administrative workflows.",
        "Designed user-friendly interfaces and dashboards for airport staff to manage operations efficiently.",
        "Implemented backend logic and database integration for real-time data management.",
        "Conducted testing and troubleshooting to ensure system reliability and accuracy.",
        "Documented system architecture and user manuals to support adoption and maintenance."
      ],
      icon: "✈️",
    },
    {
      title: "Frontend Intern",
      company: "E-Tech",
      date: "June 2024 – July 2024",
      description: [
        "Revamped and optimized the company’s WordPress website, improving usability and navigation for visitors.",
        "Implemented design enhancements to align the website with modern UI/UX standards.",
        "Optimized website performance, including faster page load times and improved mobile responsiveness.",
        "Integrated plugins and tools to enhance functionality, including SEO and analytics features.",
        "Collaborated with stakeholders to incorporate feedback and maintain brand consistency."
      ],
      icon: "💻",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      className="experience-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.p 
        className="p-heading2"
        variants={titleVariants}
      >
        My Experience
      </motion.p>
      
      <motion.div 
        className="experience-timeline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
            </div>
            
            <motion.div 
              className="timeline-content"
            >
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
              </div>
              
              <motion.div 
                className="timeline-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {exp.description.map((point, i) => (
                  <motion.div 
                    key={i}
                    className="timeline-point"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ExperienceTimeline;
