import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Certifications.css';

const certifications = [
  {
    title: 'Certified Full Stack Developer',
    issuer: 'Full Stack Development Institute',
    icon: '🏆',
    color: '#64ffda',
    description:
      'Comprehensive certification covering front-end and back-end development, databases, and deployment.',
    skills: ['React', 'Node.js', 'SQL', 'APIs', 'Cloud Deployment'],
  },
];

const Certifications = () => {
  const ref = useScrollAnimation();

  return (
    <section id="certifications" ref={ref} className="section">
      <h2 className="section-title animate-on-scroll" data-number="05.">
        Certifications
      </h2>

      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div
            key={cert.title}
            className="cert-card animate-on-scroll"
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="cert-header">
              <div className="cert-icon-wrap" style={{ '--cert-color': cert.color }}>
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-badge-text">Certified</div>
            </div>

            <div className="cert-body">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="cert-skill">{skill}</span>
                ))}
              </div>
            </div>

            <div className="cert-glow" style={{ '--cert-color': cert.color }} />
          </div>
        ))}

        {/* Placeholder call-to-action card */}
        <div className="cert-cta animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
          <div className="cta-icon">🚀</div>
          <h3>Always Learning</h3>
          <p>
            Continuously expanding expertise through hands-on projects, online courses,
            and industry best practices.
          </p>
          <div className="cta-in-progress">
            <span className="pulse-dot" />
            Currently exploring advanced cloud architecture
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
