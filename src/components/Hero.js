import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const TYPING_STRINGS = [
  'Resident Canadian Software Engineer',
  'React Developer',
  'Full Stack Developer',
  'CRM Solutions Expert',
  'AWS Cloud Practitioner',
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  const scrollToNext = () => {
    const summary = document.querySelector('#summary');
    if (summary) summary.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Geometric background */}
      <div className="hero-bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`geo geo-${i + 1}`} />
        ))}
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-greeting animate-hero" style={{ '--delay': '0.2s' }}>
          Hi, my name is
        </p>

        <h1 className="hero-name animate-hero" style={{ '--delay': '0.4s' }}>
          Lesly Dsouza
          <span className="hero-name-dot">.</span>
        </h1>

        <h2 className="hero-title animate-hero" style={{ '--delay': '0.6s' }}>
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-location animate-hero" style={{ '--delay': '0.75s' }}>
          <span className="location-icon">📍</span>
          Bangalore, Karnataka, India
        </p>

        <p className="hero-tagline animate-hero" style={{ '--delay': '0.9s' }}>
          3+ years building scalable web applications &amp; CRM solutions.
          <br />
          Passionate about efficient, user-centered software.
        </p>

        <div className="hero-actions animate-hero" style={{ '--delay': '1.05s' }}>
          <a
            href="mailto:leslysdsouza96@gmail.com"
            className="btn-primary"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
        </div>

        <div className="hero-socials animate-hero" style={{ '--delay': '1.2s' }}>
          <a
            href="https://github.com/LESLY16"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/lesly16"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:leslysdsouza96@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll down">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-arrow">
          <span />
          <span />
          <span />
        </div>
      </button>
    </section>
  );
};

export default Hero;
