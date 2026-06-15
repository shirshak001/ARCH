import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const projIndex = projects.findIndex((p) => p.slug === slug);
    if (projIndex === -1) {
      navigate('/work');
      return;
    }

    const currentProj = projects[projIndex];
    setProject(currentProj);

    // Calculate next project (loop back to 0 if last)
    const nextIndex = (projIndex + 1) % projects.length;
    setNextProject(projects[nextIndex]);

    // Scroll to top on project load
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.4); // Parallax speed factor
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) return null;

  return (
    <div className="page-transition-wrapper" style={{ paddingBottom: '100px' }}>
      {/* 1. Hero Parallax Section */}
      <section
        style={{
          height: '60vh',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#0D0D0D'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%', // taller for parallax scroll space
            backgroundImage: `url(${project.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${scrollOffset}px)`,
            willChange: 'transform'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.8) 100%)',
            zIndex: 1
          }}
        />
        
        {/* Title overlay */}
        <div
          className="container"
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '5%',
            right: '5%',
            zIndex: 2
          }}
        >
          <span className="label-utility text-gold" style={{ fontSize: '10px' }}>{project.coordinates}</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 6vw, 72px)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginTop: '10px'
            }}
          >
            {project.name}
          </h1>
        </div>
      </section>

      {/* 2. Project Metadata Strip */}
      <section
        style={{
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: '#0A0A0A',
          padding: '25px 0'
        }}
      >
        <div className="container">
          <div className="metadata-strip">
            <div className="meta-item">
              <span className="label-utility">TYPOLOGY</span>
              <span className="meta-value">{project.category}</span>
            </div>
            <div className="meta-item">
              <span className="label-utility">LOCATION</span>
              <span className="meta-value">{project.location}</span>
            </div>
            <div className="meta-item">
              <span className="label-utility">YEAR</span>
              <span className="meta-value">{project.year}</span>
            </div>
            <div className="meta-item">
              <span className="label-utility">BUILT AREA</span>
              <span className="meta-value">{project.area}</span>
            </div>
          </div>
        </div>
        <style>{`
          .metadata-strip {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
          }
          .meta-item {
            display: flex;
            flex-direction: column;
            gap: 5px;
            min-width: 120px;
          }
          .meta-value {
            font-family: var(--font-body);
            font-size: 15px;
            font-weight: 500;
            color: var(--text-primary);
          }
        `}</style>
      </section>

      {/* 3. Project Narrative */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-heading">
              <h2 className="section-heading" style={{ fontSize: '38px', color: 'var(--accent-gold)' }}>
                The Spatial Concept
              </h2>
            </div>
            <div className="narrative-text">
              {project.narrative.map((para, idx) => (
                <p 
                  key={idx} 
                  className="body-text" 
                  style={{ 
                    fontSize: '16px', 
                    marginBottom: '20px', 
                    textAlign: 'justify',
                    color: 'var(--text-primary)'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .narrative-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
          }
          @media (min-width: 768px) {
            .narrative-grid {
              grid-template-columns: 1fr 2fr;
              gap: 60px;
            }
          }
        `}</style>
      </section>

      {/* 4. Alternate Image Gallery */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="gallery-layout">
            {/* Full width */}
            <div className="gallery-full-bleed" style={{ marginBottom: '40px' }}>
              <img 
                src={project.gallery[0] || project.image} 
                alt={`${project.name} exterior detail`} 
                style={{ width: '100%', height: '550px', objectFit: 'cover' }} 
              />
            </div>
            
            {/* 50/50 Split */}
            <div className="gallery-split-row">
              <div className="gallery-split-col">
                <img 
                  src={project.gallery[1] || project.image} 
                  alt={`${project.name} interior detail`} 
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
                />
              </div>
              <div className="gallery-split-col">
                <div 
                  style={{ 
                    backgroundColor: 'var(--surface-card)', 
                    height: '400px', 
                    padding: '50px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    borderLeft: '1px solid var(--accent-gold)'
                  }}
                >
                  <span className="label-utility text-gold" style={{ fontSize: '10px', marginBottom: '15px' }}>
                    SPECIFICATIONS
                  </span>
                  <h3 className="subheading" style={{ marginBottom: '20px', textTransform: 'uppercase' }}>
                    Rigid Engineering, Fluid Volumetrics
                  </h3>
                  <p className="body-text" style={{ fontSize: '14px' }}>
                    Designed with cast-in-situ board-formed concrete walls, exposed aggregate floors, custom copper light fittings, and steel frame windows. Low impact HVAC structures and structural solar shielding integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .gallery-split-row {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          @media (min-width: 768px) {
            .gallery-split-row {
              flex-direction: row;
              gap: 40px;
            }
            .gallery-split-col {
              flex: 1;
            }
          }
        `}</style>
      </section>

      {/* 5. Next Project Navigation Banner */}
      {nextProject && (
        <section 
          style={{ 
            marginTop: '100px', 
            borderTop: '1px solid var(--border-color)',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#070707',
            padding: '80px 0',
            overflow: 'hidden'
          }}
        >
          <div className="container">
            <Link 
              to={`/work/${nextProject.slug}`} 
              className="next-project-link hover-target"
              style={{
                display: 'block',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              <span className="label-utility" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                UP NEXT
              </span>
              <h2 
                className="next-project-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(38px, 6vw, 64px)',
                  textTransform: 'uppercase',
                  marginTop: '15px',
                  color: 'var(--text-primary)',
                  transition: 'color 0.4s ease'
                }}
              >
                {nextProject.name} →
              </h2>
              
              {/* Image Preview Container (fades in on hover of title in desktop) */}
              <div className="next-project-preview">
                <img src={nextProject.image} alt={nextProject.name} />
              </div>
            </Link>
          </div>
          <style>{`
            .next-project-preview {
              width: 300px;
              height: 0;
              margin: 20px auto 0 auto;
              overflow: hidden;
              transition: height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s;
              opacity: 0;
            }
            .next-project-preview img {
              width: 100%;
              height: 180px;
              object-fit: cover;
            }
            .next-project-link:hover .next-project-title {
              color: var(--accent-gold);
            }
            @media (min-width: 1025px) {
              .next-project-link:hover .next-project-preview {
                height: 180px;
                opacity: 1;
              }
            }
          `}</style>
        </section>
      )}
    </div>
  );
}
