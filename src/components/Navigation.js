import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const navLinks = [
  { label: 'Summary', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#footer' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection('#' + section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a
          className="nav-logo"
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
        >
          <span className="logo-bracket">&lt;</span>
          LD
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${activeSection === link.href ? ' active' : ''}`}
                style={{ '--delay': `${i * 0.05}s` }}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                <span className="nav-num">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navigation;
