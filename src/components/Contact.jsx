import React, { useState } from 'react'
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    fetch('https://formsubmit.co/ajax/hariomdubey906@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data.success === 'false') {
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again later.',
          })
        } else {
          setStatus({
            type: 'success',
            message: "Thanks for reaching out! I'll get back to you soon.",
          })
          setFormData({ name: '', email: '', message: '' })
        }
      })
      .catch((err) => {
        setLoading(false)
        console.error('Contact form submission error:', err)
        setStatus({
          type: 'error',
          message: 'Failed to connect. Please check your network and try again.',
        })
      })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-layout">
          <span className="contact-pre">06. What's Next?</span>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            I'm currently looking for new opportunities as a Java Backend & Full-Stack Developer. 
            Whether you have a question, want to discuss a project, or just want to say hi, I will get back to you!
          </p>

          <div className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="form-name">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Email</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="form-input"
                  placeholder="Tell me about your project or say hello..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', marginTop: '10px' }}
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

          <div className="contact-social-row">
            <a 
              href="https://github.com/Hariom88" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hariomdubey906@gmail.com" 
              className="contact-social-btn"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://wa.me/918874377436" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
