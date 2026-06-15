import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "FORM. Studio did not build us a house; they shaped a daily conversation with the coast of Alibaug. Every detail is an homage to raw materials.",
      client: "Rohan & Aditi Sen",
      project: "VILLA TECTONIC"
    },
    {
      quote: "The gallery's play of light changes hourly. Visitors sit just to watch the shafts of sunlight cross the concrete floor. It is a masterpiece of light.",
      client: "Mumbai Cultural Alliance",
      project: "THE MONOLITH GALLERY"
    },
    {
      quote: "Their uncompromising design philosophy brought a level of raw, sensory elegance to our hotel that has redefined boutique luxury in Udaipur.",
      client: "Ananya Lodha",
      project: "TRAVERTINE HOUSE"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.8;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="page-transition-wrapper">
      {/* 1. Hero Section */}
      <section 
        className="hero-section"
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.8) 100%), url("/images/hero_bg.png") center/cover no-repeat',
        }}
      >
        <div style={{ textAlign: 'center', zIndex: 2, padding: '0 20px' }}>
          <h1 className="hero-heading" style={{ marginBottom: '10px' }}>
            Space is<br />
            <span className="text-gold">Intention</span>
          </h1>
          <p className="label-utility" style={{ marginBottom: '40px', color: 'var(--text-primary)' }}>
            Est. 2009 · Mumbai · 47 Projects
          </p>
          <button 
            onClick={() => navigate('/work')}
            className="btn-outline hover-target"
          >
            View Our Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            zIndex: 2
          }}
        >
          <span className="label-utility" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Scroll</span>
          <div 
            style={{
              width: '1px',
              height: '80px',
              backgroundColor: 'rgba(200, 169, 110, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div className="scroll-dot-anim" />
          </div>
        </div>

        <style>{`
          .scroll-dot-anim {
            width: 1px;
            height: 20px;
            background-color: var(--accent-gold);
            position: absolute;
            top: 0;
            animation: scrollLine 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          }
          @keyframes scrollLine {
            0% { top: -20px; }
            100% { top: 80px; }
          }
        `}</style>
      </section>

      {/* 2. Stats Strip */}
      <section 
        style={{
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: '#0A0A0A',
          padding: '60px 0'
        }}
      >
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">47</span>
              <span className="label-utility" style={{ fontSize: '11px' }}>Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="label-utility" style={{ fontSize: '11px' }}>Countries Reached</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">08</span>
              <span className="label-utility" style={{ fontSize: '11px' }}>Design Laurels</span>
            </div>
          </div>
        </div>
        <style>{`
          .stats-row {
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }
          .stat-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }
          .stat-number {
            font-family: var(--font-utility);
            font-size: clamp(48px, 6vw, 72px);
            font-weight: 300;
            color: var(--accent-gold);
            line-height: 1;
          }
          @media (min-width: 768px) {
            .stats-row {
              flex-direction: row;
              justify-content: space-around;
            }
            .stat-item {
              width: 30%;
            }
            .stat-item:not(:last-child) {
              border-right: 1px solid var(--border-color);
            }
          }
        `}</style>
      </section>

      {/* 3. Featured Projects Section (Horizontal Scroller with Navigation) */}
      <section 
        className="horizontal-container"
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-primary)',
          padding: '100px 0',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span className="label-utility text-gold">Portfolio Overview</span>
            <h2 className="section-heading">Selected Work</h2>
          </div>
          
          {/* Arrow navigation for desktop */}
          <div className="slider-nav-arrows">
            <button 
              onClick={() => scroll('left')} 
              className="slider-arrow hover-target" 
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="slider-arrow hover-target" 
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling Strip */}
        <div 
          ref={scrollContainerRef}
          className="project-horizontal-strip"
        >
          {projects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => navigate(`/work/${proj.slug}`)}
              className="project-slide-card hover-target"
            >
              <div className="project-slide-img-wrapper">
                <img src={proj.image} alt={proj.name} className="project-slide-img" />
                <div className="project-slide-overlay" />
                
                {/* Category label */}
                <span className="project-slide-category label-utility">
                  {proj.category}
                </span>
                
                {/* Details Overlay */}
                <div className="project-slide-info">
                  <h3 className="project-slide-title">{proj.name}</h3>
                  <p className="project-slide-meta label-utility">
                    {proj.location} · {proj.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .slider-nav-arrows {
            display: none;
            gap: 15px;
          }
          .slider-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 46px;
            height: 46px;
            border: 1px solid var(--accent-gold);
            background: transparent;
            color: var(--accent-gold);
            transition: all 0.3s ease;
          }
          .slider-arrow:hover {
            background-color: var(--accent-gold);
            color: var(--bg-primary);
          }
          
          .project-horizontal-strip {
            display: flex;
            gap: 40px;
            padding: 0 5%;
            overflow-x: auto;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            scrollbar-width: none; /* Firefox */
          }
          .project-horizontal-strip::-webkit-scrollbar {
            display: none; /* Safari/Chrome */
          }
          
          .project-slide-card {
            flex-shrink: 0;
            scroll-snap-align: start;
            width: 85vw;
            height: 50vh;
            background-color: var(--surface-card);
            position: relative;
            overflow: hidden;
            border-left: 2px solid transparent;
            transition: border-color 0.4s ease;
          }
          .project-slide-card:hover {
            border-left: 2px solid var(--accent-gold);
          }
          .project-slide-img-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .project-slide-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .project-slide-card:hover .project-slide-img {
            transform: scale(1.03);
          }
          .project-slide-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.8) 100%);
          }
          .project-slide-category {
            position: absolute;
            top: 30px;
            left: 30px;
            color: var(--accent-gold);
            background-color: rgba(13, 13, 13, 0.8);
            padding: 6px 12px;
            font-size: 10px;
          }
          .project-slide-info {
            position: absolute;
            bottom: 40px;
            left: 40px;
            right: 40px;
            z-index: 2;
          }
          .project-slide-title {
            font-family: var(--font-display);
            font-size: clamp(32px, 5vw, 64px);
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            margin-bottom: 15px;
            text-shadow: 0 4px 12px rgba(0,0,0,0.5);
          }
          .project-slide-meta {
            font-size: 11px;
            color: var(--text-muted);
          }
          
          /* Desktop layout adaptation */
          @media (min-width: 1025px) {
            .slider-nav-arrows {
              display: flex;
            }
            .project-slide-card {
              width: 75vw; /* reveal partial next card */
              height: 70vh;
            }
          }
          @media (max-width: 768px) {
            .project-slide-card {
              width: 90vw;
              height: 450px;
            }
          }
        `}</style>
      </section>

      {/* 4. Services Teaser */}
      <section style={{ backgroundColor: '#0B0B0B', padding: '100px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="label-utility text-gold">Capabilities</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>Expertise</h2>
          </div>

          <div className="services-teaser-grid">
            {/* Service 1 */}
            <div className="service-teaser-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold" style={{ marginBottom: '25px' }}>
                <rect x="3" y="3" width="18" height="18" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
              </svg>
              <h3 className="subheading" style={{ marginBottom: '15px' }}>Architectural Design</h3>
              <p className="body-text" style={{ fontSize: '15px' }}>
                Sculpting volumetric forms that balance site geology, structural efficiency, and custom light manipulation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-teaser-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold" style={{ marginBottom: '25px' }}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h3 className="subheading" style={{ marginBottom: '15px' }}>Interior Architecture</h3>
              <p className="body-text" style={{ fontSize: '15px' }}>
                Tactile material curation. Emphasizing stone, timber, and copper patinas to shape sensory-rich human environments.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-teaser-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold" style={{ marginBottom: '25px' }}>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <h3 className="subheading" style={{ marginBottom: '15px' }}>Spatial Consultancy</h3>
              <p className="body-text" style={{ fontSize: '15px' }}>
                Strategic zoning, master planning, and structural feasibility audits for high-net-worth real estate assets.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/services" className="btn-outline hover-target">All Services</Link>
          </div>
        </div>

        <style>{`
          .services-teaser-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .service-teaser-card {
            background-color: var(--surface-card);
            border: 1px solid var(--border-color);
            padding: 40px;
            transition: all 0.3s ease;
          }
          .service-teaser-card:hover {
            border-color: var(--accent-gold);
            transform: translateY(-5px);
          }
          @media (min-width: 768px) {
            .services-teaser-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>
      </section>

      {/* 5. Studio Intro Strip */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '100px 0' }}>
        <div className="container">
          <div className="studio-strip-grid">
            {/* Left Image */}
            <div className="studio-strip-img-wrapper">
              <img 
                src="/images/architect_bw.png" 
                alt="Principal Architect B&W" 
                className="studio-strip-img" 
              />
            </div>
            
            {/* Right Text */}
            <div className="studio-strip-content">
              <span className="label-utility text-gold">The Philosophy</span>
              <h2 className="section-heading" style={{ marginTop: '10px', marginBottom: '25px' }}>
                FORM. Studio
              </h2>
              <p className="body-text" style={{ marginBottom: '20px' }}>
                Founded by lead architect Shirshak Roy, FORM. Studio approaches each project as a site-specific dialogue. We do not impose standard templates. We listen to geology, wind patterns, and light profiles to forge timeless materials into structures that sit in harmony with their landscapes.
              </p>
              <blockquote 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: 'var(--text-primary)',
                  borderLeft: '1px solid var(--accent-gold)',
                  paddingLeft: '20px',
                  margin: '0 0 30px 0',
                  lineHeight: 1.4
                }}
              >
                "Architecture is not about drawing enclosures. It is about understanding where the sky meets the hearth."
              </blockquote>
              <Link to="/studio" className="btn-outline hover-target">
                Meet the Studio →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .studio-strip-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
            align-items: center;
          }
          .studio-strip-img-wrapper {
            position: relative;
            overflow: hidden;
            height: 500px;
          }
          .studio-strip-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(1);
          }
          .studio-strip-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          @media (min-width: 992px) {
            .studio-strip-grid {
              grid-template-columns: 1fr 1.2fr;
              gap: 80px;
            }
            .studio-strip-img-wrapper {
              height: 600px;
            }
          }
        `}</style>
      </section>

      {/* 6. Testimonials Quote Carousel */}
      <section 
        style={{ 
          backgroundColor: '#0A0A0A', 
          padding: '120px 0', 
          borderTop: '1px solid var(--border-color)', 
          borderBottom: '1px solid var(--border-color)' 
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', position: 'relative', minHeight: '260px' }}>
            <div className="testimonial-slide">
              <blockquote 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 4vw, 36px)',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                  color: 'var(--text-primary)',
                  maxWidth: '900px',
                  margin: '0 auto 30px auto'
                }}
              >
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <p className="label-utility" style={{ fontSize: '11px', color: 'var(--accent-gold)' }}>
                {testimonials[currentTestimonial].client}
              </p>
              <p className="label-utility" style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '5px' }}>
                CO-COMMISSIONER · {testimonials[currentTestimonial].project}
              </p>
            </div>

            {/* Dots Nav */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                marginTop: '40px'
              }}
            >
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className="hover-target"
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: '30px',
                    height: '2px',
                    border: 'none',
                    backgroundColor: idx === currentTestimonial ? 'var(--accent-gold)' : '#333',
                    transition: 'background-color 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
