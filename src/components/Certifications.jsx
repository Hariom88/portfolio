import React from 'react'
import { Award, Cloud, Code2 } from 'lucide-react'

const certifications = [
  {
    title: 'Java Development',
    issuer: 'Oasis Infobyte',
    icon: <Code2 size={24} />,
  },
  {
    title: 'AWS Cloud Internship',
    issuer: 'Eduskills',
    icon: <Cloud size={24} />,
  },
  {
    title: 'C Programming',
    issuer: 'IIT Kanpur (Prutor)',
    icon: <Award size={24} />,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
