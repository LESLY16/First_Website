import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Education.css';

const educations = [
  {
    institution: 'Mangalore Institute of Technology and Engineering',
    degree: 'Bachelor of Computer Science',
    period: '2015 – 2019',
    location: 'Mangalore, India',
    icon: '🎓',
  },
  {
    institution: 'Sri Bhuvanendra College',
    degree: 'Associate of Science, Pre-University',
    period: '2012 – 2014',
    location: 'Karkala, India',
    icon: '📚',
  },
];

const Education = () => {
  const ref = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="section">
      <h2 className="section-title animate-on-scroll" data-number="04.">
        Education
      </h2>

      <div className="education-grid">
        {educations.map((edu, idx) => (
          <div
            key={edu.institution}
            className="edu-card animate-on-scroll"
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-content">
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <div className="edu-meta">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-separator">·</span>
                <span className="edu-location">📍 {edu.location}</span>
              </div>
            </div>
            <div className="edu-badge">
              <span>{edu.period.split('–')[1].trim()}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
