import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const summaryPoints = [
  {
    icon: '💡',
    text: 'Software Developer with hands-on experience in full-stack web development, building scalable applications across frontend and backend layers.',
  },
  {
    icon: '🏆',
    text: 'Certified Full-Stack Developer with a strong foundation in SQL, JavaScript, and Bootstrap, delivering responsive and performant user interfaces.',
  },
  {
    icon: '🏢',
    text: 'Proven track record contributing to enterprise-level software development with a focus on reliability, maintainability, and best practices.',
  },
  {
    icon: '🔧',
    text: 'Experienced in building CRM solutions and data tools that streamline business workflows and enhance customer relationship management.',
  },
  {
    icon: '⚙️',
    text: 'Skilled in Agile environments for SaaS products, leveraging Git for version control and collaborative development across distributed teams.',
  },
  {
    icon: '📚',
    text: 'Committed to continuous learning and code improvements, staying current with emerging technologies and software engineering best practices.',
  },
];

export default function Summary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #111827 100%)' }}>
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Professional Summary</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            background: 'rgba(30,41,59,0.6)',
            border: '1px solid rgba(148,163,184,0.1)',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative top gradient bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #2563eb, #0ea5e9, #7c3aed)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            {summaryPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(15,23,42,0.4)',
                  border: '1px solid rgba(148,163,184,0.07)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(15,23,42,0.4)';
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.07)';
                }}
              >
                <span
                  style={{
                    fontSize: '1.4rem',
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: '0.1rem',
                  }}
                >
                  {point.icon}
                </span>
                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                    lineHeight: '1.65',
                    margin: 0,
                  }}
                >
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
