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
    const productCards = document.querySelectorAll('.product-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.textContent.toLowerCase();
            productCards.forEach(card => {
                if (category === 'todos') { card.style.display = 'block'; }
                else {
                    const cardTitle = card.querySelector('h4').textContent.toLowerCase();
                    if (cardTitle.includes(category.slice(0,-1))) { card.style.display = 'block'; }
                    else { card.style.display = 'none'; }
                }
            });
        });
    });
    /* --- Yorlin: Cart Logic --- */
    let count = 3;
    const cartBadge = document.querySelector('.cart-count');
