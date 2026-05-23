import React, { useState } from 'react'

const jobs = [
  {
    id: 'talent-serve',
    company: 'Talent Serve Pvt. Ltd.',
    role: 'Graduate Engineer Trainee',
    duration: 'Campus Placement',
    bullets: [
      'Selected through campus placement for excellent technical aptitude.',
      'Gained exposure to enterprise-level workflows and software development lifecycles.',
      'Assisted in Java-based technical tasks and debugging backend modules.',
      'Collaborated with senior developers on documentation and code reviews.',
    ],
  },
  {
    id: 'oasis-infobyte',
    company: 'Oasis Infobyte',
    role: 'Java Developer Intern',
    duration: 'Internship',
    bullets: [
      'Strengthened Core Java and Data Structures & Algorithms (DSA) concepts.',
      'Implemented optimized Java programs for various computational problems.',
      'Applied Object-Oriented Programming (OOP) principles in real-world scenarios.',
      'Delivered all assigned technical projects within strict deadlines.',
    ],
  },
]

export default function Experience() {
  const [activeJobIdx, setActiveJobIdx] = useState(0)

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="experience-layout">
          <div className="experience-tabs">
            {jobs.map((job, idx) => (
              <button
                key={job.id}
                onClick={() => setActiveJobIdx(idx)}
                className={`experience-tab-btn ${activeJobIdx === idx ? 'active' : ''}`}
              >
                {job.company.split(' ')[0]} {/* Shorten name for tab button */}
              </button>
            ))}
          </div>

          <div className="experience-panel-wrapper">
            {jobs.map((job, idx) => {
              if (idx !== activeJobIdx) return null
              return (
                <div key={job.id} className="experience-panel">
                  <h3>
                    {job.role} <span className="experience-company">@ {job.company}</span>
                  </h3>
                  <span className="experience-duration">{job.duration}</span>
                  <ul className="experience-bullets">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
