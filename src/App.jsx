import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="portfolio-app position-relative">
      {/* Global Animated Premium Background System */}
      <AnimatedBackground />

      {/* Top Fixed Semantic Header & Navbar */}
      <Navbar />

      {/* Main Content Sections */}
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

      {/* Semantic Footer */}
      <Footer />

      {/* Floating Scroll To Top Interactive Button */}
      <ScrollToTop />
    </div>
  );
}
