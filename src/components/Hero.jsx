import React, { useState, useEffect } from 'react'
import { ArrowRight, Download, Terminal } from 'lucide-react'

const roles = [
  'Java Backend Developer',
  'Spring Boot Specialist',
  'Full-Stack Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [subText, setSubText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    let timer
    const currentRole = roles[roleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setSubText(currentRole.substring(0, subText.length + 1))
        setTypingSpeed(100)

        if (subText === currentRole) {
          // Pause at full text
          timer = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        setSubText(currentRole.substring(0, subText.length - 1))
        setTypingSpeed(50)

        if (subText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          return
        }
      }

      timer = setTimeout(handleTyping, typingSpeed)
    }

    timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [subText, isDeleting, roleIndex])

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-sec">
      <div className="bg-glow-blob blob-1"></div>
      <div className="bg-glow-blob blob-2"></div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-greet">Hi, my name is</span>
          <h1 className="hero-name">Hariom Dubey.</h1>
          <h2 className="hero-title-sub">
            I am a <span>{subText}</span>
            <span className="cursor" style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </h2>
          
          <p className="hero-description">
            I specialize in engineering robust, clean, and scalable backend architectures using 
            <strong> Spring Boot, JPA/Hibernate, and MySQL</strong>. I enjoy connecting secure APIs with performant React frontend user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
              Explore Work <ArrowRight size={16} />
            </a>
            <a 
              href="/Hariom_Dubey_Resume1.pdf" 
              className="btn btn-outline" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Hariom_Dubey_Resume.pdf"
            >
              Download Resume <Download size={16} />
            </a>
            <a href="#contact" className="btn btn-outline" onClick={scrollToContact}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--accent-cyan) }
        }
      `}} />
    </section>
  )
}
