# Himanshu Verma — Personal Portfolio Website

A modern, responsive personal portfolio website built with **React.js**, **Bootstrap 5**, **HTML5 Semantic Elements**, and a custom **luxury glassmorphism CSS design system**.

Designed specifically for **Himanshu Verma** (Python Full Stack Developer & React.js Developer).

---

## 📁 Project Structure

```text
portfolio/
├── index.html                       # Semantic HTML5 head with SEO meta tags, Google Fonts, Bootstrap Icons
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── assets/
│   │   ├── profile.jpg              # Developer profile photo
│   │   ├── project-smartbuild.jpg   # SmartBuild Hub preview
│   │   ├── project-digitalmarketing.jpg # Digital Marketing site preview
│   │   ├── project-mern.jpg         # MERN application preview
│   │   └── Himanshu-Verma-CV.pdf    # Downloadable CV
│   ├── config/
│   │   └── googleForm.js            # Isolated Google Form endpoint & entry IDs config
│   ├── data/
│   │   ├── profileData.js           # Bio, stats, recruiter badge, typing titles
│   │   ├── skillsData.js            # Technical skills categorized (Frontend, Backend, DB, Tools)
│   │   ├── projectsData.js          # Detailed project list with tags, tech, repo & demo links
│   │   ├── experienceData.js        # Softpro India, Eduminus, Zidio Development
│   │   ├── educationData.js         # BCA IGNOU with coursework & score
│   │   └── socialLinks.js           # LinkedIn, GitHub, Email, Phone, WhatsApp
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky glassmorphic navbar with active scroll spy & mobile menu
│   │   ├── Hero.jsx                 # Dynamic typing effect, recruiter availability badge, glowing photo, CTAs
│   │   ├── About.jsx                # Semantic <article>, metrics cards (Experience, Projects, Tech, Education)
│   │   ├── Skills.jsx               # Category pill tabs, animated skill cards with visual representation
│   │   ├── Experience.jsx           # Vertical animated career timeline with company badges & achievements
│   │   ├── Projects.jsx             # Filterable project portfolio grid (All, Full Stack, Frontend)
│   │   ├── Education.jsx            # Academic timeline card with credentials & highlights
│   │   ├── Resume.jsx               # Dedicated CV download card with live preview modal
│   │   ├── Contact.jsx              # "Let's Work Together" recruiter-friendly form with Google Forms integration
│   │   ├── Footer.jsx               # Modern semantic <footer> with quick links & copyright
│   │   └── ScrollToTop.jsx          # Floating back-to-top button with progress ring
│   ├── App.jsx                      # App root tying all semantic sections together
│   ├── main.jsx                     # Vite React entry point with Bootstrap JS initialization
│   └── index.css                    # Custom CSS design system (tokens, glassmorphism, animations, dark mode)
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🛠️ How to Customize

### 1. Connect Your Google Form
Edit `src/config/googleForm.js`:
- Set `isEnabled: true`.
- Paste your Google Form action URL into `formActionUrl`.
- Update the `entryIds` object with your form's field IDs.

### 2. Update Contact Details & Social Links
Edit `src/data/socialLinks.js`:
- Phone: `+91-9519221840`
- Email: `hv4145574@gmail.com`
- Location: `Jankipuram, Lucknow, India`
- LinkedIn & GitHub URLs.

### 3. Replace Images & CV
- **Profile Photo**: Replace `src/assets/profile.jpg`.
- **Project Previews**: Replace images in `src/assets/` (`project-smartbuild.jpg`, `project-digitalmarketing.jpg`, `project-mern.jpg`).
- **Resume PDF**: Replace `src/assets/Himanshu-Verma-CV.pdf` and `public/Himanshu-Verma-CV.pdf`.

---

## 📄 License
© 2026 Himanshu Verma. All Rights Reserved.
