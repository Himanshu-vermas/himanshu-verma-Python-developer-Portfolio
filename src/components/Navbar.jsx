import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background on scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for navigation highlight
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed-top">
      <nav 
        className={`navbar navbar-expand-lg custom-navbar ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand navbar-brand-custom" href="#home" onClick={() => handleNavLinkClick('home')}>
            <span className="gradient-text fw-bold">Himanshu</span>
            <span className="text-white">.dev</span>
            <span className="status-pulse ms-1 d-none d-sm-inline-block" title="Open to opportunities"></span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="navbar-toggler border-0 p-2 text-white shadow-none"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="portfolioNavbar"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2 text-cyan`}></i>
          </button>

          {/* Nav Items Collapse */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show bg-dark p-3 rounded-4 mt-2 border border-secondary' : ''}`} id="portfolioNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link nav-link-custom ${activeSection === link.id ? 'active' : ''}`}
                    href={`#${link.id}`}
                    onClick={() => handleNavLinkClick(link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Recruiter CTA Button */}
            <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
              <a
                href="#contact"
                className="btn btn-modern-primary btn-sm px-3 py-2"
                onClick={() => handleNavLinkClick('contact')}
                id="navbar-hire-me-btn"
              >
                <i className="bi bi-briefcase-fill me-1"></i>
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
