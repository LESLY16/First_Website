import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationData = [
  {
    id: 1,
    institution: 'Mangalore Institute of Technology and Engineering',
    shortName: 'MITE',
    degree: 'Bachelor of Computer Science',
    years: '2015 – 2019',
    location: 'Mangalore, India',
    color: '#2563eb',
    details: 'Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, database management, and web development.',
  },
  {
    id: 2,
    institution: 'Sri Bhuvanendra College',
    shortName: 'SBC',
    degree: 'Associate of Science, Pre-University Science',
    years: '2012 – 2014',
    location: 'Karkala, India',
    color: '#7c3aed',
    details: 'Pre-university science curriculum covering Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0f172a 100%)' }}
    >
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              style={{
                background: 'rgba(30,41,59,0.7)',
                border: '1px solid rgba(148,163,184,0.1)',
                borderRadius: '16px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${edu.color}25`;
                e.currentTarget.style.borderColor = `${edu.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
              }}
            >
              {/* Top bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                }}
              />

              {/* Graduation icon + Initials */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: `${edu.color}20`,
                    border: `2px solid ${edu.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}30`,
                      borderRadius: '6px',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      color: edu.color,
                      letterSpacing: '0.05em',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {edu.shortName}
                  </span>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: '#64748b',
                      margin: 0,
                    }}
                  >
                    {edu.years}
                  </p>
                </div>
              </div>

              {/* Institution */}
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#f1f5f9',
                  marginBottom: '0.4rem',
                  lineHeight: '1.4',
                }}
              >
                {edu.institution}
              </h3>

              {/* Degree */}
              <p
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: edu.color,
                  marginBottom: '0.5rem',
                }}
              >
                {edu.degree}
              </p>

              {/* Location */}
              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#64748b',
                  marginBottom: '1rem',
                }}
              >
                📍 {edu.location}
              </p>

              {/* Details */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
