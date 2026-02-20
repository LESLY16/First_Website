import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    id: 1,
    icon: '⚡',
    title: 'Languages & Frameworks',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.3)',
    skills: ['JavaScript', 'SQL', 'React', 'HTML/CSS', 'Lisp', 'J++'],
  },
  {
    id: 2,
    icon: '☁️',
    title: 'Cloud & Tools',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.3)',
    skills: ['AWS', 'Git', 'Jenkins', 'Cortex', 'Salesforce', 'Jira'],
  },
  {
    id: 3,
    icon: '🗄️',
    title: 'Database & Backend',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
    skills: ['Express', 'React Red', 'SQL Server', 'MongoDB', 'API Implementation'],
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Focus Areas',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
    skills: ['CRM Systems', 'SFMC Sites', 'Application Development', 'Troubleshooting', 'Sike SDK'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0f172a 100%)' }}
    >
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              style={{
                background: 'rgba(30,41,59,0.7)',
                border: `1px solid rgba(148,163,184,0.1)`,
                borderRadius: '16px',
                padding: '1.75rem',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${cat.glow}`;
                e.currentTarget.style.borderColor = cat.color + '60';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
              }}
            >
              {/* Colored top border */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                  borderRadius: '16px 16px 0 0',
                }}
              />

              {/* Icon + Title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: `${cat.color}20`,
                    border: `1px solid ${cat.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    margin: 0,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 + si * 0.05 }}
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.75rem',
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}30`,
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: '500',
                      color: cat.color === '#10b981' ? '#34d399' : cat.color === '#7c3aed' ? '#a78bfa' : cat.color === '#0ea5e9' ? '#38bdf8' : '#93c5fd',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${cat.color}30`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${cat.color}15`;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
