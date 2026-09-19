import React, { useState, useEffect } from 'react';
import profileImg from '../assets/himanshu.png';
import { profileData } from '../data/profileData';
import { socialLinks } from '../data/socialLinks';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = profileData.titles;

  useEffect(() => {
    const currentTitle = titles[textIndex % titles.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentTitle.length) {
          // Pause at end of text before deleting
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        // Deleting characters
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
          setTypingSpeed(100);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, typingSpeed, titles]);

  return (
    <section id="home" className="hero-wrapper" aria-label="Hero Introduction">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row gy-5">
          
          {/* Left Column: Intro Content */}
          <div className="col-lg-7 text-center text-lg-start">
            
            {/* Recruiter Availability Badge */}
            <div className="mb-3 d-inline-block">
              <span className="status-badge" role="status">
                <span className="status-pulse"></span>
                <span>{profileData.status}</span>
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="display-4 fw-black mb-3">
              Hi, I'm <span className="gradient-text">{profileData.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <h2 className="h3 mb-3 fw-bold text-white d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
              <span>I build as a</span>
              <span className="text-cyan font-mono" style={{ minHeight: '38px', color: '#00d2ff' }}>
                {displayedText}
                <span className="cursor-blink">|</span>
              </span>
            </h2>

            {/* Description */}
            <p className="lead mb-4 text-secondary" style={{ maxWidth: '600px' }}>
              {profileData.summary}
            </p>

            {/* Call to Action Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href="#projects" className="btn btn-modern-primary" id="hero-view-work-btn">
                <i className="bi bi-grid-fill"></i>
                View My Work
              </a>
              <a 
                href="/Himanshu-Verma-CV.pdf" 
                download="Himanshu-Verma-CV.pdf" 
                className="btn btn-modern-outline"
                id="hero-download-cv-btn"
                title="Download Himanshu Verma's Resume"
              >
                <i className="bi bi-cloud-arrow-down-fill text-cyan"></i>
                Download CV
              </a>
              <a href="#contact" className="btn btn-modern-outline" id="hero-contact-btn">
                <i className="bi bi-envelope-fill"></i>
                Contact Me
              </a>
            </div>

            {/* Social Links & Quick Contact info */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 pt-2">
              <span className="text-muted small fw-semibold text-uppercase tracking-wider">Connect:</span>
              
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <i className="bi bi-github"></i>
              </a>

              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a 
                href={`mailto:${socialLinks.email}`} 
                className="social-icon-btn" 
                aria-label="Send Email"
                title={`Email: ${socialLinks.email}`}
              >
                <i className="bi bi-envelope-at-fill"></i>
              </a>

              <a 
                href={`tel:${socialLinks.phone}`} 
                className="social-icon-btn" 
                aria-label="Call Direct"
                title={`Phone: ${socialLinks.displayPhone}`}
              >
                <i className="bi bi-telephone-fill"></i>
              </a>

              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="Chat on WhatsApp"
                title="WhatsApp Direct"
              >
                <i className="bi bi-whatsapp text-success"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Image with Floating Badges */}
          <div className="col-lg-5 text-center">
            <figure className="hero-profile-container mb-0">
              <div className="hero-profile-glow" aria-hidden="true"></div>
              
              <div className="hero-profile-frame">
                <img
                  src={profileImg}
                  alt="Himanshu Verma - Python Full Stack Developer"
                  className="hero-profile-img"
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>

              {/* Floating Badge 1: Python & Django */}
              <div className="floating-badge floating-badge-1">
                <i className="bi bi-filetype-py text-warning fs-5"></i>
                <div>
                  <div className="fw-bold text-white small">Python & Django</div>
                  <div className="text-muted" style={{ fontSize: '0.7rem' }}>Full Stack Backend</div>
                </div>
              </div>

              {/* Floating Badge 2: React.js */}
              <div className="floating-badge floating-badge-2">
                <i className="bi bi-filetype-jsx text-info fs-5"></i>
                <div>
                  <div className="fw-bold text-white small">React.js</div>
                  <div className="text-muted" style={{ fontSize: '0.7rem' }}>Modern Frontend</div>
                </div>
              </div>

              {/* Floating Badge 3: MySQL & Databases */}
              <div className="floating-badge floating-badge-3 d-none d-sm-flex">
                <i className="bi bi-database-check text-cyan fs-5"></i>
                <div>
                  <div className="fw-bold text-white small">MySQL & SQLite</div>
                  <div className="text-muted" style={{ fontSize: '0.7rem' }}>CRUD & Schema Design</div>
                </div>
              </div>

              {/* Floating Decorative Elements: ✦ and ○ */}
              <span className="hero-decor hero-sparkle-1" aria-hidden="true">✦</span>
              <span className="hero-decor hero-circle-1" aria-hidden="true">○</span>
              <span className="hero-decor hero-sparkle-2" aria-hidden="true">✦</span>
              <span className="hero-decor hero-circle-2" aria-hidden="true">○</span>
              <span className="hero-decor hero-sparkle-3" aria-hidden="true">✦</span>

              <figcaption className="visually-hidden">
                Profile photograph of Himanshu Verma with floating technology highlights
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}
