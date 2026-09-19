# 🚀 Himanshu Verma — Portfolio Website: Complete Step-by-Step Guide & Explanation

Yeh document aapke **React.js + Bootstrap 5 Personal Portfolio Website** ke har ek step, architecture, components, background animations, aur customization ko detail mein explain karta hai.

---

## 📑 Table of Contents (Index)
1. [Project Overview & Tech Stack](#1-project-overview--tech-stack)
2. [Project Kaise Banaya Gaya (Development Steps)](#2-project-kaise-banaya-gaya-development-steps)
3. [Folder Structure & Files Ka Matlab](#3-folder-structure--files-ka-matlab)
4. [Har Ek Component & File Ka Complete Code Breakdown (Deep Dive)](#4-har-ek-component--file-ka-complete-code-breakdown-deep-dive)
5. [Animated Background System Kaise Kaam Karta Hai](#5-animated-background-system-kaise-kaam-karta-hai)
6. [Google Forms Integration Kaise Kaam Karta Hai](#6-google-forms-integration-kaise-kaam-karta-hai)
7. [Project Ko Run Kaise Karein (Terminal Commands)](#7-project-ko-run-kaise-karein-terminal-commands)
8. [Apna Data / Content Kaise Update Karein (Customization Guide)](#8-apna-data--content-kaise-update-karein-customization-guide)
9. [Website Ko Free Mein Live / Deploy Kaise Karein](#9-website-ko-free-mein-live--deploy-kaise-karein)

---

## 1. Project Overview & Tech Stack

Aapka portfolio ek **modern, recruiter-friendly single-page application (SPA)** hai, jisme aapke resume ke exact real details shaamil hain:
- **Name**: Himanshu Verma
- **Role**: Python Full Stack Developer & React.js Developer
- **Target Audience**: Technical Recruiters, HRs, aur Clients jo turant samajh sakein:
  - *Who I am → What I know → What I built → My Resume → How to contact me*

### 🛠️ Technologies Used:
- **React.js (v19)** — Modern functional components, React Hooks (`useState`, `useEffect`, `useMemo`).
- **Vite** — Super fast bundler aur development server (HMR - Hot Module Replacement).
- **HTML5 Semantic Elements** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<form>`, `<label>`, `<button>`, `<footer>`.
- **Bootstrap 5 & Bootstrap Icons** — Responsive layout, grid system, modern UI icons.
- **Custom CSS3 Design System (`src/index.css`)** — Glassmorphism, cyber glow, gradient animations, smooth transitions.

---

## 2. Project Kaise Banaya Gaya (Development Steps)

### Step 1: Project Scaffolding
- Sabse pehle Vite ke through React project initialize kiya gaya.
- Bootstrap 5 aur Bootstrap Icons packages install kiye gaye (`npm install bootstrap bootstrap-icons`).

### Step 2: Resume Data Extraction
- Aapke upload kiye gaye resume PDF se exact information extract ki gayi:
  - Traineeship at **Softpro India** (Feb 2026 – Present)
  - Web Developer at **Eduminus Learning** (Aug 2024 – Feb 2025)
  - MERN Intern at **Zidio Development** (May 2024 – Jul 2024)
  - Projects: **SmartBuild Hub**, **Digital Marketing Website**, **Synergy MERN App**
  - Education: **BCA from IGNOU** (Dec 2023, 6.8 CGPA, Varanasi)
  - Contact: Phone (`+91-9519221840`), Email (`hv4145574@gmail.com`), Location (`Lucknow`).

### Step 3: Design System & CSS Token Architecture
- Ek custom luxury dark theme banaya gaya (`#0a0e17` deep background, cyan `#00d2ff`, indigo `#6366f1`, emerald `#10b981`).
- Card elevation (`translateY(-6px)`), glassmorphism (`backdrop-filter: blur()`), glowing borders define kiye gaye.

### Step 4: Real Assets Setup
- Realistic developer portrait photo (`profile.jpg`) generate karke `src/assets/` mein save kiya gaya.
- Real project preview screenshots generate kiye gaye.
- Downloadable valid PDF resume file (`Himanshu-Verma-CV.pdf`) `src/assets/` aur `public/` folder mein add kiya gaya.

### Step 5: Data Layer Banaya Gaya (`src/data/`)
- Hardcoding avoid karne ke liye saara data clean JavaScript files mein alag rakha gaya taaki aap baad mein bina code tode kuch bhi change kar sakein.

### Step 6: Semantic Components Create Kiye Gaye
- Har section ke liye alag reusable React component banaya gaya.

### Step 7: Animated Background System Add Hua
- Background ko modern aur futuristic banane ke liye moving gradient, 60px developer grid, floating blurred orbs, interactive mouse-follow spotlight, aur micro-particles integrate kiye gaye.

### Step 8: Build Verification
- `npm run build` chala kar verify kiya gaya ki production code mein 0 errors hain aur bundle perfectly optimize ho raha hai.

---

## 3. Folder Structure & Files Ka Matlab

```text
portfolio/
│
├── index.html                      # Main HTML page (SEO meta tags, Google Fonts: Outfit, Jakarta, JetBrains)
├── package.json                    # Project dependencies (React, Bootstrap, Icons, Vite)
├── vite.config.js                  # Vite configuration
├── README.md                       # Quick overview documentation
├── PORTFOLIO_EXPLANATION.md        # Yeh complete explanation guide
│
├── public/                         # Static files jo directly browser mein serve hoti hain
│   ├── Himanshu-Verma-CV.pdf       # Direct downloadable resume PDF
│   └── favicon.svg                 # Website browser tab icon
│
└── src/
    ├── assets/                     # Media assets (Images & PDF)
    │   ├── profile.jpg             # Developer headshot photo
    │   ├── project-smartbuild.jpg  # SmartBuild Hub dashboard screenshot
    │   ├── project-digitalmarketing.jpg # Marketing website screenshot
    │   ├── project-mern.jpg        # Synergy MERN app screenshot
    │   └── Himanshu-Verma-CV.pdf   # Internal asset reference
    │
    ├── config/
    │   └── googleForm.js           # Isolated Google Forms submission script & instructions
    │
    ├── data/                       # Easy-to-edit JavaScript Data files
    │   ├── profileData.js          # Name, typing titles, bio, stats, core strengths
    │   ├── skillsData.js           # Categorized skills (Frontend, Backend, DB, Tools) & percentages
    │   ├── projectsData.js         # Projects array with tags, highlights, GitHub/Demo links
    │   ├── experienceData.js       # Softpro India, Eduminus, Zidio milestones
    │   ├── educationData.js        # BCA IGNOU degree details
    │   └── socialLinks.js          # Phone, Email, LinkedIn, GitHub, WhatsApp links
    │
    ├── components/                 # Reusable UI Components
    │   ├── AnimatedBackground.jsx  # Moving gradient, grid, orbs, particles, mouse glow
    │   ├── Navbar.jsx              # Sticky navbar, active section indicator, "Hire Me" CTA
    │   ├── Hero.jsx                # Auto-typing roles, profile aura, floating badges (✦ and ○)
    │   ├── About.jsx               # Bio story, 4 metric cards, engineering strengths
    │   ├── Skills.jsx              # Category tabs, skill cards with visual level indicators
    │   ├── Experience.jsx          # Vertical animated career timeline
    │   ├── Projects.jsx            # Filterable projects grid (All, Full Stack, Frontend)
    │   ├── Education.jsx           # Academic degree timeline card
    │   ├── Resume.jsx              # Download CV button + "View CV Online" modal viewer
    │   ├── Contact.jsx             # Recruiter form with validation, copy buttons, WhatsApp
    │   ├── Footer.jsx              # Semantic footer, quick links, copyright
    │   └── ScrollToTop.jsx         # Floating smooth back-to-top button
    │
    ├── App.jsx                     # Root application tying all components together
    ├── main.jsx                    # React entry point importing Bootstrap JS & index.css
    └── index.css                   # Complete modern CSS design system & animations
```

---

## 4. Har Ek Component & File Ka Complete Code Breakdown (Deep Dive)

Is section mein project ke **har ek JSX component, data file, aur configuration** ka line-by-line aur feature-by-feature explanation diya gaya hai taaki aapko pata rahe ki kaunsi file mein kya code hai aur wo kaise kaam karta hai.

---

### 🗺️ Quick Reference Table: Kaunsa Section = Kaunsi JSX File?

| Section Name | Section ID | JSX Component File | Data / Asset Source | Main Features & Elements |
| :--- | :--- | :--- | :--- | :--- |
| **Top Navigation** | `#` | `src/components/Navbar.jsx` | Internal array | Glassmorphism on scroll, Active scroll-spy, Mobile toggle, "Hire Me" CTA |
| **Hero / Intro** | `#home` | `src/components/Hero.jsx` | `profileData.js`, `socialLinks.js`, `himanshu.png` | Auto-typing roles, Live status radar, Profile glow aura, 3 Floating tech badges, CTAs |
| **About Me** | `#about` | `src/components/About.jsx` | `profileData.js`, `socialLinks.js` | Bio narrative, "My Focus" callout, 4 Stat counter cards, 4 Engineering strengths |
| **Skills & Tech** | `#skills` | `src/components/Skills.jsx` | `skillsData.js` | Category tabs filter, Tech skill cards with percent bars, Soft skills pills |
| **Experience** | `#experience` | `src/components/Experience.jsx` | `experienceData.js` | Vertical glowing timeline, Softpro/Eduminus/Zidio roles, Achievement bullets |
| **Projects** | `#projects` | `src/components/Projects.jsx` | `projectsData.js`, assets images | Category filter tabs, Screenshot cards with hover zoom, GitHub & Live demo links |
| **Education** | `#education` | `src/components/Education.jsx` | `educationData.js` | BCA degree card (IGNOU), CGPA grade badge, Core coursework tags |
| **Resume / CV** | `#resume` | `src/components/Resume.jsx` | `Himanshu-Verma-CV.pdf` | Direct PDF download button + "View CV Online" interactive modal viewer |
| **Contact** | `#contact` | `src/components/Contact.jsx` | `socialLinks.js`, `googleForm.js` | 1-Click Copy phone/email, WhatsApp chat, Validated recruiter contact form |
| **Footer** | `footer` | `src/components/Footer.jsx` | `socialLinks.js` | Brand signature, Quick jump links, Social icons, Dynamic copyright year |
| **Scroll To Top** | Floating | `src/components/ScrollToTop.jsx` | Window scroll | Appears after 300px scroll, Smooth scroll to top animation |
| **Background FX** | Global | `src/components/AnimatedBackground.jsx` | Pure CSS + Canvas-free | Mouse-follow glow spotlight, 4 Floating radial orbs, 18 particles, Dev grid |

---

### 📂 Detailed Breakdown of Every JSX Component

#### 1. `src/components/Navbar.jsx` (Sticky Navigation Bar)
* **File Ka Role:** Yeh portfolio ka header navigation hai jo screen ke top par fixed rehta hai.
* **Isme Kaun-Kaun Se Hooks & States Hain:**
  - `useState(false)` → `isScrolled`: Track karta hai ki user ne 40px se zyada scroll kiya ya nahi. Scroll karne par navbar automatically dark blur glassmorphism ban jata hai (`.scrolled` class add hoti hai).
  - `useState(false)` → `isMobileMenuOpen`: Mobile screen par hamburger menu ko open/close karta hai.
  - `useState('home')` → `activeSection`: Pata rakhta hai ki user screen par kis section ko dekh raha hai.
  - `useEffect`: Window par `scroll` event listener attach karta hai. Jaise-jaise user scroll karta hai, har section ke `offsetTop` aur `offsetHeight` ko calculate karke navbar link ko automatically highlight (cyan color) karta hai (**Scroll Spy**).
* **JSX Structure & Elements:**
  - `<header className="fixed-top">`: Semantic HTML5 header.
  - `<nav className="navbar navbar-expand-lg custom-navbar">`: Bootstrap responsive navbar container.
  - **Brand Logo:** `<a href="#home">` jisme terminal icon `<i className="bi bi-code-slash"></i>` aur **"HV | Dev"** text gradient mein hai.
  - **Navigation Links Array (`navLinks`):** Home, About, Skills, Experience, Projects, Education, Resume, Contact. Har link par click karne par mobile menu automatically close ho jata hai.
  - **"Hire Me" Action Button:** Direct `#contact` par scroll karata hai, jisme handshake icon `<i className="bi bi-briefcase-fill"></i>` laga hai.

---

#### 2. `src/components/Hero.jsx` (Hero Introduction Section)
* **File Ka Role:** User aur Recruiter sabse pehle isi section ko dekhte hain. Yeh aapka main greeting, dynamic typing roles, profile picture, aur quick action buttons render karta hai.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState(0)` → `textIndex`, `useState('')` → `displayedText`, `useState(false)` → `isDeleting`, `useState(100)` → `typingSpeed`:
    - Auto-typing typewriter effect ka pure JavaScript logic. Yeh `profileData.titles` array se ek-ek letter type karta hai, 1.8 second pause karta hai, phir delete karke agla role display karta hai:
      * `"Python Full Stack Developer"` → `"Django & REST API Specialist"` → `"React.js Frontend Engineer"` → `"MERN Stack Developer"`.
* **JSX Structure & Elements:**
  - **Recruiter Availability Badge:** `<span className="status-badge">` jisme green pulsating radar animation (`.status-pulse`) chalti hai: *"🟢 Available for Full-Time Opportunities"*.
  - **Main Heading (`<h1>`):** *"Hi, I'm Himanshu Verma"* gradient text ke saath.
  - **Dynamic Subtitle (`<h2>`):** *"I build as a [Typed Role]|"* cyan monospace font mein.
  - **Summary Paragraph (`<p>`):** Concise bio summary from `profileData.summary`.
  - **3 Primary Action Buttons:**
    1. *"View My Work"* (`#projects`) — Primary gradient button.
    2. *"Download CV"* (`/Himanshu-Verma-CV.pdf`) — Outline button with cloud download icon.
    3. *"Contact Me"* (`#contact`) — Direct connect button.
  - **Social Links Bar:** GitHub, LinkedIn, Email, Phone, aur WhatsApp ke 5 rounded icon buttons.
  - **Hero Profile Aura & Photo Frame:**
    - `.hero-profile-glow`: Gradient radial blur light aura.
    - `.hero-profile-frame`: Circular gradient bordered frame.
    - `<img>`: Photo ko `src/assets/himanshu.png` se import karke render karta hai, with `object-position: center top` taaki sir aur baal bilkul na katein.
  - **3 Floating Technology Badges:**
    1. `floating-badge-1` (Top-Left): Python & Django (Full Stack Backend) with Python icon.
    2. `floating-badge-2` (Bottom-Right): React.js (Modern Frontend) with React icon.
    3. `floating-badge-3` (Bottom-Left): MySQL & SQLite (CRUD & Schema Design) with DB icon.
  - **5 Floating Decorative Particles:** Rotating sparkles (`✦`) aur floating rings (`○`).

---

#### 3. `src/components/About.jsx` (Detailed Story & Core Strengths)
* **File Ka Role:** Aapka professional summary, career objective, key numbers/metrics, aur core engineering competencies explain karta hai.
* **Isme Kaun Sa Data Use Hota Hai:** `profileData.js` aur `socialLinks.js`.
* **JSX Structure & Elements:**
  - **Section Header:** Section tag `"About Me"` + Heading *"Passionate Developer Driven by Clean Code & Architecture"*.
  - **Left Card (`glass-card`):**
    - Detailed summary paragraph.
    - **"My Focus" Box:** Special cyan highlighted container with `profileData.careerObjective`.
    - **Quick Facts Grid (4 Items):** Location (Lucknow), Education (MCA Pursuing \| BCA Graduate), Email, aur Phone.
  - **Right Column (4 Metric/Stat Cards):**
    - Mapped from `profileData.stats`:
      1. `1+ Year` — Industry Experience
      2. `5+ Key` — Modules & Projects
      3. `200+` — Bugs Resolved & Code Commits
      4. `BCA` — Degree Graduate (IGNOU 6.8 CGPA)
  - **Bottom Row (4 Core Engineering Strengths):**
    - Mapped from `profileData.coreStrengths`:
      1. *Full Stack Architecture* (Python + React + REST APIs)
      2. *Database Management* (MySQL, SQLite, Schema Design)
      3. *Agile Collaboration* (Scrum workflows, Git version control)
      4. *Code Reliability* (Debugging, Modular Structure, Clean Code)

---

#### 4. `src/components/Skills.jsx` (Technical Proficiency Section)
* **File Ka Role:** Aapke sabhi programming languages, frontend/backend frameworks, databases, aur developer tools ko categorized tarike se showcase karta hai.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState('all')` → `activeCategory`: Category filter button ka active state store karta hai.
  - `filteredSkills`: Agar `'all'` select hai toh saare 12 skills dikhata hai, varna category (`frontend`, `backend`, `database`, `tools`) ke according array filter karta hai:
    ```javascript
    const filteredSkills = activeCategory === 'all'
      ? skillsData.skills
      : skillsData.skills.filter((s) => s.category === activeCategory);
    ```
* **JSX Structure & Elements:**
  - **Filter Button Group:** 5 Filter buttons (*All Skills*, *Frontend*, *Backend*, *Databases*, *Tools & DevOps*).
  - **Skill Cards Grid (`row g-4`):** Har skill ke liye:
    - Custom brand icon wrap (Python yellow, React cyan, Django green, MySQL blue, etc.).
    - Skill Name + Level badge (*"Advanced"*, *"Proficient"*).
    - Description line (kya kaam karte hain is tech mein).
    - Visual Animated Percentage Bar with percent counter (e.g. `90%`, `85%`).
    - Sub-topics pills (e.g. Django ORM, REST Framework, JWT, Hooks).
  - **Soft Skills & Professional Attributes Pills:** Team Leadership, Problem Solving, Agile/Scrum, Code Review, Continuous Learning.

---

#### 5. `src/components/Experience.jsx` (Career Timeline)
* **File Ka Role:** Aapke real employment history aur internships ko vertical timeline layout mein present karta hai.
* **Isme Kaun Sa Data Use Hota Hai:** `src/data/experienceData.js`.
* **JSX Structure & Elements:**
  - `.timeline-wrapper`: Central glowing vertical timeline line.
  - `.timeline-item`: Har company ke liye alag milestone block.
  - `.timeline-dot`: Glowing cyan connector dot jo timeline par pulse karta hai.
  - **Timeline Cards (`glass-card`):**
    1. **Softpro India** (Python Full Stack Developer Trainee | Feb 2026 – Present | Lucknow):
       - Enterprise Python/Django backend architecture, REST APIs, database queries, Bootstrap UI integration.
    2. **Eduminus Learning** (Web Developer | Aug 2024 – Feb 2025 | Remote):
       - Commercial agency web platforms, React component modularization, cross-browser responsiveness.
    3. **Zidio Development** (MERN Stack Developer Intern | May 2024 – Jul 2024 | Remote):
       - Full-stack CRUD application, Express REST endpoints, MongoDB schemas, JWT authentication.
    - Har card ke andar role title, company badge, date duration pill, bulleted achievements, aur tech stack tags shaamil hain.

---

#### 6. `src/components/Projects.jsx` (Featured Work Showcase)
* **File Ka Role:** Aapke real-world projects ko interactive card grid mein filter aur live demo/GitHub links ke saath dikhata hai.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState('all')` → `activeFilter`: Projects ko category ke mutabiq filter karta hai (*All*, *Full Stack*, *Frontend*).
* **JSX Structure & Elements:**
  - **Category Tabs:** Filter buttons with count badges.
  - **Project Cards (`glass-card project-card`):**
    - **Image Container (`project-img-wrapper`):** Project screenshot with soft zoom hover effect (`scale(1.06)`) aur year badge (e.g. `2024`).
    - **Category Subtitle:** Colored badge (e.g. `Full Stack Architecture`, `Frontend Web App`).
    - **Project Title (`<h3>`):**
      1. *SmartBuild Hub* — Material Management & ERP Platform (Python, Django, SQLite, Bootstrap 5).
      2. *Eduminus Digital Marketing Website* — Modern Agency Web Experience (React.js, Bootstrap 5, Responsive UI).
      3. *Synergy Multi-User App* — Collaborative Workspace Platform (MongoDB, Express, React, Node.js).
    - **Description & Key Highlights (`<ul>`):** Real metrics (e.g. 40% reduction in query latency, 98+ PageSpeed score).
    - **Tech Tags:** Small pills displaying exact libraries used.
    - **Action Buttons Footer:**
      - **"Code" Button:** Direct GitHub repository link (`socialLinks.github`).
      - **"Live Demo" Button:** Live deployed project preview link.

---

#### 7. `src/components/Education.jsx` (Academic Credentials)
* **File Ka Role:** Formal education aur academic qualifications ko showcase karta hai.
* **Isme Kaun Sa Data Use Hota Hai:** `src/data/educationData.js`.
* **JSX Structure & Elements:**
  - Graduation cap icon badge: `"Academic Background"`.
  - **BCA Degree Card (`glass-card`):**
    - **Degree Title:** *Bachelor of Computer Applications (BCA)*
    - **Institution:** *Indira Gandhi National Open University (IGNOU)*, Regional Centre: Varanasi, UP.
    - **Duration Badge:** *2020 – Dec 2023*
    - **Grade Badge:** *6.8 CGPA / First Division*
    - **Summary Paragraph:** Core focus on computer science, object-oriented software engineering, relational databases, and data structures.
    - **Core Academic Focus Areas (Tags):** OOP with C++, Database Management Systems (DBMS), Data Structures & Algorithms, Web Technologies, Software Engineering Principles, Computer Networks.

---

#### 8. `src/components/Resume.jsx` (Interactive CV & Download Hub)
* **File Ka Role:** Recruiters ko direct PDF resume download karne aur browser ke andar hi full CV padhne ki facility deta hai.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState(false)` → `isPreviewOpen`: Online CV modal viewer ko show/hide karta hai.
* **JSX Structure & Elements:**
  - **Highlight Banner Card:** Verified credentials badge, current role summary, aur 2 action buttons:
    1. **"Download CV (PDF)" Button:** Seedhe `Himanshu-Verma-CV.pdf` file ko download kar deta hai (`download="Himanshu-Verma-CV.pdf"`).
    2. **"View CV Online" Button:** Click karne par `setIsPreviewOpen(true)` trigger hota hai.
  - **Interactive Full-Screen CV Modal:**
    - Jab modal open hota hai, toh browser mein ek clean, ATS-compliant formatted resume khulta hai:
      - Header with contact info, phone, email, location.
      - Career Objective summary.
      - Work Experience (Softpro India, Eduminus Learning, Zidio Development).
      - Technical Skills matrix (Languages, Frameworks, DBs, Tools).
      - Key Projects overview with bullet points.
      - Education details (MCA Pursuing, BCA IGNOU).
    - Modal ke footer mein *"Download PDF Now"* aur *"Close"* buttons hain.

---

#### 9. `src/components/Contact.jsx` (Recruiter Connect & Google Forms)
* **File Ka Role:** 2-column contact interface jisme direct details (1-click copy) aur dynamic validated form hai.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState({...})` → `formData`: Name, Email, Phone, Subject, aur Message fields.
  - `useState({})` → `errors`: Validation errors store karta hai.
  - `useState(false)` → `isSubmitting`: Submit ke time loading spinner show karta hai.
  - `useState(null)` → `submitStatus`: Success ya error banner show karta hai.
  - `useState(null)` → `copiedField`: "Copied!" notification show karta hai jab user email ya phone copy karta hai.
  - `validate()`: Client-side validation:
    - Name empty na ho.
    - Email valid regex format mein ho (`^[^\s@]+@[^\s@]+\.[^\s@]+$`).
    - Subject empty na ho.
    - Message kam se kam 10 characters ka ho.
  - `handleCopy(text, field)`: `navigator.clipboard.writeText` se phone/email copy karta hai aur 2.5 second ke liye visual tick icon dikhata hai.
  - `handleSubmit(e)`: Form submit karke `submitToGoogleForm(formData)` call karta hai.
* **JSX Structure & Elements:**
  - **Left Column (Direct Channels):**
    - **Phone Card:** `+91-9519221840` + **"Copy"** button + Direct Call link (`tel:`).
    - **Email Card:** `hv4145574@gmail.com` + **"Copy"** button + Direct Mailto link (`mailto:`).
    - **Location Card:** Jankipuram, Lucknow, UP, India with map pin icon.
    - **WhatsApp Direct Button:** Single-click se seedhe WhatsApp chat open karta hai with pre-filled greeting.
  - **Right Column (Form):**
    - Floating glassmorphic form with Name, Email, Phone, Subject, aur Message inputs.
    - Red inline validation messages agar koi field galat ho.
    - Submit button with animated loading spinner.
    - Green success alert message form submit hone ke baad.

---

#### 10. `src/components/Footer.jsx` (Page Footer)
* **File Ka Role:** Semantic footer jo page ke sabse bottom mein rehta hai.
* **JSX Structure & Elements:**
  - Brand identity with code icon and title *"Himanshu Verma"*.
  - Developer mission statement.
  - Quick jump links to all sections (Home, About, Skills, Projects, Experience, Contact).
  - Social media icon links with tooltips.
  - Dynamic copyright notice: `© {new Date().getFullYear()} Himanshu Verma. All rights reserved.`
  - Built with badge: *"Crafted with React 19, Bootstrap 5 & Clean Code"*.

---

#### 11. `src/components/ScrollToTop.jsx` (Back to Top Button)
* **File Ka Role:** User ko lambe scroll ke baad ek click mein page ke top par wapas le jane wala floating button.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState(false)` → `isVisible`.
  - `useEffect`: Window scroll event monitor karta hai. Jab `window.scrollY > 300` hota hai, toh button smooth fade-in hota hai; scroll 300 se kam hone par hide ho jata hai.
  - `scrollToTop()`: `window.scrollTo({ top: 0, behavior: 'smooth' })` chala kar smoothly page top par scroll karta hai.
* **JSX Structure & Elements:**
  - Floating circular cyan glowing button with arrow icon `<i className="bi bi-arrow-up-short"></i>`.

---

#### 12. `src/components/AnimatedBackground.jsx` (Modern Dynamic FX)
* **File Ka Role:** Pure CSS + GPU accelerated background visuals provide karta hai jo website ko futuristic look deta hai bina kisi heavy library ke.
* **Isme Kaun-Kaun Se Hooks & Logic Hain:**
  - `useState({ x: 0, y: 0 })` → `mousePos`.
  - `useEffect`: Window par `mousemove` track karta hai aur `requestAnimationFrame` interpolation (lerp) se cursor ke coordinate calculate karta hai.
  - `useMemo`: 18 lightweight particles generate karta hai jinki position, animation duration, aur delay dynamically calculate hote hain.
* **JSX Structure & Elements:**
  1. `.bg-grid-pattern`: 60px subtle developer grid texture with radial gradient mask.
  2. `.bg-mouse-glow`: Interactive spotlight jo cursor ke piche smooth follow karta hai (`transform: translate3d(...)`).
  3. 4 Floating Radial Orbs (`.orb-cyan`, `.orb-indigo`, `.orb-purple`, `.orb-emerald`): Organic 24s–30s floating blur orbs.
  4. 18 Micro Particles (`.particle-dot`): Tiny floating dots jo screen par slowly upar-niche float karte hain.

---

### 🏛️ Core Orchestration Files

#### 13. `src/App.jsx` (Main Root Application)
* **File Ka Role:** Sabhi 12 components ko import karke ek single structured semantic layout mein mount karta hai:
  ```jsx
  export default function App() {
    return (
      <div className="portfolio-app position-relative">
        <AnimatedBackground />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
  ```

#### 14. `src/main.jsx` (Application Entry Point)
* **File Ka Role:** Vite aur React ka starting point jo `index.html` ke `<div id="root">` element par React component tree ko render karta hai.
* **Imports:**
  - `bootstrap/dist/css/bootstrap.min.css` — Bootstrap core styles.
  - `bootstrap/dist/js/bootstrap.bundle.min.js` — Bootstrap JavaScript interactive components.
  - `bootstrap-icons/font/bootstrap-icons.css` — Modern UI vector icons.
  - `./index.css` — Aapka custom design system.
  - `ReactDOM.createRoot(...)` — React 19 root rendering.

---

### 📊 Data Files Layer (`src/data/` & `src/config/`)

Project mein hardcoded values nahi hain; saara text aur details data files mein structured hain:

| Data File Path | Iske Andar Kya Data Hai |
| :--- | :--- |
| **`src/data/profileData.js`** | Aapka naam, typing titles array, status badge text, bio summary paragraph, career objective, 4 stats metrics, aur 4 core engineering strengths. |
| **`src/data/skillsData.js`** | Categorized technical skills (Frontend, Backend, DB, Tools) jisme har skill ka official brand color, icon class, level badge, aur percentage progress value hai. |
| **`src/data/projectsData.js`** | SmartBuild Hub, Eduminus Digital Marketing, aur Synergy MERN app ki full details: titles, images, categories, highlights, bullet points, tech tags, GitHub URLs, aur Live Demo URLs. |
| **`src/data/experienceData.js`** | Softpro India, Eduminus Learning, aur Zidio Development ke exact roles, dates, company names, locations, badges, aur bulleted achievement points. |
| **`src/data/educationData.js`** | BCA degree from IGNOU (Varanasi), 6.8 CGPA, duration, academic description, aur 6 core coursework subject tags. |
| **`src/data/socialLinks.js`** | Mobile phone (`+91-9519221840`), email (`hv4145574@gmail.com`), LinkedIn URL, GitHub URL, WhatsApp direct chat link, aur location. |
| **`src/config/googleForm.js`** | Google Forms direct submission script (`submitToGoogleForm`), form action URL, aur entry IDs configuration. |

---

### 🎨 Styling Layer (`src/index.css`)

* **File Ka Role:** Portfolio ki complete visual design system aur animations define karta hai:
  - `:root` design tokens: Colors (`--bg-main`, `--accent-cyan`, `--accent-indigo`), gradients, fonts (`Outfit`, `Plus Jakarta Sans`, `JetBrains Mono`), shadows, transitions.
  - Base resets aur custom scrollbar styles.
  - `.glass-card`: Frosted glass blur effect (`backdrop-filter: blur(14px)`), subtle borders, aur hover elevation (`translateY(-6px)`).
  - `.hero-profile-frame` aur `.hero-profile-img`: Circular glow frame with `object-position: center top` taaki headshot perfectly center rahe bina sir/baal kate.
  - `.status-badge` aur `@keyframes pulse-ring`: Live availability green radar pulse animation.
  - `@keyframes bgGradientShift`, `orbMove1` to `orbMove4`, `particleFloat`: Smooth background motions.
  - Responsive media queries (`@media (max-width: 991px)` aur `@media (max-width: 576px)`) mobile screens ke liye.


---

## 5. Animated Background System Kaise Kaam Karta Hai

Aapke background mein **6 distinct animated layers** combine ki gayi hain jo 100% GPU accelerated hain:

1. **Slow Gradient Mesh (`bgGradientShift`)**:
   - `body` par `linear-gradient(-45deg, ...)` laga hai with `background-size: 400% 400%`.
   - 22 seconds ke smooth keyframe cycle mein gradient slowly move hota hai.
2. **Subtle Developer Grid (`.bg-grid-pattern`)**:
   - 60px engineering grid pattern with low opacity (0.03) aur soft radial center mask, taaki screen par modern tech grid texture dikhe.
3. **4 Floating Blurred Glowing Orbs (`.glow-orb`)**:
   - Cyber Cyan (`500px`), Deep Indigo (`550px`), Violet Purple (`480px`), aur Emerald (`440px`) orbs.
   - Sabhi orbs mein `filter: blur(95px)` hai aur alag-alag timing (22s to 30s) par organic floating animation chalta hai.
4. **Interactive Mouse-Follow Glow (`.bg-mouse-glow`)**:
   - `AnimatedBackground.jsx` cursor ke coordinates track karta hai aur `requestAnimationFrame` interpolation ke zariye ek soft cyan-indigo spotlight cursor ko smoothly follow karti hai.
5. **Floating Micro-Particles (`.particle-dot`)**:
   - 18 tiny particles jo background mein slowly float karte hain.
6. **Hero Decorative Elements (`✦` aur `○`)**:
   - Profile image ke aas-paas rotating sparkles aur pulsing circles jo hero section ko visually stunning banate hain.
7. **Performance Guarantee**:
   - Har decorative element par `pointer-events: none` laga hai, isliye buttons, text selection, aur links par koi rukawat nahi aati.
   - `prefers-reduced-motion` mode naturally supported hai.

---

## 6. Google Forms Integration Kaise Kaam Karta Hai

Google Forms ka setup `src/config/googleForm.js` file mein completely isolated hai:

### Direct Connection Kaise Karein:
1. Apne Google Drive par ek **Google Form** banayein jisme 5 fields hon:
   - Full Name (Short answer)
   - Email Address (Short answer)
   - Phone Number (Short answer)
   - Subject (Short answer)
   - Message (Paragraph)
2. Form ke top-right 3-dots menu par click karein → **"Get pre-filled link"**.
3. Sabhi fields mein dummy text likhein aur **"Get link"** par click karein.
4. Link copy karein. Us link mein aapko milega:
   - Form Action URL: `https://docs.google.com/forms/d/e/[YOUR_FORM_ID]/formResponse`
   - Entry IDs: `entry.123456789=...`, `entry.987654321=...`
5. `src/config/googleForm.js` open karein aur values update kar dein:
   ```javascript
   export const GOOGLE_FORM_CONFIG = {
     isEnabled: true,
     formActionUrl: "https://docs.google.com/forms/d/e/YOUR_REAL_FORM_ID/formResponse",
     entryIds: {
       name: "entry.XXXXXX",
       email: "entry.XXXXXX",
       phone: "entry.XXXXXX",
       subject: "entry.XXXXXX",
       message: "entry.XXXXXX"
     }
   };
   ```
6. **CORS Safe Mode**: Hamne `fetch` mein `mode: 'no-cors'` configure kiya hai, jisse browser bina kisi security block ke data sidha aapke Google Sheet mein save kar deta hai!

---

## 7. Project Ko Run Kaise Karein (Terminal Commands)

Terminal (PowerShell ya Command Prompt) ko project folder mein open karein:
```bash
cd c:\Users\hv414\Desktop\portfolio
```

### 1. Server Start Karne Ke Liye:
```bash
npm run dev
```
Terminal mein link aayega:
`➜ Local: http://localhost:5173/`
Browser mein yeh URL open karein.

### 2. Server Stop (Band) Karne Ke Liye:
Terminal mein keyboard par dabayein:
`Ctrl + C`
Phir puchega `Terminate batch job (Y/N)?`, type karein:
`Y` aur Enter press karein.

### 3. Production Build Banane Ke Liye:
```bash
npm run build
```
Yeh `dist/` folder ke andar compressed, fast production code generate karta hai.

---

## 8. Apna Data / Content Kaise Update Karein (Customization Guide)

| Cheez Jo Badelni Ho | File Path | Kya Karna Hai |
| :--- | :--- | :--- |
| **Profile Photo** | `src/assets/himanshu.png` ya `src/assets/profile.jpg` | Hero section mein photo ke liye `himanshu.png` use hota hai (jisme `object-position: center top` configured hai taaki headshot perfectly center rahe). |
| **Resume PDF** | `public/Himanshu-Verma-CV.pdf` aur `src/assets/Himanshu-Verma-CV.pdf` | Apne naye resume PDF ka naam `Himanshu-Verma-CV.pdf` rakhkar replace kar dein. |
| **Project Images** | `src/assets/` | `project-smartbuild.jpg`, `project-digitalmarketing.jpg`, `project-mern.jpg` ko apni nayi images se replace karein. |
| **Phone / Email / Social Links** | `src/data/socialLinks.js` | Apna mobile number, email, LinkedIn URL, GitHub URL update karein. |
| **Projects Ki Details** | `src/data/projectsData.js` | Naye projects add karne ke liye array mein naya object add karein. |
| **Skills & Percentages** | `src/data/skillsData.js` | Naye skills, visual percent numbers, ya icons add karein. |
| **Bio & Experience** | `src/data/profileData.js` aur `src/data/experienceData.js` | Apne roles, company names, aur achievements edit karein. |
| **Google Form Connection** | `src/config/googleForm.js` | Google Form ka URL aur entry IDs paste karein. |

---

## 9. Website Ko Free Mein Live / Deploy Kaise Karein

Aap is portfolio ko **100% Free** internet par live host kar sakte hain:

### Option A: Vercel (Sabse Aasan & Recommended)
1. Apne portfolio folder ko GitHub par push karein:
   ```bash
   git init
   git add .
   git commit -m "My Portfolio"
   git branch -M main
   git remote add origin https://github.com/Himanshu-vermas/portfolio.git
   git push -u origin main
   ```
2. [Vercel.com](https://vercel.com) par free account banayein aur GitHub se login karein.
3. **"Add New Project"** par click karein aur apna `portfolio` repo select karein.
4. **Deploy** button dabayein! 1 minute ke andar aapko `himanshu-verma.vercel.app` live link mil jayega.

### Option B: Netlify
1. Terminal mein run karein: `npm run build`
2. [Netlify.com](https://www.netlify.com) par login karein.
3. Apne project ke andar bane **`dist`** folder ko seedhe Netlify dashboard par **Drag & Drop** kar dein! Website turant live ho jayegi.

---

## 🎯 Summary
Aapka portfolio completely modular, fast, accessible, aur production-ready hai. Is document ko reference ke taur par rakhein taaki aap future mein bina kisi pareshani ke koi bhi update kar sakein! 🌟
