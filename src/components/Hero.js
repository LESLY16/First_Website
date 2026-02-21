import React from 'react';
import { motion } from 'framer-motion';

const contactItems = [
  { icon: '📞', label: '+91-8453311390', href: 'tel:+918453311390' },
  { icon: '✉️', label: 'lesly@ceptes.com', href: 'mailto:lesly@ceptes.com' },
  {
    icon: '💼',
    label: 'linkedin.com/in/ds016',
    href: 'https://linkedin.com/in/ds1016',
    external: true,
  },
  {
    icon: '🐙',
    label: 'github.com/ds1016',
    href: 'https://github.com/ds1016',
    external: true,
  },
];

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, #0f172a 0%, #1a1040 40%, #0f172a 70%, #0c2340 100%)',
        paddingTop: '5rem',
      }}
    >
      {/* Decorative Blobs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Geometric grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '750px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(14,165,233,0.12)',
                border: '1px solid rgba(14,165,233,0.35)',
                borderRadius: '50px',
                padding: '0.4rem 1.2rem',
                fontSize: '0.82rem',
                fontWeight: '600',
                color: '#0ea5e9',
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ fontSize: '0.9rem' }}>👨‍💻</span> Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '0.75rem',
              background: 'linear-gradient(135deg, #f1f5f9 30%, #93c5fd 60%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Lesly Dsouza
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
              fontWeight: '500',
              color: '#94a3b8',
              marginBottom: '1rem',
              letterSpacing: '0.01em',
            }}
          >
            Resident Canadian{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Software Engineer
            </span>
          </motion.h2>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{ color: '#64748b', fontSize: '1rem', marginBottom: '2rem' }}
          >
            📍 Bangalore, Karnataka, India
          </motion.p>

          {/* Contact Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2.5rem',
            }}
          >
            {contactItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(30,41,59,0.7)',
                  border: '1px solid rgba(148,163,184,0.15)',
                  borderRadius: '8px',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.82rem',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(8px)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(14,165,233,0.4)';
                  e.currentTarget.style.color = '#0ea5e9';
                  e.currentTarget.style.background = 'rgba(14,165,233,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.background = 'rgba(30,41,59,0.7)';
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <button
              className="btn btn-primary"
              onClick={() => handleScroll('experience')}
              style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '0.85rem 2rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,99,235,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)';
              }}
            >
              🚀 View My Work
            </button>
            <button
              onClick={() => handleScroll('contact')}
              style={{
                background: 'transparent',
                color: '#cbd5e1',
                border: '2px solid rgba(148,163,184,0.3)',
                borderRadius: '50px',
                padding: '0.85rem 2rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0ea5e9';
                e.currentTarget.style.color = '#0ea5e9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ✉️ Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#475569',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>SCROLL</span>
        <motion.div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #475569, transparent)',
          }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
