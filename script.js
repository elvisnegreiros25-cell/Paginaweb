/* --- TECHSALES Logic Core --- */
document.addEventListener('DOMContentLoaded', () => {
    console.log('TECHSALES V2.0 Initialized');
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { nav.classList.add('nav-scrolled'); }
        else { nav.classList.remove('nav-scrolled'); }
    });
    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                console.log('Navigating to section...'); }
        });
    });
    /* --- Hector: Logic Filter --- */
    const filterBtns = document.querySelectorAll('.filter-btn');
