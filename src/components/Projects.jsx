import React, { useState } from 'react'
import { Github, ExternalLink, Key, Check, Copy, User } from 'lucide-react'

export default function Projects() {
  const [showCreds, setShowCreds] = useState(false)
  const [copiedField, setCopiedField] = useState(null)

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Some Things I've Built</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1: Job Portal System */}
          <div className="project-card">
            <div className="project-visual">
              <div className="project-visual-glow"></div>
              <div>
                <div className="project-icon-top">
                  <ExternalLink size={20} />
                </div>
                <div className="project-meta-pills">
                  <span className="project-pill accent">Featured</span>
                  <span className="project-pill">Full-Stack</span>
                </div>
                <h4>Full-Stack Job Portal System</h4>
                <p className="project-tagline">
                  A modern, production-ready recruitment and job search engine featuring dual dashboard controls and complete administrative oversight.
                </p>
              </div>

              <div className="project-links">
                <a 
                  href="https://github.com/Hariom88/Job-Portal.git" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-icon"
                  title="GitHub Codebase"
                  aria-label="GitHub Codebase"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://job-portal-prrm7ggig-hariom-dubeys-projects.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-icon"
                  title="Live Demo"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="project-info">
              <div className="project-info-section">
                <h5>Key System Features</h5>
                <ul className="project-features-list">
                  <li><strong>Dashboards:</strong> Candidate application pipeline & Company job-posting management dashboards.</li>
                  <li><strong>Admin Control Panel:</strong> Complete control over users, company audits, and listing reviews.</li>
                  <li><strong>User Profiles:</strong> Interactive user bios, education history, skills tagging, and profile picture upload.</li>
                  <li><strong>Security:</strong> Secure JWT authentication session management.</li>
                </ul>
              </div>

              <div>
                <div className="project-tech-stack-wrap">
                  <h5>Technologies Used</h5>
                  <div className="project-tech-tags">
                    <span className="project-tech-tag">React.js</span>
                    <span className="project-tech-tag">Tailwind CSS</span>
                    <span className="project-tech-tag">Spring Boot</span>
                    <span className="project-tech-tag">Spring Security</span>
                    <span className="project-tech-tag">MySQL</span>
                    <span className="project-tech-tag">Vite</span>
                  </div>
                </div>

                <div className="project-cta-row">
                  <button 
                    onClick={() => setShowCreds(true)} 
                    className="btn btn-outline" 
                    style={{ fontSize: '0.8rem', padding: '8px 16px', gap: '6px' }}
                  >
                    <Key size={14} /> View Admin Access
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: OTP Authentication System */}
          <div className="project-card">
            <div className="project-visual">
              <div className="project-visual-glow"></div>
              <div>
                <div className="project-icon-top">
                  <Github size={20} />
                </div>
                <div className="project-meta-pills">
                  <span className="project-pill accent">Collaborative</span>
                  <span className="project-pill">Security</span>
                </div>
                <h4>Full-Stack OTP Authentication System</h4>
                <p className="project-tagline">
                  A premium OTP login system integrating verified mobile SMS registration flow, JWT sessions, and session hijacking prevention.
                </p>
              </div>

              <div className="project-links">
                <a 
                  href="https://github.com/Hariom88/OTP-Authentication-System.git" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-icon"
                  title="GitHub Codebase"
                  aria-label="GitHub Codebase"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="project-info">
              <div className="project-info-section">
                <h5>Key System Features</h5>
                <ul className="project-features-list">
                  <li><strong>SMS Gateway:</strong> Real SMS routing using 2Factor.in SDK for OTP auto-generate and verify.</li>
                  <li><strong>Anti-Hijack:</strong> Enhanced security with Client Fingerprinting techniques.</li>
                  <li><strong>JWT Guard:</strong> Complete protected routing on the React dashboard based on JWT validation.</li>
                  <li><strong>Clean UI:</strong> Premium aesthetic built with tailwind alerts and Lucide react nodes.</li>
                </ul>
              </div>

              <div>
                <div className="project-tech-stack-wrap">
                  <h5>Co-Author & Team Credits</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={14} className="text-accent" /> Developed by <strong>Hariom Dubey</strong> & <strong>Yash Vashishtha</strong>.
                  </p>
                  
                  <h5>Technologies Used</h5>
                  <div className="project-tech-tags">
                    <span className="project-tech-tag">React.js</span>
                    <span className="project-tech-tag">Spring Boot 3.x</span>
                    <span className="project-tech-tag">Spring Security</span>
                    <span className="project-tech-tag">Spring Data JPA</span>
                    <span className="project-tech-tag">2Factor SMS SDK</span>
                    <span className="project-tech-tag">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Credentials Modal */}
      {showCreds && (
        <div className="modal-overlay" onClick={() => setShowCreds(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Admin Credentials</h3>
              <button onClick={() => setShowCreds(false)} className="modal-close-btn" aria-label="Close credentials popup">
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              <p className="modal-desc">
                Use these credentials to access the administrative control panel of the live Job Portal System.
              </p>

              <div className="credential-card">
                <div className="credential-row">
                  <span className="credential-label">Admin Email</span>
                  <div className="credential-value-wrap">
                    <span className="credential-value">admin@jobportal.com</span>
                    <button 
                      onClick={() => copyToClipboard('admin@jobportal.com', 'email')} 
                      className="copy-btn"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? <Check size={14} style={{ color: 'var(--accent-cyan)' }} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div className="credential-row">
                  <span className="credential-label">Admin Password</span>
                  <div className="credential-value-wrap">
                    <span className="credential-value">admin123</span>
                    <button 
                      onClick={() => copyToClipboard('admin123', 'password')} 
                      className="copy-btn"
                      title="Copy Password"
                    >
                      {copiedField === 'password' ? <Check size={14} style={{ color: 'var(--accent-cyan)' }} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href="https://job-portal-prrm7ggig-hariom-dubeys-projects.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ fontSize: '0.8rem', padding: '8px 16px' }}
              >
                Go to App
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
