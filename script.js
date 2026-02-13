// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu after click

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Experience Tabs
const tabs = document.querySelectorAll('.job-tab');
const panels = document.querySelectorAll('.job-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none'; // Ensure display is none for non-active
        });

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding panel
        const target = tab.getAttribute('data-target');
        const panel = document.getElementById(target);
        panel.classList.add('active');
        panel.style.display = 'block'; // Force display for active
    });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.section-title, .about-content, .project-card, .skill-category, .cert-card, .hero-content').forEach(el => {
    el.classList.add('fade-in-section'); // Add base class for CSS
    observer.observe(el);
});

// Form Submission (Mock)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// EmailJS configuration (replace placeholders with real IDs)
const EMAILJS_USER_ID = 'YOUR_USER_ID';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// Initialize EmailJS if user id is provided
if (window.emailjs && EMAILJS_USER_ID !== 'YOUR_USER_ID') {
    emailjs.init(EMAILJS_USER_ID);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'Sending...';

    const formData = new FormData(contactForm);

    // If EmailJS is properly configured, use it
    if (window.emailjs && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID') {
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
            .then(() => {
                showSuccess();
            }, (error) => {
                console.error('EmailJS error:', error);
                showError();
            });
    } else {
        // Fallback: Use FormSubmit.co AJAX to send the email directly
        fetch("https://formsubmit.co/ajax/hariomdubey906@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "false") {
                    showError();
                } else {
                    showSuccess();
                }
            })
            .catch(error => {
                console.error('FormSubmit error:', error);
                showError(); // Or fallback to mock success if fetch fails due to extensive blocking
            });
    }

    function showSuccess() {
        btn.innerText = 'Message Sent!';
        btn.style.backgroundColor = '#64ffda';
        btn.style.color = '#0a192f';

        formStatus.innerText = "Thanks for reaching out! I'll get back to you soon.";
        formStatus.style.color = '#64ffda';
        formStatus.style.marginTop = '10px';

        contactForm.reset();

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            btn.style.color = '';
            formStatus.innerText = '';
        }, 5000);
    }

    function showError() {
        btn.innerText = originalText;
        formStatus.innerText = 'Failed to send message. Please try again later.';
        formStatus.style.color = '#ff6b6b';
        formStatus.style.marginTop = '10px';
    }
});
