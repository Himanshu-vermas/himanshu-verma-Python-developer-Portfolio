import React from 'react';
import { profileData } from '../data/profileData';
import { socialLinks } from '../data/socialLinks';

export default function About() {
  return (
    <section id="about" className="py-5" aria-label="About Me">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-person-badge"></i>
            About Me
          </span>
          <h2 className="section-title">
            Passionate Developer Driven by <span className="gradient-text">Clean Code & Architecture</span>
          </h2>
          <p className="section-subtitle text-secondary">
            Here's a brief background on my journey, core technical philosophy, and what I bring to an engineering team.
          </p>
        </div>

        {/* Top Content Row: Detailed Summary & Highlights */}
        <div className="row gy-4 align-items-stretch mb-5">
          
          {/* Main Story & Career Objective */}
          <div className="col-lg-7">
            <article className="glass-card p-4 p-md-5 h-100">
              <h3 className="h4 fw-bold text-white mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-compass-fill text-cyan"></i>
                Career Objective & Professional Summary
              </h3>
              
              <p className="text-secondary mb-4 leading-relaxed">
                {profileData.summary}
              </p>

              <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(0, 210, 255, 0.05)', borderLeft: '4px solid var(--accent-cyan)' }}>
                <h4 className="h6 text-cyan fw-bold mb-1">My Focus</h4>
                <p className="small mb-0 text-white-50">
                  {profileData.careerObjective}
                </p>
              </div>

              {/* Quick Key Facts List */}
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-secondary">
                    <i className="bi bi-geo-alt-fill text-danger"></i>
                    <span><strong>Location:</strong> {socialLinks.location}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-secondary">
                    <i className="bi bi-mortarboard-fill text-warning"></i>
                    <span><strong>Education:</strong> MCA (Pursuing) | BCA Graduate</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-secondary">
                    <i className="bi bi-envelope-fill text-info"></i>
                    <span><strong>Email:</strong> {socialLinks.email}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-secondary">
                    <i className="bi bi-phone-fill text-success"></i>
                    <span><strong>Phone:</strong> {socialLinks.displayPhone}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: 4 Stat/Metric Cards */}
          <div className="col-lg-5">
            <div className="row g-3 h-100">
              {profileData.stats.map((stat, idx) => (
                <div className="col-sm-6" key={idx}>
                  <div className="glass-card stat-card">
                    <div className="stat-icon">
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                    <div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                      <div className="text-muted small">{stat.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Core Strengths Grid */}
        <div className="mt-4">
          <h3 className="h4 fw-bold text-center text-white mb-4">
            Key <span className="gradient-text">Engineering Strengths</span>
          </h3>
          
          <div className="row g-3">
            {profileData.coreStrengths.map((strength, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="glass-card p-4 h-100">
                  <div className="text-cyan mb-3 fs-3">
                    <i className={`bi ${idx === 0 ? 'bi-cpu-fill' : idx === 1 ? 'bi-database-gear' : idx === 2 ? 'bi-people-fill' : 'bi-shield-check'}`}></i>
                  </div>
                  <h4 className="h6 fw-bold text-white mb-2">{strength.title}</h4>
                  <p className="text-secondary small mb-0">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
