// Slider principal
const heroSlides = document.querySelectorAll('#hero-slider .slide');
let currentHero = 0;
setInterval(() => {
    heroSlides[currentHero].classList.remove('active');
    currentHero = (currentHero + 1) % heroSlides.length;
    heroSlides[currentHero].classList.add('active');
}, 3500);

// Mini slider
const expSlides = document.querySelectorAll('#exp-slider .mini-slide');
let currentExp = 0;
setInterval(() => {
    expSlides[currentExp].classList.remove('active');
    currentExp = (currentExp + 1) % expSlides.length;
    expSlides[currentExp].classList.add('active');
}, 3000); 

// Header
const header = document.getElementById('header');
const logo = document.querySelector('.navbar-logo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '8px 0';
        header.style.background = '#06162a';
        if (logo) logo.style.height = '38px';
    } else {
        header.style.padding = '15px 0';
        header.style.background = '#0a2342';
        if (logo) logo.style.height = '45px';
    }
});

// --- 4. ANIMAÇÕES ---
ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 1000,
    origin: 'bottom',
    interval: 150
});