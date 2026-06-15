import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { path: '/work', label: 'Work' },
    { path: '/studio', label: 'Studio' },
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header
        className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '20px 5%' : '30px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(13, 13, 13, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid #1E1E1E' : '1px solid transparent'
        }}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="logo-link hover-target"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '28px',
            fontWeight: 300,
            letterSpacing: '0.15em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase'
          }}
        >
          FORM<span style={{ color: 'var(--accent-gold)' }}>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          style={{
            display: 'none',
            gap: '40px',
            alignItems: 'center'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link hover-target ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="hamburger-btn hover-target"
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Screen Width Style Helper */}
      <style>{`
        .desktop-nav {
          display: none !important;
        }
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
        }
        .nav-link {
          position: relative;
          font-family: var(--font-body);
          font-weight: 500;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          padding: 8px 0;
          transition: color 0.3s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--accent-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }
      `}</style>

      {/* Mobile Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#0D0D0D',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            animation: 'fadeInOverlay 0.4s ease-out forwards'
          }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px, 8vw, 56px)',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                  display: 'block',
                  opacity: 0,
                  animation: `slideInItem 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.1 * idx}s forwards`
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <style>{`
            @keyframes fadeInOverlay {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideInItem {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .mobile-nav-link {
              transition: color 0.3s ease;
            }
            .mobile-nav-link:hover,
            .mobile-nav-link.active {
              color: var(--accent-gold);
            }
          `}</style>
        </div>
      )}
    </>
  );
}
