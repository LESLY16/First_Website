import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: '⚡',
    skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'SQL', 'Lisp', 'J++'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Git', 'Jenkins', 'Cortex', 'Jira'],
  },
  {
    title: 'Database & Backend',
    icon: '🗄️',
    skills: ['Express.js', 'React Redux', 'SQL Server', 'MongoDB', 'RESTful APIs'],
  },
  {
    title: 'Platforms & CRM',
    icon: '🔧',
    skills: ['Salesforce', 'SFMC Sites', 'Siike SDK', 'CRM Systems'],
  },
  {
    title: 'Focus Areas',
    icon: '🎯',
    skills: ['Application Development', 'Troubleshooting', 'API Implementation', 'Performance Optimization'],
  },
];

const Skills = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="section">
      <h2 className="section-title animate-on-scroll" data-number="02.">
        Technical Skills
      </h2>

      <div className="skills-grid">
        {skillCategories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className="skill-category animate-on-scroll"
            style={{ transitionDelay: `${catIdx * 0.1}s` }}
          >
            <div className="skill-category-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3 className="skill-category-title">{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, skillIdx) => (
                <span
                  key={skill}
                  className="skill-tag"
                  style={{ '--tag-delay': `${catIdx * 0.1 + skillIdx * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
