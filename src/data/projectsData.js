/**
 * Projects Data
 * Easy to update or expand.
 */
import smartbuildImg from "../assets/project-smartbuild.jpg";
import digitalmarketingImg from "../assets/project-digitalmarketing.jpg";
import mernImg from "../assets/project-mern.jpg";

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack & Django" },
  { id: "frontend", label: "Frontend & React" }
];

export const projectsData = [
  {
    id: 1,
    title: "SmartBuild Hub – Construction Management Platform",
    subtitle: "Full-Stack Enterprise Web Application",
    year: "2026",
    category: "fullstack",
    image: smartbuildImg,
    description: "A comprehensive full-stack construction management platform streamlining collaboration between builders, architects, contractors, and clients. Features User Authentication, Project Showcase, Contact, and Testimonials modules, backed by SQLite and Django's MVT architecture.",
    technologies: ["Python", "Django", "Bootstrap 5", "JavaScript", "SQLite", "HTML5", "CSS3", "AOS"],
    highlights: [
      "Django MVT architecture for modular, scalable backend logic",
      "Secure user authentication and role-based client & contractor views",
      "Responsive interactive showcase with dynamic project timeline",
      "Integrated SQLite database with optimized relational schema"
    ],
    github: "https://github.com/Himanshu-vermas",
    liveDemo: "#"
  },
  {
    id: 2,
    title: "Digital Marketing Agency Website",
    subtitle: "High-Converting Responsive Web Application",
    year: "2025",
    category: "frontend",
    image: digitalmarketingImg,
    description: "A responsive, modern digital marketing agency website built using HTML5, CSS3, JavaScript, and Bootstrap 5. Employs reusable frontend components, modern gradients, glassmorphism UI, and smooth interactive metrics to deliver an engaging user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "CSS Grid/Flexbox"],
    highlights: [
      "Modular, maintainable frontend structure with reusable components",
      "Cross-browser tested and optimized for speed and accessibility",
      "Engaging animations, metric counters, and responsive navigation"
    ],
    github: "https://github.com/Himanshu-vermas",
    liveDemo: "#"
  },
  {
    id: 3,
    title: "Synergy – MERN Collaborative Task Management",
    subtitle: "Interactive Team Workspace & Kanban Board",
    year: "2024",
    category: "fullstack",
    image: mernImg,
    description: "A collaborative full-stack workspace application developed during MERN stack training. Enables real-time task organization, dynamic Kanban drag-and-drop state management, REST API endpoints, and persistent MongoDB document storage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap 5"],
    highlights: [
      "React hooks for responsive state management and dynamic UI updates",
      "RESTful API integration with Node.js & Express server",
      "Structured MongoDB collections with schema validation"
    ],
    github: "https://github.com/Himanshu-vermas",
    liveDemo: "#"
  }
];
