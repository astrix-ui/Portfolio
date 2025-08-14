import React from "react";
import "./ExperienceTimeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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

  return (
    <div className="container">
      <p className="p-heading2">My Experience</p>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="timeline-element"
            date={exp.date}
            contentStyle={{ borderRadius: "15px", outline: "none", boxShadow: "none", border: "none" }}
            contentArrowStyle={{}}
            iconStyle={{ background: "var(--exp-card-bg-dark)", color: "var(--exp-title-dark)" }}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceTimeline;
