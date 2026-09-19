import React from 'react';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  return (
    <section id="experience" className="py-5" aria-label="Work Experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-clock-history"></i>
            Career Pathway
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle text-secondary">
            Hands-on software development experience across full-stack engineering, web development, and MERN internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-wrapper">
              
              {experienceData.map((item, index) => (
                <article className="timeline-item" key={index}>
                  
                  {/* Timeline Dot Indicator */}
                  <div className="timeline-dot" aria-hidden="true"></div>

                  {/* Card Content */}
                  <div className="glass-card p-4 p-md-5">
                    
                    {/* Header: Role, Company, Period */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 mb-3">
                      <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                          <h3 className="h5 fw-bold text-white mb-0">{item.role}</h3>
                          <span className={`badge bg-${item.badgeType} bg-opacity-25 text-${item.badgeType} border border-${item.badgeType} small`}>
                            {item.badge}
                          </span>
                        </div>
                        <div className="text-cyan fw-semibold fs-6">
                          <i className="bi bi-building me-1"></i>
                          {item.company}
                          <span className="text-muted ms-2 small">
                            <i className="bi bi-geo-alt me-1"></i>
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Duration Tag */}
                      <span className="badge p-2 px-3 rounded-pill bg-dark border border-secondary text-secondary font-mono">
                        <i className="bi bi-calendar3 me-1 text-cyan"></i>
                        {item.duration}
                      </span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mb-4">
                      {item.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="d-flex align-items-start gap-2">
                          <i className="bi bi-check2-circle text-cyan mt-1 flex-shrink-0"></i>
                          <span className="small">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
