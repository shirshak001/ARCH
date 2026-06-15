import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'Behance',
      url: 'https://behance.net',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12H4.5M9 6H4.5v12h5.5a3.5 3.5 0 0 0 0-7 3 3 0 0 0-1-5z"></path>
          <path d="M14 11h7m-6 3a3 3 0 1 0 5 0"></path>
          <line x1="14" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1"></line>
        </svg>
      )
    },
    {
      name: 'Archinect',
      url: 'https://archinect.com',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {/* An abstract elegant architectural symbol for Archinect representation */}
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"></path>
        </svg>
      )
    }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid #2A2A2A',
        padding: '80px 0 50px 0',
        marginTop: 'auto'
      }}
    >
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <Link
              to="/"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 300,
                letterSpacing: '0.15em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'inline-block'
              }}
            >
              FORM<span style={{ color: 'var(--accent-gold)' }}>.</span>
            </Link>
            <p
              className="body-text"
              style={{
                fontSize: '14px',
                maxWidth: '260px',
                lineHeight: 1.6
              }}
            >
              We don't build walls. We engineer perspective. Built on the conversation between space, light, and human intent.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="label-utility" style={{ color: 'var(--accent-gold)', marginBottom: '25px' }}>
              Navigation
            </h4>
            <div className="footer-links-list">
              <Link to="/work" className="footer-link hover-target">Selected Work</Link>
              <Link to="/studio" className="footer-link hover-target">The Studio</Link>
              <Link to="/services" className="footer-link hover-target">Services</Link>
              <Link to="/process" className="footer-link hover-target">Our Process</Link>
              <Link to="/contact" className="footer-link hover-target">Contact</Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h4 className="label-utility" style={{ color: 'var(--accent-gold)', marginBottom: '25px' }}>
              The Studio
            </h4>
            <p className="body-text" style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-primary)' }}>
              FORM. Studio Office<br />
              402, Concrete Bastion, Nariman Point,<br />
              Mumbai, MH — 400021
            </p>
            <p className="label-utility" style={{ fontSize: '11px', lineHeight: 1.8 }}>
              T: +91 22 8847 2910<br />
              E: studio@formpractice.com
            </p>
          </div>

          {/* Column 4: Socials */}
          <div className="footer-col">
            <h4 className="label-utility" style={{ color: 'var(--accent-gold)', marginBottom: '25px' }}>
              Connect
            </h4>
            <p className="body-text" style={{ fontSize: '14px', marginBottom: '20px' }}>
              For commission inquiries and spatial consultations.
            </p>
            <div className="social-icon-row">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon hover-target"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="label-utility" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} FORM. Studio Practice. All rights reserved. Co-ordinates: 18.9204° N, 72.8331° E.
          </p>
          <p className="label-utility" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
            Est. 2009 · Mumbai · 47 Projects
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          margin-bottom: 60px;
        }
        @media (min-width: 576px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.2fr 1fr;
            gap: 30px;
          }
        }
        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-link {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: var(--accent-gold);
        }
        .social-icon-row {
          display: flex;
          gap: 15px;
        }
        .social-icon {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid #2A2A2A;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background-color: rgba(200, 169, 110, 0.05);
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-top: 30px;
          border-top: 1px solid #202020;
          text-align: center;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
