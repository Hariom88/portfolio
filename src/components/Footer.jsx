import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-sec">
      <div className="container">
        <p className="footer-text">
          &copy; {currentYear} Hariom Dubey. Crafted with React & custom CSS. 
          All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
