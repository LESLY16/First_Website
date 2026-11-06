import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const styles = {
  navbar: (scrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 0',
    transition: 'all 0.3s ease',
    background: scrolled
      ? 'rgba(15, 23, 42, 0.95)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(148,163,184,0.1)' : 'none',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
  }),
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logoBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: '800',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    boxShadow: '0 4px 15px rgba(37,99,235,0.4)',
  },
  logoText: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    fontSize: '1.1rem',
    background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: (active) => ({
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: active ? '#0ea5e9' : '#cbd5e1',
    background: active ? 'rgba(14,165,233,0.1)' : 'transparent',
  }),
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '0.5rem',
    background: 'none',
    border: 'none',
  },
  bar: (open, index) => {
    const transforms = [
      open ? 'rotate(45deg) translate(7px, 7px)' : 'none',
      open ? 'scaleX(0)' : 'scaleX(1)',
      open ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
    ];
    return {
      width: '24px',
      height: '2px',
      background: '#f1f5f9',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      transform: transforms[index],
      opacity: index === 1 && open ? 0 : 1,
    };
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(15, 23, 42, 0.98)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(148,163,184,0.1)',
    padding: '1rem 1.5rem 1.5rem',
    boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
  },
  mobileNavLink: (active) => ({
    display: 'block',
    padding: '0.85rem 1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    color: active ? '#0ea5e9' : '#cbd5e1',
    background: active ? 'rgba(14,165,233,0.1)' : 'transparent',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    marginBottom: '0.25rem',
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    observerRef.current = observers;
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={styles.navbar(scrolled)}>
      <div style={styles.inner}>
        <a
          href="#hero"
          style={styles.logo}
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
        >
          <div style={styles.logoBadge}>LD</div>
          <span style={styles.logoText}>Lesly Dsouza</span>
        </a>

        {/* Desktop Nav */}
        <ul style={styles.navLinks} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={styles.navLink(activeSection === link.href.replace('#', ''))}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    e.currentTarget.style.color = '#cbd5e1';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          style={styles.hamburger}
          className="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={styles.bar(menuOpen, i)} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                style={styles.mobileNavLink(activeSection === link.href.replace('#', ''))}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
