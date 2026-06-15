import React, { useEffect, useRef, useState } from 'react';

export default function Process() {
  const timelineStages = [
    {
      step: "01",
      title: "Discovery",
      subtitle: "Brief, Site Geology & Client Vision",
      desc: "Our journey begins on the raw terrain. We perform spatial diagnostics, analyze native light profiles, inspect soil and slope geologies, and align with your structural objectives to frame the initial design limits."
    },
    {
      step: "02",
      title: "Concept Design",
      subtitle: "Sketches, Massing & Spatial Narratives",
      desc: "We formulate the initial volumes. Through hand sketches and conceptual massing models, we layout how light will enter, how circulation will flow, and how the building responds to site lines."
    },
    {
      step: "03",
      title: "Design Development",
      subtitle: "CAD Drawings, 3D Geometry & Material Palette",
      desc: "Refining the concept into coordinates. We construct precise computational 3D models and select raw materials — travertine slabs, board-formed concrete aggregates, and timber details."
    },
    {
      step: "04",
      title: "Documentation",
      subtitle: "Construction Drawings, BOQ & Permits",
      desc: "Preparing the project blueprint. We create detailing specs, bill of quantities (BOQ), electrical, plumbing, and HVAC routing schematics, and secure local municipal approvals."
    },
    {
      step: "05",
      title: "Construction Stewardship",
      subtitle: "Site Supervision & Quality Auditing",
      desc: "Groundbreaking. We monitor concrete pouring, check steel reinforcements, and audit dimensional tolerances on-site, ensuring contractors respect the exact detail specifications."
    },
    {
      step: "06",
      title: "Handover",
      subtitle: "Snagging, Final Walk-Through & Photography",
      desc: "Perfecting the frame. We run final detail reviews, clear snags, tune active cooling structures, and hand over keys, followed by architectural photography to archive the finished dialogue."
    }
  ];

  return (
    <div className="page-transition-wrapper" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <span className="label-utility text-gold">The Journey</span>
          <h1 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(56px, 8vw, 80px)', 
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginTop: '10px'
            }}
          >
            Our Process
          </h1>
        </div>

        {/* Timeline container */}
        <div className="timeline-container">
          {/* Central Line */}
          <div className="timeline-line" />

          {/* Cards */}
          {timelineStages.map((stage, index) => {
            const isLeft = index % 2 === 0;
            return (
              <TimelineCard 
                key={stage.step}
                stage={stage}
                isLeft={isLeft}
              />
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: var(--accent-gold);
          opacity: 0.3;
          transform: translateX(-50%);
        }

        /* Responsive override for mobile */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

// Sub-component for individual card with IntersectionObserver trigger
function TimelineCard({ stage, isLeft }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // trigger animation once
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`timeline-row ${isLeft ? 'left-row' : 'right-row'} ${isVisible ? 'animate-in' : ''}`}
    >
      {/* Central Connector Node */}
      <div className="timeline-node" />

      {/* Card Content Wrapper */}
      <div className="timeline-card-wrapper">
        <div className="timeline-card">
          {/* Background Step Counter */}
          <span className="timeline-card-number">{stage.step}</span>
          
          <span className="label-utility text-gold" style={{ fontSize: '10px' }}>
            {stage.subtitle}
          </span>
          <h3 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '28px', 
              textTransform: 'uppercase', 
              margin: '10px 0 15px 0' 
            }}
          >
            {stage.title}
          </h3>
          <p className="body-text" style={{ fontSize: '14px', lineHeight: 1.6 }}>
            {stage.desc}
          </p>
        </div>
      </div>

      <style>{`
        .timeline-row {
          display: flex;
          justify-content: flex-end;
          width: 50%;
          position: relative;
          padding: 40px 60px;
          box-sizing: border-box;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .left-row {
          align-self: flex-start;
          justify-content: flex-end;
          transform: translateX(-50px);
          left: 0;
        }

        .right-row {
          align-self: flex-start;
          justify-content: flex-start;
          transform: translateX(50px);
          left: 50%;
        }

        .timeline-row.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Node */
        .timeline-node {
          position: absolute;
          width: 9px;
          height: 9px;
          background-color: var(--accent-gold);
          border: 2px solid var(--bg-primary);
          top: 55px;
          z-index: 5;
        }

        .left-row .timeline-node {
          right: -5px;
        }

        .right-row .timeline-node {
          left: -4px;
        }

        /* Content Card */
        .timeline-card-wrapper {
          width: 100%;
          max-width: 480px;
        }

        .timeline-card {
          background-color: var(--surface-card);
          border: 1px solid var(--border-color);
          padding: 35px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .timeline-card:hover {
          border-color: var(--accent-gold);
        }

        .timeline-card-number {
          position: absolute;
          right: 20px;
          top: 10px;
          font-family: var(--font-utility);
          font-size: 72px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.02);
          pointer-events: none;
          line-height: 1;
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .timeline-row {
            width: 100% !important;
            left: 0 !important;
            padding: 20px 0 20px 40px !important;
            transform: translateX(30px) !important;
          }
          
          .timeline-row.animate-in {
            transform: translateX(0) !important;
          }

          .timeline-node {
            left: 16px !important;
            right: auto !important;
          }

          .timeline-card-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
