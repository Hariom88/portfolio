# Portfolio Website - Hariom Dubey

A modern, responsive, and production-ready portfolio website designed for a Java Backend Developer. Built with clean HTML5, CSS3, and JavaScript.

## Features

- **Dark Professional Theme**: Deep navy background with vibrant blue accents.
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
- **Smooth Animations**: Intersection Observer-based fade-in animations on scroll.
- **Interactive Elements**: Mobile navigation, tabbed experience section, and hover effects.
- **Contact Form**: Integrated with EmailJS (requires configuration) or ready for backend API integration.

## Project Structure

```
/
├── index.html       # Main HTML file
├── style.css        # All styles and responsive design
├── script.js        # Logic for navigation, animations, and form
└── README.md        # Documentation
```

## How to Run Locally

1.  **Clone or Download** the repository.
2.  **Open `index.html`** in your web browser.
    -   You can double-click the file.
    -   OR use a local server like Live Server (VS Code Extension) for the best experience.

## Customization Guide

### 1. Update Personal Info
Edit `index.html` to update your:
-   **Hero Section**: Name, Title, and Description.
-   **About Me**: Bio and details.
-   **Links**: Update `href` for GitHub, LinkedIn, and Email in the Contact section and Footer.

### 2. Resume
Replace the `href="resume.pdf"` in the Hero section with the path to your actual resume file. Place your `resume.pdf` in the root directory.

### 3. Contact Form (EmailJS)
To make the contact form functional without a backend:
1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Create a Service and a Template.
3.  Uncomment the EmailJS code in `script.js`.
4.  Replace `'YOUR_SERVICE_ID'` and `'YOUR_TEMPLATE_ID'` with your actual keys.

### 4. Images
-   **Profile Image**: The current layout uses a placeholder icon in the About section. Replace the `<div class="img-placeholder">` in `index.html` with an `<img>` tag pointing to your photo.

```html
<!-- Replace this -->
<div class="img-placeholder">...</div>

<!-- With this -->
<img src="path/to/your-photo.jpg" alt="Hariom Dubey" class="profile-img">
```

## Deployment

### GitHub Pages (Recommended)
1.  Push this code to a GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Select the `main` branch as the source and save.
4.  Your site will be live at `https://yourusername.github.io/repo-name`.

## Technologies Used
-   HTML5
-   CSS3 (Variables, Flexbox, Grid)
-   JavaScript (ES6+)
-   Font Awesome (Icons)
-   Google Fonts (Inter, Fira Code)
