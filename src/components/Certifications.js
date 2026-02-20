import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
  {
    id: 1,
    name: 'Certified Full Stack Developer',
    issuer: 'Industry Certification Board',
    icon: '🏅',
    color: '#f59e0b',
    description:
      'Comprehensive certification validating expertise in full-stack web development including frontend (React, HTML/CSS), backend (Node.js, Express), database management (SQL, MongoDB), and deployment best practices.',
  },
];

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'leslysdsouza96@gmail.com',
    href: 'mailto:leslysdsouza96@gmail.com',
    color: '#2563eb',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/lesly16',
    href: 'https://linkedin.com/in/lesly16',
    color: '#0077b5',
    external: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/LESLY16',
    href: 'https://github.com/LESLY16',
    color: '#94a3b8',
    external: true,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91-7349189696',
    href: 'tel:+917349189696',
    color: '#10b981',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0a0f1e 100%)' }}
      ref={ref}
    >
      <div className="container">
        {/* Certifications */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                background: 'rgba(30,41,59,0.7)',
                border: `1px solid ${cert.color}30`,
                borderRadius: '16px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${cert.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: `${cert.color}20`,
                    border: `2px solid ${cert.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#f1f5f9',
                      margin: '0 0 0.2rem',
                    }}
                  >
                    {cert.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.65', margin: 0 }}>
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            textAlign: 'center',
            background: 'rgba(30,41,59,0.5)',
            border: '1px solid rgba(148,163,184,0.1)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background gradient accent */}
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
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          <motion.span
            className="section-tag"
            style={{ marginBottom: '1rem', display: 'inline-block' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Let&apos;s Connect
          </motion.span>

          <motion.h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: '0.75rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            style={{
              color: '#94a3b8',
              fontSize: '1rem',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.7',
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(148,163,184,0.1)',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${link.color}50`;
                  e.currentTarget.style.background = `${link.color}10`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${link.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                  e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: `${link.color}20`,
                    border: `1px solid ${link.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: '#64748b', margin: '0 0 0.15rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {link.label}
                  </p>
                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0, wordBreak: 'break-all' }}>
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
