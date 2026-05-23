import React from 'react'
import { Code, Database, Layers } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming & Backend',
    icon: <Code size={22} />,
    skills: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'RESTful APIs', 'Spring Security'],
  },
  {
    title: 'Database & Tools',
    icon: <Database size={22} />,
    skills: ['MySQL', 'Maven', 'Git & GitHub', 'Postman', 'JUnit', 'JIRA'],
  },
  {
    title: 'Core Concepts',
    icon: <Layers size={22} />,
    skills: ['OOP', 'API Testing', 'Backend Development', 'Layered Architecture', 'Clean Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Technical Stack</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-card">
              <div className="skills-card-header">
                <div className="skills-icon-box">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-chips">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
