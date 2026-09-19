import React from 'react';
import { educationData } from '../data/educationData';

export default function Education() {
  return (
    <section id="education" className="py-5" aria-label="Academic Education">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-mortarboard-fill"></i>
            Academic Background
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle text-secondary">
            Formal foundations in computer applications, programming, data structures, and database systems.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline-wrapper">
              
              {educationData.map((edu, idx) => (
                <article className="timeline-item" key={idx}>
                  <div className="timeline-dot" aria-hidden="true"></div>

                  <div className="glass-card p-4 p-md-5">
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 mb-3">
                      <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                          <h3 className="h5 fw-bold text-white mb-0">{edu.degree}</h3>
                          <span className={`badge bg-${edu.badgeType || 'success'} bg-opacity-25 text-${edu.badgeType || 'success'} border border-${edu.badgeType || 'success'} small`}>
                            {edu.badge}
                          </span>
                        </div>
                        <div className="text-cyan fw-semibold fs-6">
                          <i className="bi bi-bank me-1"></i>
                          {edu.institution}
                          <span className="text-muted ms-2 small">
                            <i className="bi bi-geo-alt me-1"></i>
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      <div className="d-flex flex-column align-items-start align-items-md-end gap-1">
                        <span className="badge p-2 px-3 rounded-pill bg-dark border border-secondary text-secondary font-mono">
                          {edu.duration}
                        </span>
                        <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    <p className="text-secondary small mb-3">
                      {edu.description}
                    </p>

                    <div className="pt-2 border-top border-secondary border-opacity-25">
                      <h4 className="text-white-50 small fw-bold mb-2">Core Academic Focus Areas:</h4>
                      <div className="d-flex flex-wrap gap-2">
                        {edu.keyCoursework.map((course, cIdx) => (
                          <span key={cIdx} className="tech-tag">
                            <i className="bi bi-check-circle-fill text-cyan me-1" style={{ fontSize: '0.7rem' }}></i>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

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
