import React, { useState } from 'react';
import cvPdf from '../assets/Himanshu-Verma-CV.pdf';
import { socialLinks } from '../data/socialLinks';

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-5" aria-label="Resume and Curriculum Vitae">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-file-earmark-person-fill"></i>
            Curriculum Vitae
          </span>
          <h2 className="section-title">
            Download & Review <span className="gradient-text">My Resume</span>
          </h2>
          <p className="section-subtitle text-secondary">
            Looking for a dedicated Python Full Stack or React developer for your team? Grab a copy of my complete CV.
          </p>
        </div>

        {/* Highlight Resume Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="glass-card p-4 p-md-5 position-relative overflow-hidden">
              
              {/* Subtle Ambient Glow */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              ></div>

              <div className="row align-items-center gy-4">
                
                {/* Left: Resume Snapshot info */}
                <div className="col-md-7">
                  <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill bg-dark border border-secondary text-cyan small">
                    <i className="bi bi-patch-check-fill"></i>
                    <span>Updated Profile & Verified Credentials</span>
                  </div>

                  <h3 className="h3 fw-bold text-white mb-2">Himanshu Verma</h3>
                  <p className="text-cyan fw-semibold mb-3">
                    Python Full Stack Developer • React.js & Django Specialist
                  </p>

                  <p className="text-secondary small mb-4">
                    Document covers commercial software engineering at Softpro India (July 2025 – Present), web engineering at Eduminus Learning, MERN internship at Zidio Development, full-stack projects, MCA (Pursuing), and BCA credentials.
                  </p>

                  {/* Highlights Grid */}
                  <div className="row g-2 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2 small text-secondary">
                        <i className="bi bi-check2 text-cyan"></i>
                        <span>1.5+ Years Hands-on Coding</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2 small text-secondary">
                        <i className="bi bi-check2 text-cyan"></i>
                        <span>Python, Django, FastAPI, React</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2 small text-secondary">
                        <i className="bi bi-check2 text-cyan"></i>
                        <span>5+ Modules & Full Stack Apps</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2 small text-secondary">
                        <i className="bi bi-check2 text-cyan"></i>
                        <span>200+ Bugs Debugged & Tested</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Download & View Actions */}
                  <div className="d-flex flex-wrap gap-3">
                    <a
                      href={cvPdf}
                      download="Himanshu-Verma-CV.pdf"
                      className="btn btn-modern-primary"
                      id="resume-download-btn"
                    >
                      <i className="bi bi-cloud-arrow-down-fill fs-5"></i>
                      Download CV (PDF)
                    </a>
                    
                    <button
                      type="button"
                      className="btn btn-modern-outline"
                      onClick={() => setIsPreviewOpen(true)}
                      id="resume-preview-btn"
                    >
                      <i className="bi bi-eye-fill"></i>
                      View CV Online
                    </button>
                  </div>
                </div>

                {/* Right: Graphic Resume Preview Thumbnail */}
                <div className="col-md-5 text-center">
                  <div 
                    className="p-4 rounded-4 text-start"
                    style={{
                      background: 'rgba(11, 15, 25, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                      <span className="fw-bold text-white small font-mono">HIMANSHU_VERMA_CV.pdf</span>
                      <span className="badge bg-danger bg-opacity-25 text-danger border border-danger small">PDF</span>
                    </div>

                    <div className="font-mono text-secondary" style={{ fontSize: '0.78rem', lineHeight: '1.7' }}>
                      <div className="text-white fw-bold">HIMANSHU VERMA</div>
                      <div className="text-cyan">Python Full Stack Developer</div>
                      <div className="text-muted">Lucknow, India • {socialLinks.displayPhone}</div>
                      <div className="text-muted">{socialLinks.email}</div>
                      <hr className="my-2 border-secondary border-opacity-25" />
                      <div><strong>Exp:</strong> Softpro India (Python Full Stack Developer)</div>
                      <div><strong>Exp:</strong> Eduminus Learning (Web Developer)</div>
                      <div><strong>Intern:</strong> Zidio Development (MERN Stack)</div>
                      <div><strong>Edu:</strong> MCA (Pursuing) | BCA (Dec 2023)</div>
                    </div>

                    <div className="mt-4 pt-2 text-center">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info w-100 rounded-pill"
                        onClick={() => setIsPreviewOpen(true)}
                      >
                        <i className="bi bi-arrows-fullscreen me-1"></i>
                        Open Interactive Resume Viewer
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Resume Preview Modal */}
        {isPreviewOpen && (
          <div 
            className="custom-modal-backdrop" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="cv-modal-title"
          >
            <div className="custom-modal-dialog p-4 p-md-5">
              
              {/* Modal Header */}
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom border-secondary border-opacity-25 mb-4">
                <h3 className="h5 fw-bold text-white mb-0" id="cv-modal-title">
                  <i className="bi bi-file-earmark-text text-cyan me-2"></i>
                  Himanshu Verma — Curriculum Vitae
                </h3>
                <button
                  type="button"
                  className="btn btn-sm btn-dark border border-secondary text-white"
                  onClick={() => setIsPreviewOpen(false)}
                  aria-label="Close modal"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              {/* Modal Content: Full Printable Resume Representation */}
              <div className="p-4 rounded-3 text-white bg-dark border border-secondary border-opacity-50" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
                
                {/* Header */}
                <div className="text-center pb-3 border-bottom border-secondary">
                  <h4 className="fw-bold mb-1">HIMANSHU VERMA</h4>
                  <p className="text-secondary small mb-2">
                    Jankipuram, Lucknow, India | {socialLinks.displayPhone} | {socialLinks.email}
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-3 small">
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-cyan">
                      <i className="bi bi-linkedin me-1"></i>LinkedIn
                    </a>
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-cyan">
                      <i className="bi bi-github me-1"></i>GitHub
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-4">
                  <h5 className="text-cyan text-uppercase fw-bold fs-6">Professional Summary</h5>
                  <p className="small text-secondary">
                    Python Full Stack Developer with expertise in Python, Django, FastAPI, React.js, JavaScript, HTML5, CSS3, Bootstrap, MySQL, and MongoDB. Strong understanding of REST APIs, SQL, database management, and CRUD operations. Experienced in developing, testing, and maintaining scalable full-stack applications, integrating frontend with server-side logic, and debugging through structured code reviews. Seeking a Software Developer role to contribute to organizational growth.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mt-3">
                  <h5 className="text-cyan text-uppercase fw-bold fs-6">Technical Skills</h5>
                  <ul className="small text-secondary list-unstyled">
                    <li><strong>Programming Languages:</strong> Python, JavaScript</li>
                    <li><strong>Frameworks & Libraries:</strong> Django, FastAPI, React.js, Bootstrap</li>
                    <li><strong>Web Technologies:</strong> HTML5, CSS3, REST APIs</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB</li>
                    <li><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), CRUD Operations</li>
                    <li><strong>Tools & Version Control:</strong> Git, GitHub</li>
                  </ul>
                </div>

                {/* Professional Experience */}
                <div className="mt-3">
                  <h5 className="text-cyan text-uppercase fw-bold fs-6">Professional Experience</h5>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small fw-bold text-white">
                      <span>Python Full Stack Developer — Softpro India</span>
                      <span className="text-cyan">July 2025 – Present</span>
                    </div>
                    <ul className="small text-secondary mt-1 ps-3 mb-0">
                      <li>Developed responsive, user-friendly web applications using Python, Django, HTML5, CSS3, JavaScript, and Bootstrap, delivering 5 key modules across projects.</li>
                      <li>Implemented backend business logic, CRUD operations, REST API integration, and database integration using Django.</li>
                      <li>Designed and managed MySQL databases, including query optimization, data validation, and schema design.</li>
                      <li>Integrated frontend and backend components to build scalable full-stack web applications.</li>
                      <li>Performed debugging, testing, and error handling, resolving 200+ bugs to improve application stability and performance.</li>
                      <li>Used Git and GitHub for version control, code management, and team collaboration through structured code reviews.</li>
                      <li>Collaborated with a 7-member team to gather requirements, develop features, and resolve technical issues.</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between small fw-bold text-white">
                      <span>Web Developer — Eduminus Learning</span>
                      <span className="text-cyan">Aug 2024 – Feb 2025</span>
                    </div>
                    <ul className="small text-secondary mt-1 ps-3 mb-0">
                      <li>Developed responsive web applications using HTML, CSS, JavaScript, PHP, Bootstrap, and MySQL.</li>
                      <li>Implemented new features, managed MySQL database operations, and optimized website performance.</li>
                      <li>Wrote clean, modular, and maintainable code to deliver scalable, user-friendly web solutions.</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between small fw-bold text-white">
                      <span>MERN Stack Developer Intern — Zidio Development</span>
                      <span className="text-cyan">May 2024 – Jul 2024 | Remote</span>
                    </div>
                    <ul className="small text-secondary mt-1 ps-3 mb-0">
                      <li>Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).</li>
                      <li>Built responsive user interfaces and integrated MongoDB for efficient data management.</li>
                      <li>Collaborated with design and backend teams in an Agile environment, contributing to daily stand-ups, sprint planning, and code reviews.</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-3">
                  <h5 className="text-cyan text-uppercase fw-bold fs-6">Key Projects</h5>
                  <div className="mb-2">
                    <div className="small fw-bold text-white">SmartBuild Hub – Construction Management Web Application (2026)</div>
                    <p className="small text-secondary mb-1">
                      Built a full-stack construction management platform using Python, Django, HTML5, CSS3, Bootstrap 5, JavaScript, Font Awesome, and AOS to streamline collaboration between builders, architects, contractors, and clients. Implemented User Authentication, Project Showcase, Contact, and Testimonials modules; integrated SQLite and applied Django MVT architecture.
                    </p>
                  </div>
                  <div className="mb-2">
                    <div className="small fw-bold text-white">Digital Marketing Website (2025)</div>
                    <p className="small text-secondary mb-0">
                      Built a responsive digital marketing website using HTML, CSS, JavaScript, and Bootstrap with reusable, maintainable frontend components. Tested and debugged the application to deliver a responsive, user-friendly experience.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-3">
                  <h5 className="text-cyan text-uppercase fw-bold fs-6">Education</h5>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small text-white">
                      <span><strong>Master of Computer Applications (MCA)</strong> — Pursuing</span>
                      <span className="text-cyan">2026 – Present</span>
                    </div>
                    <div className="small text-muted">Integral University, Lucknow | Distance Learning</div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between small text-white">
                      <span><strong>Bachelor of Computer Applications (BCA)</strong></span>
                      <span className="text-cyan">Dec 2023</span>
                    </div>
                    <div className="small text-muted">Indira Gandhi National Open University | Varanasi, India | CGPA: 6.8</div>
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="d-flex justify-content-end gap-3 mt-4">
                <button
                  type="button"
                  className="btn btn-modern-outline btn-sm"
                  onClick={() => setIsPreviewOpen(false)}
                >
                  Close Preview
                </button>
                <a
                  href={cvPdf}
                  download="Himanshu-Verma-CV.pdf"
                  className="btn btn-modern-primary btn-sm"
                >
                  <i className="bi bi-cloud-arrow-down-fill me-1"></i>
                  Download PDF
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
