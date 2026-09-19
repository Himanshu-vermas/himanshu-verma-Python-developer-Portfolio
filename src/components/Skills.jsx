import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-5" aria-label="Technical Skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-gear-wide-connected"></i>
            Technical Proficiency
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle text-secondary">
            A comprehensive overview of my programming languages, frameworks, databases, and development workflows.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`btn filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="row g-4 mb-5">
          {filteredSkills.map((skill) => (
            <div className="col-md-6 col-lg-4" key={skill.name}>
              <div className="glass-card skill-card">
                
                {/* Skill Header */}
                <div className="skill-header">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="skill-icon-wrap" 
                      style={{ color: skill.color, border: `1px solid ${skill.color}33`, background: `${skill.color}15` }}
                    >
                      <i className={`bi ${skill.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold text-white mb-0">{skill.name}</h3>
                      <span className="badge text-secondary border border-secondary p-1" style={{ fontSize: '0.7rem' }}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono small text-secondary">{skill.visualPercent}%</span>
                </div>

                {/* Description */}
                <p className="small text-secondary mb-3">
                  {skill.description}
                </p>

                {/* Visual Progress Representation */}
                <div className="skill-progress-track">
                  <div 
                    className="skill-progress-bar" 
                    style={{ 
                      width: `${skill.visualPercent}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #3b82f6)`
                    }}
                    role="progressbar"
                    aria-valuenow={skill.visualPercent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${skill.name} visual proficiency`}
                  ></div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on Visual Representation */}
        <p className="text-center text-muted small mb-5">
          <i className="bi bi-info-circle me-1"></i>
          Percentage bars represent relative familiarity and daily practical hands-on application across projects.
        </p>

        {/* Soft Skills & Working Methodologies */}
        <div className="glass-card p-4 p-md-5">
          <div className="row align-items-center gy-4">
            <div className="col-lg-4 text-center text-lg-start">
              <h3 className="h5 fw-bold text-white mb-2">Professional & Soft Skills</h3>
              <p className="text-secondary small mb-0">
                Proven team collaboration, Agile/Scrum participation, and continuous self-directed learning.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                {skillsData.softSkills.map((soft, idx) => (
                  <span 
                    key={idx} 
                    className="badge p-2 px-3 rounded-pill bg-dark border border-secondary text-white d-inline-flex align-items-center gap-2"
                  >
                    <i className={`bi ${soft.icon} text-cyan`}></i>
                    {soft.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
