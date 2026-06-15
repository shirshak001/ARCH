import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Work() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [transitioning, setTransitioning] = useState(false);
  const [limit, setLimit] = useState(4); // Default show 4 projects, click load more to show all

  const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Interior'];

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => {
      const filtered = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());
      setVisibleProjects(filtered);
      setTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div className="page-transition-wrapper" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <span className="label-utility text-gold">Archival Catalogue</span>
          <h1 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(56px, 8vw, 80px)', 
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginTop: '10px'
            }}
          >
            Our Work
          </h1>
        </div>

        {/* Sticky Filter Bar */}
        <div className="filter-bar-wrapper">
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn hover-target ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <div className={`portfolio-grid ${transitioning ? 'fade-out' : 'fade-in'}`}>
          {visibleProjects.slice(0, limit).map((proj) => (
            <div 
              key={proj.id}
              onClick={() => navigate(`/work/${proj.slug}`)}
              className={`portfolio-card hover-target ${proj.gridSize === 'tall' ? 'grid-tall' : 'grid-normal'}`}
            >
              <div className="portfolio-card-img-wrapper">
                <img src={proj.image} alt={proj.name} className="portfolio-card-img" />
                
                {/* Category indicator top-left */}
                <span className="portfolio-card-category label-utility">
                  {proj.category}
                </span>

                {/* Hover Details Overlay */}
                <div className="portfolio-card-hover-overlay">
                  <div className="portfolio-card-details">
                    <span className="label-utility text-gold" style={{ fontSize: '9px', display: 'block', marginBottom: '8px' }}>
                      {proj.coordinates}
                    </span>
                    <h3 className="portfolio-card-title">{proj.name}</h3>
                    <div className="accent-line" />
                    <p className="label-utility" style={{ fontSize: '10px', marginTop: '10px', color: 'var(--text-primary)' }}>
                      VIEW DOCUMENTATION
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {limit < visibleProjects.length && (
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <button 
              onClick={() => setLimit(prev => prev + 2)}
              className="btn-outline hover-target"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      <style>{`
        .filter-bar-wrapper {
          position: sticky;
          top: 90px;
          z-index: 10;
          background-color: var(--bg-primary);
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 60px;
        }
        .filter-bar {
          display: flex;
          gap: 25px;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        .filter-bar::-webkit-scrollbar {
          display: none; /* Safari/Chrome */
        }
        .filter-btn {
          background: none;
          border: none;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 8px 0;
          position: relative;
          transition: color 0.3s;
          white-space: nowrap;
        }
        .filter-btn:hover,
        .filter-btn.active {
          color: var(--text-primary);
        }
        .filter-btn::after {
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
        .filter-btn.active::after {
          transform: scaleX(1);
        }
        
        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .portfolio-grid.fade-out {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .portfolio-grid.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .portfolio-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: var(--surface-card);
          cursor: none;
        }

        .portfolio-card-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .grid-normal .portfolio-card-img-wrapper {
          height: 380px;
        }

        .grid-tall .portfolio-card-img-wrapper {
          height: 480px;
        }

        .portfolio-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.02);
        }

        .portfolio-card-category {
          position: absolute;
          top: 25px;
          left: 25px;
          background-color: rgba(13, 13, 13, 0.85);
          color: var(--text-primary);
          padding: 6px 12px;
          font-size: 10px;
          z-index: 2;
        }

        .portfolio-card-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 13, 13, 0.7);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          padding: 40px;
          transition: opacity 0.4s ease;
          z-index: 3;
        }

        .portfolio-card:hover .portfolio-card-hover-overlay {
          opacity: 1;
        }

        .portfolio-card-details {
          width: 100%;
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .portfolio-card:hover .portfolio-card-details {
          transform: translateY(0);
        }

        .portfolio-card-title {
          font-family: var(--font-display);
          font-size: 36px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 12px;
          line-height: 1.1;
        }

        .accent-line {
          width: 0;
          height: 1px;
          background-color: var(--accent-gold);
          transition: width 0.4s ease;
        }

        .portfolio-card:hover .accent-line {
          width: 60px;
        }

        @media (min-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
          }
          .grid-normal .portfolio-card-img-wrapper {
            height: 420px;
          }
          .grid-tall .portfolio-card-img-wrapper {
            height: 560px;
          }
        }
      `}</style>
    </div>
  );
}
