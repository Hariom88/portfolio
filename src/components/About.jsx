import React from 'react'
import { Check, Code2 } from 'lucide-react'

const recentTech = [
  'Java (Core & Adv)',
  'Spring Boot',
  'Hibernate / JPA',
  'MySQL',
  'RESTful APIs',
  'Git & GitHub',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a results-driven <strong>Java Backend Developer</strong> based in Noida, India, passionate about
              building robust, scalable, and high-performance server-side applications. My journey in software
              engineering is fueled by a curiosity to understand complex systems and apply rigorous problem-solving.
            </p>
            <p>
              With specialized expertise in <strong>Java, Spring Boot, and RESTful APIs</strong>, I have
              successfully delivered projects ranging from Employee Management Systems to Smart Parking
              solutions. My professional experiences at <strong>Talent Serve</strong> and <strong>Oasis
              Infobyte</strong> have instilled in me a strong discipline for writing clean, maintainable
              code and collaborating effectively within agile teams.
            </p>
            <p>
              I am currently seeking full-time opportunities where I can leverage my backend skills, along with 
              React frontend capabilities, to contribute to impactful software products.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="about-skills-list">
              {recentTech.map((tech, idx) => (
                <div key={idx} className="about-skills-item">
                  <Check size={16} /> {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div className="avatar-graphic">
                <Code2 size={48} />
              </div>
              <h4>Hariom Dubey</h4>
              <p>Backend System Developer</p>
            </div>
            <div className="about-image-frame"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
