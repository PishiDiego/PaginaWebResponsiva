// Seleccionar el botón
const backToTopButton = document.getElementById('backToTop');

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});


// Función para volver al inicio
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mejoras de accesibilidad para el menú de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    


// Ocultar menú hamburguesa al hacer scroll
let lastScrollTop = 0;
const navbar = document.querySelector('nav');
const menu = document.querySelector('#menu');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll hacia abajo - ocultar menú
        navbar.classList.add('hide');
    } else {
        // Scroll hacia arriba - mostrar menú
        navbar.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop;
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    // Si el clic fue fuera del menú y fuera del botón hamburguesa, cerrar menú
    if (!isClickInsideMenu && !isClickOnHamburger && menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Alternar menú al hacer clic en el botón hamburguesa
hamburger.addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al documento
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
