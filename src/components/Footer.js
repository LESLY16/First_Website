import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#060d1a',
        borderTop: '1px solid rgba(148,163,184,0.08)',
        padding: '2.5rem 0',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '800',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              LD
            </div>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                color: '#94a3b8',
              }}
            >
              Lesly Dsouza
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/LESLY16"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#64748b',
                fontSize: '0.85rem',
                textDecoration: 'none',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(148,163,184,0.1)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f1f5f9';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
                e.currentTarget.style.background = 'rgba(148,163,184,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748b';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              🐙 GitHub
            </a>
            <a
              href="https://linkedin.com/in/lesly16"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#64748b',
                fontSize: '0.85rem',
                textDecoration: 'none',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(148,163,184,0.1)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0ea5e9';
                e.currentTarget.style.borderColor = 'rgba(14,165,233,0.3)';
                e.currentTarget.style.background = 'rgba(14,165,233,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748b';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              💼 LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              maxWidth: '300px',
              height: '1px',
              background: 'rgba(148,163,184,0.08)',
            }}
          />

          {/* Copyright */}
          <p style={{ fontSize: '0.82rem', color: '#475569', margin: 0 }}>
            © {year} Lesly Dsouza. All Rights Reserved.
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: '0.75rem',
              color: '#334155',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
