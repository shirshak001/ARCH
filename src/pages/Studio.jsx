import React from 'react';

export default function Studio() {
  const team = [
    {
      name: "Shirshak Roy",
      role: "Founder & Lead Architect",
      img: "/images/architect_color.png"
    },
    {
      name: "Elena Rostova",
      role: "Director of Interior Architecture",
      img: "/images/project_3.png" // Curation image
    },
    {
      name: "Kabir Mehta",
      role: "Senior Associate, Urbanism",
      img: "/images/project_4.png" // Desert Glass Pavilion representational
    },
    {
      name: "Sunita Deshmukh",
      role: "Lead Computational Designer",
      img: "/images/project_2.png" // Brutalist Gallery representational
    }
  ];

  const values = [
    {
      title: "Volumetric Intent",
      description: "We do not start with facades. We design from the inside out, starting with volumes of void. A room is first defined by its relation to the human frame, then by the boundary that encloses it."
    },
    {
      title: "Material Honesty",
      description: "Concrete should look like concrete. Timber should wear its knots. Stone must bear the tracks of the quarry. We reject artificial veneers, prioritizing raw, solid resources that age with dignity."
    },
    {
      title: "Tectonic Light",
      description: "Light is the final building material. By cutting deep apertures and creating light wells, we orchestrate shadow play that tracks the cycle of the sun, making time a visible element within space."
    }
  ];

  return (
    <div className="page-transition-wrapper" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        {/* 1. Firm Intro Banner */}
        <div style={{ marginBottom: '60px' }}>
          <span className="label-utility text-gold">The Practice</span>
          <h1 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(56px, 8vw, 80px)', 
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginTop: '10px'
            }}
          >
            The Studio
          </h1>
        </div>

        {/* B&W Studio Space Header */}
        <div 
          style={{ 
            width: '100%', 
            height: '450px', 
            overflow: 'hidden', 
            marginBottom: '40px',
            position: 'relative'
          }}
        >
          <img 
            src="/images/studio_space.png" 
            alt="FORM. Studio office interior" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              filter: 'grayscale(1) contrast(1.1)' 
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(13,13,13,0.1), rgba(13,13,13,0.6))'
            }}
          />
        </div>

        {/* Mission Statement */}
        <div style={{ maxWidth: '800px', margin: '0 auto 100px auto', textAlign: 'center' }}>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 42px)',
              fontStyle: 'italic',
              lineHeight: 1.3,
              color: 'var(--text-primary)',
              margin: 0
            }}
          >
            "We believe architecture is the art of organizing light."
          </blockquote>
        </div>

        {/* 2. The Principal Architect Profile */}
        <section className="profile-section">
          <div className="profile-grid">
            <div className="profile-text">
              <span className="label-utility text-gold">Principal Profile</span>
              <h2 className="section-heading" style={{ fontSize: '38px', marginTop: '10px', marginBottom: '20px' }}>
                Shirshak Roy
              </h2>
              <p className="body-text" style={{ fontSize: '15px', marginBottom: '20px', color: 'var(--text-primary)' }}>
                With over fifteen years of practice spanning India, Switzerland, and the United Kingdom, Shirshak Roy founded FORM. Studio with a singular focus: to strip away the ornamental excess of modern construction and return to the primary components of structure.
              </p>
              <p className="body-text" style={{ fontSize: '15px', marginBottom: '35px' }}>
                Shirshak's designs focus on raw board-formed concrete slabs, sandblasted stone, and native wood details. His design theory posits that buildings should not stand as monuments to their designers, but rather as frames for the natural environments they inhabit.
              </p>
              
              {/* Credentials list in Space Mono */}
              <div 
                style={{ 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '20px' 
                }}
              >
                <h4 className="label-utility" style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
                  TECTONIC CREDENTIALS
                </h4>
                <div 
                  className="label-utility" 
                  style={{ 
                    fontSize: '11px', 
                    color: 'var(--text-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    letterSpacing: '0.1em'
                  }}
                >
                  <div>B.ARCH, SPA DELHI (GOLD MEDALIST, 2005)</div>
                  <div>M.ARCH, ETH ZÜRICH (SPATIAL RESEARCH GROUP, 2008)</div>
                  <div>RIBA CHARTERED MEMBER (REG. NO. 488201)</div>
                </div>
              </div>
            </div>

            {/* Principal Photo */}
            <div className="profile-img-container">
              <img 
                src="/images/architect_color.png" 
                alt="Shirshak Roy Principal Architect" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </section>

        {/* 3. Core Values Section */}
        <section style={{ margin: '120px 0 100px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label-utility text-gold">Principles</span>
            <h2 className="section-heading" style={{ fontSize: '38px', marginTop: '10px' }}>
              Our Core Values
            </h2>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-col">
                <span className="label-utility text-gold" style={{ fontSize: '14px', display: 'block', marginBottom: '20px' }}>
                  0{i + 1}
                </span>
                <h3 className="subheading" style={{ marginBottom: '15px', textTransform: 'uppercase', fontSize: '18px' }}>
                  {v.title}
                </h3>
                <p className="body-text" style={{ fontSize: '14px', textAlign: 'justify' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Team Section */}
        <section style={{ marginTop: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label-utility text-gold">Collaborators</span>
            <h2 className="section-heading" style={{ fontSize: '38px', marginTop: '10px' }}>
              The Team
            </h2>
          </div>

          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card hover-target">
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} className="team-img" />
                  <div className="team-overlay">
                    <div className="team-details">
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '5px' }}>
                        {member.name}
                      </h4>
                      <p className="label-utility" style={{ fontSize: '10px', color: 'var(--accent-gold)' }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        /* Profile Grid */
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          align-items: flex-start;
        }
        .profile-img-container {
          height: 550px;
          width: 100%;
          overflow: hidden;
        }
        @media (min-width: 992px) {
          .profile-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
          }
        }

        /* Values Columns */
        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .value-col {
          border-left: 1px solid var(--border-color);
          padding-left: 30px;
          padding-right: 10px;
        }
        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }

        /* Team Grid */
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (min-width: 576px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .team-card {
          position: relative;
          background-color: var(--surface-card);
          overflow: hidden;
        }
        .team-img-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
        }
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        .team-card:hover .team-img {
          transform: scale(1.03);
          filter: grayscale(0.5);
        }
        .team-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(13,13,13,0) 40%, rgba(200, 169, 110, 0.95) 100%);
          display: flex;
          align-items: flex-end;
          padding: 25px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .team-card:hover .team-overlay {
          opacity: 1;
        }
        .team-details {
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 100%;
        }
        .team-card:hover .team-details {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
