import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top-line" />

      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              LD
              <span className="logo-bracket">/&gt;</span>
            </span>
            <p className="footer-tagline">
              Building scalable solutions,<br />one line at a time.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li>
                <a href="tel:+917349189696" className="footer-link">
                  📞 +91-7349189696
                </a>
              </li>
              <li>
                <a href="mailto:leslysdsouza96@gmail.com" className="footer-link">
                  ✉️ leslysdsouza96@gmail.com
                </a>
              </li>
              <li>
                <span className="footer-text">📍 Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          <div className="footer-connect">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-list">
              <li>
                <a
                  href="https://linkedin.com/in/lesly16"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  🔗 LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/LESLY16"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  💻 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Lesly Dsouza. Designed &amp; built with ❤️
          </p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M5 15l7-7 7 7" />
            </svg>
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
