import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  
  const [activeSection, setActiveSection] = useState('hero')

  // Theme Manager
  useEffect(() => {
    const body = document.body
    if (theme === 'light') {
      body.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    } else {
      body.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Scroll Spy Manager
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for navbar height

      // Check if we are near the top of the page
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
