/**
 * ============================================================
 * SCRIPT PRINCIPAL - TECHSALES V4
 * Responsabilidad: ELVIS (Líder / Integración)
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORES
    const nav = document.querySelector('.main-nav');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const sendBtn = document.getElementById('sendBtn');

    // 2. EFECTO DE NAVEGACIÓN (Scroll)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // 3. SISTEMA DE FILTRADO (Catálogo)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Manejo de botones activos
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-category');

            productCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                
                if (cat === 'todos' || cardCat === cat) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. LÓGICA DE FORMULARIO (Contacto)
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            if (name.trim() !== "") {
                alert(`¡Gracias ${name}! Tu mensaje ha sido enviado con éxito.`);
            } else {
                alert('Por favor, ingresa tu nombre antes de enviar.');
            }
        });
    }
});