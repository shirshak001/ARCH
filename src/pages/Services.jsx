import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Architectural Design",
      desc: "We engineer residential and commercial structures from concept through construction. Our focus centers on spatial massing, contextual positioning, solar tracking, and raw texture integrity.",
      deliverables: [
        "Volumetric Spatial Concept Studies",
        "Geological Site-Specific Alignments",
        "Passive Solar Orientation Modeling",
        "Full CAD Execution & Construction Plans"
      ],
      img: "/images/project_1.png"
    },
    {
      title: "Interior Architecture",
      desc: "Designing tactile interior environments. We strip down superficial details to highlight travertine stone slabs, cold-rolled steel structures, and patinating copper panels.",
      deliverables: [
        "Custom Interior Joinery Profiles",
        "Sensory Material Curation Sheets",
        "Spatial Lighting & Shadow Plans",
        "Integrated Architectural Furniture Design"
      ],
      img: "/images/project_3.png"
    },
    {
      title: "Urbanism & Master Planning",
      desc: "Formulating structural layouts for boutique developments, estates, and hospitality complexes. We plan micro-urban contexts that flow organically into their local topographies.",
      deliverables: [
        "Topographical Site Flow Audits",
        "Circulation & Movement Networks",
        "Massing Scenarios & Visual Impact Models",
        "Infrastructure & Utilities Integration Plans"
      ],
      img: "/images/project_4.png"
    },
    {
      title: "Adaptive Reuse & Renovation",
      desc: "Revitalizing heritage masonry structures and industrial monoliths. We preserve core structural histories while integrating high-performance spatial technologies.",
      deliverables: [
        "Structural Core Integrity Diagnostics",
        "Heritage Conservation Schematics",
        "Modern Spatial Retrofitting Plans",
        "High-Performance Climate Integration"
      ],
      img: "/images/project_2.png"
    },
    {
      title: "Construction Stewardship",
      desc: "Overseeing building execution to maintain rigorous design compliance. We manage contractors, run detail checks, and inspect raw concrete pours directly at site levels.",
      deliverables: [
        "On-Site Tolerances Quality Control",
        "Concrete Pouring & Curing Inspections",
        "Tender Specification & Procurement Audits",
        "Snagging Protocols & Commissioning Runs"
      ],
      img: "/images/studio_space.png"
    }
  ];

  return (
    <div className="page-transition-wrapper" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <span className="label-utility text-gold">Our Capabilities</span>
          <h1 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(56px, 8vw, 80px)', 
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginTop: '10px'
            }}
          >
            Services
          </h1>
        </div>

        {/* Services Rows */}
        <div className="services-rows-container">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="service-row-section">
                <div className={`service-row-grid ${isEven ? '' : 'grid-reverse'}`}>
                  {/* Image Column */}
                  <div className="service-img-col">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>

                  {/* Text Column */}
                  <div className="service-text-col">
                    <span className="label-utility text-gold">0{index + 1} // CAPACITY</span>
                    <h2 
                      style={{ 
                        fontFamily: 'var(--font-display)', 
                        fontSize: '48px', 
                        textTransform: 'uppercase', 
                        margin: '15px 0 20px 0',
                        lineHeight: 1.1 
                      }}
                    >
                      {service.title}
                    </h2>
                    <p className="body-text" style={{ fontSize: '15px', marginBottom: '30px', color: 'var(--text-primary)' }}>
                      {service.desc}
                    </p>
                    
                    {/* Deliverables with dashes */}
                    <div style={{ borderTop: '1px solid #222', paddingTop: '20px' }}>
                      <h4 className="label-utility" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                        DELIVERABLES
                      </h4>
                      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {service.deliverables.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="label-utility" 
                            style={{ 
                              fontSize: '11px', 
                              color: 'var(--text-primary)', 
                              marginBottom: '8px',
                              letterSpacing: '0.08em',
                              display: 'flex',
                              gap: '10px',
                              alignItems: 'baseline'
                            }}
                          >
                            <span style={{ color: 'var(--accent-gold)' }}>—</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < servicesList.length - 1 && <div className="divider-line" />}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-row-section {
          position: relative;
        }
        .service-row-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          padding: 80px 0;
          align-items: center;
        }
        .service-img-col {
          height: 400px;
          width: 100%;
          overflow: hidden;
        }
        .service-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .divider-line {
          height: 1px;
          background-color: var(--border-color);
          width: 100%;
        }
        @media (min-width: 992px) {
          .service-row-grid {
            grid-template-columns: 1.1fr 1fr;
            gap: 80px;
          }
          .grid-reverse {
            direction: rtl;
          }
          .grid-reverse .service-text-col {
            direction: ltr; /* Reset text direction inside */
          }
          .grid-reverse .service-img-col {
            direction: ltr;
          }
          .service-img-col {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
}
