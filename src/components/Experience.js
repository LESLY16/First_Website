import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'CEPTES Software Pvt. Ltd.',
    initials: 'CE',
    color: '#2563eb',
    role: 'Resident Indian Software Engineer',
    location: 'Bangalore, India',
    period: 'Aug 2021 – Mar 2023',
    type: 'Full-time',
    achievements: [
      'Developed and maintained enterprise-level CRM solutions using Salesforce and custom JavaScript integrations, improving client data workflows by 35%.',
      'Built and deployed full-stack web features using React and Express, contributing to a SaaS platform serving 10,000+ active users.',
      'Implemented SFMC (Salesforce Marketing Cloud) sites and email campaigns, increasing customer engagement rates significantly.',
      'Collaborated in Agile sprints using Jira for task management and Git for version control, ensuring timely delivery of product features.',
      'Integrated AWS services (S3, Lambda, EC2) for scalable cloud infrastructure, reducing operational costs and improving system reliability.',
    ],
  },
  {
    id: 2,
    company: 'Onenative Advertising Pvt. Ltd.',
    initials: 'OA',
    color: '#7c3aed',
    role: 'Developer',
    location: 'Remote',
    period: 'Aug 2020 – Aug 2021',
    type: 'Contract',
    achievements: [
      'Designed and built interactive learning modules using React and JavaScript, enhancing the educational experience for 500+ students.',
      'Developed a robust SQL Server database schema for tracking student progress, supporting complex reporting and analytics queries.',
      'Implemented RESTful APIs using Express for seamless data exchange between frontend and backend services.',
      'Utilized Jenkins CI/CD pipelines to automate testing and deployment, cutting release cycle time by 40%.',
      'Collaborated with UX designers to create responsive, Bootstrap-based interfaces optimized for mobile and desktop platforms.',
    ],
  },
  {
    id: 3,
    company: 'Pinnacle Media',
    initials: 'PM',
    color: '#0ea5e9',
    role: 'Associate EdTech',
    location: 'Udupi, India',
    period: 'Aug 2018 – Sept 2019',
    type: 'Full-time',
    achievements: [
      'Developed and managed digital content platforms for educational media, contributing to curriculum digitization efforts that reached 1,200+ learners across Karnataka.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #111827 100%)' }}
    >
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, #2563eb, #7c3aed, #0ea5e9)',
              opacity: 0.3,
              borderRadius: '2px',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              paddingLeft: '0',
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                {/* Timeline dot / initials badge */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${exp.color}30, ${exp.color}10)`,
                      border: `2px solid ${exp.color}60`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '700',
                      fontSize: '1rem',
                      color: exp.color,
                      boxShadow: `0 0 20px ${exp.color}30`,
                    }}
                  >
                    {exp.initials}
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: 'rgba(30,41,59,0.7)',
                    border: '1px solid rgba(148,163,184,0.1)',
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
                    e.currentTarget.style.borderColor = `${exp.color}40`;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${exp.color}20`;
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: '3px',
                      background: `linear-gradient(to bottom, ${exp.color}, transparent)`,
                      borderRadius: '16px 0 0 16px',
                    }}
                  />

                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: '#f1f5f9',
                          margin: '0 0 0.25rem',
                        }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: '500',
                          color: exp.color,
                          margin: 0,
                        }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`,
                          borderRadius: '6px',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.78rem',
                          fontWeight: '600',
                          color: exp.color,
                          marginBottom: '0.35rem',
                        }}
                      >
                        {exp.type}
                      </span>
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: '#64748b',
                          margin: 0,
                        }}
                      >
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#64748b',
                      margin: '0 0 1rem',
                    }}
                  >
                    📍 {exp.location}
                  </p>

                  {/* Achievements */}
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {exp.achievements.map((ach, ai) => (
                      <motion.li
                        key={ai}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.15 + ai * 0.07 }}
                        style={{
                          display: 'flex',
                          gap: '0.6rem',
                          alignItems: 'flex-start',
                          marginBottom: ai < exp.achievements.length - 1 ? '0.65rem' : 0,
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: exp.color,
                            flexShrink: 0,
                            marginTop: '0.45rem',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '0.875rem',
                            color: '#94a3b8',
                            lineHeight: '1.6',
                          }}
                        >
                          {ach}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #experience .container > div > div { padding-left: 0; }
        }
      `}</style>
    </section>
  );
}
