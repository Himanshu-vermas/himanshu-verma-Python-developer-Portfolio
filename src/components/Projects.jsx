import React, { useState } from 'react';
import { projectCategories, projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="projects" className="py-5" aria-label="Featured Projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-collection-fill"></i>
            Portfolio Works
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle text-secondary">
            Explore web applications and platforms built with Python, Django, React.js, and modern responsive CSS.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`btn filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <article className="glass-card project-card">
                
                {/* Project Image Wrapper */}
                <figure className="project-img-wrapper mb-0">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-img"
                    loading="lazy"
                  />
                  <span className="badge bg-dark bg-opacity-75 text-cyan border border-secondary position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill font-mono small">
                    {project.year}
                  </span>
                  <figcaption className="visually-hidden">{project.title}</figcaption>
                </figure>

                {/* Project Body */}
                <div className="project-body">
                  <div className="mb-2">
                    <span className="badge text-uppercase tracking-wider" style={{ background: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-cyan)', fontSize: '0.7rem' }}>
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="h5 fw-bold text-white mb-2">{project.title}</h3>
                  
                  <p className="small text-secondary mb-3 flex-grow-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-3">
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-1 text-secondary" style={{ fontSize: '0.8rem' }}>
                      {project.highlights.slice(0, 2).map((point, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-start gap-2">
                          <i className="bi bi-arrow-right-short text-cyan mt-1 flex-shrink-0"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-modern-outline btn-sm flex-fill justify-content-center"
                      title="View GitHub Repository"
                    >
                      <i className="bi bi-github"></i>
                      Code
                    </a>
                    <a
                      href={project.liveDemo}
                      className="btn btn-modern-primary btn-sm flex-fill justify-content-center"
                      title="View Live Demonstration"
                      onClick={(e) => {
                        if (project.liveDemo === "#") {
                          e.preventDefault();
                          alert(`Demo for "${project.title}" will open when hosted on production server!`);
                        }
                      }}
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      Live Demo
                    </a>
                  </div>

                </div>
              </article>
            </div>
          ))}
        </div>

        {/* GitHub Repository Callout */}
        <div className="text-center mt-5">
          <p className="text-secondary small mb-3">Want to explore more code repositories, scripts, and contributions?</p>
          <a
            href="https://github.com/Himanshu-vermas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-modern-outline"
          >
            <i className="bi bi-github text-cyan"></i>
            Visit My GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}
