const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.nav-links li');

function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('is-active');

    // Animación escalonada de links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.2}s`;
        }
    });
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Cerrar al clickear un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) toggleMenu();
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});