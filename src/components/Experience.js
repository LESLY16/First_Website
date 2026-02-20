import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Experience.css';

const experiences = [
  {
    company: 'CIPTS Software Pvt. Ltd.',
    role: 'Resident Canadian Software Engineer',
    period: 'Aug 2021 – Aug 2023',
    location: 'Bangalore, India',
    bullets: [
      'Developed and maintained CRM solutions using Salesforce and React, serving enterprise clients.',
      'Implemented RESTful APIs and integrated third-party services to extend platform capabilities.',
      'Collaborated with cross-functional teams across design, QA, and product to deliver projects on time.',
      'Optimized application performance resulting in a 30% improvement in load times.',
      'Worked with AWS cloud services for deployment and horizontal scaling of applications.',
    ],
    tags: ['React', 'Salesforce', 'AWS', 'RESTful APIs', 'SQL'],
  },
  {
    company: 'Teknophase University',
    role: 'Software Developer Intern',
    period: 'Aug 2020 – Aug 2021',
    location: 'Remote',
    bullets: [
      'Collaborated on university management system projects serving thousands of students.',
      'Developed front-end components using React and JavaScript, improving UI responsiveness.',
      'Participated in agile development processes including sprint planning and retrospectives.',
    ],
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Agile'],
  },
  {
    company: 'Pinnacle Media',
    role: 'Associate EdTech Developer',
    period: 'Aug 2018 – Sept 2019',
    location: 'Udupi, India',
    bullets: [
      'Built educational technology platforms and content management systems for digital learning.',
      'Developed responsive web applications using HTML/CSS and JavaScript for cross-browser compatibility.',
      'Assisted in database design and implementation for content storage and retrieval.',
    ],
    tags: ['HTML/CSS', 'JavaScript', 'CMS', 'Database Design'],
  },
];

const Experience = () => {
  const ref = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="section">
      <h2 className="section-title animate-on-scroll" data-number="03.">
        Work Experience
      </h2>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            className={`timeline-item ${idx % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="exp-company">{exp.company}</h3>
                  <p className="exp-role">{exp.role}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">📍 {exp.location}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>
                    <span className="bullet-arrow">▹</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div className="timeline-line" />
      </div>
    </section>
  );
};

export default Experience;
