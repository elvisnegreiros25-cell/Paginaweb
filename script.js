document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.main-nav');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const cartBadge = document.querySelector('.cart-count');
    let count = parseInt(cartBadge.textContent);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) nav.classList.add('nav-scrolled');
        else nav.classList.remove('nav-scrolled');
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            
            productCards.forEach(card => {
                card.style.opacity = '0';
                setTimeout(() => {
                    if (category === 'todos' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.display = 'none';
                    }
                }, 400);
            });
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    document.querySelectorAll('.product-info').forEach(card => {
        card.addEventListener('click', () => {
            count++; cartBadge.textContent = count;
            cartBadge.style.transform = 'scale(1.3)';
            setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input');
            if (Array.from(inputs).every(i => i.value)) {
                alert('Â¡Mensaje enviado! Nos contactaremos pronto.');
                inputs.forEach(i => i.value = '');
            } else {
                alert('Por favor completa todos los campos.');
            }
        });
    }
});
