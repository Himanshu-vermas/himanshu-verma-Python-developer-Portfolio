/**
 * Skills Data
 * Categorized technical and professional skills with visual metrics and icons.
 */
export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Tools & DevOps" }
  ],
  
  skills: [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      icon: "bi-filetype-jsx",
      color: "#61dafb",
      level: "Intermediate",
      visualPercent: 82,
      description: "Component lifecycle, Hooks (useState, useEffect), state management, and reusable UI components."
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: "bi-filetype-js",
      color: "#f7df1e",
      level: "Proficient",
      visualPercent: 88,
      description: "DOM manipulation, asynchronous fetch/promises, arrow functions, event handling, and modular JS."
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: "bi-filetype-html",
      color: "#e34f26",
      level: "Advanced",
      visualPercent: 95,
      description: "Semantic layouts, accessibility, form validations, SEO-friendly document structures."
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: "bi-filetype-css",
      color: "#1572b6",
      level: "Advanced",
      visualPercent: 90,
      description: "Flexbox, CSS Grid, keyframe animations, glassmorphism, responsive media queries, and variables."
    },
    {
      name: "Bootstrap 5",
      category: "frontend",
      icon: "bi-bootstrap-fill",
      color: "#7952b3",
      level: "Advanced",
      visualPercent: 92,
      description: "Responsive grid systems, navigation bars, modals, utility classes, and custom component theming."
    },

    // Backend
    {
      name: "Python",
      category: "backend",
      icon: "bi-filetype-py",
      color: "#3776ab",
      level: "Proficient",
      visualPercent: 90,
      description: "Core Python, OOP principles, data structures, backend algorithms, and script automation."
    },
    {
      name: "Django",
      category: "backend",
      icon: "bi-hdd-network-fill",
      color: "#44b78b",
      level: "Proficient",
      visualPercent: 86,
      description: "Django MVT architecture, ORM querysets, URL routing, authentication, views, and template engines."
    },
    {
      name: "FastAPI",
      category: "backend",
      icon: "bi-lightning-charge-fill",
      color: "#009688",
      level: "Intermediate",
      visualPercent: 80,
      description: "Modern, fast asynchronous web APIs in Python with automatic OpenAPI documentation and data validation."
    },
    {
      name: "RESTful APIs",
      category: "backend",
      icon: "bi-arrow-left-right",
      color: "#38bdf8",
      level: "Intermediate",
      visualPercent: 82,
      description: "CRUD endpoints, JSON serialization, HTTP status codes, API integration, and Postman testing."
    },
    {
      name: "PHP Basics",
      category: "backend",
      icon: "bi-filetype-php",
      color: "#777bb4",
      level: "Working Knowledge",
      visualPercent: 70,
      description: "Server scripting, form processing, and MySQL connectivity utilized at Eduminus Learning."
    },

    // Databases
    {
      name: "MySQL",
      category: "database",
      icon: "bi-database-fill",
      color: "#00758f",
      level: "Proficient",
      visualPercent: 85,
      description: "Relational database schema design, joins, normalization, query optimization, and data validation."
    },
    {
      name: "SQLite",
      category: "database",
      icon: "bi-database-check",
      color: "#003b57",
      level: "Proficient",
      visualPercent: 88,
      description: "Embedded database management in Django applications, schema migrations, and local testing."
    },
    {
      name: "MongoDB",
      category: "database",
      icon: "bi-layers-fill",
      color: "#47a248",
      level: "Working Knowledge",
      visualPercent: 76,
      description: "Document storage, collections, CRUD operations, and Mongoose integration in MERN applications."
    },

    // Tools & Concepts
    {
      name: "Git & GitHub",
      category: "tools",
      icon: "bi-git",
      color: "#f05032",
      level: "Proficient",
      visualPercent: 88,
      description: "Branching workflows, commits, pull requests, resolving conflicts, and collaborating via code reviews."
    },
    {
      name: "VS Code",
      category: "tools",
      icon: "bi-terminal-fill",
      color: "#007acc",
      level: "Advanced",
      visualPercent: 92,
      description: "Productive coding environment, extensions, integrated terminal debugging, and linters."
    },
    {
      name: "OOP & CRUD Operations",
      category: "tools",
      icon: "bi-diagram-3-fill",
      color: "#a855f7",
      level: "Proficient",
      visualPercent: 88,
      description: "Inheritance, encapsulation, polymorphism, data integrity, and end-to-end CRUD pipelines."
    },
    {
      name: "Agile / Scrum",
      category: "tools",
      icon: "bi-kanban-fill",
      color: "#ec4899",
      level: "Practitioner",
      visualPercent: 85,
      description: "Sprint planning, daily stand-up meetings, ticket tracking, and cross-functional collaboration."
    }
  ],

  softSkills: [
    { name: "Team Collaboration", icon: "bi-people-fill" },
    { name: "Problem Solving", icon: "bi-lightbulb-fill" },
    { name: "Effective Communication", icon: "bi-chat-dots-fill" },
    { name: "Adaptability & Learning", icon: "bi-arrow-repeat" },
    { name: "Attention to Detail", icon: "bi-check2-circle" },
    { name: "Time Management", icon: "bi-clock-history" }
  ]
};
