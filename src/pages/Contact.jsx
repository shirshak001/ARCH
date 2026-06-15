import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential',
    budgetRange: 'INR 1.5Cr - 3Cr',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="page-transition-wrapper">
      <div className="contact-split-container">
        {/* Left Side: Full-height image */}
        <div 
          className="contact-image-pane"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.8) 100%), url("/images/studio_space.png") center/cover no-repeat',
            height: '100%'
          }}
        >
          <div className="contact-image-content">
            <span className="label-utility text-gold">THE PORTAL</span>
            <h2 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: 'clamp(38px, 5vw, 56px)', 
                textTransform: 'uppercase', 
                color: '#fff',
                marginTop: '10px'
              }}
            >
              Collaborate With Us
            </h2>
            <p className="body-text" style={{ color: 'var(--text-primary)', fontSize: '15px', maxWidth: '450px', marginTop: '15px' }}>
              We build selective commissions. Let's start a dialogue about your geological site, spatial vision, and architectural objectives.
            </p>
          </div>
        </div>

        {/* Right Side: Form + Details */}
        <div className="contact-form-pane">
          <div className="contact-form-inner">
            <span className="label-utility text-gold">Commission Query</span>
            <h1 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '44px', 
                textTransform: 'uppercase',
                margin: '10px 0 35px 0'
              }}
            >
              Start a Conversation
            </h1>

            {submitted ? (
              <div 
                style={{ 
                  backgroundColor: 'var(--surface-card)', 
                  border: '1px solid var(--accent-gold)', 
                  padding: '40px',
                  textAlign: 'center',
                  animation: 'fadeIn 0.5s ease-out'
                }}
              >
                <h3 className="subheading" style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p className="body-text" style={{ color: 'var(--text-primary)' }}>
                  Thank you, {formData.name}. Our principal studio coordinator will evaluate your brief and coordinates. We will respond within three business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Residential', budgetRange: 'INR 1.5Cr - 3Cr', message: '' });
                  }}
                  className="btn-outline hover-target"
                  style={{ marginTop: '30px' }}
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {error && (
                  <p className="label-utility" style={{ color: '#D9534F', fontSize: '11px', letterSpacing: '0.05em' }}>
                    {error}
                  </p>
                )}

                {/* Name */}
                <div className="form-group">
                  <label className="label-utility" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="form-input hover-target"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="label-utility" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input hover-target"
                    required
                  />
                </div>

                {/* Grid for Select inputs */}
                <div className="form-row">
                  {/* Project Type */}
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="label-utility" htmlFor="projectType">Project Typology</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-select hover-target"
                    >
                      <option value="Residential">Residential Villa</option>
                      <option value="Commercial">Commercial Office</option>
                      <option value="Renovation">Adaptive Reuse</option>
                      <option value="Other">Bespoke Installation / Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="label-utility" htmlFor="budgetRange">Budget Range</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="form-select hover-target"
                    >
                      <option value="INR 1.5Cr - 3Cr">INR 1.5Cr - 3.0Cr</option>
                      <option value="INR 3Cr - 7Cr">INR 3.0Cr - 7.0Cr</option>
                      <option value="INR 7Cr+">INR 7.0Cr +</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="label-utility" htmlFor="message">Project Brief *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your architectural site, concept requirements, and timeline."
                    rows="5"
                    className="form-textarea hover-target"
                    required
                  />
                </div>

                {/* Submit button */}
                <div style={{ marginTop: '10px' }}>
                  <button 
                    onClick={handleSubmit}
                    className="btn-filled hover-target"
                    style={{ width: '100%' }}
                  >
                    Start a Conversation
                  </button>
                </div>
              </div>
            )}

            {/* Contact Details Footer Section */}
            <div className="contact-details-footer">
              <div className="details-col">
                <span className="label-utility text-gold" style={{ fontSize: '10px', display: 'block', marginBottom: '8px' }}>
                  THE OFFICE
                </span>
                <p className="body-text" style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-primary)' }}>
                  FORM. Studio Office<br />
                  402, Concrete Bastion, Nariman Point,<br />
                  Mumbai, MH — 400021
                </p>
              </div>

              <div className="details-col">
                <span className="label-utility text-gold" style={{ fontSize: '10px', display: 'block', marginBottom: '8px' }}>
                  COMMUNICATIONS
                </span>
                <p className="label-utility" style={{ fontSize: '11px', lineHeight: 1.5, color: 'var(--text-primary)' }}>
                  T: +91 22 8847 2910<br />
                  E: studio@formpractice.com
                </p>
              </div>

              <div className="details-col">
                <span className="label-utility text-gold" style={{ fontSize: '10px', display: 'block', marginBottom: '8px' }}>
                  STUDIO HOURS
                </span>
                <p className="body-text" style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
                  Monday — Friday<br />
                  09:00 — 18:00 IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-split-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        /* Left Image Pane */
        .contact-image-pane {
          display: flex;
          align-items: flex-end;
          padding: 60px 5%;
          position: relative;
          min-height: 350px;
        }
        .contact-image-content {
          z-index: 2;
        }

        /* Right Form Pane */
        .contact-form-pane {
          background-color: var(--bg-primary);
          padding: 120px 5% 80px 5%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-form-inner {
          width: 100%;
          max-width: 600px;
        }

        /* Form Inputs */
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          background-color: var(--surface-card);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 14px 18px;
          font-family: var(--font-body);
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--accent-gold);
          box-shadow: 0 0 10px rgba(200, 169, 110, 0.05);
        }

        .form-select option {
          background-color: var(--surface-card);
          color: var(--text-primary);
        }

        /* Details Footer inside Form Column */
        .contact-details-footer {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-top: 60px;
          border-top: 1px solid var(--border-color);
          padding-top: 40px;
        }

        @media (min-width: 576px) {
          .contact-details-footer {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 992px) {
          .contact-split-container {
            flex-direction: row;
            height: 100vh;
            overflow: hidden;
          }
          .contact-image-pane {
            flex: 1.1;
            height: 100vh;
            padding: 80px;
          }
          .contact-form-pane {
            flex: 1;
            height: 100vh;
            overflow-y: auto;
            padding: 120px 80px 80px 80px;
            border-left: 1px solid var(--border-color);
          }
          .form-row {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
}
