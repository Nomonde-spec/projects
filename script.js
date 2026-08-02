// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Full Stack Developer", "AI Enthusiast", "Web Developer", "Java Programmer", "Problem Solver"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // ensure the typing list is exactly as required and clear any previous content
    while (textArray.length) textArray.pop();
    // desired order
    textArray.push("Full Stack Developer");
    textArray.push("AI Enthusiast");
    textArray.push("Web Developer");
    textArray.push("Java Programmer");
    textArray.push("Problem Solver");

    // clear any leftover displayed text and log for debug
    if (typedTextSpan) typedTextSpan.textContent = '';
    console.log('Typing texts set to:', textArray);

    // start typing shortly after DOM ready
    if (textArray.length) setTimeout(type, 300);
});

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Add click event listener
themeToggle.addEventListener('click', toggleTheme);

// ========== DARK MODE STYLES (Added dynamically) ==========
// Add dark mode styles to the page
const darkModeStyles = `
    body.dark-mode {
        background-color: #0f172a;
        color: #e2e8f0;
    }
    
    body.dark-mode .navbar {
        background: rgba(15, 23, 42, 0.98);
        box-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    
    body.dark-mode .nav-links a {
        color: #e2e8f0;
    }
    
    body.dark-mode .nav-links a:hover,
    body.dark-mode .nav-links a.active {
        color: #ffd966;
    }
    
    body.dark-mode .theme-toggle {
        color: #e2e8f0;
    }
    
    body.dark-mode .theme-toggle:hover {
        background: linear-gradient(135deg, #ffd966 0%, #ffed4e 100%);
        color: #0f172a;
    }
    
    body.dark-mode .hamburger {
        color: #e2e8f0;
    }
    
    body.dark-mode #about {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    }
    
    body.dark-mode .section-title {
        color: #e2e8f0;
    }
    
    body.dark-mode .story {
        color: #cbd5e1;
    }
    
    body.dark-mode .info-item {
        background: #1e293b;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    
    body.dark-mode .info-item span,
    body.dark-mode .info-item a {
        color: #e2e8f0;
    }
    
    body.dark-mode .info-item strong {
        color: #94a3b8;
    }
    
    body.dark-mode .interest-items span {
        background: #1e293b;
        color: #ffd966;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    
    body.dark-mode .interest-items span:hover {
        background: linear-gradient(135deg, #ffd966 0%, #ffed4e 100%);
        color: #0f172a;
    }
    
    body.dark-mode #education {
        background: #0f172a;
    }
    
    body.dark-mode .timeline-content {
        background: #1e293b;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    }
    
    body.dark-mode .timeline-content h3 {
        color: #ffd966;
    }
    
    body.dark-mode .timeline-content h4 {
        color: #94a3b8;
    }
    
    body.dark-mode .timeline-content p,
    body.dark-mode .timeline-content li {
        color: #cbd5e1;
    }
    
    body.dark-mode .cert-card {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border-color: rgba(255, 217, 102, 0.2);
    }
    
    body.dark-mode .cert-card h4 {
        color: #e2e8f0;
    }
    
    body.dark-mode .cert-card p {
        color: #94a3b8;
    }
    
    body.dark-mode #skills {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    }
    
    body.dark-mode .skills-category {
        background: #1e293b;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    body.dark-mode .skills-category h3 {
        color: #ffd966;
    }
    
    body.dark-mode .skill-info {
        color: #e2e8f0;
    }
    
    body.dark-mode .language-info {
        color: #e2e8f0;
    }
    
    body.dark-mode .progress-bar {
        background: #334155;
    }
    
    body.dark-mode .level-dot {
        background: #334155;
    }
    
    body.dark-mode #projects {
        background: #0f172a;
    }
    
    body.dark-mode .project-card {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border-color: rgba(255, 217, 102, 0.2);
    }
    
    body.dark-mode .project-card h3 {
        color: #e2e8f0;
    }
    
    body.dark-mode .project-card p {
        color: #94a3b8;
    }
    
    body.dark-mode .project-tech span {
        background: linear-gradient(135deg, #ffd966 0%, #ffed4e 100%);
        color: #0f172a;
    }
    
    body.dark-mode #contact {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    }
    
    body.dark-mode .contact-info {
        background: #1e293b;
    }
    
    body.dark-mode .contact-info h3 {
        color: #ffd966;
    }
    
    body.dark-mode .contact-info > p {
        color: #94a3b8;
    }
    
    body.dark-mode .contact-item h4 {
        color: #e2e8f0;
    }
    
    body.dark-mode .contact-item p,
    body.dark-mode .contact-item a {
        color: #94a3b8;
    }
    
    body.dark-mode .contact-form {
        background: #1e293b;
    }
    
    body.dark-mode .form-group input,
    body.dark-mode .form-group textarea {
        background: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
    }
    
    body.dark-mode .form-group input:focus,
    body.dark-mode .form-group textarea:focus {
        border-color: #ffd966;
        box-shadow: 0 0 0 3px rgba(255, 217, 102, 0.1);
    }
    
    body.dark-mode .form-group input::placeholder,
    body.dark-mode .form-group textarea::placeholder {
        color: #64748b;
    }
    
    body.dark-mode .availability {
        background: linear-gradient(135deg, #3f6212 0%, #4d7c0f 100%);
    }
    
    body.dark-mode .availability span {
        color: #e2e8f0;
    }
    
    body.dark-mode footer {
        background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
    }
    
    body.dark-mode .footer-logo p,
    body.dark-mode .footer-bottom p {
        color: #64748b;
    }
    
    body.dark-mode .footer-links a {
        color: #94a3b8;
    }
    
    body.dark-mode .footer-links a:hover {
        color: #ffd966;
    }
    
    body.dark-mode .footer-social a {
        background: rgba(255,255,255,0.05);
        color: #94a3b8;
    }
    
    body.dark-mode .footer-social a:hover {
        background: #ffd966;
        color: #0f172a;
    }
    
    @media (max-width: 968px) {
        body.dark-mode .nav-links.active {
            background: #1e293b;
        }
        
        body.dark-mode .nav-links.active a {
            color: #e2e8f0;
        }
    }
`;

// Add dark mode styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);

// ========== MOBILE NAVIGATION ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========== ACTIVE NAVIGATION ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ========== CONTACT FORM SUBMISSION ==========
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        formStatus.textContent = 'Sending message...';
        formStatus.style.color = '#5e72e4';
        
        // Simulate form submission
        setTimeout(() => {
            formStatus.innerHTML = '✅ Message sent successfully! I\'ll get back to you soon.';
            formStatus.style.color = '#10b981';
            contactForm.reset();
            
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        }, 2000);
    });
}

// ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== ANIMATE PROGRESS BARS ON SCROLL ==========
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.querySelector('#skills');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
});

if (skillsSection) {
    observer.observe(skillsSection);
}

// ========== ADD SHADOW TO NAVBAR ON SCROLL ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    }
});

// ========== UPDATE COPYRIGHT YEAR ==========
const copyrightElement = document.querySelector('.footer-bottom p:first-child');
if (copyrightElement) {
    copyrightElement.innerHTML = `&copy; ${new Date().getFullYear()} Nomonde Mhlanga. All rights reserved.`;
}