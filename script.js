// Custom Glow Cursor Tracking Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 3 + 'px';
    cursor.style.top = e.clientY - 3 + 'px';
});

// Intersection Observer for Smooth Scroll Reveal Effects
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Apply fade-in animation rules to portfolio item components
document.querySelectorAll('.timeline-item, .project-card, .edu-card, .achievement-item, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Staggered layout loading logic for project block displays
document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.07) + 's';
});