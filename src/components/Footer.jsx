import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { profileData } from '../data/profileData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'rgba(10, 14, 23, 0.95)' }}>
      <div className="container">
        
        <div className="row gy-4 align-items-center justify-content-between mb-5">
          
          {/* Brand & Tagline */}
          <div className="col-lg-5 text-center text-lg-start">
            <a href="#home" className="navbar-brand-custom d-inline-block mb-2">
              <span className="gradient-text fw-bold">{profileData.name}</span>
              <span className="text-white">.dev</span>
            </a>
            <p className="text-secondary small mb-3" style={{ maxWidth: '420px' }}>
              {profileData.tagline}
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
              <span className="status-pulse"></span>
              <span className="text-success small fw-semibold">Open for New Roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-lg-4 text-center">
            <h4 className="h6 text-white text-uppercase tracking-wider fw-bold mb-3">Quick Links</h4>
            <div className="d-flex flex-wrap justify-content-center gap-3 small">
              <a href="#home" className="text-secondary text-decoration-none">Home</a>
              <a href="#about" className="text-secondary text-decoration-none">About</a>
              <a href="#skills" className="text-secondary text-decoration-none">Skills</a>
              <a href="#experience" className="text-secondary text-decoration-none">Experience</a>
              <a href="#projects" className="text-secondary text-decoration-none">Projects</a>
              <a href="#education" className="text-secondary text-decoration-none">Education</a>
              <a href="#resume" className="text-secondary text-decoration-none">Resume</a>
              <a href="#contact" className="text-secondary text-decoration-none">Contact</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-lg-3 text-center text-lg-end">
            <h4 className="h6 text-white text-uppercase tracking-wider fw-bold mb-3">Follow & Connect</h4>
            <div className="d-flex justify-content-center justify-content-lg-end gap-2">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="social-icon-btn"
                aria-label="Direct Email"
                title="Email"
              >
                <i className="bi bi-envelope-at-fill"></i>
              </a>
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 small text-muted">
          <div>
            © {currentYear} {profileData.name}. All Rights Reserved.
          </div>
          <div>
            Designed with <i className="bi bi-heart-fill text-danger mx-1"></i> using React & Bootstrap 5
          </div>
        </div>

      </div>
    </footer>
  );
}
