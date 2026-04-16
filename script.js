document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.main-nav');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    window.addEventListener('scroll', () => { if (window.scrollY > 100) nav.classList.add('nav-scrolled'); else nav.classList.remove('nav-scrolled'); });
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active');
            const cat = btn.getAttribute('data-category');
            productCards.forEach(card => { if (cat === 'todos' || card.getAttribute('data-category') === cat) card.style.display = 'block'; else card.style.display = 'none'; });
        });
    });
});