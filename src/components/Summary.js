import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Summary.css';

const Summary = () => {
  const ref = useScrollAnimation();

  return (
    <section id="summary" ref={ref} className="section">
      <h2 className="section-title animate-on-scroll" data-number="01.">
        About Me
      </h2>

      <div className="summary-grid">
        <div className="summary-card animate-on-scroll">
          <div className="summary-text">
            <p>
              Results-driven Software Engineer with <span className="highlight">3+ years of experience</span> developing
              scalable web applications and CRM solutions. Proven track record in React development,
              API implementation, and cloud technologies.
            </p>
            <p>
              Passionate about creating <span className="highlight">efficient, user-centered solutions</span> with
              expertise in both front-end and back-end development. Currently based in{' '}
              <span className="highlight">Bangalore, Karnataka, India</span>.
            </p>
            <p>
              With experience across industries — from enterprise CRM at CIPTS Software to
              educational technology at Pinnacle Media — I bring a broad perspective and
              adaptable problem-solving approach to every project.
            </p>
          </div>

          <div className="summary-meta">
            <div className="meta-item">
              <span className="meta-icon">📞</span>
              <a href="tel:+917349189696" className="meta-link">+91-7349189696</a>
            </div>
            <div className="meta-item">
              <span className="meta-icon">✉️</span>
              <a href="mailto:leslysdsouza96@gmail.com" className="meta-link">
                leslysdsouza96@gmail.com
              </a>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🔗</span>
              <a href="https://linkedin.com/in/lesly16" target="_blank" rel="noreferrer" className="meta-link">
                linkedin.com/in/lesly16
              </a>
            </div>
            <div className="meta-item">
              <span className="meta-icon">💻</span>
              <a href="https://github.com/LESLY16" target="_blank" rel="noreferrer" className="meta-link">
                github.com/LESLY16
              </a>
            </div>
          </div>
        </div>

        <div className="summary-stats animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '10+', label: 'Technologies' },
            { value: '3', label: 'Companies' },
            { value: '30%', label: 'Performance Gain' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
