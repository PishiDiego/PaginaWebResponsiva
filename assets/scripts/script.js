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
let menuManuallyOpened = false;

// Función para cerrar el menú
function closeMenu() {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    menuManuallyOpened = false;
}

// Evento de scroll
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Solo cerrar el menú si está abierto
    if (menu.classList.contains('active')) {
        closeMenu();
    }
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll hacia abajo - ocultar navbar
        navbar.classList.add('hide');
    } else {
        // Scroll hacia arriba - mostrar navbar
        navbar.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop;
});

// Evento para abrir/cerrar menú con el botón hamburguesa
    hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    menuManuallyOpened = menu.classList.contains('active');
});
// Cerrar menú al hacer clic en un enlace (opcional)
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
