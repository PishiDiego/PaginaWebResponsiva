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
    
    // Cerrar menú hamburguesa al hacer clic en un enlace (solo en móviles)
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Solo en dispositivos móviles
                navbarToggler.classList.add('collapsed');
                navbarCollapse.classList.remove('show');
            }
        });
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
    
    // Cerrar menú hamburguesa si está abierto al hacer scroll
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Mejorar la experiencia táctil en dispositivos móviles
document.addEventListener('touchstart', function() {}, {passive: true});


